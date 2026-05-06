/**
 * 建立每頁的 hreflang alternates。
 *
 * Next.js Metadata API 收到後，會在 HTML head 自動產出：
 *   <link rel="canonical" href="...">
 *   <link rel="alternate" hreflang="zh-TW" href="...">
 *   <link rel="alternate" hreflang="en" href="...">
 *   <link rel="alternate" hreflang="de" href="...">
 *   <link rel="alternate" hreflang="x-default" href="...">
 *
 * @param path - 路徑（不含 locale prefix），例如 "/blog/foo"、"/about"、"/"
 * @param currentLocale - 當前頁面的 locale ("zh" | "en" | "de")
 */
export function buildAlternates(path: string, currentLocale: string) {
  // 清理 path：根路徑特殊處理
  const cleanPath = path === "/" || path === "" ? "" : path;

  // 各語系 URL（zh 是 default locale，URL 不加前綴）
  const zhUrl = cleanPath || "/";
  const enUrl = `/en${cleanPath}`;
  const deUrl = `/de${cleanPath}`;

  // canonical = 當前頁面所在語系的 URL
  const canonical =
    currentLocale === "en"
      ? enUrl
      : currentLocale === "de"
        ? deUrl
        : zhUrl;

  return {
    canonical,
    languages: {
      "zh-TW": zhUrl,
      en: enUrl,
      de: deUrl,
      "x-default": zhUrl,
    },
  };
}
