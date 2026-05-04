"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: "zh" | "en") => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="inline-flex items-center gap-1 text-sm">
      <Globe className="w-4 h-4 text-[var(--text-muted)] mr-1" />
      <button
        type="button"
        onClick={() => switchTo("zh")}
        disabled={isPending}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "zh"
            ? "text-[var(--primary)] font-bold"
            : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
        }`}
      >
        中文
      </button>
      <span className="text-[var(--text-muted)]">/</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={isPending}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-[var(--primary)] font-bold"
            : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
