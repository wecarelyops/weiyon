"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "首頁", href: "/" },
  { name: "關於我們", href: "/about" },
  { name: "加工品目", href: "/products" },
  { name: "實績展示", href: "/gallery" },
  { name: "部落格", href: "/blog" },
  { name: "常見問題", href: "/faq" },
  { name: "聯絡我們", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <span className="font-bold text-lg text-[var(--primary)]">偉勇工業社</span>
              <span className="block text-xs text-[var(--text-secondary)]">Weiyon Industry</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0423356451"
              className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              04-23356451
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 bg-[var(--primary)] text-[var(--bg)] text-sm font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors duration-200"
            >
              取得報價
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border)]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-2 py-3 text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--surface)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)] mt-2">
              <a
                href="tel:0423356451"
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]"
              >
                <Phone className="w-4 h-4" />
                04-23356451
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
