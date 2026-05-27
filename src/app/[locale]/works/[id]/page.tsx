import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { routing } from "@/i18n/routing";
import Breadcrumbs from "@/components/breadcrumbs";
import { buildAlternates } from "@/lib/hreflang";
import { workAlt } from "@/data/works-alt";

const TOTAL_WORKS = 39;

export async function generateStaticParams() {
  const params: { locale: string; id: string }[] = [];
  for (const locale of routing.locales) {
    for (let i = 1; i <= TOTAL_WORKS; i++) {
      params.push({ locale, id: String(i) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "Works" });
  return {
    title: t("detailTitle", { id }),
    description: t("detailDescription", { id }),
    alternates: buildAlternates(`/works/${id}`, locale),
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Works");
  const tNav = await getTranslations("Nav");

  const idNum = parseInt(id, 10);
  if (isNaN(idNum) || idNum < 1 || idNum > TOTAL_WORKS) {
    notFound();
  }

  const padded = String(idNum).padStart(2, "0");
  const imageUrl = `/images/works/${padded}.jpg`;

  const prevId = idNum === 1 ? TOTAL_WORKS : idNum - 1;
  const nextId = idNum === TOTAL_WORKS ? 1 : idNum + 1;

  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: tNav("home"), href: "/" },
            { label: tNav("gallery"), href: "/gallery" },
            { label: `#${padded}` },
          ]}
        />

        {/* INDEX 回實績列表 */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            <span className="block w-10 h-px bg-current group-hover:w-14 transition-all" />
            {t("indexLabel")}
          </Link>
        </div>

        {/* 圖片 + 左右箭頭 */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          <Link
            href={`/works/${prevId}`}
            aria-label={t("prevAriaLabel", { id: String(prevId) })}
            className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors p-2"
          >
            <ChevronLeft
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
              strokeWidth={1.2}
            />
          </Link>

          <div className="relative flex-1 max-w-4xl aspect-[3/2] bg-[var(--surface)]">
            <Image
              src={imageUrl}
              alt={workAlt(idNum, locale)}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 70vw, 1024px"
              className="object-contain"
              priority
            />
          </div>

          <Link
            href={`/works/${nextId}`}
            aria-label={t("nextAriaLabel", { id: String(nextId) })}
            className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors p-2"
          >
            <ChevronRight
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
              strokeWidth={1.2}
            />
          </Link>
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            #{padded} / {TOTAL_WORKS}
          </p>
        </div>
      </div>
    </section>
  );
}
