import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { processes, type Locale } from "@/data/processes";
import { buildAlternates } from "@/lib/hreflang";

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
    alternates: buildAlternates("/products", locale),
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

  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as Locale;

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
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("heroTagline")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 break-words">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Featured Processes — link to sub-pages */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("processesLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-tight max-w-3xl">
              {t("processesTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {processes.map((proc, idx) => (
              <Link
                key={proc.slug}
                href={`/products/${proc.slug}`}
                className="group bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors p-8 lg:p-10 flex flex-col"
              >
                <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {proc.title[lang]}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  {proc.shortDescription[lang]}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--primary)] group-hover:text-[var(--accent)] group-hover:gap-3 transition-all">
                  <span className="border-b border-current pb-0.5">
                    {t("learnMore")}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Capability — link to full materials page */}
      <section className="py-12 lg:py-16 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <Link
            href="/materials"
            className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 lg:p-10 bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex-1">
              <div className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
                {t("materialsCalloutLabel")}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight">
                {t("materialsCalloutTitle")}
              </h2>
              <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {t("materialsCalloutSubtitle")}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] group-hover:text-[var(--accent)] group-hover:gap-3 transition-all flex-shrink-0">
              <span>{t("materialsCalloutLink")}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("scopeLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-tight max-w-3xl">
              {t("scopeTitle")}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-6 pb-2 border-b-2 border-[var(--accent)]">
                  {category.title}
                </h3>
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] mb-6 leading-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-10">
            {t("ctaSubtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors"
          >
            {t("ctaButton")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
