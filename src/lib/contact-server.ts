// Server-only helpers — 兩個 API route（upload-url + contact）共用
// 注意：import 了 supabaseAdmin（service key），絕不可在 client component import 此檔

import { supabaseAdmin } from "@/lib/supabase";
import { BUCKET_NAME, MAX_FILE_SIZE } from "@/lib/contact-constants";

// 允許的 Origin（CSRF 防護）— 空 Origin（同源）放行
const ALLOWED_ORIGINS = [
  "https://www.weiyon.com",
  "https://weiyon.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

export function checkOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return false;
  return true;
}

// 簡單的 in-memory rate limit（per Vercel instance，兩個 route 共用同一 Map）
// 一次「有附件的提交」= upload-url + contact 兩次呼叫，故上限放寬到 10
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 10;
type RateBucket = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateBucket>();

export function checkRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = rateLimitStore.get(ip);
  if (!bucket || bucket.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
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

export function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

// 把 Supabase error 物件 sanitize 成只剩 message（避免 schema/query 細節進 log）
export function safeErrMsg(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "object" && e !== null && "message" in e) {
    return String((e as { message: unknown }).message);
  }
  return "unknown error";
}

export async function ensureBucket(): Promise<boolean> {
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
        { public: false, fileSizeLimit: MAX_FILE_SIZE }
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
