import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_WORKS = 32;

export async function generateStaticParams() {
  return Array.from({ length: TOTAL_WORKS }, (_, i) => ({
    id: String(i + 1),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `實績 #${id} | 偉勇工業社`,
    description: `偉勇工業社 CNC 精密加工實績 #${id}`,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idNum = parseInt(id, 10);

  if (isNaN(idNum) || idNum < 1 || idNum > TOTAL_WORKS) {
    notFound();
  }

  const padded = String(idNum).padStart(2, "0");
  const imageUrl = `/images/works/${padded}.jpg`;

  // 循環：第 1 張的上一張是第 32，第 32 的下一張是第 1
  const prevId = idNum === 1 ? TOTAL_WORKS : idNum - 1;
  const nextId = idNum === TOTAL_WORKS ? 1 : idNum + 1;

  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* INDEX 回實績列表 */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            <span className="block w-10 h-px bg-current group-hover:w-14 transition-all" />
            INDEX
          </Link>
        </div>

        {/* 圖片 + 左右箭頭 */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {/* 上一張 */}
          <Link
            href={`/works/${prevId}`}
            aria-label={`上一張（${prevId}）`}
            className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors p-2"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14" strokeWidth={1.2} />
          </Link>

          {/* 主圖 */}
          <div
            className="flex-1 max-w-4xl aspect-[3/2] bg-[var(--surface)]"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label={`偉勇工業社加工實績 ${idNum}`}
          />

          {/* 下一張 */}
          <Link
            href={`/works/${nextId}`}
            aria-label={`下一張（${nextId}）`}
            className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors p-2"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14" strokeWidth={1.2} />
          </Link>
        </div>

        {/* 編號（之後可改為實際品名） */}
        <div className="mt-8 lg:mt-12 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            #{padded} / {TOTAL_WORKS}
          </p>
        </div>
      </div>
    </section>
  );
}
