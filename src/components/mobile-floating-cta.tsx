"use client";

import { Link, usePathname } from "@/i18n/routing";
import { Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function MobileFloatingCTA() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  // Contact 頁不顯示（使用者已經在裡面了）
  if (pathname === "/contact") return null;

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_click", {
        source: "mobile_floating_cta",
      });
    }
  };

  const handleQuoteClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        source: "mobile_floating_cta",
        target: "quote_form",
      });
    }
  };

  return (
    <>
      {/* 占位元素：避免內容被浮動 CTA 蓋到（同樣 lg:hidden） */}
      <div aria-hidden className="lg:hidden h-16" />

      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[var(--border)] shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-2">
          <a
            href="tel:0423356451"
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2 py-4 text-[var(--primary)] font-medium text-sm border-r border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{t("callNow")}</span>
          </a>
          <Link
            href="/contact"
            onClick={handleQuoteClick}
            className="flex items-center justify-center gap-2 py-4 bg-[var(--primary)] text-white font-medium text-sm hover:bg-[var(--secondary)] transition-colors"
          >
            <span>{t("getQuote")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
