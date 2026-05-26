import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import {
  BUCKET_NAME,
  MAX_FILE_SIZE,
  MAX_FILES,
  ALLOWED_EXTENSIONS,
  extOf,
  buildStoragePath,
} from "@/lib/contact-constants";
import {
  checkOrigin,
  checkRateLimit,
  getClientIp,
  safeErrMsg,
} from "@/lib/contact-server";
import type { SupabaseClient } from "@supabase/supabase-js";

// 取代脆弱的 listBuckets()/ensureBucket — 直接試 createSignedUploadUrl，
// 只有真的「bucket 不存在」時才嘗試建立後重試。
// 回傳 { data } 或 { error }（error 為 sanitized 訊息，供診斷）
async function signUpload(
  admin: SupabaseClient,
  path: string
): Promise<{ data?: { path: string; token: string }; error?: string }> {
  const first = await admin.storage.from(BUCKET_NAME).createSignedUploadUrl(path);
  if (!first.error && first.data) {
    return { data: { path: first.data.path, token: first.data.token } };
  }

  // 可能是 bucket 不存在 → 嘗試建立（容忍「已存在」競態）
  const msg = safeErrMsg(first.error).toLowerCase();
  const looksMissing = msg.includes("not found") || msg.includes("does not exist") || msg.includes("bucket");
  if (looksMissing) {
    const createRes = await admin.storage.createBucket(BUCKET_NAME, {
      public: false,
      fileSizeLimit: MAX_FILE_SIZE,
    });
    if (createRes.error && !/exist/i.test(safeErrMsg(createRes.error))) {
      return { error: `createBucket: ${safeErrMsg(createRes.error)}` };
    }
    const retry = await admin.storage.from(BUCKET_NAME).createSignedUploadUrl(path);
    if (retry.error || !retry.data) {
      return { error: `retrySign: ${safeErrMsg(retry.error)}` };
    }
    return { data: { path: retry.data.path, token: retry.data.token } };
  }

  return { error: `sign: ${safeErrMsg(first.error)}` };
}

// 簽發 Supabase 簽名上傳網址 — 讓瀏覽器「直接」上傳檔案到 Supabase，
// 繞過 Vercel serverless function 的 4.5MB request body 硬限制。
// 此 route 只處理 metadata（檔名 + size），request body 極小。
export async function POST(request: Request) {
  try {
    if (!checkOrigin(request)) {
      return NextResponse.json({ error: "Unauthorized origin" }, { status: 403 });
    }

    const ip = getClientIp(request);
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.ok) {
      return NextResponse.json(
        { error: "請求過於頻繁，請稍後再試 / Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateCheck.retryAfter ?? 60) } }
      );
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ error: "儲存空間尚未設定" }, { status: 503 });
    }

    let body: { files?: { name?: unknown; size?: unknown }[] };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "請求格式錯誤" }, { status: 400 });
    }

    const files = Array.isArray(body.files) ? body.files : [];
    if (files.length === 0) {
      return NextResponse.json({ error: "未提供檔案" }, { status: 400 });
    }
    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `最多 ${MAX_FILES} 個附件` }, { status: 400 });
    }

    // 逐一驗證副檔名 + 大小（authoritative：client 端驗證只是 UX）
    for (const f of files) {
      const name = String(f.name || "");
      const size = Number(f.size || 0);
      if (!name) {
        return NextResponse.json({ error: "檔名缺失" }, { status: 400 });
      }
      if (!ALLOWED_EXTENSIONS.includes(extOf(name) as (typeof ALLOWED_EXTENSIONS)[number])) {
        return NextResponse.json(
          { error: `不支援的檔案格式：${extOf(name)}` },
          { status: 400 }
        );
      }
      if (size <= 0 || size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `檔案「${name}」超過 25MB 限制` },
          { status: 400 }
        );
      }
    }

    // 為每個檔案產生簽名上傳網址（robust：bucket 不存在會自動建立後重試）
    const uploads: { name: string; path: string; token: string }[] = [];
    for (const f of files) {
      const name = String(f.name);
      const path = buildStoragePath(name);
      const result = await signUpload(supabaseAdmin, path);
      if (result.error || !result.data) {
        // 真因記在 server log（含 sign / createBucket / fetch failed 等）；
        // 回給 client 的是通用訊息，不長期暴露內部細節
        console.error("signUpload:", result.error);
        return NextResponse.json(
          { error: "附件上傳暫時無法使用，請稍後再試或直接 email 給我們" },
          { status: 500 }
        );
      }
      uploads.push({ name, path: result.data.path, token: result.data.token });
    }

    return NextResponse.json({ uploads }, { status: 200 });
  } catch (error) {
    console.error("upload-url:", safeErrMsg(error));
    return NextResponse.json({ error: "伺服器錯誤，請稍後再試" }, { status: 500 });
  }
}
