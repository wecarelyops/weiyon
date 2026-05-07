import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Leaf,
  FileCheck2,
  Users,
  Lock,
} from "lucide-react";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Compliance" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/compliance", locale),
  };
}

export default async function CompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Compliance");

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("heroLabel")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 max-w-5xl">
            {t("heroTitle")}
          </h1>
          <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-10">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("qualityLabel")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight">
              {t("qualityTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
            <div className="p-6 lg:p-8 bg-[var(--surface)]">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                  {t("qcFlowLabel")}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-2">
                {t("qcFlowTitle")}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {t("qcFlowDesc")}
              </p>
            </div>

            <div className="p-6 lg:p-8 bg-[var(--surface)]">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck2 className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                  {t("docsLabel")}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-2">
                {t("docsTitle")}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {t("docsDesc")}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-[var(--text-secondary)] leading-relaxed">
            {t("qualityNote")}
          </p>
        </div>
      </section>

      {/* CBAM / Carbon Disclosure */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("ghgLabel")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight">
              {t("ghgTitle")}
            </h2>
            <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              {t("ghgSubtitle")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full text-xs font-medium text-[var(--accent)]">
                <FileCheck2 className="w-3.5 h-3.5" />
                {t("methodologyBadge")}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--text-secondary)]">
                <Leaf className="w-3.5 h-3.5" />
                {t("voluntaryBadge")}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--text-secondary)]">
                <FileCheck2 className="w-3.5 h-3.5" />
                {t("cbamServiceBadge")}
              </span>
            </div>
          </div>

          {/* 年度數據 — 可展開折疊（為未來逐年新增鋪路） */}
          <details
            open
            className="group border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-3 px-4 lg:px-6 py-4 lg:py-5 cursor-pointer list-none hover:bg-[var(--bg)] transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-mono font-bold text-sm flex-shrink-0">
                  2025
                </span>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-[var(--primary)] leading-tight">
                    {t("yearTitle2025")}
                  </div>
                  <div className="text-[0.7rem] sm:text-xs text-[var(--text-muted)] mt-0.5 hidden sm:block">
                    {t("yearSubtitle2025")}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[var(--text-muted)] group-open:rotate-90 transition-transform flex-shrink-0" />
            </summary>

            <div className="px-4 lg:px-6 pb-6 lg:pb-8">
          {/* Scope 表格 */}
          <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--bg)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--bg)] border-b border-[var(--border)]">
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("scopeColScope")}
                  </th>
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("scopeColSource")}
                  </th>
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--accent)] font-medium">
                    {t("scopeColAnnual")}
                  </th>
                  <th className="text-left px-3 lg:px-6 py-3 lg:py-4 text-[0.7rem] lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium hidden lg:table-cell">
                    {t("scopeColMethod")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                    Scope 1
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[var(--text-secondary)] break-words">
                    {t("scope1Source")}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)] whitespace-nowrap">
                    ~5 tCO₂e
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scope1Method")}
                  </td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                    Scope 2
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[var(--text-secondary)] break-words">
                    {t("scope2Source")}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)] whitespace-nowrap">
                    ~60 tCO₂e
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scope2Method")}
                  </td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                    Scope 3
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[var(--text-secondary)] break-words">
                    {t("scope3Source")}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)] whitespace-nowrap">
                    ~46 tCO₂e
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scope3Method")}
                  </td>
                </tr>
                <tr className="bg-[var(--accent)]/5">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-bold text-[var(--primary)]">
                    {t("scopeTotalLabel")}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-[var(--text-secondary)] break-words">
                    —
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-base lg:text-lg font-mono font-bold text-[var(--accent)] whitespace-nowrap">
                    ~111 tCO₂e
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scopeTotalMethod")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-1">
                {t("perTonneLabel")}
              </div>
              <div className="text-xl font-bold text-[var(--primary)] font-mono">
                ~4.4 kgCO₂e/kg
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                {t("perTonneNote")}
              </div>
            </div>
            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-1">
                {t("gridFactorLabel")}
              </div>
              <div className="text-xl font-bold text-[var(--primary)] font-mono">
                0.495 kg/kWh
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                {t("gridFactorNote")}
              </div>
            </div>
            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-1">
                {t("reportingYearLabel")}
              </div>
              <div className="text-xl font-bold text-[var(--primary)]">
                2025
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                {t("reportingYearNote")}
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-[var(--text-muted)] leading-relaxed">
            {t("cbamFootnote")}
          </p>
            </div>
          </details>

          <p className="mt-4 text-xs text-[var(--text-muted)] italic">
            {t("yearArchiveNote")}
          </p>
        </div>
      </section>

      {/* LkSG Self-Declaration */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("lksgLabel")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight">
              {t("lksgTitle")}
            </h2>
            <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              {t("lksgSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Users,
                title: t("lksg1Title"),
                desc: t("lksg1Desc"),
              },
              {
                icon: ShieldCheck,
                title: t("lksg2Title"),
                desc: t("lksg2Desc"),
              },
              {
                icon: Leaf,
                title: t("lksg3Title"),
                desc: t("lksg3Desc"),
              },
              {
                icon: Lock,
                title: t("lksg4Title"),
                desc: t("lksg4Desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 lg:p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--primary)] leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Traceability */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("traceLabel")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight">
              {t("traceTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: FileCheck2,
                title: "EN 10204 3.1 / 3.2",
                desc: t("traceItem1Desc"),
              },
              {
                icon: FileCheck2,
                title: t("traceItem2Title"),
                desc: t("traceItem2Desc"),
              },
              {
                icon: FileCheck2,
                title: t("traceItem3Title"),
                desc: t("traceItem3Desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 lg:p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-bold text-sm lg:text-base text-[var(--primary)] leading-tight font-mono">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
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
