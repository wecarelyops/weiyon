import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// Keep-alive — 由 Vercel Cron 每天呼叫一次，對 Supabase 做一筆極輕量查詢，
// 避免免費方案因「閒置 ~7 天」自動暫停（暫停 = contact form 直接壞、漏接詢價）。
//
// 安全性：若有設 CRON_SECRET env，驗證 Vercel cron 帶的 Authorization header；
// 沒設也能運作（此端點只做無害 read、不回傳資料），但建議設一個。
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ ok: false, reason: "no client" }, { status: 503 });
  }

  try {
    // 極輕量查詢：HEAD count，不撈實際資料；用 service client 避開 RLS，
    // 目的只是讓專案「有活動」以免被免費方案暫停
    const { error } = await supabaseAdmin
      .from("contact_submissions")
      .select("id", { head: true, count: "exact" })
      .limit(1);

    if (error) {
      return NextResponse.json(
        { ok: false, reason: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, ts: new Date().toISOString() });
  } catch (e) {
    return NextResponse.json(
      { ok: false, reason: e instanceof Error ? e.message : "unknown" },
      { status: 500 }
    );
  }
}
