import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  Home,
  Briefcase,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

// Locale-aware 404 — next-intl 會根據 URL 前綴自動載入正確語系
// 訪客打錯網址或點老連結（例如已下架的 /china-plus-one）會看到這頁
export default async function NotFoundPage() {
  // 注意：not-found.tsx 在 Next.js 16 中不能直接接 params，
  // 但 next-intl 會從 cookie / URL 推斷 locale，getTranslations 仍能拿到對應語系
  const t = await getTranslations("NotFound");
  const tNav = await getTranslations("Nav");

  // 建議導引：4 個最常被訪客找的頁面
  const suggestions = [
    {
      icon: Home,
      label: tNav("home"),
      href: "/" as const,
      desc: t("homeDesc"),
    },
    {
      icon: Briefcase,
      label: tNav("products"),
      href: "/products" as const,
      desc: t("productsDesc"),
    },
    {
      icon: ShieldCheck,
      label: tNav("compliance"),
      href: "/compliance" as const,
      desc: t("complianceDesc"),
    },
    {
      icon: MessageCircle,
      label: tNav("contact"),
      href: "/contact" as const,
      desc: t("contactDesc"),
    },
  ];

  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 bg-[var(--bg)] min-h-[calc(100vh-200px)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Big 404 visual */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--accent-text)] mb-4">
          <span className="block w-10 h-px bg-[var(--accent)]" />
          {t("label")}
        </div>

        <div className="flex items-end gap-4 lg:gap-6 mb-8">
          <span
            aria-hidden="true"
            className="text-[6rem] sm:text-[8rem] lg:text-[12rem] font-bold text-[var(--accent)] leading-none tracking-tight"
          >
            404
          </span>
          <div className="pb-3 lg:pb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary)] leading-tight">
              {t("title")}
            </h1>
          </div>
        </div>

        <p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10 lg:mb-14">
          {t("subtitle")}
        </p>

        {/* Helpful navigation */}
        <div className="mb-10">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-4">
            {t("suggestionsTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {suggestions.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-start gap-3 p-4 lg:p-5 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 font-bold text-[var(--primary)] text-base lg:text-lg leading-tight">
                      {s.label}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Direct help */}
        <div className="pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-secondary)]">
            {t("directHelp")}{" "}
            <a
              href="tel:0423356451"
              className="font-medium text-[var(--accent)] underline underline-offset-2 hover:no-underline"
            >
              04-23356451
            </a>
            {" · "}
            <a
              href="mailto:sales@weiyon.com"
              className="font-medium text-[var(--accent)] underline underline-offset-2 hover:no-underline"
            >
              sales@weiyon.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
