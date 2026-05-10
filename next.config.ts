import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Content Security Policy — 正式 enforce 模式（無痕測試 0 違規後升級）
// 違規會被瀏覽器直接擋下，包含攻擊者的注入腳本
// 觀察期間如要新增第三方服務（例如 HubSpot、Calendly），白名單要對應更新
const CSP_POLICY = [
  "default-src 'self'",
  // 'unsafe-inline' 給 Next.js 16 hydration script + 我們自家的 JSON-LD schema 用
  // 沒有 'unsafe-eval' — 靜態 B2B 網站不需要 eval/Function，連擴充元件想 inject eval 也擋下
  // 未來可改 nonce-based CSP（更嚴格，但要改 layout.tsx 大幅）
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  // Pexels 圖、GA4 追蹤像素、Supabase signed URL（contact form 附件下載）
  "img-src 'self' data: blob: https://images.pexels.com https://www.googletagmanager.com https://www.google-analytics.com https://biqdmpyzjnobqpvadfsi.supabase.co",
  "font-src 'self' data:",
  // GA4 collect / Supabase REST + Storage API
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://biqdmpyzjnobqpvadfsi.supabase.co",
  "frame-src 'self' https://www.google.com",  // Google Maps iframe（如未來嵌入）
  "frame-ancestors 'none'",  // 防點擊劫持，與 X-Frame-Options: DENY 形成雙保險
  "object-src 'none'",  // 禁用 <object> / <embed>（古老的 Flash / Java applet 攻擊面）
  "base-uri 'self'",  // 禁止注入 <base> 標籤改變相對路徑解析
  "form-action 'self'",  // 表單只能送回自己的網域
  "upgrade-insecure-requests",  // 任何 http:// 資源自動升級為 https://（雙保險，HSTS 已防）
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
  // CSP — Enforce 模式：違規直接被瀏覽器擋下，攻擊者注入腳本無效
  // 從 Report-Only 升級而來，無痕測試確認 0 誤殺
  { key: "Content-Security-Policy", value: CSP_POLICY },
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
