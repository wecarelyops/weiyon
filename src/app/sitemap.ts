import { MetadataRoute } from "next";
import { processes } from "@/data/processes";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";

const BASE = "https://www.weiyon.com";
const TOTAL_WORKS = 32;

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
    const lastModified = new Date();
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
  // 主要頁面
  const mainPages: Page[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/china-plus-one", priority: 0.9, changeFrequency: "monthly" },
    { path: "/compliance", priority: 0.85, changeFrequency: "monthly" },
    { path: "/materials", priority: 0.85, changeFrequency: "monthly" },
    { path: "/workflow", priority: 0.85, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
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

  // 實績詳情頁（32 件）
  const worksPages: Page[] = Array.from({ length: TOTAL_WORKS }, (_, i) => ({
    path: `/works/${i + 1}`,
    priority: 0.5,
    changeFrequency: "yearly" as const,
  }));

  // Blog 文章子頁
  const blogPostPages: Page[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...localizedEntries(mainPages),
    ...localizedEntries(processPages),
    ...localizedEntries(industryPages),
    ...localizedEntries(worksPages),
    ...localizedEntries(blogPostPages),
  ];
}
