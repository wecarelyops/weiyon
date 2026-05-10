"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { reopenCookieConsent } from "./cookie-consent";

/**
 * Footer 底部法律連結列 — Privacy / Imprint + Cookie 設定按鈕
 * 抽成獨立 client component 是因為 Cookie 設定按鈕需要 onClick 重開 banner
 * （Footer 本身仍是 server component）
 */
export default function FooterLegalLinks() {
  const t = useTranslations("Footer");

  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
      <li>
        <Link
          href="/privacy"
          className="hover:text-[var(--accent)] transition-colors"
        >
          {t("privacy")}
        </Link>
      </li>
      <li aria-hidden="true">·</li>
      <li>
        <Link
          href="/imprint"
          className="hover:text-[var(--accent)] transition-colors"
        >
          {t("imprint")}
        </Link>
      </li>
      <li aria-hidden="true">·</li>
      <li>
        <button
          type="button"
          onClick={reopenCookieConsent}
          className="hover:text-[var(--accent)] transition-colors"
        >
          {t("cookieSettings")}
        </button>
      </li>
    </ul>
  );
}
