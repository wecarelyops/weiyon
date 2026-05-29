import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Phone,
  FileSearch,
  FileText,
  Wrench,
  Factory,
  Truck,
  Settings,
  Sparkles,
  Clock,
  CreditCard,
  Globe,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Workflow" });
  return {
    alternates: buildAlternates("/workflow", locale),
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Workflow");

  const steps = [
    {
      icon: FileSearch,
      number: "01",
      title: t("step1Title"),
      timeline: t("step1Timeline"),
      description: t("step1Description"),
      yourRole: t("step1Your"),
      ourRole: t("step1Ours"),
      fileFormats: [
        "STEP (.stp)",
        "IGES (.igs)",
        "STL",
        "DWG / DXF",
        "PDF",
        "JPG / PNG",
      ],
    },
    {
      icon: FileText,
      number: "02",
      title: t("step2Title"),
      timeline: t("step2Timeline"),
      description: t("step2Description"),
      yourRole: t("step2Your"),
      ourRole: t("step2Ours"),
    },
    {
      icon: Wrench,
      number: "03",
      title: t("step3Title"),
      timeline: t("step3Timeline"),
      description: t("step3Description"),
      yourRole: t("step3Your"),
      ourRole: t("step3Ours"),
    },
    {
      icon: Factory,
      number: "04",
      title: t("step4Title"),
      timeline: t("step4Timeline"),
      description: t("step4Description"),
      yourRole: t("step4Your"),
      ourRole: t("step4Ours"),
    },
    {
      icon: Truck,
      number: "05",
      title: t("step5Title"),
      timeline: t("step5Timeline"),
      description: t("step5Description"),
      yourRole: t("step5Your"),
      ourRole: t("step5Ours"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("workflowLabel")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6 break-words">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-px bg-[var(--border)] border border-[var(--border)]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-[var(--bg)] p-8 lg:p-12"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Number + Icon */}
                  <div className="md:col-span-2">
                    <div className="text-5xl lg:text-7xl font-bold text-[var(--accent)]/30 leading-none">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] flex items-center justify-center mt-3">
                      <step.icon className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
                      <h2 className="text-2xl lg:text-4xl font-bold text-[var(--primary)] tracking-tight">
                        {step.title}
                      </h2>
                      <span className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] bg-[var(--surface)] px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* 步驟 1：顯示支援的圖檔格式 chips */}
                    {step.fileFormats && (
                      <div className="mb-6">
                        <div className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-3">
                          {t("step1FormatsLabel")}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.fileFormats.map((fmt) => (
                            <span
                              key={fmt}
                              className="inline-flex items-center px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs lg:text-sm font-medium text-[var(--text-primary)]"
                            >
                              {fmt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="border-l-2 border-[var(--accent)] pl-4">
                        <div className="text-xs tracking-[0.2em] uppercase text-[var(--accent-text)] mb-1">
                          {t("yourRoleLabel")}
                        </div>
                        <p className="text-sm text-[var(--text-primary)]">
                          {step.yourRole}
                        </p>
                      </div>
                      <div className="border-l-2 border-[var(--primary)] pl-4">
                        <div className="text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-1">
                          {t("ourRoleLabel")}
                        </div>
                        <p className="text-sm text-[var(--text-primary)]">
                          {step.ourRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 詢價前準備 — 4 個 prep items 讓報價更快 */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("prepLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("prepTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              {t("prepSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: FileText,
                step: "01",
                title: t("prep1Title"),
                desc: t("prep1Desc"),
                items: [t("prep1Item1"), t("prep1Item2"), t("prep1Item3")],
              },
              {
                icon: Settings,
                step: "02",
                title: t("prep2Title"),
                desc: t("prep2Desc"),
                items: [t("prep2Item1"), t("prep2Item2"), t("prep2Item3")],
              },
              {
                icon: Sparkles,
                step: "03",
                title: t("prep3Title"),
                desc: t("prep3Desc"),
                items: [t("prep3Item1"), t("prep3Item2"), t("prep3Item3")],
              },
              {
                icon: Clock,
                step: "04",
                title: t("prep4Title"),
                desc: t("prep4Desc"),
                items: [t("prep4Item1"), t("prep4Item2"), t("prep4Item3")],
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent-text)] font-medium">
                    {p.step}
                  </div>
                </div>
                <h3 className="font-bold text-base lg:text-lg text-[var(--primary)] mb-1.5 leading-tight">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {p.desc}
                </p>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5 leading-relaxed"
                    >
                      <span className="text-[var(--accent)] flex-shrink-0">
                        ‧
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tip — 不全部備齊也沒關係 */}
          <div className="mt-6 p-4 bg-[var(--bg)] border border-[var(--accent)]/30 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-medium text-[var(--primary)]">
                {t("prepTipLabel")}
              </span>{" "}
              {t("prepTip")}
            </p>
          </div>
        </div>
      </section>

      {/* Lead Time 參考表 — B2B 採購最關心 */}
      <section className="py-16 lg:py-24 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("leadTimeLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("leadTimeTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              {t("leadTimeSubtitle")}
            </p>
          </div>

          <div className="border border-[var(--border)] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium">
                    {t("leadTimeColType")}
                  </th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium hidden sm:table-cell">
                    {t("leadTimeColQty")}
                  </th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--accent-text)] font-medium">
                    {t("leadTimeColTime")}
                  </th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)] font-medium hidden lg:table-cell">
                    {t("leadTimeColNote")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: t("leadTimeRow1Type"),
                    qty: t("leadTimeRow1Qty"),
                    time: t("leadTimeRow1Time"),
                    note: t("leadTimeRow1Note"),
                  },
                  {
                    type: t("leadTimeRow2Type"),
                    qty: t("leadTimeRow2Qty"),
                    time: t("leadTimeRow2Time"),
                    note: t("leadTimeRow2Note"),
                  },
                  {
                    type: t("leadTimeRow3Type"),
                    qty: t("leadTimeRow3Qty"),
                    time: t("leadTimeRow3Time"),
                    note: t("leadTimeRow3Note"),
                  },
                  {
                    type: t("leadTimeRow4Type"),
                    qty: t("leadTimeRow4Qty"),
                    time: t("leadTimeRow4Time"),
                    note: t("leadTimeRow4Note"),
                  },
                  {
                    type: t("leadTimeRow5Type"),
                    qty: t("leadTimeRow5Qty"),
                    time: t("leadTimeRow5Time"),
                    note: t("leadTimeRow5Note"),
                  },
                  {
                    type: t("leadTimeRow6Type"),
                    qty: t("leadTimeRow6Qty"),
                    time: t("leadTimeRow6Time"),
                    note: t("leadTimeRow6Note"),
                    highlight: true,
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[var(--border)] last:border-b-0 ${
                      row.highlight
                        ? "bg-[var(--accent)]/5"
                        : "hover:bg-[var(--surface)]"
                    } transition-colors`}
                  >
                    <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-medium text-[var(--primary)]">
                      {row.type}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-sm text-[var(--text-secondary)] hidden sm:table-cell">
                      {row.qty}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-sm lg:text-base font-mono font-medium text-[var(--accent)]">
                      {row.time}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-sm text-[var(--text-secondary)] hidden lg:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-medium text-[var(--primary)]">
                {t("leadTimeFootnoteLabel")}
              </span>{" "}
              {t("leadTimeFootnote")}
            </p>
          </div>
        </div>
      </section>

      {/* 付款與貿易條件 — B2B / 海外採購商在意的 */}
      <section className="py-16 lg:py-24 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("paymentLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("paymentTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              {t("paymentSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {/* 國內付款 */}
            <div className="p-6 lg:p-8 bg-[var(--bg)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-base lg:text-lg text-[var(--primary)] leading-tight">
                  {t("paymentDomesticTitle")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("paymentDomesticItem1")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("paymentDomesticItem2")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("paymentDomesticItem3")}
                </li>
              </ul>
            </div>

            {/* 海外付款 */}
            <div className="p-6 lg:p-8 bg-[var(--bg)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-base lg:text-lg text-[var(--primary)] leading-tight">
                  {t("paymentOverseasTitle")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("paymentOverseasItem1")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("paymentOverseasItem2")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("paymentOverseasItem3")}
                </li>
              </ul>
            </div>

            {/* INCOTERMS */}
            <div className="p-6 lg:p-8 bg-[var(--bg)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-base lg:text-lg text-[var(--primary)] leading-tight">
                  {t("incotermsTitle")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("incotermsItem1")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("incotermsItem2")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("incotermsItem3")}
                </li>
              </ul>
            </div>

            {/* 計價貨幣 */}
            <div className="p-6 lg:p-8 bg-[var(--bg)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-base lg:text-lg text-[var(--primary)] leading-tight">
                  {t("currencyTitle")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("currencyItem1")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("currencyItem2")}
                </li>
                <li className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  ‧ {t("currencyItem3")}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[var(--bg)] border border-[var(--border)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-medium text-[var(--primary)]">
                {t("paymentFootnoteLabel")}
              </span>{" "}
              {t("paymentFootnote")}
            </p>
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
