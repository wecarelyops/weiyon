import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Upload,
  FileText,
  Box,
  Image as ImageIcon,
  Clock4,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import TrackedLink from "@/components/tracked-link";
import { buildAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: buildAlternates("/contact", locale),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* CAD Upload + DFM Banner — 突顯支援的檔案格式與回覆時間 */}
      <section className="py-12 lg:py-14 bg-[var(--bg)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-10">
            <div className="flex-shrink-0 w-14 h-14 bg-[var(--primary)] rounded-xl flex items-center justify-center">
              <Upload className="w-7 h-7 text-[var(--accent)]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] leading-tight">
                  {t("cadBannerTitle")}
                </h2>
              </div>
              <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed">
                {t("cadBannerSubtitle")}
              </p>
            </div>

            {/* 檔案格式圖示 */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                { icon: Box, label: "STEP / IGES" },
                { icon: FileText, label: "DWG / DXF" },
                { icon: ImageIcon, label: "PDF / JPG" },
                { icon: Clock4, label: t("cadBannerLeadTime") },
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs lg:text-sm text-[var(--text-primary)]"
                >
                  <item.icon className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-8">
                {t("infoTitle")}
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">
                      {t("addressLabel")}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {t("addressValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">
                      {t("phoneLabel")}
                    </h3>
                    <TrackedLink
                      href="tel:0423356451"
                      eventName="phone_click"
                      eventParams={{ source: "contact_page" }}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      04-23356451
                    </TrackedLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">
                      {t("emailLabel")}
                    </h3>
                    <TrackedLink
                      href="mailto:agesmyth@gmail.com"
                      eventName="email_click"
                      eventParams={{ source: "contact_page" }}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      agesmyth@gmail.com
                    </TrackedLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">
                      {t("hoursLabel")}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {t("hoursValue")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3640.97!2d120.6218!3d24.1154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693e7b8b8b8b8b!2z5a2455Sc5biC5b-X5pyI5bKz5bCP5Y-w!5e0!3m2!1szh-TW!2stw!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("mapTitle")}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-8">
                {t("formTitle")}
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
