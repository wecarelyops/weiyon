"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Cookie, X } from "lucide-react";

type ConsentChoice = "accepted" | "rejected" | "unknown";

const STORAGE_KEY = "weiyon-cookie-consent";
const EVENT_NAME = "weiyon-cookie-consent-changed";

/**
 * 讀取目前 consent 狀態（給其他元件如 GoogleAnalytics 用）
 * SSR 階段回傳 "unknown"，client mount 後才有實值
 */
export function getCookieConsent(): ConsentChoice {
  if (typeof window === "undefined") return "unknown";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "accepted" || stored === "rejected") return stored;
  return "unknown";
}

/**
 * 讓使用者重新打開 banner（例如 footer 的「Cookie 設定」連結）
 */
export function reopenCookieConsent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(
    new CustomEvent(EVENT_NAME, { detail: "unknown" })
  );
}

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [choice, setChoice] = useState<ConsentChoice>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setChoice(getCookieConsent());

    // 聽其他元件觸發的 reopen / 變更事件（footer 點 Cookie 設定）
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentChoice>).detail;
      setChoice(detail);
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const setConsentChoice = (newChoice: "accepted" | "rejected") => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, newChoice);
    setChoice(newChoice);
    window.dispatchEvent(
      new CustomEvent<ConsentChoice>(EVENT_NAME, { detail: newChoice })
    );
  };

  // SSR 期間 / 已決定 → 不顯示 banner
  if (!mounted || choice !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-4 lg:p-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto pointer-events-auto bg-[var(--primary)] text-[var(--bg)] rounded-xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="flex items-start gap-3 lg:gap-4 mb-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--accent)]" />
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="cookie-consent-title"
                className="text-base lg:text-lg font-bold mb-2 leading-tight"
              >
                {t("title")}
              </h2>
              <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                {t("body")}{" "}
                <Link
                  href="/privacy"
                  className="text-[var(--accent)] underline underline-offset-2 hover:no-underline"
                >
                  {t("privacyLink")}
                </Link>
                。
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setConsentChoice("rejected")}
              className="order-2 sm:order-1 px-5 py-2.5 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
            >
              {t("rejectButton")}
            </button>
            <button
              type="button"
              onClick={() => setConsentChoice("accepted")}
              className="order-1 sm:order-2 px-5 py-2.5 text-sm font-medium bg-[var(--accent)] text-[var(--primary)] rounded-lg hover:opacity-90 transition-opacity"
              autoFocus
            >
              {t("acceptButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
