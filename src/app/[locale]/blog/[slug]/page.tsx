import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Calendar, ChevronLeft, ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const lang = locale === "zh" ? "zh" : locale === "de" ? "de" : "en";
  return {
    title: post.title[lang],
    description: post.excerpt[lang],
    openGraph: {
      title: post.title[lang],
      description: post.excerpt[lang],
      type: "article",
      publishedTime: post.date,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("BlogDetail");

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const lang = locale === "zh" ? "zh" : locale === "de" ? "de" : "en";

  // Related posts: 3 random others
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("backToBlog")}
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full">
              {post.category[lang]}
            </span>
            <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <Calendar className="w-3 h-3" />
              {post.date}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.15] mb-6">
            {post.title[lang]}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {post.excerpt[lang]}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[var(--border)]">
            <Image
              src={post.imageUrl}
              alt={post.title[lang]}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <article
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.content[lang] }}
          />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-6">
            <span className="block w-10 h-px bg-[var(--accent)]" />
            {t("relatedLabel")}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-12">
            {t("relatedTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-[var(--surface)] hover:bg-[var(--bg)] transition-colors p-6 lg:p-8 flex flex-col"
              >
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-[var(--border)] mb-4">
                  <Image
                    src={p.imageUrl}
                    alt={p.title[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs text-[var(--accent)] mb-2">
                  {p.category[lang]}
                </span>
                <h3 className="text-lg font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {p.title[lang]}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {p.excerpt[lang]}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--accent)] group-hover:gap-3 transition-all">
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
