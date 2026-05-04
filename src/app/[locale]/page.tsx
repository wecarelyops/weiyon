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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 min-h-[90vh] flex items-center bg-gradient-to-b from-[var(--surface)] to-[var(--bg)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                {t("heroBadge")}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-6">
                {t("heroTitleLine1")}
                <br />
                <span className="text-[var(--accent)]">
                  {t("heroTitleLine2")}
                </span>
              </h1>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {t("heroDescription")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
                >
                  {t("heroCtaQuote")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border-strong)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--surface)] transition-colors"
                >
                  {t("heroCtaProducts")}
                </Link>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] border border-[var(--border)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Cog className="w-24 h-24 text-[var(--accent)] mx-auto mb-4 opacity-20" />
                    <p className="text-[var(--text-muted)] text-sm">
                      Factory Photo
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 lg:left-8 bg-[var(--bg)] rounded-xl shadow-lg p-4 border border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--primary)]">
                      {t("heroBadgeYears")}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {t("heroBadgeYearsLabel")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: t("statsExperience"), value: "40+" },
              { label: t("statsEquipment"), value: "20+" },
              { label: t("statsCustomers"), value: "500+" },
              { label: t("statsProducts"), value: "1000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl lg:text-4xl font-bold text-[var(--accent)] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              {t("servicesTitle")}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t("servicesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className="group p-6 lg:p-8 bg-[var(--surface)] rounded-xl border border-transparent hover:border-[var(--accent)] hover:bg-[var(--bg)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--primary)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
            >
              {t("viewAllServices")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiation / Promise Section */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <p className="text-2xl lg:text-3xl font-bold text-[var(--primary)] leading-relaxed mb-4">
              {t("promiseHookLine1")}
              <span className="text-[var(--accent)]">
                {t("promiseHookHighlight")}
              </span>
              <br className="hidden sm:block" />
              {t("promiseHookLine2")}
              <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">
                {t("promiseHookCallText")}
              </span>
            </p>
            <p className="text-[var(--text-secondary)]">
              {t("promiseSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              { icon: Diamond, title: t("promise1Title"), description: t("promise1Desc") },
              { icon: Layers, title: t("promise2Title"), description: t("promise2Desc") },
              { icon: Clock, title: t("promise3Title"), description: t("promise3Desc") },
            ].map((promise, idx) => (
              <div
                key={idx}
                className="p-6 lg:p-8 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <promise.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--primary)] mb-2">
                  {promise.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              {t("promiseCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--bg)] mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--accent)]/90 transition-colors"
            >
              {t("ctaContact")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--bg)]/20 text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--bg)]/10 transition-colors"
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
