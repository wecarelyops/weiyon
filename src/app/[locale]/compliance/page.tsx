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
  Award,
  AlertCircle,
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
                <Award className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-xs tracking-[0.25em] uppercase text-green-700 font-medium">
                  {t("currentLabel")}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {t("iso9001Desc")}
              </p>
            </div>

            <div className="p-6 lg:p-8 bg-[var(--surface)]">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-[var(--text-muted)]" />
                <span className="text-xs tracking-[0.25em] uppercase text-[var(--text-muted)] font-medium">
                  {t("plannedLabel")}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-2">
                ISO 14001:2015
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {t("iso14001Desc")}
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
              {t("cbamLabel")}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight">
              {t("cbamTitle")}
            </h2>
            <p className="text-base text-[var(--text-secondary)] mt-4 leading-relaxed">
              {t("cbamSubtitle")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full text-xs font-medium text-[var(--accent)]">
                <FileCheck2 className="w-3.5 h-3.5" />
                {t("methodologyBadge")}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--text-secondary)]">
                <Leaf className="w-3.5 h-3.5" />
                {t("cbamServiceBadge")}
              </span>
            </div>
          </div>

          {/* Scope 表格 */}
          <div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--bg)] border-b border-[var(--border)]">
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("scopeColScope")}
                  </th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("scopeColSource")}
                  </th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--accent)] font-medium">
                    {t("scopeColAnnual")}
                  </th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium hidden lg:table-cell">
                    {t("scopeColMethod")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                    Scope 1
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-[var(--text-secondary)]">
                    {t("scope1Source")}
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)]">
                    ~5 tCO₂e
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scope1Method")}
                  </td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                    Scope 2
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-[var(--text-secondary)]">
                    {t("scope2Source")}
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)]">
                    ~60 tCO₂e
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scope2Method")}
                  </td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                    Scope 3
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-[var(--text-secondary)]">
                    {t("scope3Source")}
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)]">
                    ~46 tCO₂e
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scope3Method")}
                  </td>
                </tr>
                <tr className="bg-[var(--accent)]/5">
                  <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-bold text-[var(--primary)]">
                    {t("scopeTotalLabel")}
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-[var(--text-secondary)]">
                    —
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-base lg:text-lg font-mono font-bold text-[var(--accent)]">
                    ~111 tCO₂e
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-xs text-[var(--text-secondary)] hidden lg:table-cell">
                    {t("scopeTotalMethod")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-1">
                {t("perEmployeeLabel")}
              </div>
              <div className="text-xl font-bold text-[var(--primary)]">
                ~37 tCO₂e
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                {t("perEmployeeNote")}
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
                2026
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

      {/* Request formal PDF */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="p-6 lg:p-10 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 leading-tight">
                  {t("pdfRequestTitle")}
                </h2>
                <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed">
                  {t("pdfRequestSubtitle")}
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors"
            >
              {t("pdfRequestButton")}
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
