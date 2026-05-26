// 共用常數 — client 與 server 都會 import（不含任何 server-only / supabase 依賴）

export const BUCKET_NAME = "contact-attachments";
export const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
export const MAX_FILES = 10;

export const ALLOWED_EXTENSIONS = [
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
] as const;

// 輸入長度限制（防 payload abuse + DB bloat）
export const MAX_FIELD_LENGTHS = {
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

export function extOf(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}

export function sanitizeName(filename: string): string {
  return filename.replace(/[^\w.\-]/g, "_");
}

// 上傳路徑格式：YYYY/MM/<timestamp>-<random>-<safeName>
// 由 server 端 upload-url 產生；client 上傳後把同樣的 path 回傳給 /api/contact
export function buildStoragePath(filename: string): string {
  const now = new Date();
  const folder = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 8);
  return `${folder}/${Date.now()}-${rand}-${sanitizeName(filename)}`;
}

// 驗證 client 回傳的 path 是否為我們產生的合法格式（防 IDOR / 路徑注入）
// 必須符合 YYYY/MM/digits-alnum-filename
export function isValidStoragePath(path: string): boolean {
  return /^\d{4}\/\d{2}\/\d+-[a-z0-9]+-.+$/.test(path);
}
