"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";

type SupportedLocale = "zh" | "en" | "de";

const LOCALES: { code: SupportedLocale; label: string }[] = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
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
    <div className="inline-flex items-center gap-1 text-sm">
      <Globe className="w-4 h-4 text-[var(--text-muted)] mr-1" />
      {LOCALES.map((l, idx) => (
        <span key={l.code} className="inline-flex items-center">
          {idx > 0 && <span className="text-[var(--text-muted)] mx-0.5">/</span>}
          <button
            type="button"
            onClick={() => switchTo(l.code)}
            disabled={isPending}
            className={`px-2 py-1 rounded transition-colors ${
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
