import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { CSSProperties } from "react";
import { buildAlternates } from "@/lib/hreflang";
import WorkVideoGrid from "@/components/work-video-grid";
import { WORK_COUNT } from "@/data/works";
import { workAlt } from "@/data/works-alt";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Gallery" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/gallery", locale),
  };
}

const works = Array.from({ length: WORK_COUNT }, (_, i) => ({
  id: i + 1,
  image: `/images/works/${String(i + 1).padStart(2, "0")}.jpg`,
}));

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Gallery");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-10 lg:py-14 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--primary)]">
              {t("heroTitle")}
            </h1>
          </div>
        </div>
      </section>

      {/* Works Grid — staggered 6-per-row in a 7-column frame
          奇數列：第 1 格空，第 2-7 格填滿
          偶數列：第 1-6 格填滿，第 7 格空 */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-0">
            {works.map((work, i) => {
              const rowGroup = Math.floor(i / 6);
              const posInRow = i % 6;
              const colStart =
                rowGroup % 2 === 0 ? posInRow + 2 : posInRow + 1;
              // 依 locale 出描述性 alt（每張圖實際內容），利於 Google 圖片搜尋與無障礙
              const workLabel = workAlt(work.id, locale);
              const ariaLabel =
                locale === "zh"
                  ? `查看實績 ${work.id} 詳細`
                  : locale === "de"
                  ? `Details zu Referenz ${work.id} ansehen`
                  : `View work ${work.id} details`;
              return (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="relative aspect-[279/186] md:col-start-[var(--col-start)] block hover:opacity-80 transition-opacity overflow-hidden"
                  style={{ "--col-start": colStart } as CSSProperties}
                  aria-label={ariaLabel}
                >
                  <Image
                    src={work.image}
                    alt={workLabel}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                    loading={i < 12 ? "eager" : "lazy"}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 加工實況影片 — 自架 MP4，click-to-play（preload=none，不影響載入速度）*/}
      <section className="py-12 lg:py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)]">
              {t("videoTitle")}
            </h2>
            <p className="mt-3 text-sm lg:text-base text-[var(--text-secondary)]">
              {t("videoSubtitle")}
            </p>
          </div>
          <WorkVideoGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-8 lg:py-10 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            更多作品歡迎來電或來信詢問
          </p>
        </div>
      </section>
    </>
  );
}
