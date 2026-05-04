import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Calendar, ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");

  // Pexels stock photos（已授權商業使用，依文章主題挑選）
  const postImages = [
    "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    "https://images.pexels.com/photos/12951626/pexels-photo-12951626.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    "https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    "https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    "https://images.pexels.com/photos/32845674/pexels-photo-32845674.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    "https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  ];

  const posts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: t(`post${i + 1}Title`),
    excerpt: t(`post${i + 1}Excerpt`),
    category: t(`post${i + 1}Category`),
    date: t(`post${i + 1}Date`),
    image: postImages[i],
  }));

  const categories = [
    t("catAll"),
    t("catTech"),
    t("catCompany"),
    t("catKnowledge"),
    t("catTrends"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  idx === 0
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
              <article key={post.id} className="group cursor-pointer">
                <div
                  className="aspect-video rounded-xl border border-[var(--border)] overflow-hidden mb-4 relative bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                  role="img"
                  aria-label={post.title}
                >
                  <div className="absolute inset-0 bg-[var(--primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">
                      {t("readMore")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>

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
              {t("newsletterTitle")}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              {t("newsletterSubtitle")}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("newsletterPlaceholder")}
                className="flex-1 px-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
              >
                {t("newsletterButton")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
