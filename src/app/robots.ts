import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 主流搜尋引擎：明確允許爬取所有公開頁面（含 OG 圖、sitemap）
      {
        userAgent: ["Googlebot", "Googlebot-Image", "Bingbot"],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // 預設規則：所有其他 bot 也允許，但禁止 API 與內部路由
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.weiyon.com/sitemap.xml",
    host: "https://www.weiyon.com",
  };
}
