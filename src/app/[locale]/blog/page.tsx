import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

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

  const lang = locale === "zh" ? "zh" : locale === "de" ? "de" : "en";

  // 從 blogPosts 撈取唯一的 categories（依語系）
  const uniqueCategories = Array.from(
    new Set(blogPosts.map((p) => p.category[lang]))
  );
  const categories = [t("catAll"), ...uniqueCategories];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            Blog
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[var(--primary)] tracking-tight leading-[1.05] mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  idx === 0
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--bg)] text-[var(--text-secondary)] hover:bg-[var(--border)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div
                  className="aspect-video rounded-xl border border-[var(--border)] overflow-hidden mb-4 relative bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.imageUrl}')` }}
                  role="img"
                  aria-label={post.title[lang]}
                >
                  <div className="absolute inset-0 bg-[var(--primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">
                      {t("readMore")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full">
                    {post.category[lang]}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {post.title[lang]}
                </h2>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {post.excerpt[lang]}
                </p>

                <div className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
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
