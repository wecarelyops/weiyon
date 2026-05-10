import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Content Security Policy — 目前用 Report-Only 模式
// 觀察一週瀏覽器 console / GA4 違規事件，確認沒誤殺再切換到 enforce
// 列出所有合法第三方來源；沒在這清單內的會在 DevTools 跳警告（但不阻擋運作）
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  // Next.js 需要 unsafe-inline（hydration script + JSON-LD），暫時保留
  // 未來可改用 nonce-based CSP（更嚴格但要改 layout.tsx）
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  // Pexels 圖、GA4 追蹤像素、Supabase signed URL 都要允許
  "img-src 'self' data: blob: https://images.pexels.com https://www.googletagmanager.com https://www.google-analytics.com https://biqdmpyzjnobqpvadfsi.supabase.co",
  "font-src 'self' data:",
  // GA4 collect endpoint + Supabase REST/Storage API + Resend (server-only, 但保留以防 client SDK)
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://biqdmpyzjnobqpvadfsi.supabase.co",
  "frame-src 'self' https://www.google.com",  // Google Maps iframe（如未來嵌入）
  "frame-ancestors 'none'",  // 防點擊劫持，等同 X-Frame-Options: DENY
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

// Security headers — 涵蓋 OWASP 主要建議項目
const SECURITY_HEADERS = [
  // 防 MIME-sniffing 攻擊（檔名 .pdf 的內容被瀏覽器重新識別為 .html 然後執行）
  { key: "X-Content-Type-Options", value: "nosniff" },
  // 防點擊劫持（不允許任何 iframe 嵌入）
  { key: "X-Frame-Options", value: "DENY" },
  // 強制 HTTPS 一年（含子網域），HSTS preload 排隊用
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // 限制 referer 洩漏
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // 關閉不需要的瀏覽器 API（鏡頭/麥克風/地理位置）
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // 防 XSS 反射（雖然 Next.js 預設已防，多一層保險）
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // CSP — Report-Only 模式：違規記錄到 console 但不阻擋運作
  // 觀察一週後若無誤殺，可改成 "Content-Security-Policy" enforce
  { key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY },
];

const nextConfig: NextConfig = {
  images: {
    // 允許 Pexels 圖透過 Next.js Image 優化
    // Next.js 會在 build/runtime 把外部圖轉成 AVIF/WebP + 響應式尺寸 + 自動 lazy load
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
    // AVIF + WebP 自動格式協商（瀏覽器支援哪個就送哪個）
    formats: ["image/avif", "image/webp"],
    // 上限砍到 1920（Full HD）— 這是 B2B 網站，4K 視覺體驗不必要
    // 預設 [640, 750, 828, 1080, 1200, 1920, 2048, 3840] → 改成下方
    // 效益：當瀏覽器忽略 srcSet 時，src= 會用較小尺寸；社群預覽抓圖也較快
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
