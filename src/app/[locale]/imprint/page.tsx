import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, FileText } from "lucide-react";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Imprint" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/imprint", locale),
    robots: { index: true, follow: true },
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Imprint");

  // 法律必要欄位（依德國 TMG §5、ECG 等）
  // 用 dl/dt/dd 結構讓螢幕閱讀器把「欄位名稱」與「值」配對朗讀
  const fields: { labelKey: string; valueKey: string }[] = [
    { labelKey: "providerLabel", valueKey: "providerValue" },
    { labelKey: "ownerLabel", valueKey: "ownerValue" },
    { labelKey: "addressLabel", valueKey: "addressValue" },
    { labelKey: "phoneLabel", valueKey: "phoneValue" },
    { labelKey: "emailLabel", valueKey: "emailValue" },
    { labelKey: "registrationLabel", valueKey: "registrationValue" },
    { labelKey: "vatLabel", valueKey: "vatValue" },
    { labelKey: "responsibleLabel", valueKey: "responsibleValue" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--accent-text)] mb-6">
            <FileText className="w-4 h-4" />
            {t("heroLabel")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 break-words">
            {t("heroTitle")}
          </h1>
          <p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Legal disclosure */}
      <section className="py-12 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-6">
            {t("companyTitle")}
          </h2>
          <dl className="grid sm:grid-cols-[200px_1fr] gap-y-3 gap-x-6 text-sm lg:text-base">
            {fields.map(({ labelKey, valueKey }) => (
              <div key={labelKey} className="contents">
                <dt className="font-medium text-[var(--text-secondary)]">
                  {t(labelKey)}
                </dt>
                <dd className="text-[var(--primary)] whitespace-pre-line">
                  {t(valueKey)}
                </dd>
              </div>
            ))}
          </dl>

          {/* Disclaimer / liability sections */}
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3">
                {t("liabilityContentTitle")}
              </h2>
              <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {t("liabilityContentBody")}
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3">
                {t("liabilityLinksTitle")}
              </h2>
              <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {t("liabilityLinksBody")}
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3">
                {t("copyrightTitle")}
              </h2>
              <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {t("copyrightBody")}
              </p>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3">
                {t("disputeTitle")}
              </h2>
              <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed">
                {t("disputeBody")}{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline underline-offset-2 hover:no-underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
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
