import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
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

  // industry tags — slug 對應到 industries landing pages 的有 semiconductor / aerospace
  const industries = [
    { name: t("industry1"), slug: "semiconductor" },
    { name: t("industry2"), slug: null }, // 醫療器材：尚無 landing page
    { name: t("industry3"), slug: "aerospace" },
    { name: t("industry4"), slug: null }, // 汽車
    { name: t("industry5"), slug: null }, // 精密機械
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
              <div
                className="aspect-square rounded-xl border border-[var(--border)] overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/28929510/pexels-photo-28929510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop')",
                }}
                role="img"
                aria-label={t("storyImagePlaceholder")}
              />
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
