import { Link } from "@/i18n/routing";

const SITE_URL = "https://www.weiyon.com";

export type BreadcrumbItem = {
  label: string;
  href?: string; // undefined = current page (no link, no schema URL)
};

type Props = {
  items: BreadcrumbItem[];
  locale: string;
};

export default function Breadcrumbs({ items, locale }: Props) {
  const localePrefix = locale === "zh" ? "" : `/${locale}`;

  // BreadcrumbList JSON-LD — Google 拿來顯示在搜尋結果的麵包屑
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? {
            item: `${SITE_URL}${localePrefix}${item.href === "/" ? "" : item.href}`,
          }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--text-secondary)] font-medium">
                  {item.label}
                </span>
              )}
              {i < items.length - 1 && (
                <span aria-hidden="true" className="opacity-60">
                  /
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
