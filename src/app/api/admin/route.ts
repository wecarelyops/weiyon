import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { safeErrMsg } from "@/lib/contact-server";

// 詢價管理後台 — Basic Auth 保護的內部頁面
// 訪問：https://www.weiyon.com/api/admin
// 需在 Vercel 設 ADMIN_USER + ADMIN_PASSWORD 兩個環境變數才會啟用
//
// 用 route handler 回傳 HTML（而非 page.tsx）是因為本站只有 [locale]/layout，
// 非 localized 路由會撞 root-layout 問題；route handler 自包覆、最乾淨。

export const dynamic = "force-dynamic";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Weiyon Admin", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

function checkAuth(request: Request): boolean {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  // 未設定帳密 → 一律拒絕（secure by default）
  if (!user || !pass) return false;
  const header = request.headers.get("authorization") || "";
  if (!header.startsWith("Basic ")) return false;
  let decoded = "";
  try {
    decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
  } catch {
    return false;
  }
  const idx = decoded.indexOf(":");
  if (idx < 0) return false;
  const u = decoded.slice(0, idx);
  const p = decoded.slice(idx + 1);
  return u === user && p === pass;
}

function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// 先 escape，再把 https:// 連結轉成可點的 anchor（URL 來源是我方 Supabase 簽名網址，安全）
function linkify(escaped: string): string {
  return escaped.replace(
    /(https:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

function fmtDate(iso: string): string {
  try {
    const d = new Date(iso);
    // 轉台灣時間顯示
    return d.toLocaleString("zh-TW", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return esc(iso);
  }
}

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
};

function renderHtml(rows: Submission[]): string {
  const count = rows.length;
  const latest = rows[0]?.created_at ? fmtDate(rows[0].created_at) : "—";

  const tableRows = rows
    .map((r) => {
      const msg = linkify(esc(r.message)).replace(/\n/g, "<br>");
      return `<tr>
        <td class="nowrap muted">${fmtDate(r.created_at)}</td>
        <td><strong>${esc(r.name)}</strong></td>
        <td><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></td>
        <td class="nowrap">${esc(r.phone) || "—"}</td>
        <td>${esc(r.subject) || "—"}</td>
        <td class="msg">${msg}</td>
      </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>偉勇詢價後台</title>
<style>
  :root { --gold:#b8860b; --ink:#1a1a1a; --muted:#888; --border:#e5e5e5; --bg:#fafafa; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif; color: var(--ink); margin: 0; background: var(--bg); }
  header { background: var(--ink); color: #fff; padding: 16px 24px; position: sticky; top: 0; z-index: 10; }
  header h1 { margin: 0; font-size: 18px; }
  header .meta { font-size: 13px; color: #bbb; margin-top: 4px; }
  header .gold { color: var(--gold); }
  .wrap { padding: 16px; overflow-x: auto; }
  table { border-collapse: collapse; width: 100%; background: #fff; font-size: 14px; min-width: 760px; }
  th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }
  th { background: #f0f0f0; font-size: 12px; letter-spacing: .05em; text-transform: uppercase; color: #555; position: sticky; top: 0; }
  tr:hover td { background: #fcfaf5; }
  .nowrap { white-space: nowrap; }
  .muted { color: var(--muted); font-size: 12px; }
  .msg { max-width: 480px; word-break: break-word; line-height: 1.5; }
  .msg a { color: var(--gold); }
  a { color: #1a73e8; }
  .empty { padding: 40px; text-align: center; color: var(--muted); }
</style>
</head>
<body>
<header>
  <h1><span class="gold">偉勇工業社</span> · 詢價後台</h1>
  <div class="meta">共 ${count} 筆（最新 200 筆）· 最近一筆：${latest} · 全部時間為台灣時區</div>
</header>
<div class="wrap">
${
  count === 0
    ? '<div class="empty">目前尚無詢價資料</div>'
    : `<table>
  <thead><tr>
    <th>時間</th><th>姓名</th><th>Email</th><th>電話</th><th>主題</th><th>訊息 / 採購資訊 / 附件</th>
  </tr></thead>
  <tbody>${tableRows}</tbody>
</table>`
}
</div>
</body>
</html>`;
}

export async function GET(request: Request) {
  if (!checkAuth(request)) return unauthorized();

  if (!supabaseAdmin) {
    return new NextResponse("Database not configured", {
      status: 503,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  const { data, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    console.error("admin query:", safeErrMsg(error));
    return new NextResponse("Query error", {
      status: 500,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  return new NextResponse(renderHtml((data as Submission[]) || []), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
