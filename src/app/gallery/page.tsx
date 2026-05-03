import { Metadata } from "next";
import Link from "next/link";
import { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "實績展示 | 偉勇工業社",
  description: "偉勇工業社多年來的精密加工成果，展示半導體設備、航太零件、汽車配件等各類型產品案例",
};

const works = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  image: `/images/works/${String(i + 1).padStart(2, "0")}.jpg`,
}));

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-10 lg:py-12 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-2">
              實績展示
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
              const rowGroup = Math.floor(i / 6); // 0-based 列群（0,1,2...）
              const posInRow = i % 6; // 該列群中的位置（0-5）
              // 偶數列群（0,2,4...）→ 從 col 2 開始（第 1 格空）
              // 奇數列群（1,3,5...）→ 從 col 1 開始（第 7 格空）
              const colStart = rowGroup % 2 === 0 ? posInRow + 2 : posInRow + 1;
              return (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="aspect-[279/186] bg-cover bg-center md:col-start-[var(--col-start)] block hover:opacity-80 transition-opacity"
                  style={{
                    backgroundImage: `url(${work.image})`,
                    "--col-start": colStart,
                  } as CSSProperties}
                  aria-label={`查看實績 ${work.id} 詳細`}
                />
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
