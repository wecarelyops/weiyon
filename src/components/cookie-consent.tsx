"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Cookie } from "lucide-react";

// "ssr" 只出現在伺服器快照與 hydration 第一幀，用來避免 banner 在 SSR HTML 中閃現
type ConsentChoice = "accepted" | "rejected" | "unknown";
type ConsentSnapshot = ConsentChoice | "ssr";

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
 * 訂閱 consent 變化（同分頁的自訂事件 + 其他分頁的 storage 事件）。
 * 搭配 useSyncExternalStore 使用，避免在 effect 裡 setState。
 */
export function subscribeCookieConsent(callback: () => void): () => void {
  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

const getServerSnapshot = (): ConsentSnapshot => "ssr";

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
  // 從 localStorage 讀 consent；SSR 與 hydration 第一幀拿到 "ssr"，之後才是真實值
  const choice = useSyncExternalStore<ConsentSnapshot>(
    subscribeCookieConsent,
    getCookieConsent,
    getServerSnapshot
  );

  const setConsentChoice = (newChoice: "accepted" | "rejected") => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, newChoice);
    // 觸發事件 → useSyncExternalStore 重新讀取（本元件與 GoogleAnalytics 都會更新）
    window.dispatchEvent(
      new CustomEvent<ConsentChoice>(EVENT_NAME, { detail: newChoice })
    );
  };

  // SSR 期間 / 已決定 → 不顯示 banner
  if (choice !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-0 left-0 right-0 z-[60] p-2 sm:p-4 lg:p-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto pointer-events-auto bg-[var(--primary)] text-[var(--bg)] rounded-xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="p-3 sm:p-5 lg:p-6">
          <div className="flex items-start gap-3 lg:gap-4 mb-3 sm:mb-4">
            {/* 手機版省掉圖示，把高度留給內容 */}
            <div className="hidden sm:flex w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[var(--accent)]/15 items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--accent)]" />
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="cookie-consent-title"
                className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 leading-tight"
              >
                {t("title")}
              </h2>
              <p className="text-[11px] sm:text-xs lg:text-sm text-gray-300 leading-snug sm:leading-relaxed">
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

          {/* 手機版兩顆按鈕並排（各佔一半），不再上下堆疊吃掉高度 */}
          <div className="flex flex-row gap-2 sm:gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setConsentChoice("rejected")}
              className="flex-1 sm:flex-none min-h-11 px-4 sm:px-5 py-2.5 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
            >
              {t("rejectButton")}
            </button>
            <button
              type="button"
              onClick={() => setConsentChoice("accepted")}
              className="flex-1 sm:flex-none min-h-11 px-4 sm:px-5 py-2.5 text-sm font-medium bg-[var(--accent)] text-[var(--primary)] rounded-lg hover:opacity-90 transition-opacity"
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
