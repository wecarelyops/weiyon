import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, Phone as PhoneIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "聯絡我們 | 偉勇工業社",
  description: "聯絡偉勇工業社取得報價或諮詢服務，我們的專業團隊將儘快為您回覆",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              聯絡我們
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              有任何需求或疑問？歡迎透過以下方式與我們聯繫
            </p>
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
                聯絡資訊
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">地址</h3>
                    <p className="text-[var(--text-secondary)]">
                      台中市烏日區環中路八段332巷118弄35號
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">電話</h3>
                    <a
                      href="tel:0423356451"
                      className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      04-23356451
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">Email</h3>
                    <a
                      href="mailto:agesmyth@gmail.com"
                      className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      agesmyth@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--primary)] mb-1">營業時間</h3>
                    <p className="text-[var(--text-secondary)]">
                      週一至週六 08:00 - 17:30
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
                  title="偉勇工業社位置"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
                傳送訊息
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="請輸入您的姓名"
                        className="w-full pl-10 pr-4 py-3 border border-[var(--color-border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      電話
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                      <input
                        type="tel"
                        id="phone"
                        placeholder="04-XXXXXXX"
                        className="w-full pl-10 pr-4 py-3 border border-[var(--color-border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="example@email.com"
                      className="w-full pl-10 pr-4 py-3 border border-[var(--color-border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    主題
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-[var(--color-border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white"
                  >
                    <option value="">請選擇詢問主題</option>
                    <option value="quote">取得報價</option>
                    <option value="product">產品諮詢</option>
                    <option value="cooperation">業務合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    訊息內容 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-[var(--color-text-muted)]" />
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="請描述您的需求或問題..."
                      className="w-full pl-10 pr-4 py-3 border border-[var(--color-border-strong)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  送出訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
