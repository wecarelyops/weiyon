import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // 比對所有路徑除了：API、_next、_vercel、靜態資源（含副檔名）
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
