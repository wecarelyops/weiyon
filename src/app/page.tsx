import Link from "next/link";
import { ArrowRight, Award, Users, Cog, Zap, Phone, Diamond, Layers, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 min-h-[90vh] flex items-center bg-gradient-to-b from-[var(--surface)] to-[var(--bg)] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
                深耕產業 40 年
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-6">
                精密金屬零件
                <br />
                <span className="text-[var(--accent)]">加工專家</span>
              </h1>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                從傳統金屬零件到尖端半導體設備、航太零件，我們以卓越的 CNC 精密加工技術，
                成就您的創新設計。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
                >
                  取得報價
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border-strong)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--surface)] transition-colors"
                >
                  了解服務項目
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative lg:pl-8">
              <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] border border-[var(--border)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Cog className="w-24 h-24 text-[var(--accent)] mx-auto mb-4 opacity-20" />
                    <p className="text-[var(--text-muted)] text-sm">產品/工廠圖片</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 lg:left-8 bg-[var(--bg)] rounded-xl shadow-lg p-4 border border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--primary)]">40+ 年</p>
                    <p className="text-xs text-[var(--text-muted)]">產業經驗</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "產業經驗", value: "40+ 年" },
              { label: "專業設備", value: "20+ 台" },
              { label: "服務客戶", value: "500+" },
              { label: "產品種類", value: "1000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl lg:text-4xl font-bold text-[var(--accent)] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              專業服務項目
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              提供從傳統加工到高科技領域的全面解決方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Cog,
                title: "CNC 精密加工",
                description: "高精度 CNC 車床、銑床加工，適用於各種複雜幾何形狀的零件製造",
              },
              {
                icon: Zap,
                title: "半導體設備零件",
                description: "半導體製程設備關鍵零件加工，符合高科技產業嚴格標準",
              },
              {
                icon: Users,
                title: "機器人自動化",
                description: "工業機器人關節、自動化組件加工，助力智能製造升級",
              },
              {
                icon: Award,
                title: "航太零件",
                description: "無人機關鍵航太零件加工，满足輕量化與高精度要求",
              },
              {
                icon: Cog,
                title: "氣壓缸零件",
                description: "各類氣壓缸核心零件，耐用性與密封性兼顧",
              },
              {
                icon: Cog,
                title: "汽車配件",
                description: "汽車引擎、傳動系統零件加工，品質符合車廠標準",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-6 lg:p-8 bg-[var(--surface)] rounded-xl border border-transparent hover:border-[var(--accent)] hover:bg-[var(--bg)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--primary)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
            >
              查看所有服務
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiation / Promise Section */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* "搖頭" Hook */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <p className="text-2xl lg:text-3xl font-bold text-[var(--primary)] leading-relaxed mb-4">
              當別家工廠搖頭說
              <span className="text-[var(--accent)]">「這個做不出來」</span>
              <br className="hidden sm:block" />
              我們往往是客戶會想到的
              <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">
                下一通電話
              </span>
            </p>
            <p className="text-[var(--text-secondary)]">
              以品質、交期、合理價格三大優勢，服務全台與海外客戶
            </p>
          </div>

          {/* 3 Promise Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: Diamond,
                title: "難加工材料專長",
                description:
                  "不鏽鋼、鈦合金、鉬、硬質合金等一般工廠避之唯恐不及的材料皆可承接",
              },
              {
                icon: Layers,
                title: "一站式整合製造",
                description:
                  "從 CNC 車銑、放電加工、鈑金到表面處理，單一窗口為您統籌全製程",
              },
              {
                icon: Clock,
                title: "短交期 · 高品質",
                description:
                  "從單件試作、小量多樣到量產訂單，皆能以合理價格、短交期、高品質交付",
              },
            ].map((promise) => (
              <div
                key={promise.title}
                className="p-6 lg:p-8 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <promise.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--primary)] mb-2">
                  {promise.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              認識偉勇工業社
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--bg)] mb-4">
            準備好開始您的專案了嗎？
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            聯絡我們取得專業報價，我們的團隊將儘快回覆您的需求
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--accent)]/90 transition-colors"
            >
              聯絡我們
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--bg)]/20 text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--bg)]/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              04-23356451
            </a>
          </div>
        </div>
      </section>
    </>
  );
}