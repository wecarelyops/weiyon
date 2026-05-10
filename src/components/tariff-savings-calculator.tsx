"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";

// 美國對中國精密機械零件 / 對台灣的關稅差距
// 數據來源：USTR US-Taiwan Reciprocal Trade Agreement Fact Sheet（2026/2）
const CHINA_TARIFF_RATE = 0.32; // 32%
const TAIWAN_TARIFF_RATE = 0.10; // 10%
const SAVINGS_RATE = CHINA_TARIFF_RATE - TAIWAN_TARIFF_RATE; // 22%

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

type Currency = "USD" | "EUR" | "TWD";

const CURRENCY_PRESETS: Record<Currency, number[]> = {
  USD: [50_000, 100_000, 250_000, 500_000, 1_000_000],
  EUR: [50_000, 100_000, 250_000, 500_000, 1_000_000],
  TWD: [1_500_000, 3_000_000, 7_500_000, 15_000_000, 30_000_000],
};

const CURRENCY_SYMBOL: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  TWD: "NT$",
};

function formatCurrency(value: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOL[currency];
  if (value >= 1_000_000) {
    return `${symbol}${(value / 1_000_000).toFixed(2)}M`;
  }
  if (value >= 1_000) {
    return `${symbol}${(value / 1_000).toFixed(0)}K`;
  }
  return `${symbol}${value.toLocaleString()}`;
}

export default function TariffSavingsCalculator() {
  const t = useTranslations("ChinaPlusOne");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [annualSpend, setAnnualSpend] = useState<number>(100_000);

  const result = useMemo(() => {
    const chinaTariff = annualSpend * CHINA_TARIFF_RATE;
    const taiwanTariff = annualSpend * TAIWAN_TARIFF_RATE;
    const savings = annualSpend * SAVINGS_RATE;
    return { chinaTariff, taiwanTariff, savings };
  }, [annualSpend]);

  // GA4：當使用者點 CTA 時送一個事件，方便追蹤 calculator → conversion 漏斗
  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "tariff_calculator_cta", {
        currency,
        annual_spend: annualSpend,
        annual_savings: Math.round(result.savings),
      });
    }
  };

  return (
    <div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] overflow-hidden">
      {/* Header */}
      <div className="px-6 lg:px-10 py-6 lg:py-8 bg-gradient-to-br from-[var(--accent)]/10 to-transparent border-b border-[var(--border)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
            <Calculator className="w-6 h-6 text-[var(--accent)]" />
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-2">
              {t("calcLabel")}
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] leading-tight">
              {t("calcTitle")}
            </h3>
            <p className="text-sm lg:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
              {t("calcSubtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="px-6 lg:px-10 py-6 lg:py-8 space-y-6">
        {/* Currency selector */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-3">
            {t("calcCurrencyLabel")}
          </label>
          <div className="inline-flex border border-[var(--border)] rounded-lg overflow-hidden">
            {(["USD", "EUR", "TWD"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCurrency(c);
                  setAnnualSpend(CURRENCY_PRESETS[c][1]);
                }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  currency === c
                    ? "bg-[var(--primary)] text-[var(--bg)]"
                    : "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg)]"
                }`}
                aria-pressed={currency === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Spend input */}
        <div>
          <label
            htmlFor="annualSpend"
            className="block text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-3"
          >
            {t("calcSpendLabel")}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg lg:text-xl font-mono text-[var(--text-muted)]">
              {CURRENCY_SYMBOL[currency]}
            </span>
            <input
              id="annualSpend"
              type="number"
              min={1}
              max={999_999_999}
              value={annualSpend}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (Number.isFinite(v) && v >= 0) setAnnualSpend(v);
              }}
              className="w-full pl-14 pr-4 py-4 text-2xl lg:text-3xl font-mono font-bold text-[var(--primary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] tabular-nums"
              inputMode="numeric"
              aria-describedby="annualSpendHelp"
            />
          </div>
          {/* Preset chips for quick selection */}
          <div className="mt-3 flex flex-wrap gap-2" id="annualSpendHelp">
            {CURRENCY_PRESETS[currency].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAnnualSpend(preset)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  annualSpend === preset
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]"
                }`}
              >
                {formatCurrency(preset, currency)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 lg:px-10 py-6 lg:py-8 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 lg:p-5 rounded-lg bg-red-50/50 border border-red-200">
            <div className="text-xs tracking-[0.2em] uppercase text-red-700 mb-2">
              🇨🇳 {t("calcChinaCost")}
            </div>
            <div className="text-2xl lg:text-3xl font-mono font-bold text-red-700 tabular-nums">
              {formatCurrency(result.chinaTariff, currency)}
            </div>
            <div className="text-xs text-red-600/70 mt-1">
              {t("calcChinaRate")} (32%)
            </div>
          </div>
          <div className="p-4 lg:p-5 rounded-lg bg-green-50/50 border border-green-200">
            <div className="text-xs tracking-[0.2em] uppercase text-green-700 mb-2">
              🇹🇼 {t("calcTaiwanCost")}
            </div>
            <div className="text-2xl lg:text-3xl font-mono font-bold text-green-700 tabular-nums">
              {formatCurrency(result.taiwanTariff, currency)}
            </div>
            <div className="text-xs text-green-600/70 mt-1">
              {t("calcTaiwanRate")} (10%)
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="p-5 lg:p-6 rounded-xl bg-[var(--primary)] text-[var(--bg)]">
          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-[var(--accent)] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] mb-1">
                {t("calcSavingsLabel")}
              </div>
              <div className="text-3xl lg:text-5xl font-mono font-bold tabular-nums leading-none">
                {formatCurrency(result.savings, currency)}
              </div>
              <div className="text-xs lg:text-sm text-gray-300 mt-2">
                {t("calcSavingsNote")}
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-white/10">
            <Link
              href="/contact"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--primary)] font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("calcCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
          {t("calcDisclaimer")}
        </p>
      </div>
    </div>
  );
}
