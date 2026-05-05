import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { faqData } from "@/data/faq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Faq" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Faq");

  const data = faqData[locale === "zh" ? "zh" : "en"];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] whitespace-pre-line">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {data.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-4 pb-3 border-b-2 border-[var(--accent)]">
                {category.title}
              </h2>
              <div className="divide-y divide-[var(--border)]">
                {category.items.map((item, idx) => (
                  <details
                    key={idx}
                    className="group py-4 [&::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-start justify-between cursor-pointer list-none gap-4 hover:text-[var(--accent)] transition-colors">
                      <span className="font-medium text-[var(--primary)] flex-1 group-hover:text-[var(--accent)] transition-colors">
                        <span className="text-[var(--accent)] mr-2">Q.</span>
                        {item.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 pl-7 text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                      <span className="text-[var(--text-muted)] font-medium mr-2">
                        A.
                      </span>
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t("ctaButtonForm")}
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-[var(--bg)] transition-colors"
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
