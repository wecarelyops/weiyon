import { Metadata } from "next";

export const metadata: Metadata = {
  title: "實績展示 | 偉勇工業社",
  description: "偉勇工業社多年來的精密加工成果，展示半導體設備、航太零件、汽車配件等各類型產品案例",
};

const works = [
  { id: 1, image: "/images/works/01.jpg", year: "2026" },
  { id: 2, image: "/images/works/02.jpg", year: "2026" },
  { id: 3, image: "/images/works/03.jpg", year: "2025" },
  { id: 4, image: "/images/works/04.jpg", year: "2025" },
  { id: 5, image: "/images/works/05.jpg", year: "2025" },
  { id: 6, image: "/images/works/06.jpg", year: "2025" },
  { id: 7, image: "/images/works/07.jpg", year: "2025" },
  { id: 8, image: "/images/works/08.jpg", year: "2025" },
  { id: 9, image: "/images/works/09.jpg", year: "2024" },
  { id: 10, image: "/images/works/10.jpg", year: "2024" },
  { id: 11, image: "/images/works/11.jpg", year: "2024" },
  { id: 12, image: "/images/works/12.jpg", year: "2024" },
  { id: 13, image: "/images/works/13.jpg", year: "2024" },
  { id: 14, image: "/images/works/14.jpg", year: "2023" },
  { id: 15, image: "/images/works/15.jpg", year: "2023" },
  { id: 16, image: "/images/works/16.jpg", year: "2023" },
  { id: 17, image: "/images/works/17.jpg", year: "2023" },
  { id: 18, image: "/images/works/18.jpg", year: "2022" },
  { id: 19, image: "/images/works/19.jpg", year: "2022" },
  { id: 20, image: "/images/works/20.jpg", year: "2022" },
  { id: 21, image: "/images/works/21.jpg", year: "2021" },
  { id: 22, image: "/images/works/22.jpg", year: "2021" },
  { id: 23, image: "/images/works/23.jpg", year: "2021" },
  { id: 24, image: "/images/works/24.jpg", year: "2020" },
  { id: 25, image: "/images/works/25.jpg", year: "2020" },
  { id: 26, image: "/images/works/26.jpg", year: "2020" },
  { id: 27, image: "/images/works/27.jpg", year: "2020" },
  { id: 28, image: "/images/works/28.jpg", year: "2019" },
  { id: 29, image: "/images/works/29.jpg", year: "2019" },
  { id: 30, image: "/images/works/30.jpg", year: "2019" },
  { id: 31, image: "/images/works/31.jpg", year: "2018" },
  { id: 32, image: "/images/works/32.jpg", year: "2018" },
];

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
              <a
                key={work.id}
                href="#"
                className="group block"
              >
                <div
                  className="w-[279px] h-[186px] bg-[var(--surface)] border border-[var(--border)] overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${work.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">查看詳情</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <span className="text-white text-xs">{work.year}</span>
                  </div>
                </div>
              </a>
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
