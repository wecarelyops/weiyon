import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Security headers — 涵蓋 OWASP 主要建議項目
// 故意不啟用嚴格 CSP（會破壞 GA4 / Supabase / line.me 整合）；如要上 CSP
// 建議先用 Content-Security-Policy-Report-Only 觀察一週再切換
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
