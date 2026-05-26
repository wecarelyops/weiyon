"use client";

import { useState, FormEvent, useRef, ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import {
  Mail,
  MessageCircle,
  Send,
  User,
  Phone as PhoneIcon,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Paperclip,
  X,
  FileText,
  Building2,
  Globe,
  Hash,
  Truck,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import {
  BUCKET_NAME,
  MAX_FILE_SIZE,
  MAX_FILES,
  ALLOWED_EXTENSIONS,
  extOf,
} from "@/lib/contact-constants";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

const ACCEPT_EXTENSIONS = ".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.stl,.jpg,.jpeg,.png,.webp";

// 安全解析 response — 即使伺服器回非 JSON（例如 413 純文字）也不會 crash
async function parseJsonSafe(res: Response): Promise<{ error?: string; [k: string]: unknown }> {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    if (res.status === 413) return { error: "附件太大，請壓縮後再試" };
    return { error: `伺服器回應異常 (${res.status})` };
  }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    const valid: File[] = [];
    let firstError = "";

    for (const f of newFiles) {
      const ext = extOf(f.name);
      if (!ALLOWED_EXTENSIONS.includes(ext as (typeof ALLOWED_EXTENSIONS)[number])) {
        if (!firstError) firstError = t("formAttachmentTypeError", { name: f.name });
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        if (!firstError) firstError = t("formAttachmentSizeError", { name: f.name });
        continue;
      }
      valid.push(f);
    }

    const merged = [...files, ...valid].slice(0, MAX_FILES);
    if (files.length + valid.length > MAX_FILES && !firstError) {
      firstError = t("formAttachmentMaxError", { max: MAX_FILES });
    }

    setFiles(merged);
    if (firstError) setErrorMessage(firstError);
    else setErrorMessage("");

    // 重置 input 讓使用者可以再次選擇相同檔案
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // 同步擷取 form（await 後 e.currentTarget 可能被回收）
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      subject: String(fd.get("subject") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      country: String(fd.get("country") || "").trim(),
      quantity: String(fd.get("quantity") || "").trim(),
      incoterms: String(fd.get("incoterms") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      attachments: [] as { name: string; path: string }[],
    };
    const subjectValue = payload.subject;

    try {
      // === Step 1：有附件先「直傳到 Supabase」，繞過 Vercel 4.5MB body 限制 ===
      if (files.length > 0) {
        if (!supabase) {
          throw new Error("檔案上傳服務暫時無法使用，請直接 email 附件給我們");
        }

        // 1a. 跟 server 要簽名上傳網址（只送 metadata，request 極小）
        const urlRes = await fetch("/api/upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            files: files.map((f) => ({ name: f.name, size: f.size })),
          }),
        });
        const urlData = await parseJsonSafe(urlRes);
        if (!urlRes.ok) throw new Error(urlData.error || "無法建立上傳連結");
        const uploads =
          (urlData.uploads as { name: string; path: string; token: string }[]) || [];

        // 1b. 瀏覽器直接把檔案 PUT 到 Supabase（不經過 Vercel function）
        for (let i = 0; i < files.length; i++) {
          const u = uploads[i];
          if (!u) throw new Error("上傳連結缺失，請重試");
          const { error: upErr } = await supabase.storage
            .from(BUCKET_NAME)
            .uploadToSignedUrl(u.path, u.token, files[i], {
              contentType: files[i].type || "application/octet-stream",
            });
          if (upErr) throw new Error(`附件「${files[i].name}」上傳失敗，請重試`);
          payload.attachments.push({ name: files[i].name, path: u.path });
        }
      }

      // === Step 2：送出表單（純 JSON，無檔案 bytes）===
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await parseJsonSafe(res);
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus("success");
      form.reset();
      setFiles([]);

      // GA4: generate_lead 自訂事件
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          form_name: "contact_form",
          subject: subjectValue || "unspecified",
          attachments: payload.attachments.length,
          currency: "TWD",
          value: 1,
        });
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Submission failed"
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {t("formNameLabel")}{" "}
            <span className="text-red-500">{t("formRequired")}</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={200}
              autoComplete="name"
              placeholder={t("formNamePlaceholder")}
              className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {t("formPhoneLabel")}
          </label>
          <div className="relative">
            <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={50}
              autoComplete="tel"
              placeholder={t("formPhonePlaceholder")}
              className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          {t("formEmailLabel")}{" "}
          <span className="text-red-500">{t("formRequired")}</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder={t("formEmailPlaceholder")}
            className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
      </div>

      {/* Company + Country — 海外 B2B 採購商常需 */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {t("formCompanyLabel")}
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              id="company"
              name="company"
              maxLength={200}
              autoComplete="organization"
              placeholder={t("formCompanyPlaceholder")}
              className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {t("formCountryLabel")}
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              id="country"
              name="country"
              maxLength={100}
              autoComplete="country-name"
              placeholder={t("formCountryPlaceholder")}
              className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          {t("formSubjectLabel")}
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
        >
          <option value="">{t("formSubjectPlaceholder")}</option>
          <option value="quote">{t("formSubjectQuote")}</option>
          <option value="product">{t("formSubjectProduct")}</option>
          <option value="cooperation">
            {t("formSubjectCooperation")}
          </option>
          <option value="other">{t("formSubjectOther")}</option>
        </select>
      </div>

      {/* Quantity + INCOTERMS — 國際採購常需 */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {t("formQuantityLabel")}
          </label>
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              id="quantity"
              name="quantity"
              maxLength={100}
              placeholder={t("formQuantityPlaceholder")}
              className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="incoterms"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            {t("formIncotermsLabel")}
          </label>
          <div className="relative">
            <Truck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)] pointer-events-none z-10" />
            <select
              id="incoterms"
              name="incoterms"
              className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
            >
              <option value="">{t("formIncotermsPlaceholder")}</option>
              <option value="EXW">EXW (Ex Works)</option>
              <option value="FCA">FCA (Free Carrier)</option>
              <option value="FOB">FOB (Free on Board)</option>
              <option value="discuss">{t("formIncotermsDiscuss")}</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--text-primary)] mb-2"
        >
          {t("formMessageLabel")}{" "}
          <span className="text-red-500">{t("formRequired")}</span>
        </label>
        <div className="relative">
          <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-[var(--text-muted)]" />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder={t("formMessagePlaceholder")}
            className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          />
        </div>
      </div>

      {/* 附件上傳 */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          {t("formAttachmentsLabel")}
        </label>
        <p className="text-xs text-[var(--text-muted)] mb-3">
          {t("formAttachmentsHint")}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          name="attachments"
          multiple
          accept={ACCEPT_EXTENSIONS}
          onChange={handleFileChange}
          className="sr-only"
          id="attachments-input"
        />

        <label
          htmlFor="attachments-input"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-[var(--border-strong)] rounded-lg text-sm text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer transition-colors"
        >
          <Paperclip className="w-4 h-4" />
          {t("formAttachmentsButton")}
        </label>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 px-3 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-sm"
              >
                <FileText className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span className="flex-1 truncate">{file.name}</span>
                <span className="text-xs text-[var(--text-muted)] flex-shrink-0">
                  {formatBytes(file.size)}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  aria-label={t("formAttachmentRemove")}
                  className="p-1 text-[var(--text-muted)] hover:text-red-500 transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "success" && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-800">{t("formSuccess")}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">
            {errorMessage || t("formError")}
          </p>
        </div>
      )}

      {errorMessage && status !== "error" && (
        <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("formSubmitting")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("formSubmit")}
          </>
        )}
      </button>
    </form>
  );
}
