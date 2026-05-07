import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/email";

const BUCKET_NAME = "contact-attachments";
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const MAX_FILES = 10;
const ALLOWED_EXTENSIONS = [
  "pdf",
  "dwg",
  "dxf",
  "step",
  "stp",
  "iges",
  "igs",
  "stl",
  "jpg",
  "jpeg",
  "png",
  "webp",
];

// 輸入長度限制（防 payload abuse + DB bloat）
const MAX_FIELD_LENGTHS = {
  name: 200,
  email: 254, // RFC 5321 max
  phone: 50,
  subject: 300,
  company: 200,
  country: 100,
  quantity: 100,
  incoterms: 50,
  message: 5000,
} as const;

// 允許的 Origin（CSRF 防護）— 留空 Origin（同源 / 直接發 request）也允許，
// 因為 Next.js fetch 在 same-origin 通常不送 Origin header
const ALLOWED_ORIGINS = [
  "https://www.weiyon.com",
  "https://weiyon.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

// 簡單的 in-memory rate limit（per Vercel instance）
// 不完美但能擋掉 80% 的 bot abuse；如要完全防護可上 Upstash KV
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 秒
const RATE_LIMIT_MAX = 5; // 每 IP 每 60 秒最多 5 次
type RateBucket = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateBucket>();

function checkRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = rateLimitStore.get(ip);
  if (!bucket || bucket.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    // 順便清理過期 bucket（避免 memory leak）
    if (rateLimitStore.size > 1000) {
      for (const [k, v] of rateLimitStore.entries()) {
        if (v.resetAt < now) rateLimitStore.delete(k);
      }
    }
    return { ok: true };
  }
  if (bucket.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}

function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

// 把 Supabase error 物件 sanitize 成只剩 message（避免 schema/query 細節進 log）
function safeErrMsg(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "object" && e !== null && "message" in e) {
    return String((e as { message: unknown }).message);
  }
  return "unknown error";
}

