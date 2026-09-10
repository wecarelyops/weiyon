"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";

type SupportedLocale = "zh" | "en" | "de";

// fullName 給 aria-label 用 — 螢幕閱讀器朗讀完整語言名稱而非縮寫
const LOCALES: { code: SupportedLocale; label: string; fullName: string }[] = [
  { code: "zh", label: "中文", fullName: "繁體中文 / Traditional Chinese" },
  { code: "en", label: "EN", fullName: "English" },
  { code: "de", label: "DE", fullName: "Deutsch / German" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: SupportedLocale) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="inline-flex items-center gap-1 text-sm" role="group" aria-label="Language selection">
      <Globe className="w-4 h-4 text-[var(--text-muted)] mr-1" aria-hidden="true" />
      {LOCALES.map((l, idx) => (
        <span key={l.code} className="inline-flex items-center">
          {idx > 0 && <span className="text-[var(--text-muted)] mx-0.5" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => switchTo(l.code)}
            disabled={isPending}
            aria-label={`Switch to ${l.fullName}`}
            aria-current={locale === l.code ? "true" : undefined}
            className={`min-h-11 min-w-11 px-2 rounded transition-colors ${
              locale === l.code
                ? "text-[var(--primary)] font-bold"
                : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
