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
    // 上限砍到 1920（Full HD）— 這是 B2B 網站，4K 視覺體驗不必要
    // 預設 [640, 750, 828, 1080, 1200, 1920, 2048, 3840] → 改成下方
    // 效益：當瀏覽器忽略 srcSet 時，src= 會用較小尺寸；社群預覽抓圖也較快
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default withNextIntl(nextConfig);
