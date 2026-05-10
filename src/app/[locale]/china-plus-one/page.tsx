import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Phone,
  Shield,
  Globe2,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  Factory,
} from "lucide-react";
import { buildAlternates } from "@/lib/hreflang";
import TariffSavingsCalculator from "@/components/tariff-savings-calculator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ChinaPlusOne" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/china-plus-one", locale),
  };
}

export default async function ChinaPlusOnePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ChinaPlusOne");

  // JSON-LD Service schema：把 China+1 包裝成可索引的 procurement 服務
  const SITE_URL = "https://www.weiyon.com";
  const localePrefix = locale === "zh" ? "" : `/${locale}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("metaTitle"),
    description: t("metaDescription"),
    provider: {
      "@type": "Organization",
      name: locale === "zh" ? "偉勇工業社" : "Weiyon Industry",
      url: SITE_URL,
      telephone: "+886-4-2335-6451",
      address: {
        "@type": "PostalAddress",
        addressLocality: locale === "zh" ? "烏日區" : "Wuri District",
        addressRegion: locale === "zh" ? "台中市" : "Taichung City",
        addressCountry: "TW",
      },
    },
    serviceType: "Power-of-Two / China+1 Procurement Sourcing",
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "European Union" },
      { "@type": "Place", name: "Worldwide" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Procurement Manager / Supply Chain Director / Mittelstand Buyer",
    },
    url: `${SITE_URL}${localePrefix}/china-plus-one`,
    inLanguage: locale === "zh" ? "zh-TW" : locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("heroLabel")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5rem] font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 max-w-5xl">
            {t("heroTitle")}
          </h1>
          <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-10">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors"
            >
              {t("heroCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem — Why China+1 now */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("problemLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("problemTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              {
                icon: AlertTriangle,
                title: t("problem1Title"),
                desc: t("problem1Desc"),
              },
              {
                icon: AlertTriangle,
                title: t("problem2Title"),
                desc: t("problem2Desc"),
              },
              {
                icon: AlertTriangle,
                title: t("problem3Title"),
                desc: t("problem3Desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 lg:p-8 bg-[var(--surface)]"
              >
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Tariff Math */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("tariffLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("tariffTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              {t("tariffSubtitle")}
            </p>
          </div>

          <div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--bg)] border-b border-[var(--border)]">
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("tariffColOrigin")}
                  </th>
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("tariffColRate")}
                  </th>
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium hidden sm:table-cell">
                    {t("tariffColExample")}
                  </th>
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("tariffColYour")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)] bg-red-50/30">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-[var(--primary)] whitespace-nowrap">
                    🇨🇳 {t("tariffChinaName")}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xl lg:text-2xl font-mono font-bold text-red-600 whitespace-nowrap">
                    32%
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[var(--text-secondary)] hidden sm:table-cell font-mono">
                    USD 100k → +USD 32k
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-red-600 font-medium break-words">
                    {t("tariffChinaImpact")}
                  </td>
                </tr>
                <tr className="bg-green-50/30">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-[var(--primary)] whitespace-nowrap">
                    🇹🇼 {t("tariffTaiwanName")}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xl lg:text-2xl font-mono font-bold text-green-700 whitespace-nowrap">
                    10%
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[var(--text-secondary)] hidden sm:table-cell font-mono">
                    USD 100k → +USD 10k
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-green-700 font-medium break-words">
                    {t("tariffTaiwanImpact")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-6 h-6 text-green-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-base lg:text-lg font-bold text-[var(--primary)] mb-1">
                  {t("tariffSavingsTitle")}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t("tariffSavingsDesc")}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
            {t("tariffSource")}
          </p>

          {/* Interactive Calculator — 採購商輸入年金額立即看節省，最強的 lead magnet */}
          <div className="mt-12 lg:mt-16">
            <TariffSavingsCalculator />
          </div>
        </div>
      </section>

      {/* Why Weiyon specifically */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("whyWeiyonLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("whyWeiyonTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              {
                icon: Factory,
                title: t("why1Title"),
                desc: t("why1Desc"),
              },
              {
                icon: Shield,
                title: t("why2Title"),
                desc: t("why2Desc"),
              },
              {
                icon: Globe2,
                title: t("why3Title"),
                desc: t("why3Desc"),
              },
              {
                icon: CheckCircle2,
                title: t("why4Title"),
                desc: t("why4Desc"),
              },
              {
                icon: CheckCircle2,
                title: t("why5Title"),
                desc: t("why5Desc"),
              },
              {
                icon: CheckCircle2,
                title: t("why6Title"),
                desc: t("why6Desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 lg:p-8 bg-[var(--surface)]"
              >
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-base lg:text-lg font-bold text-[var(--primary)] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to start — risk-mitigation framework */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("howLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("howTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              {t("howSubtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: t("how1Title"),
                desc: t("how1Desc"),
              },
              {
                step: "02",
                title: t("how2Title"),
                desc: t("how2Desc"),
              },
              {
                step: "03",
                title: t("how3Title"),
                desc: t("how3Desc"),
              },
              {
                step: "04",
                title: t("how4Title"),
                desc: t("how4Desc"),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 lg:p-8 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
              >
                <div className="text-3xl lg:text-5xl font-bold text-[var(--accent)]/40 leading-none flex-shrink-0 md:w-20">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
              {t("ctaButton")}
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
