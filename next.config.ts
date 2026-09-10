import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// =====================================================================
// Content Security Policy — Enforce 模式（無痕測試 0 違規後升級）
//
// 攻擊者就算 XSS 注入也跑不了惡意腳本：
// - 不能載入未授權外部 script（script-src）
// - 不能 fetch 未授權 endpoint（connect-src）
// - 不能用 eval / Function（沒有 'unsafe-eval'）
// - 不能被惡意網站 iframe 嵌入做釣魚（frame-ancestors 'none'）
// - 不能注入 <base> 改路徑、<object> 載 Flash 漏洞
// =====================================================================

type CspDirective =
  | "script-src"
  | "style-src"
  | "img-src"
  | "font-src"
  | "connect-src"
  | "frame-src";

type CspPreset = Partial<Record<CspDirective, string[]>>;

// =====================================================================
// 第三方服務 PRESETS — 預先寫好但不啟用
//
// 未來要加新服務時的步驟：
// 1. 確認該服務在下方 CSP_PRESETS 已有對應 preset（沒有的話自己加）
// 2. 把 preset 名稱加到 ACTIVE_PRESETS 陣列
// 3. push → Vercel 自動部署 → 服務的 script/iframe/api 就會通過 CSP
//
// ⚠️ 安全提醒：只啟用「實際在用」的 preset。多開一個服務 = 多一塊攻擊面。
// =====================================================================

const CSP_PRESETS: Record<string, CspPreset> = {
  // ── 分析 / 熱圖 ──────────────────────────────────────────
  hotjar: {
    "script-src": [
      "https://static.hotjar.com",
      "https://script.hotjar.com",
    ],
    "connect-src": [
      "https://*.hotjar.com",
      "https://*.hotjar.io",
      "wss://*.hotjar.com",
    ],
    "img-src": ["https://static.hotjar.com"],
    "frame-src": ["https://vars.hotjar.com"],
  },

  microsoftClarity: {
    "script-src": ["https://www.clarity.ms"],
    "connect-src": ["https://*.clarity.ms"],
  },

  // ── CRM / 行銷自動化 ──────────────────────────────────────
  hubspot: {
    "script-src": [
      "https://js.hs-scripts.com",
      "https://js.hs-analytics.net",
      "https://js.hsforms.net",
      "https://js.hubspot.com",
    ],
    "connect-src": [
      "https://api.hubapi.com",
      "https://forms.hubspot.com",
      "https://api.hsforms.com",
    ],
    "frame-src": [
      "https://forms.hubspot.com",
      "https://meetings.hubspot.com",
    ],
    "img-src": [
      "https://*.hubspot.com",
      "https://track.hubspot.com",
    ],
  },

  // ── 排程 / 預約 ───────────────────────────────────────────
  calendly: {
    "script-src": ["https://assets.calendly.com"],
    "style-src": ["https://assets.calendly.com"],
    "frame-src": ["https://calendly.com"],
  },

  // ── 客服 widget ──────────────────────────────────────────
  intercom: {
    "script-src": [
      "https://widget.intercom.io",
      "https://js.intercomcdn.com",
    ],
    "connect-src": [
      "https://api-iam.intercom.io",
      "wss://nexus-websocket-a.intercom.io",
    ],
    "frame-src": ["https://intercom-sheets.com"],
    "img-src": [
      "https://*.intercomassets.com",
      "https://js.intercomcdn.com",
    ],
    "font-src": ["https://js.intercomcdn.com"],
  },

  crisp: {
    "script-src": ["https://client.crisp.chat"],
    "style-src": ["https://client.crisp.chat"],
    "connect-src": [
      "https://client.crisp.chat",
      "wss://client.relay.crisp.chat",
    ],
    "img-src": [
      "https://image.crisp.chat",
      "https://client.crisp.chat",
    ],
    "frame-src": ["https://client.crisp.chat"],
    "font-src": ["https://client.crisp.chat"],
  },

  // ── 字型 CDN ────────────────────────────────────────────
  // 我們已用 next/font 內建系統，理論上不會用到外部 Google Fonts
  // 若改用第三方字型 CDN 再啟用
  googleFonts: {
    "style-src": ["https://fonts.googleapis.com"],
    "font-src": ["https://fonts.gstatic.com"],
  },

  // ── 影片嵌入 ────────────────────────────────────────────
  youtube: {
    "frame-src": [
      "https://www.youtube.com",
      "https://www.youtube-nocookie.com",
    ],
    "img-src": ["https://i.ytimg.com"],
  },

  vimeo: {
    "frame-src": ["https://player.vimeo.com"],
    "img-src": ["https://i.vimeocdn.com"],
  },

  // ── Cloudflare Turnstile（reCAPTCHA 替代品，更隱私）────────
  // 未來想擋 contact form bot 時可考慮
  cloudflareTurnstile: {
    "script-src": ["https://challenges.cloudflare.com"],
    "frame-src": ["https://challenges.cloudflare.com"],
  },
};