async function ensureBucket(): Promise<boolean> {
  if (!supabaseAdmin) return false;
  try {
    const { data: buckets, error } = await supabaseAdmin.storage.listBuckets();
    if (error) {
      console.error("listBuckets:", safeErrMsg(error));
      return false;
    }
    const exists = buckets?.some((b) => b.name === BUCKET_NAME);
    if (!exists) {
      const { error: createErr } = await supabaseAdmin.storage.createBucket(
        BUCKET_NAME,
        {
          public: false,
          fileSizeLimit: MAX_FILE_SIZE,
        }
      );
      if (createErr) {
        console.error("createBucket:", safeErrMsg(createErr));
        return false;
      }
    }
    return true;
  } catch (e) {
    console.error("ensureBucket:", safeErrMsg(e));
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // === 1. Origin 檢查（CSRF 防護）===
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json(
        { error: "Unauthorized origin" },
        { status: 403 }
      );
    }

    // === 2. Rate limit（per IP）===
    const ip = getClientIp(request);
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.ok) {
      return NextResponse.json(
        { error: "請求過於頻繁，請稍後再試 / Too many requests" },
        {
          status: 429,
          headers: { "Retry-After": String(rateCheck.retryAfter ?? 60) },
        }
      );
    }

    // 改用 FormData（multipart）以支援檔案上傳
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const quantity = String(formData.get("quantity") || "").trim();
    const incoterms = String(formData.get("incoterms") || "").trim();
    const originalMessage = String(formData.get("message") || "").trim();
    let message = originalMessage;

    // === 3. 輸入長度檢查（防 payload abuse）===
    const fields = { name, email, phone, subject, company, country, quantity, incoterms, message };
    for (const [key, value] of Object.entries(fields)) {
      const max = MAX_FIELD_LENGTHS[key as keyof typeof MAX_FIELD_LENGTHS];
      if (value.length > max) {
        return NextResponse.json(
          { error: `${key} 超過 ${max} 字元上限` },
          { status: 400 }
        );
      }
    }

    // 把採購相關欄位串到 message 開頭（不需 DB schema 變動）
    const procurementInfo: string[] = [];
    if (company) procurementInfo.push(`Company: ${company}`);
    if (country) procurementInfo.push(`Country: ${country}`);
    if (quantity) procurementInfo.push(`Quantity: ${quantity}`);
    if (incoterms) procurementInfo.push(`INCOTERMS: ${incoterms}`);
    if (procurementInfo.length > 0) {
      message =
        "--- Procurement Info ---\n" +
        procurementInfo.join("\n") +
        "\n\n--- Message ---\n" +
        message;
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "姓名、Email 和訊息內容為必填欄位" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email 格式不正確" },
        { status: 400 }
      );
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "資料庫尚未設定" },
        { status: 503 }
      );
    }

    // Handle file uploads
    const allFiles = formData.getAll("attachments");
    const files: File[] = [];
    for (const f of allFiles) {
      if (f instanceof File && f.size > 0) {
        files.push(f);
      }
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `最多 ${MAX_FILES} 個附件` },
        { status: 400 }
      );
    }

    // Validate each file
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `檔案「${file.name}」超過 25MB 限制` },
          { status: 400 }
        );
      }
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: `不支援的檔案格式：${ext}` },
          { status: 400 }
        );
      }
    }

    // Upload files
    const attachmentLinks: { name: string; url: string }[] = [];

    if (files.length > 0) {
      const bucketReady = await ensureBucket();
      if (!bucketReady) {
        return NextResponse.json(
          { error: "儲存空間設定錯誤，請稍後再試或直接 email 附件" },
          { status: 500 }
        );
      }

      const now = new Date();
      const folder = `${now.getFullYear()}/${String(
        now.getMonth() + 1
      ).padStart(2, "0")}`;

      for (const file of files) {
        const safeName = file.name.replace(/[^\w.\-]/g, "_");
        const filename = `${folder}/${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}-${safeName}`;

        const arrayBuffer = await file.arrayBuffer();
        const { error: uploadError } = await supabaseAdmin.storage
          .from(BUCKET_NAME)
          .upload(filename, arrayBuffer, {
            contentType: file.type || "application/octet-stream",
            upsert: false,
          });

        if (uploadError) {
          console.error("Upload:", safeErrMsg(uploadError));
          return NextResponse.json(
            { error: "附件上傳失敗，請稍後再試" },
            { status: 500 }
          );
        }

        // 簽署 URL 有效 90 天（業主一般 30 天內處理；超過 90 天可在 Supabase dashboard 直接重新取得）
        // 縮短 TTL 是為了限制 URL 若意外洩漏（信箱被入侵）的暴露窗口
        const { data: urlData } = await supabaseAdmin.storage
          .from(BUCKET_NAME)
          .createSignedUrl(filename, 60 * 60 * 24 * 90);

        if (urlData?.signedUrl) {
          attachmentLinks.push({ name: file.name, url: urlData.signedUrl });
        }
      }

      // 把附件 URL 串到 message 末尾
      if (attachmentLinks.length > 0) {
        message += "\n\n--- 附件 ---";
        attachmentLinks.forEach((att) => {
          message += `\n${att.name}: ${att.url}`;
        });
      }
    }

    // Insert submission
    const { data, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Insert:", safeErrMsg(error));
      return NextResponse.json(
        { error: "提交失敗，請稍後再試" },
        { status: 500 }
      );
    }

    // === 寄送通知信給業主（fail-soft：失敗不阻擋 user 看到 success）===
    // Supabase 已經把資料存好；email 是「方便」不是「必要」
    const emailResult = await sendContactNotification({
      name,
      email,
      phone,
      subject,
      company,
      country,
      quantity,
      incoterms,
      message: originalMessage,
      attachments: attachmentLinks,
    });
    if (!emailResult.ok) {
      console.error("Email notification:", emailResult.reason);
      // 不 return error — Supabase 有資料，業主可在 dashboard 查看
    }

    // 不回傳 raw DB row（含 internal id / timestamps），只回必要欄位
    return NextResponse.json(
      {
        success: true,
        attachments: attachmentLinks.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact:", safeErrMsg(error));
    return NextResponse.json(
      { error: "伺服器錯誤，請稍後再試" },
      { status: 500 }
    );
  }
}
