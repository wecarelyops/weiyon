import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["zh", "en", "de"],
  defaultLocale: "zh",
  // Chinese 不加前綴（網址 /），英文加 /en/ 前綴，德文加 /de/ 前綴
  localePrefix: "as-needed",
  // 關掉瀏覽器自動偵測：避免「中文網址被 Accept-Language: en 蓋掉」的 bug
  // 使用者要切換語言一律透過右上 LanguageSwitcher，cookie 會保存選擇
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
