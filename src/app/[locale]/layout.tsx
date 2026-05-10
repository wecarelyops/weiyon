import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/hreflang";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import MobileFloatingCTA from "@/components/mobile-floating-cta";
import LineFloatingButton from "@/components/line-floating-button";
import CookieConsent from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // 防 FOIT — 字型載入前先用 fallback，避免文字隱形
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.weiyon.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isEn = locale === "en";
  // 中文用「偉勇工業社」、en/de 用「Weiyon Industry」（德文不翻品牌名）
  const brandSuffix = locale === "zh" ? "偉勇工業社" : "Weiyon Industry";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s | ${brandSuffix}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "偉勇工業社 / Weiyon Industry" }],
    creator: "偉勇工業社",
    publisher: "偉勇工業社",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: buildAlternates("/", locale),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: isEn ? `${SITE_URL}/en` : SITE_URL,
      siteName: isEn ? "Weiyon Industry" : "偉勇工業社",
      type: "website",
      locale: isEn ? "en_US" : "zh_TW",
      alternateLocale: isEn ? ["zh_TW"] : ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "UCLE6QWwfgpqSJntd8vRPOdthAtaB-a7De8O7Ik6Qzo",
    },
  };
}

// JSON-LD：Organization + LocalBusiness（在地商家結構化資料）
function buildJsonLd(locale: string) {
  const isEn = locale === "en";
  const orgName = isEn ? "Weiyon Industry" : "偉勇工業社";
  const altName = isEn ? "偉勇工業社" : "Weiyon Industry";
  const description = isEn
    ? "A precision metal parts manufacturer in central Taiwan with 40+ years of CNC machining expertise. We specialize in difficult-to-machine materials and one-stop integrated manufacturing for semiconductor, medical, aerospace, automotive, and precision machinery industries."
    : "深耕產業 40 餘年的台灣中部精密金屬零件加工專家，擅長處理難加工材料，提供一站式整合製造服務。服務半導體、醫療、航太、汽車、精密機械等產業。";

  // OG image — 直接指向 Next.js 動態生成的 opengraph-image
  // （file: [locale]/opengraph-image.tsx，URL: /{locale}/opengraph-image）
  const ogImageUrl = `${SITE_URL}/${locale}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${SITE_URL}#organization`,
    name: orgName,
    alternateName: altName,
    url: SITE_URL,
    logo: ogImageUrl,
    image: ogImageUrl,
    description,
    foundingDate: "1986",
    address: {
      "@type": "PostalAddress",
      streetAddress: isEn
        ? "No. 35, Aly. 118, Ln. 332, Sec. 8, Huanzhong Rd."
        : "環中路八段 332 巷 118 弄 35 號",
      addressLocality: isEn ? "Wuri District" : "烏日區",
      addressRegion: isEn ? "Taichung City" : "台中市",
      addressCountry: "TW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.1154,
      longitude: 120.6218,
    },
    telephone: "+886-4-2335-6451",
    email: "agesmyth@gmail.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:30",
    },
    sameAs: [],
    knowsAbout: isEn
      ? [
          "CNC precision machining",
          "CNC milling",
          "CNC turning",
          "Metal parts manufacturing",
          "Stainless steel machining",
          "Titanium alloy machining",
          "Semiconductor equipment parts",
          "Aerospace components",
        ]
      : [
          "CNC 精密加工",
          "CNC 銑削加工",
          "CNC 車削加工",
          "金屬零件製造",
          "不鏽鋼加工",
          "鈦合金加工",
          "半導體設備零件",
          "航太零件",
        ],
    areaServed: [
      { "@type": "Country", name: "Taiwan" },
      { "@type": "Place", name: "Worldwide" },
    ],
    inLanguage: ["zh-TW", "en"],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const jsonLd = buildJsonLd(locale);

  const htmlLang =
    locale === "zh" ? "zh-TW" : locale === "de" ? "de" : "en";

  return (
    <html lang={htmlLang}>
      <head>
        {/* JSON-LD 結構化資料：協助 Google 識別組織與在地商家資訊 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileFloatingCTA />
          <LineFloatingButton />
          <CookieConsent />
        </NextIntlClientProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
