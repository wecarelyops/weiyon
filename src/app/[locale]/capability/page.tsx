import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { buildAlternates } from "@/lib/hreflang";
import PrintButton from "@/components/print-button";
import { workAlt } from "@/data/works-alt";
import {
  STATS,
  PROCESSES,
  INDUSTRIES,
  PARTS,
  MATERIALS,
  QUALITY,
  WORK_PHOTO_IDS,
  pick,
} from "@/data/capability";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Capability" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/capability", locale),
  };
}

export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Capability");

  const SITE_URL = "https://www.weiyon.com";
  const localePrefix = locale === "zh" ? "" : `/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("metaTitle"),
    description: t("metaDescription"),
    url: `${SITE_URL}${localePrefix}/capability`,
    inLanguage: locale === "zh" ? "zh-TW" : locale,
    about: {
      "@type": "Organization",
      name: locale === "zh" ? "偉勇工業社" : "Weiyon Industry",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 print:pt-6 pb-8 lg:pb-10 bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
                {t("heroKicker")}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight">
                {t("heroTitle")}
              </h1>
            </div>
            <PrintButton label={t("printButton")} />
          </div>
          <p className="mt-5 text-sm lg:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            {t("lead")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--bg)] border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="py-5 lg:py-6 text-center border-r border-[var(--border)] last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <div className="text-2xl lg:text-3xl font-bold text-[var(--accent)] tabular-nums">
                {s.n}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">
                {pick(s.label, locale)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capability grid */}
      <section className="py-10 lg:py-14 bg-[var(--bg)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Processes */}
          <div>
            <h2 className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1.5 inline-block mb-4">
              {t("processesTitle")}
            </h2>
            <ul className="space-y-1.5">
              {PROCESSES.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-[var(--primary)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                  {pick(p, locale)}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Parts */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1.5 inline-block mb-3">
                {t("industriesTitle")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((x, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)]"
                  >
                    {pick(x, locale)}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1.5 inline-block mb-3">
                {t("partsTitle")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {PARTS.map((x, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)]"
                  >
                    {pick(x, locale)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Materials — full width */}
          <div className="md:col-span-2">
            <h2 className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1.5 inline-block mb-4">
              {t("materialsTitle")}
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2.5">
              {MATERIALS.map((m, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="font-semibold text-[var(--accent)] whitespace-nowrap min-w-[5.5rem]">
                    {pick(m.label, locale)}
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono text-xs leading-relaxed">
                    {m.grades}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality strip */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            {t("qualityTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {QUALITY.map((q, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-[var(--primary)]">
                <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                {pick(q, locale)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-10 lg:py-12 bg-[var(--bg)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {WORK_PHOTO_IDS.map((id) => (
              <div
                key={id}
                className="relative aspect-square rounded-lg overflow-hidden border border-[var(--border)]"
              >
                <Image
                  src={`/images/works/${String(id).padStart(2, "0")}.jpg`}
                  alt={workAlt(id, locale)}
                  fill
                  sizes="(max-width: 640px) 33vw, 160px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-[var(--text-secondary)]">
            {t("photosCaption")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] text-[var(--bg)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">{t("ctaTitle")}</h2>
            <p className="mt-1 text-sm text-gray-300">{t("ctaSubtitle")}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <a href="tel:+886423356451" className="flex items-center gap-2 hover:text-[var(--accent)]">
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                +886-4-2335-6451
              </a>
              <a href="mailto:sales@weiyon.com" className="flex items-center gap-2 hover:text-[var(--accent)]">
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                sales@weiyon.com
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="print:hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--primary)] font-semibold hover:opacity-90 transition-opacity flex-shrink-0"
          >
            {t("ctaTitle")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
