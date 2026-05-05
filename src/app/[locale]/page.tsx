import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Award,
  Users,
  Cog,
  Zap,
  Phone,
  Diamond,
  Layers,
  Clock,
} from "lucide-react";
import { industries, type IndustryLocale } from "@/data/industries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as IndustryLocale;

  return (
    <>
      {/* Hero — infobahn-inspired: massive typography, generous whitespace */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 bg-[var(--bg)] overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start mb-10">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)]">
              <span className="block w-12 h-px bg-[var(--accent)]" />
              {t("heroBadge")}
            </div>
          </div>

          {/* Massive Title */}
          <h1 className="text-center lg:text-left text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold text-[var(--primary)] tracking-tight leading-[0.95] mb-12 lg:mb-16">
            {t("heroTitleLine1")}
            <br />
            <span className="text-[var(--accent)]">
              {t("heroTitleLine2")}
            </span>
          </h1>

          {/* Description + CTAs */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {t("heroDescription")}
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors"
              >
                {t("heroCtaQuote")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--border-strong)] text-[var(--text-primary)] font-medium rounded-full hover:bg-[var(--surface)] transition-colors"
              >
                {t("heroCtaProducts")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
            {[
              { label: t("statsExperience"), value: "40+" },
              { label: t("statsEquipment"), value: "10+" },
              { label: t("statsCustomers"), value: "500+" },
              { label: t("statsProducts"), value: "1000+" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`py-10 lg:py-14 px-6 lg:px-10 ${
                  idx === 0 ? "border-l-0" : ""
                }`}
              >
                <p className="text-4xl lg:text-6xl font-bold text-[var(--primary)] mb-2 leading-none">
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm tracking-wider uppercase text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — bigger heading, cleaner cards */}
      <section className="py-24 lg:py-40 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              Services
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] max-w-4xl">
              {t("servicesTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mt-6">
              {t("servicesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              { icon: Cog, title: t("service1Title"), description: t("service1Desc") },
              { icon: Zap, title: t("service2Title"), description: t("service2Desc") },
              { icon: Users, title: t("service3Title"), description: t("service3Desc") },
              { icon: Award, title: t("service4Title"), description: t("service4Desc") },
              { icon: Cog, title: t("service5Title"), description: t("service5Desc") },
              { icon: Cog, title: t("service6Title"), description: t("service6Desc") },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group p-8 lg:p-12 bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] flex items-center justify-center mb-6 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all">
                  <service.icon className="w-5 h-5 text-[var(--text-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors group"
            >
              <span className="border-b border-current pb-1">{t("viewAllServices")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid — 6 產業 landing page 內鏈 */}
      <section className="py-24 lg:py-40 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
              <span className="block w-10 h-px bg-[var(--accent)]" />
              {t("industriesLabel")}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] max-w-5xl">
              {t("industriesTitle")}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mt-6">
              {t("industriesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {industries.map((ind, idx) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative bg-[var(--surface)] hover:bg-[var(--bg)] transition-colors p-8 lg:p-10 flex flex-col min-h-[280px]"
              >
                <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {ind.title[lang]}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  {ind.heroSubtitle[lang]}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] group-hover:text-[var(--accent)] group-hover:gap-3 transition-all">
                  <span className="border-b border-current pb-0.5">
                    {ind.shortTitle[lang]}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors group"
            >
              <span className="border-b border-current pb-1">{t("viewAllIndustries")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiation Hook — bold center stage */}
      <section className="py-24 lg:py-40 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-8">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            Why Weiyon
          </div>

          <p className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[var(--primary)] leading-[1.1] tracking-tight mb-8 max-w-6xl">
            {t("promiseHookLine1")}
            <span className="text-[var(--accent)]">
              {t("promiseHookHighlight")}
            </span>
            <br />
            {t("promiseHookLine2")}
            <span className="underline decoration-[var(--accent)] decoration-[3px] underline-offset-[12px]">
              {t("promiseHookCallText")}
            </span>
          </p>

          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-16">
            {t("promiseSubtitle")}
          </p>

          {/* 3 Promise Items — minimal style */}
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] mb-16">
            {[
              { icon: Diamond, title: t("promise1Title"), description: t("promise1Desc") },
              { icon: Layers, title: t("promise2Title"), description: t("promise2Desc") },
              { icon: Clock, title: t("promise3Title"), description: t("promise3Desc") },
            ].map((promise, idx) => (
              <div
                key={idx}
                className="p-8 lg:p-12 bg-[var(--surface)] hover:bg-[var(--bg)] transition-colors"
              >
                <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-4 leading-tight">
                  {promise.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors"
          >
            {t("promiseCta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 bg-[var(--primary)] text-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--primary)] font-medium rounded-full hover:bg-[var(--accent)]/90 transition-colors"
            >
              {t("ctaContact")}
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
