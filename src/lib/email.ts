import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// 通知收件信箱 — 預設業主信箱
const NOTIFICATION_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL || "agesmyth@gmail.com";

// Resend 預設沙盒寄件人 — 上線後可換成 noreply@weiyon.com（需先到 Resend 驗證網域）
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Weiyon Contact <onboarding@resend.dev>";

export interface ContactNotificationPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  company?: string;
  country?: string;
  quantity?: string;
  incoterms?: string;
  message: string;
  attachments?: { name: string; url: string }[];
}

// 簡易 HTML escape — 防 user-input 內容破壞 HTML 結構
function esc(s: string | undefined | null): string {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml(data: ContactNotificationPayload): string {
  const rows: string[] = [];
  const addRow = (label: string, value: string | undefined) => {
    if (!value) return;
    rows.push(
      `<tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold;width:140px;border-bottom:1px solid #e5e5e5">${esc(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e5e5">${esc(value)}</td></tr>`
    );
  };

  addRow("姓名 / Name", data.name);
  addRow("Email", data.email);
  addRow("電話 / Phone", data.phone);
  addRow("公司 / Company", data.company);
  addRow("國家 / Country", data.country);
  addRow("數量 / Quantity", data.quantity);
  addRow("INCOTERMS", data.incoterms);
  addRow("主題 / Subject", data.subject);

  const messageHtml = esc(data.message).replace(/\n/g, "<br>");

  let attachmentsHtml = "";
  if (data.attachments && data.attachments.length > 0) {
    const items = data.attachments
      .map(
        (a) =>
          `<li style="margin:4px 0"><a href="${esc(a.url)}" style="color:#1a73e8;word-break:break-all">${esc(a.name)}</a></li>`
      )
      .join("");
    attachmentsHtml = `
      <h3 style="margin:24px 0 8px 0;font-size:16px;color:#333">📎 附件 / Attachments（簽名 URL，90 天有效）</h3>
      <ul style="padding-left:20px;margin:0">${items}</ul>
    `;
  }

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#222;max-width:680px;margin:0 auto;padding:20px">
  <div style="border-left:4px solid #b8860b;padding:0 0 0 16px;margin-bottom:20px">
    <div style="color:#b8860b;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">偉勇工業社</div>
    <h1 style="font-size:22px;margin:0;color:#222">新詢價：${esc(data.company || data.name)}</h1>
  </div>

  <table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px">
    ${rows.join("")}
  </table>

  <h3 style="margin:24px 0 8px 0;font-size:16px;color:#333">📝 訊息內容 / Message</h3>
  <div style="padding:12px;background:#fafafa;border:1px solid #e5e5e5;border-radius:4px;font-size:14px;line-height:1.6;white-space:pre-wrap">${messageHtml}</div>

  ${attachmentsHtml}

  <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e5e5;font-size:12px;color:#888">
    <p style="margin:0">📧 直接點 Reply 即可回覆給 ${esc(data.email)}</p>
    <p style="margin:4px 0 0 0">✓ 此訊息已存入 Supabase contact_submissions（備援）</p>
  </div>
</body>
</html>`;
}

function buildPlainText(data: ContactNotificationPayload): string {
  const lines = [
    `=== 偉勇工業社 — 新詢價 ===`,
    ``,
    `姓名: ${data.name}`,
    `Email: ${data.email}`,
  ];
  if (data.phone) lines.push(`電話: ${data.phone}`);
  if (data.company) lines.push(`公司: ${data.company}`);
  if (data.country) lines.push(`國家: ${data.country}`);
  if (data.quantity) lines.push(`數量: ${data.quantity}`);
  if (data.incoterms) lines.push(`INCOTERMS: ${data.incoterms}`);
  if (data.subject) lines.push(`主題: ${data.subject}`);
  lines.push(``, `--- 訊息 ---`, data.message);

  if (data.attachments && data.attachments.length > 0) {
    lines.push(``, `--- 附件（90 天有效）---`);
    data.attachments.forEach((a) => lines.push(`${a.name}: ${a.url}`));
  }

  return lines.join("\n");
}

/**
 * 寄送詢價通知信給業主。
 * 失敗不會 throw — 仍回傳 false 讓呼叫端決定是否 log。
 * 設計為 fail-soft：email 失敗不應該阻擋整個 contact 流程。
 */
export async function sendContactNotification(
  data: ContactNotificationPayload
): Promise<{ ok: boolean; reason?: string }> {
  if (!resend) {
    return { ok: false, reason: "RESEND_API_KEY 未設定" };
  }

  try {
    const subject = data.company
      ? `[偉勇詢價] ${data.name} — ${data.company}`
      : `[偉勇詢價] ${data.name}`;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: data.email, // 業主直接 Reply 就回到客戶信箱
      subject,
      html: buildHtml(data),
      text: buildPlainText(data),
    });

    if (result.error) {
      return { ok: false, reason: result.error.message || "Resend error" };
    }

    return { ok: true };
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : "unknown" };
  }
}
