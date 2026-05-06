import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronLeft, Phone } from "lucide-react";
import { industries, getIndustryBySlug, type IndustryLocale } from "@/data/industries";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const ind of industries) {
      params.push({ locale, slug: ind.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return {};
  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as IndustryLocale;
  return {
    title: ind.metaTitle[lang],
    description: ind.metaDescription[lang],
    openGraph: {
      title: ind.metaTitle[lang],
      description: ind.metaDescription[lang],
      images: [ind.imageUrl],
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("IndustryDetail");

  const ind = getIndustryBySlug(slug);
  if (!ind) notFound();

  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as IndustryLocale;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("backLabel")}
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
                <span className="block w-10 h-px bg-[var(--accent)]" />
                {t("industryLabel")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6">
                {ind.title[lang]}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {ind.heroSubtitle[lang]}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border)]">
                <Image
                  src={ind.imageUrl}
                  alt={ind.title[lang]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("introLabel")}
          </div>
          <p className="text-xl lg:text-2xl text-[var(--primary)] leading-relaxed font-medium">
            {ind.intro[lang]}
          </p>
        </div>
      </section>

      {/* Why Weiyon */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
            01
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] mb-12 tracking-tight leading-tight max-w-3xl">
            {ind.whyTitle[lang]}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {ind.whyPoints[lang].map((point) => (
              <div key={point} className="flex items-start gap-3 py-3 border-b border-[var(--border)]">
                <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-1" />
                <span className="text-[var(--primary)] font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts + Materials + Standards 三欄 */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Parts */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                02
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {ind.partsTitle[lang]}
              </h2>
              <ul className="space-y-3">
                {ind.parts[lang].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                03
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {ind.materialsTitle[lang]}
              </h2>
              <ul className="space-y-3">
                {ind.materials[lang].map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                04
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {ind.standardsTitle[lang]}
              </h2>
              <ul className="space-y-3">
                {ind.standards[lang].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
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
