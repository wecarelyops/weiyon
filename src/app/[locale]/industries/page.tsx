import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Phone } from "lucide-react";
import { industries, type IndustryLocale } from "@/data/industries";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Industries" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/industries", locale),
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Industries");

  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as IndustryLocale;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("heroLabel")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 break-words">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {industries.map((ind, idx) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={ind.imageUrl}
                    alt={ind.title[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={idx < 3 ? "eager" : "lazy"}
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {ind.title[lang]}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                    {ind.heroSubtitle[lang]}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] group-hover:text-[var(--accent)] group-hover:gap-3 transition-all">
                    <span className="border-b border-current pb-0.5">
                      {t("learnMore")}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capability summary callout */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4 leading-tight">
            {t("capabilitySummaryTitle")}
          </h2>
          <p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            {t("capabilitySummarySubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-strong)] rounded-full text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t("linkProcesses")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/materials"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-strong)] rounded-full text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t("linkMaterials")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/workflow"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-strong)] rounded-full text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t("linkWorkflow")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
