"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-H5S5K1EWGK";
const STORAGE_KEY = "weiyon-cookie-consent";
const EVENT_NAME = "weiyon-cookie-consent-changed";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 初次 mount 讀取 localStorage
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    if (stored === "accepted") setLoaded(true);

    // 之後 banner 變更事件來時即時切換
    const onChange = (e: Event) => {
      const choice = (e as CustomEvent<string>).detail;
      setLoaded(choice === "accepted");
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  if (!loaded) return null;

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
