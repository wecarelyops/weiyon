import { MetadataRoute } from "next";
import { processes } from "@/data/processes";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";
import { WORK_COUNT } from "@/data/works";

const BASE = "https://www.weiyon.com";
const TOTAL_WORKS = WORK_COUNT;

// lastmod 必須是「內容真的改了」的日期；之前每次 build 都填 new Date()，
// 等於對 Google 宣稱 252 個網址全部剛更新，久了會被忽略。
// 靜態頁／實績頁改內容時，請手動更新這兩個日期；部落格文章自動用 post.date。
const SITE_LAST_UPDATED = new Date("2026-05-30");
const WORKS_LAST_UPDATED = new Date("2026-05-27");

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type Page = {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified?: Date;
};

// 為每個頁面產生 zh + en + de 三條目，並附 hreflang alternates
function localizedEntries(pages: Page[]): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const page of pages) {
    const zhUrl = `${BASE}${page.path}`;
    const enUrl = `${BASE}/en${page.path}`;
    const deUrl = `${BASE}/de${page.path}`;
    const alternates = {
      languages: {
        "zh-TW": zhUrl,
        en: enUrl,
        de: deUrl,
        "x-default": zhUrl,
      },
    };
    const lastModified = page.lastModified ?? SITE_LAST_UPDATED;
    out.push({
      url: zhUrl,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates,
    });
    out.push({
      url: enUrl,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.95,
      alternates,
    });
    out.push({
      url: deUrl,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.9,
      alternates,
    });
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 部落格列表頁的 lastmod = 最新一篇文章日期
  const latestPostDate = blogPosts.reduce<Date>((latest, p) => {
    const d = new Date(p.date);
    return d > latest ? d : latest;
  }, SITE_LAST_UPDATED);

  // 主要頁面
  const mainPages: Page[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/compliance", priority: 0.85, changeFrequency: "monthly" },
    { path: "/materials", priority: 0.85, changeFrequency: "monthly" },
    { path: "/capability", priority: 0.85, changeFrequency: "monthly" },
    { path: "/workflow", priority: 0.85, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "monthly", lastModified: latestPostDate },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/imprint", priority: 0.3, changeFrequency: "yearly" },
  ];

  // 產業 landing pages
  const industryPages: Page[] = industries.map((ind) => ({
    path: `/industries/${ind.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  // 加工製程子頁
  const processPages: Page[] = processes.map((p) => ({
    path: `/products/${p.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  // 實績詳情頁（依實際圖檔數自動產生）
  const worksPages: Page[] = Array.from({ length: TOTAL_WORKS }, (_, i) => ({
    path: `/works/${i + 1}`,
    priority: 0.5,
    changeFrequency: "yearly" as const,
    lastModified: WORKS_LAST_UPDATED,
  }));

  // Blog 文章子頁
  const blogPostPages: Page[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.date),
  }));

  return [
    ...localizedEntries(mainPages),
    ...localizedEntries(processPages),
    ...localizedEntries(industryPages),
    ...localizedEntries(worksPages),
    ...localizedEntries(blogPostPages),
  ];
}
