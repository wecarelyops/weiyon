import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/email";
import {
  BUCKET_NAME,
  MAX_FILES,
  MAX_FIELD_LENGTHS,
  isValidStoragePath,
} from "@/lib/contact-constants";
import {
  checkOrigin,
  checkRateLimit,
  detectBot,
  getClientIp,
  safeErrMsg,
} from "@/lib/contact-server";

// 純 JSON 端點 — 檔案已由瀏覽器直傳到 Supabase（見 /api/upload-url）
// 這裡只收 metadata + 已上傳檔案的 path，request body 極小（無 4.5MB 風險）
export async function POST(request: Request) {
  try {
    // === 1. Origin 檢查（CSRF 防護）===
    if (!checkOrigin(request)) {
      return NextResponse.json({ error: "Unauthorized origin" }, { status: 403 });
    }

    // === 2. Rate limit（per IP）===
    const ip = getClientIp(request);
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.ok) {
      return NextResponse.json(
        { error: "請求過於頻繁，請稍後再試 / Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateCheck.retryAfter ?? 60) } }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "請求格式錯誤" }, { status: 400 });
    }

    // === 2b. 反機器人：honeypot + 填寫時間 + Turnstile ===
    const bot = await detectBot(body, ip);
    if (bot === "silent") {
      // 機器人：回假成功，不寫 DB、不寄信
      return NextResponse.json({ success: true, attachments: 0 }, { status: 200 });
    }
    if (bot === "turnstile-failed") {
      return NextResponse.json(
        { error: "人機驗證失敗，請重新整理頁面後再試 / Verification failed, please reload and retry" },
        { status: 400 }
      );
    }

    const str = (k: string) => String(body[k] ?? "").trim();
    const name = str("name");
    const email = str("email");
    const phone = str("phone");
    const subject = str("subject");
    const company = str("company");
    const country = str("country");
    const quantity = str("quantity");
    const incoterms = str("incoterms");
    const originalMessage = str("message");
    let message = originalMessage;

    // === 3. 輸入長度檢查（防 payload abuse）===
    const fields = { name, email, phone, subject, company, country, quantity, incoterms, message };
    for (const [key, value] of Object.entries(fields)) {
      const max = MAX_FIELD_LENGTHS[key as keyof typeof MAX_FIELD_LENGTHS];
      if (value.length > max) {
        return NextResponse.json(
          { error: `${key} 超過 ${max} 字元上限` },
          { status: 400 }
        );
      }
    }

    // 採購欄位串到 message 開頭
    const procurementInfo: string[] = [];
    if (company) procurementInfo.push(`Company: ${company}`);
    if (country) procurementInfo.push(`Country: ${country}`);
    if (quantity) procurementInfo.push(`Quantity: ${quantity}`);
    if (incoterms) procurementInfo.push(`INCOTERMS: ${incoterms}`);
    if (procurementInfo.length > 0) {
      message =
        "--- Procurement Info ---\n" +
        procurementInfo.join("\n") +
        "\n\n--- Message ---\n" +
        message;
    }

    // 必填驗證
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "姓名、Email 和訊息內容為必填欄位" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email 格式不正確" }, { status: 400 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ error: "資料庫尚未設定" }, { status: 503 });
    }

    // === 處理已上傳的附件（client 直傳後回傳 path）===
    // 為每個 path 產生 90 天簽名下載網址，供業主在通知信中直接點開
    const attachmentLinks: { name: string; url: string }[] = [];
    const rawAttachments = Array.isArray(body.attachments) ? body.attachments : [];

    if (rawAttachments.length > MAX_FILES) {
      return NextResponse.json({ error: `最多 ${MAX_FILES} 個附件` }, { status: 400 });
    }

    for (const a of rawAttachments) {
      const att = a as { name?: unknown; path?: unknown };
      const attName = String(att.name || "");
      const attPath = String(att.path || "");
      // 驗證 path 格式（防 IDOR：拒絕非我方格式的任意 path）
      if (!isValidStoragePath(attPath)) {
        return NextResponse.json({ error: "附件路徑格式錯誤" }, { status: 400 });
      }
      const { data: urlData } = await supabaseAdmin.storage
        .from(BUCKET_NAME)
        .createSignedUrl(attPath, 60 * 60 * 24 * 90);
      if (urlData?.signedUrl) {
        attachmentLinks.push({ name: attName, url: urlData.signedUrl });
      }
    }

    // 附件 URL 串到 message 末尾
    if (attachmentLinks.length > 0) {
      message += "\n\n--- 附件 ---";
      attachmentLinks.forEach((att) => {
        message += `\n${att.name}: ${att.url}`;
      });
    }

    // Insert submission
    const { error } = await supabaseAdmin
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Insert:", safeErrMsg(error));
      return NextResponse.json({ error: "提交失敗，請稍後再試" }, { status: 500 });
    }

    // === 寄送通知信（fail-soft）===
    const emailResult = await sendContactNotification({
      name,
      email,
      phone,
      subject,
      company,
      country,
      quantity,
      incoterms,
      message: originalMessage,
      attachments: attachmentLinks,
    });
    if (!emailResult.ok) {
      console.error("Email notification:", emailResult.reason);
    }

    return NextResponse.json(
      { success: true, attachments: attachmentLinks.length },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact:", safeErrMsg(error));
    return NextResponse.json({ error: "伺服器錯誤，請稍後再試" }, { status: 500 });
  }
}
