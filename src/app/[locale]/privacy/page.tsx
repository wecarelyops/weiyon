import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Shield } from "lucide-react";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/privacy", locale),
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Privacy");

  // 本頁採區塊式 — 每個區塊（section）一組標題 + 內容（多段或清單）
  // 所有文字來自翻譯檔，方便統一審核與更新
  const sections: { titleKey: string; bodyKey: string }[] = [
    { titleKey: "controllerTitle", bodyKey: "controllerBody" },
    { titleKey: "dataCollectedTitle", bodyKey: "dataCollectedBody" },
    { titleKey: "legalBasisTitle", bodyKey: "legalBasisBody" },
    { titleKey: "retentionTitle", bodyKey: "retentionBody" },
    { titleKey: "processorsTitle", bodyKey: "processorsBody" },
    { titleKey: "transfersTitle", bodyKey: "transfersBody" },
    { titleKey: "rightsTitle", bodyKey: "rightsBody" },
    { titleKey: "cookiesTitle", bodyKey: "cookiesBody" },
    { titleKey: "contactTitle", bodyKey: "contactBody" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            <Shield className="w-4 h-4" />
            {t("heroLabel")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 break-words">
            {t("heroTitle")}
          </h1>
          <p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-6">
            {t("lastUpdated")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-10">
            {sections.map(({ titleKey, bodyKey }) => (
              <div key={titleKey}>
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3">
                  {t(titleKey)}
                </h2>
                <div className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {t(bodyKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-base text-[var(--text-secondary)] mb-6">
            {t("ctaText")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors"
          >
            {t("ctaButton")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
