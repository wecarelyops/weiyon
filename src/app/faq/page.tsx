import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "常見問題 | 偉勇工業社",
  description: "偉勇工業社 CNC 精密加工常見問題：詢價、交期、付款、材質、加工方式、品質與物流等說明",
};

export default function FaqPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              常見問題
            </h1>
            <p className="text-lg text-[var(--text-secondary)]">
              關於詢價、加工、交期等常見疑問，請參考以下說明。
              <br />
              若仍有不清楚之處，歡迎來電或來信，我們會盡快回覆。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <h2 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-4 pb-3 border-b-2 border-[var(--accent)]">
                {category.title}
              </h2>
              <div className="divide-y divide-[var(--border)]">
                {category.items.map((item, idx) => (
                  <details
                    key={idx}
                    className="group py-4 [&::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-start justify-between cursor-pointer list-none gap-4 hover:text-[var(--accent)] transition-colors">
                      <span className="font-medium text-[var(--primary)] flex-1 group-hover:text-[var(--accent)] transition-colors">
                        <span className="text-[var(--accent)] mr-2">Q.</span>
                        {item.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 pl-7 text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                      <span className="text-[var(--text-muted)] font-medium mr-2">A.</span>
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-4">
            沒找到您要的答案？
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            歡迎透過以下方式直接聯絡我們，我們會在最短時間內回覆。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              <Mail className="w-5 h-5" />
              填寫聯絡表單
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-[var(--bg)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              直撥 04-23356451
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
