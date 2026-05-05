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
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Workflow" });
  return {
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
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6">
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="border-l-2 border-[var(--accent)] pl-4">
                        <div className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] mb-1">
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
