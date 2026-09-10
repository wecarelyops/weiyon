"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import {
  getCookieConsent,
  subscribeCookieConsent,
} from "@/components/cookie-consent";

const GA_MEASUREMENT_ID = "G-H5S5K1EWGK";
const getServerSnapshot = () => "unknown" as const;

/**
 * GA4 載入器 — GDPR 合規版
 *
 * 行為：
 * - 預設不載入任何 GA 腳本（無 cookies、無 tracking）
 * - 使用者在 CookieConsent banner 點「接受」後才注入 GA4 script tag
 * - 點「拒絕」永久不載入（直到 reopen banner 重新選）
 * - 設定 anonymize_ip + disable advertising features 進一步降低資料量
 */
export default function GoogleAnalytics() {
  // 與 CookieConsent 共用同一個 localStorage 來源；SSR 快照為 "unknown" → 不載入 GA
  const consent = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsent,
    getServerSnapshot
  );

  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
