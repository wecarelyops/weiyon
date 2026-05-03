import { Metadata } from "next";

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

      {/* Works Grid */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {works.map((work) => (
              <div
                key={work.id}
                className="w-[279px] h-[186px] overflow-hidden"
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={`偉勇工業社加工實績 ${work.id}`}
              />
            ))}
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
