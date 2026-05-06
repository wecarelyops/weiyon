import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { CSSProperties } from "react";

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
  };
}

const works = Array.from({ length: 32 }, (_, i) => ({
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
              return (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="relative aspect-[279/186] md:col-start-[var(--col-start)] block hover:opacity-80 transition-opacity overflow-hidden"
                  style={{ "--col-start": colStart } as CSSProperties}
                  aria-label={`查看實績 ${work.id} 詳細`}
                >
                  <Image
                    src={work.image}
                    alt={`實績 ${work.id}`}
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
