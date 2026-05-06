"use client";

import { useState, FormEvent } from "react";
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
} from "lucide-react";

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

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();

      // GA4: generate_lead 自訂事件
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          form_name: "contact_form",
          subject: payload.subject || "unspecified",
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
            placeholder={t("formEmailPlaceholder")}
            className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
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
            placeholder={t("formMessagePlaceholder")}
            className="w-full pl-10 pr-4 py-3 border border-[var(--border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          />
        </div>
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
