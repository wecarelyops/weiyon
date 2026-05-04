import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Products");

  // 各分類的項目數
  const cat1Items = Array.from({ length: 15 }, (_, i) =>
    t(`cat1Item${i + 1}`)
  );
  const cat2Items = Array.from({ length: 9 }, (_, i) =>
    t(`cat2Item${i + 1}`)
  );
  const cat3Items = Array.from({ length: 8 }, (_, i) =>
    t(`cat3Item${i + 1}`)
  );

  const categories = [
    { title: t("cat1Title"), items: cat1Items },
    { title: t("cat2Title"), items: cat2Items },
    { title: t("cat3Title"), items: cat3Items },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-12 lg:py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-[var(--accent)] font-medium mb-2">
              {t("heroTagline")}
            </p>
            <p className="text-[var(--text-secondary)]">
              {t("heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 lg:py-16 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-[var(--primary)] mb-6 pb-2 border-b-2 border-[var(--accent)]">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full flex-shrink-0 mt-2" />
                      <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-6">
            {t("ctaSubtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
