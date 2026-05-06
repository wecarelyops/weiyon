import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

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
  },
};

export default withNextIntl(nextConfig);
