import { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { buildAlternates } from "@/lib/hreflang";
import CountUp from "@/components/count-up";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  Diamond,
  Hexagon,
  Box,
  Cpu,
  Disc,
  Zap,
  Layers,
  Sparkles,
  Phone,
  ArrowRight,
  PackageCheck,
  ScanSearch,
  Repeat,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/about", locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  const materials = [
    {
      icon: Diamond,
      title: t("material1Title"),
      description: t("material1Desc"),
      note: t("material1Note"),
      highlight: true,
    },
    {
      icon: Hexagon,
      title: t("material2Title"),
      description: t("material2Desc"),
      note: t("material2Note"),
    },
    {
      icon: Box,
      title: t("material3Title"),
      description: t("material3Desc"),
      note: t("material3Note"),
    },
  ];

  const processes = [
    { icon: Cpu, title: t("process1Title"), description: t("process1Desc") },
    { icon: Disc, title: t("process2Title"), description: t("process2Desc") },
    { icon: Zap, title: t("process3Title"), description: t("process3Desc") },
    { icon: Layers, title: t("process4Title"), description: t("process4Desc") },
    {
      icon: Sparkles,
      title: t("process5Title"),
      description: t("process5Desc"),
    },
  ];

  // industry tags — 8 個產業，7 個有對應 landing page，精密機械為廣義分類保留
  const industries = [
    { name: t("industry1"), slug: "semiconductor" },
    { name: t("industry2"), slug: "medical" },
    { name: t("industry3"), slug: "aerospace" },
    { name: t("industry4"), slug: "automotive" },
    { name: t("industry5"), slug: null }, // 精密機械（廣義分類）
    { name: t("industry6"), slug: "automation" },
    { name: t("industry7"), slug: "tuning" },
    { name: t("industry8"), slug: "oil-gas" },
  ];

  const areas = [
    t("area1"),
    t("area2"),
    t("area3"),
    t("area4"),
    t("area5"),
    t("area6"),
  ];

  const values = [
    { icon: Award, title: t("value1Title"), description: t("value1Desc") },
    { icon: Users, title: t("value2Title"), description: t("value2Desc") },
    { icon: Target, title: t("value3Title"), description: t("value3Desc") },
    {
      icon: TrendingUp,
      title: t("value4Title"),
      description: t("value4Desc"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] whitespace-pre-line">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Milestones / By the Numbers — 40 年數字感 + 信任元素 */}
      <section className="py-16 lg:py-24 bg-[var(--bg)] border-y border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("milestonesLabel")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1]">
              {t("milestonesTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              {t("milestonesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              {
                end: 40,
                suffix: "+",
                duration: 1800,
                label: t("milestone1Label"),
                detail: t("milestone1Detail"),
              },
              {
                end: 500,
                suffix: "+",
                duration: 2000,
                label: t("milestone2Label"),
                detail: t("milestone2Detail"),
              },
              {
                end: 1000,
                suffix: "+",
                duration: 2200,
                label: t("milestone3Label"),
                detail: t("milestone3Detail"),
              },
              {
                end: 8,
                suffix: "",
                duration: 1400,
                label: t("milestone4Label"),
                detail: t("milestone4Detail"),
              },
              {
                end: 14,
                suffix: "",
                duration: 1500,
                unit: t("milestone6Unit"),
                label: t("milestone6Label"),
                detail: t("milestone6Detail"),
              },
              {
                end: 3,
                suffix: "",
                duration: 1200,
                unit: t("milestone7Unit"),
                label: t("milestone7Label"),
                detail: t("milestone7Detail"),
              },
              {
                end: 1986,
                suffix: "",
                duration: 2400,
                label: t("milestone8Label"),
                detail: t("milestone8Detail"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[var(--bg)] p-6 lg:p-8 hover:bg-[var(--surface)] transition-colors"
              >
                <p className="text-3xl lg:text-5xl font-bold text-[var(--primary)] leading-none mb-2 tracking-tight tabular-nums">
                  <CountUp
                    end={item.end}
                    suffix={item.suffix}
                    duration={item.duration}
                  />
                  {item.unit && (
                    <span className="text-base lg:text-xl ml-1 font-medium text-[var(--text-secondary)]">
                      {item.unit}
                    </span>
                  )}
                </p>
                <p className="text-xs lg:text-sm tracking-wider uppercase text-[var(--accent)] font-medium mb-2">
                  {item.label}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
                {t("storyTitle")}
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>{t("story1")}</p>
                <p>{t("story2")}</p>
                <p>{t("story3")}</p>
                <p>{t("story4")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-xl border border-[var(--border)] overflow-hidden">
                <Image
                  src="/images/works/05.jpg"
                  alt={t("storyImagePlaceholder")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              {t("capabilitiesTitle")}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t("capabilitiesSubtitle")}
            </p>
          </div>

          {/* Materials */}
          <div className="mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              {t("materialsTitle")}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              {t("materialsSubtitle")}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {materials.map((mat) => (
                <div
                  key={mat.title}
                  className={`p-6 bg-white rounded-xl ${
                    mat.highlight
                      ? "border-2 border-[var(--accent)] shadow-md"
                      : "border border-[var(--border)]"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      mat.highlight
                        ? "bg-[var(--accent)]"
                        : "bg-[var(--accent)]/10"
                    }`}
                  >
                    <mat.icon
                      className={`w-6 h-6 ${
                        mat.highlight ? "text-white" : "text-[var(--accent)]"
                      }`}
                    />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--primary)] mb-2">
                    {mat.title}
                  </h4>
                  <p className="text-sm text-[var(--text-primary)] mb-2">
                    {mat.description}
                  </p>
                  {mat.note && (
                    <p className="text-xs text-[var(--text-muted)] italic">
                      {mat.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Processes */}
          <div className="mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              {t("processesTitle")}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              {t("processesSubtitle")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((proc) => (
                <div
                  key={proc.title}
                  className="p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                    <proc.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--primary)] mb-2">
                    {proc.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Control Flow — 進料 → 首件 → 製程 → 完工 + 報告 */}
          <div className="mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              {t("qcFlowTitle")}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("qcFlowSubtitle")}
            </p>

            {/* 4 步驟：手機直排、平板以上水平排（卡片之間用箭頭連接） */}
            <div className="grid md:grid-cols-4 gap-4 lg:gap-3 relative">
              {[
                {
                  icon: PackageCheck,
                  step: "01",
                  title: t("qcStep1Title"),
                  short: t("qcStep1Short"),
                  items: [
                    t("qcStep1Item1"),
                    t("qcStep1Item2"),
                    t("qcStep1Item3"),
                  ],
                },
                {
                  icon: ScanSearch,
                  step: "02",
                  title: t("qcStep2Title"),
                  short: t("qcStep2Short"),
                  items: [
                    t("qcStep2Item1"),
                    t("qcStep2Item2"),
                    t("qcStep2Item3"),
                  ],
                },
                {
                  icon: Repeat,
                  step: "03",
                  title: t("qcStep3Title"),
                  short: t("qcStep3Short"),
                  items: [
                    t("qcStep3Item1"),
                    t("qcStep3Item2"),
                    t("qcStep3Item3"),
                  ],
                },
                {
                  icon: ShieldCheck,
                  step: "04",
                  title: t("qcStep4Title"),
                  short: t("qcStep4Short"),
                  items: [
                    t("qcStep4Item1"),
                    t("qcStep4Item2"),
                    t("qcStep4Item3"),
                  ],
                },
              ].map((stage, idx, arr) => (
                <div key={stage.step} className="relative flex">
                  <div className="flex-1 p-5 lg:p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                        {stage.step}
                      </div>
                    </div>
                    <h4 className="font-bold text-base lg:text-lg text-[var(--primary)] mb-1.5 leading-tight">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
                      {stage.short}
                    </p>
                    <ul className="space-y-1.5">
                      {stage.items.map((item) => (
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
                  {/* 箭頭 — 平板以上才出現；最後一張不顯示 */}
                  {idx < arr.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden md:flex items-center px-1 text-[var(--text-muted)]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 文件產出 callout */}
            <div className="mt-6 p-5 lg:p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-11 h-11 bg-[var(--primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base text-[var(--primary)] mb-1">
                  {t("qcDocsTitle")}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t("qcDocsSubtitle")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  t("qcDoc1"),
                  t("qcDoc2"),
                  t("qcDoc3"),
                  t("qcDoc4"),
                ].map((doc) => (
                  <span
                    key={doc}
                    className="px-3 py-1 text-xs bg-white border border-[var(--border)] rounded-full text-[var(--text-secondary)]"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              {t("industriesTitle")}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              {t("industriesSubtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) =>
                ind.slug ? (
                  <Link
                    key={ind.name}
                    href={`/industries/${ind.slug}`}
                    className="group px-5 py-2 bg-white border border-[var(--accent)] rounded-full text-sm font-medium text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    {ind.name}
                    <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ) : (
                  <span
                    key={ind.name}
                    className="px-5 py-2 bg-white border border-[var(--border)] rounded-full text-sm font-medium text-[var(--primary)]"
                  >
                    {ind.name}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Service Coverage / Geographic Areas */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              {t("areasTitle")}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              {t("areasSubtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area, idx) => (
                <span
                  key={area}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    idx === 0
                      ? "bg-[var(--accent)] text-white border-2 border-[var(--accent)]"
                      : "bg-white border border-[var(--border)] text-[var(--primary)]"
                  }`}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              {t("valuesTitle")}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t("valuesSubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)]"
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--primary)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t("visionTitle")}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {t("visionText")}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-8">
              {[
                {
                  value: t("visionStat1Value"),
                  label: t("visionStat1Label"),
                },
                {
                  value: t("visionStat2Value"),
                  label: t("visionStat2Label"),
                },
                {
                  value: t("visionStat3Value"),
                  label: t("visionStat3Label"),
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation CTA */}
      <section className="py-20 lg:py-28 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-4xl font-bold text-[var(--primary)] leading-relaxed mb-6">
            {t("ctaHookLine1")}
            <br className="lg:hidden" />
            <span className="text-[var(--accent)]">
              {t("ctaHookHighlight")}
            </span>
            <br />
            {t("ctaHookLine2")}
            <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">
              {t("ctaHookCallText")}
            </span>
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-10 mt-8 whitespace-pre-line">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              {t("ctaButtonQuote")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-[var(--bg)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t("ctaButtonPhone")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
