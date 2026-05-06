import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Phone } from "lucide-react";
import { materialCategories, type Locale } from "@/data/materials";
import Breadcrumbs from "@/components/breadcrumbs";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Materials" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/materials", locale),
  };
}

export default async function MaterialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Materials");
  const tNav = await getTranslations("Nav");

  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as Locale;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs
            locale={locale}
            items={[
              { label: tNav("home"), href: "/" },
              { label: tNav("products"), href: "/products" },
              { label: t("heroTitle") },
            ]}
          />

          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("heroLabel")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Category quick nav */}
      <section className="py-6 bg-[var(--surface)] border-y border-[var(--border)] sticky top-16 lg:top-20 z-20">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {materialCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1.5 text-sm bg-[var(--bg)] border border-[var(--border)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {cat.title[lang]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-20 lg:space-y-28">
            {materialCategories.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-32 lg:scroll-mt-36"
              >
                <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-4">
                  {cat.title[lang]}
                </h2>
                <p className="text-base lg:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-10">
                  {cat.intro[lang]}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
                  {cat.items.map((item) => (
                    <div
                      key={item.grade}
                      className="bg-[var(--bg)] p-6 lg:p-8"
                    >
                      <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-3 font-mono">
                        {item.grade}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {item.description[lang]}
                      </p>
                      <div className="pt-4 border-t border-[var(--border)]">
                        <div className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-1.5">
                          {t("typicalApplications")}
                        </div>
                        <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                          {item.applications[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note about other materials */}
      <section className="py-12 lg:py-16 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-4 leading-tight">
            {t("notListedTitle")}
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {t("notListedSubtitle")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[var(--primary)] text-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg text-gray-400 mb-10">{t("ctaSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--primary)] font-medium rounded-full hover:bg-[var(--accent)]/90 transition-colors"
            >
              {t("ctaQuoteButton")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--bg)]/30 text-[var(--bg)] font-medium rounded-full hover:bg-[var(--bg)]/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              04-23356451
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
