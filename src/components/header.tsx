"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const t = useTranslations("Nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("products"), href: "/products" },
    { name: t("chinaPlusOne"), href: "/china-plus-one" },
    { name: t("workflow"), href: "/workflow" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("blog"), href: "/blog" },
    { name: t("faq"), href: "/faq" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
              <span className="text-[var(--accent)] font-bold text-lg">W</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-[var(--primary)]">
                偉勇工業社
              </span>
              <span className="block text-xs text-[var(--text-secondary)]">
                Weiyon Industry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side: phone + language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0423356451"
              className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t("phone")}
            </a>
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="px-4 py-2 bg-[var(--primary)] text-[var(--bg)] text-sm font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors duration-200"
            >
              {t("getQuote")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[32rem] pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
            {/* 電話 + 語言切換 — 移到頂部，方便快速操作 */}
            <div className="flex items-center justify-between gap-4 pb-4 mb-2 border-b border-[var(--border)] px-2">
              <a
                href="tel:0423356451"
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]"
              >
                <Phone className="w-4 h-4" />
                {t("phone")}
              </a>
              <LanguageSwitcher />
            </div>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--surface)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
