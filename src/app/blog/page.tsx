import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "部落格 | 偉勇工業社",
  description: "閱讀偉勇工業社的最新消息、產業趨勢分享、技術文章與公司動態",
};

const posts = [
  {
    id: 1,
    title: "CNC加工技術在航太產業的應用與展望",
    excerpt: "隨著航太產業對零件精度要求日益提升，CNC精密加工技術成為關鍵製造能力。本文探討航太零件加工的技術挑戰與解決方案。",
    category: "技術分享",
    date: "2026-04-15",
    image: "article-01",
  },
  {
    id: 2,
    title: "半導體設備零件的表面處理技術",
    excerpt: "半導體設備零件需要優異的耐磨耗與耐腐蝕性能，表面處理技術的選擇至關重要。本文介紹幾種常用的表面處理方法。",
    category: "技術分享",
    date: "2026-03-28",
    image: "article-02",
  },
  {
    id: 3,
    title: "偉勇工業社引進新一代CNC加工中心",
    excerpt: "為提升產能與加工精度，偉勇工業社最新引進五軸CNC加工中心，將為客戶提供更高品質的精密零件加工服務。",
    category: "公司動態",
    date: "2026-03-10",
    image: "article-03",
  },
  {
    id: 4,
    title: "金屬材料知識：鋁合金與鈦合金的特性比較",
    excerpt: "鋁合金與鈦合金是工業製造中最常用的兩種金屬材料，本文分析兩者的特性差異及各自適合的應用場景。",
    category: "知識庫",
    date: "2026-02-20",
    image: "article-04",
  },
  {
    id: 5,
    title: "工業4.0時代下的智慧製造趨勢",
    excerpt: "工業4.0席捲全球製造業，智慧工廠成為發展趨勢。本文探討傳統金屬加工業如何因應這波數位轉型浪潮。",
    category: "產業趨勢",
    date: "2026-02-05",
    image: "article-05",
  },
  {
    id: 6,
    title: "精密加工的品質管控：從原料到出貨",
    excerpt: "品質是企業的生命線。本文分享偉勇工業社40年來累積的品質管控經驗，介紹我們如何確保每個零件都符合客戶標準。",
    category: "技術分享",
    date: "2026-01-18",
    image: "article-06",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              部落格
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              最新消息、產業趨勢、技術文章與公司動態
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {["全部", "技術分享", "公司動態", "知識庫", "產業趨勢"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  category === "全部"
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer"
              >
                {/* Featured Image */}
                <div className="aspect-video rounded-xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[var(--text-muted)] text-sm">文章圖片</span>
                  </div>
                  <div className="absolute inset-0 bg-[var(--primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">閱讀更多</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  <span>閱讀更多</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--primary)] text-white font-medium">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--border)]">
              ...
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-4">
              訂閱最新消息
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              留下您的Email，接收產業資訊與技術分享
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="輸入您的Email"
                className="flex-1 px-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
              >
                訂閱
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