// =====================================================================
// 啟用清單 — 改這裡就好
// 目前空，未來要用某服務就加進來，例如：
//   const ACTIVE_PRESETS: (keyof typeof CSP_PRESETS)[] = ["hotjar", "calendly"];
// =====================================================================
const ACTIVE_PRESETS: (keyof typeof CSP_PRESETS)[] = [
  // Turnstile：只在 Vercel 設了 NEXT_PUBLIC_TURNSTILE_SITE_KEY 時放行（前端也只在此時渲染 widget）
  ...(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    ? (["cloudflareTurnstile"] as const)
    : []),
];

// =====================================================================
// CSP base policy — 我們本來就在用的服務
// =====================================================================
const CSP_BASE: Record<CspDirective | "default-src" | "frame-ancestors" | "object-src" | "base-uri" | "form-action", string[]> = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'", // Next.js 16 hydration script + 自家 JSON-LD schema
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ],
  "style-src": ["'self'", "'unsafe-inline'"], // Tailwind inline styles
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://images.pexels.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://biqdmpyzjnobqpvadfsi.supabase.co",
  ],
  "font-src": ["'self'", "data:"],
  "connect-src": [
    "'self'",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://biqdmpyzjnobqpvadfsi.supabase.co",
  ],
  "frame-src": ["'self'", "https://www.google.com"], // Google Maps iframe（未來如嵌入）
  "frame-ancestors": ["'none'"], // 防點擊劫持，與 X-Frame-Options: DENY 形成雙保險
  "object-src": ["'none'"], // 禁用 <object> / <embed>
  "base-uri": ["'self'"], // 禁止注入 <base> 改變相對路徑
  "form-action": ["'self'"], // 表單只能送回自己網域
};

// 標量 directives（不接 source list）
const CSP_STANDALONE = ["upgrade-insecure-requests"];

// =====================================================================
// Builder：合併 base + active presets，序列化成 CSP header value
// =====================================================================
function buildCspPolicy(): string {
  const merged: Record<string, string[]> = {};
  // 複製 base
  for (const [directive, values] of Object.entries(CSP_BASE)) {
    merged[directive] = [...values];
  }
  // 合併 active presets 的 directives
  for (const name of ACTIVE_PRESETS) {
    const preset = CSP_PRESETS[name];
    if (!preset) continue;
    for (const [directive, values] of Object.entries(preset)) {
      if (!values) continue;
      const existing = merged[directive] ?? [];
      merged[directive] = Array.from(new Set([...existing, ...values]));
    }
  }
  // 序列化
  const parts = Object.entries(merged).map(
    ([directive, values]) => `${directive} ${values.join(" ")}`
  );
  return [...parts, ...CSP_STANDALONE].join("; ");
}

const CSP_POLICY = buildCspPolicy();

// =====================================================================
// Security headers — 涵蓋 OWASP 主要建議項目
// =====================================================================
const SECURITY_HEADERS = [
  // 防 MIME-sniffing 攻擊（檔名 .pdf 的內容被瀏覽器重新識別為 .html 然後執行）
  { key: "X-Content-Type-Options", value: "nosniff" },
  // 防點擊劫持（不允許任何 iframe 嵌入）
  { key: "X-Frame-Options", value: "DENY" },
  // 強制 HTTPS 兩年（含子網域），HSTS preload 排隊用
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // 限制 referer 洩漏
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // 關閉不需要的瀏覽器 API（鏡頭/麥克風/地理位置/支付/USB）
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // 防 XSS 反射（雖然 Next.js 預設已防，多一層保險）
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // CSP enforce — 違規被瀏覽器直接擋下
  { key: "Content-Security-Policy", value: CSP_POLICY },
];

const nextConfig: NextConfig = {
  // 建置時「Collecting page data」的平行 worker 數。預設 = CPU 核心數 - 1（本機 22 核 → 21 個），
  // 在 Windows 上會撞到 commit / 執行緒上限而 OOM；4 個對 Vercel 也足夠。
  experimental: {
    cpus: 4,
  },
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
