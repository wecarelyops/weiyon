import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronLeft, Phone } from "lucide-react";
import { processes, getProcessBySlug, type Locale } from "@/data/processes";
import { industries } from "@/data/industries";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const proc of processes) {
      params.push({ locale, slug: proc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const proc = getProcessBySlug(slug);
  if (!proc) return {};
  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as Locale;
  const suffix = lang === "zh" ? "偉勇工業社" : "Weiyon Industry";
  return {
    title: `${proc.title[lang]} | ${suffix}`,
    description: proc.description[lang].slice(0, 160),
  };
}

export default async function ProcessDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProcessDetail");
  const tProducts = await getTranslations("Products");

  const proc = getProcessBySlug(slug);
  if (!proc) notFound();

  const lang = (locale === "zh" ? "zh" : locale === "de" ? "de" : "en") as Locale;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("backToProducts")}
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Tag */}
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
                <span className="block w-10 h-px bg-[var(--accent)]" />
                {proc.inHouse ? t("inHouseTag") : t("partnerNetworkTag")}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6">
                {proc.title[lang]}
              </h1>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {proc.shortDescription[lang]}
              </p>
            </div>

            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border)]">
                <Image
                  src={proc.imageUrl}
                  alt={proc.title[lang]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("overviewLabel")}
          </div>
          <div className="space-y-6 text-xl lg:text-2xl text-[var(--primary)] leading-relaxed font-medium">
            {proc.description[lang]
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        </div>
      </section>

      {/* Equipment / Applications / Materials / Specs (4 columns) */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Equipment */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                01
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {t("equipmentTitle")}
              </h2>
              <ul className="space-y-3">
                {proc.equipment[lang].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                02
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {t("applicationsTitle")}
              </h2>
              <ul className="space-y-3">
                {proc.applications[lang].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                03
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {t("materialsTitle")}
              </h2>
              <ul className="space-y-3">
                {proc.materials[lang].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
                04
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">
                {t("specsTitle")}
              </h2>
              <ul className="space-y-3">
                {proc.specs[lang].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries — 內鏈到適用產業頁 */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("relatedIndustriesLabel")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] mb-12 leading-tight max-w-3xl">
            {t("relatedIndustriesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group p-6 lg:p-8 bg-[var(--bg)] hover:bg-[var(--surface)] transition-colors"
              >
                <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {ind.title[lang]}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
                  {ind.heroSubtitle[lang]}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--accent)] group-hover:gap-3 transition-all">
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other processes */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("otherProcessesLabel")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--primary)] mb-12 leading-tight">
            {t("otherProcessesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            {processes
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group p-6 lg:p-8 bg-[var(--surface)] hover:bg-[var(--bg)] transition-colors"
                >
                  <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {p.title[lang]}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {p.shortDescription[lang]}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[var(--accent)] group-hover:gap-3 transition-all">
                    <span>{t("learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
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
          <p className="text-lg text-gray-400 mb-10">
            {tProducts("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--primary)] font-medium rounded-full hover:bg-[var(--accent)]/90 transition-colors"
            >
              {tProducts("ctaButton")}
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
