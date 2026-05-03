import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  Diamond,
  Hexagon,
  Box,
  Cpu,
  Disc,
  Zap,
  Layers,
  Sparkles,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "關於我們 | 偉勇工業社",
  description:
    "偉勇工業社深耕台灣中部 40 餘年，專精 CNC 精密零件加工。擅長處理難加工材料（不鏽鋼、鈦合金、鉬、硬質合金）與一站式整合製造，服務半導體、醫療、航太、汽車、精密機械產業。",
};

const materials = [
  {
    icon: Diamond,
    title: "難加工材料",
    description: "不鏽鋼、鈦合金、鉬、硬質合金（碳化鎢類）",
    note: "一般工廠較少承接",
    highlight: true,
  },
  {
    icon: Hexagon,
    title: "常見金屬",
    description: "鋁、鐵、黃銅、銅",
    note: "通用結構件、機構件",
  },
  {
    icon: Box,
    title: "工程塑料",
    description: "PEEK、POM、PTFE",
    note: "電子、半導體、醫療常用",
  },
];

const processes = [
  {
    icon: Cpu,
    title: "CNC 銑削加工",
    description: "加工中心、CNC 銑床、龍門銑床",
  },
  {
    icon: Disc,
    title: "CNC 車削加工",
    description: "CNC 車床、CNC 自動車床、通用車床",
  },
  {
    icon: Zap,
    title: "精密放電加工",
    description: "線切割、電火花成型、微孔放電加工",
  },
  {
    icon: Layers,
    title: "鈑金加工",
    description: "雷射切割、轉塔沖床、壓床、折彎、捲板",
  },
  {
    icon: Sparkles,
    title: "表面處理",
    description: "熱處理、電鍍、陽極處理、噴漆、拋光、噴砂",
  },
];

const industries = [
  "半導體",
  "醫療器材",
  "航太",
  "汽車",
  "精密機械",
];

const values = [
  {
    icon: Award,
    title: "品質至上",
    description: "從原料到出貨，每個環節都嚴格把關，確保產品符合最高品質標準",
  },
  {
    icon: Users,
    title: "客戶優先",
    description: "以客戶需求為中心，提供客製化解決方案，創造雙贏局面",
  },
  {
    icon: Target,
    title: "精準務實",
    description: "專業技術團隊，精確掌握每個加工環節，按時交付優質產品",
  },
  {
    icon: TrendingUp,
    title: "持續創新",
    description: "不斷引進新技術、新設備，提升競爭力與生產效率",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
              關於偉勇工業社
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              台灣中部精密零件加工廠，深耕產業 40 餘年。
              <br />
              從一塊素材到一件成品，提供一站式整合製造服務。
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
                我們的故事
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  偉勇工業社從一家小型金屬加工廠起步，歷經四十年的深耕與發展，如今已成為台灣中部地區的精密金屬零件製造專家。
                </p>
                <p>
                  我們專精於各類金屬、硬質合金與工程樹脂的精密加工。資深技師團隊憑藉數十年現場經驗，靈活運用各類 CNC 數控機床與通用機床，確保每一個零件都符合高精度要求。
                </p>
                <p>
                  服務對象涵蓋半導體、醫療器材、航太、汽車與精密機械產業的企業客戶與個人開發者，提供精密零件加工、客製化零件製造與原型開發服務。無論單件試作、小量多樣或量產訂單，皆以短交期、高品質交付。
                </p>
                <p>
                  從早期傳統手工具加工，到引進 CNC 數控機床，再到如今涵蓋高科技領域的精密製造，每一步都凝聚著偉勇人的智慧與汗水。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-24 h-24 text-[var(--accent)] mx-auto mb-4 opacity-20" />
                    <p className="text-[var(--text-muted)]">公司歷史照片</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              加工能力 & 服務範圍
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              一站式整合製造服務 — 從材料、加工到表面處理，由單一窗口為您統籌完成
            </p>
          </div>

          {/* Materials */}
          <div className="mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              材料專長
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              特別擅長一般工廠避之唯恐不及的難加工材料
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {materials.map((mat) => (
                <div
                  key={mat.title}
                  className={`p-6 bg-white rounded-xl ${
                    mat.highlight
                      ? "border-2 border-[var(--accent)] shadow-md"
                      : "border border-[var(--border)]"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      mat.highlight
                        ? "bg-[var(--accent)]"
                        : "bg-[var(--accent)]/10"
                    }`}
                  >
                    <mat.icon
                      className={`w-6 h-6 ${
                        mat.highlight ? "text-white" : "text-[var(--accent)]"
                      }`}
                    />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--primary)] mb-2">
                    {mat.title}
                  </h4>
                  <p className="text-sm text-[var(--text-primary)] mb-2">
                    {mat.description}
                  </p>
                  {mat.note && (
                    <p className="text-xs text-[var(--text-muted)] italic">
                      {mat.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Processes */}
          <div className="mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              製程涵蓋
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              從加工到表面處理一站式整合
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((proc) => (
                <div
                  key={proc.title}
                  className="p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                    <proc.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h4 className="font-bold text-lg text-[var(--primary)] mb-2">
                    {proc.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--primary)] mb-2 text-center">
              服務產業
            </h3>
            <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
              企業客戶與個人開發者皆歡迎
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-5 py-2 bg-white border border-[var(--border)] rounded-full text-sm font-medium text-[var(--primary)]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              我們的核心價值
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              這些價值觀驅使著我們不斷前進，為客戶提供最好的服務
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)]"
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--primary)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              我們的願景
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              成為全世界最專業的精密金屬零件製造夥伴，
              <br />
              以技術創新和品質承諾，推動客戶產品商業化成功。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">
                  40+
                </p>
                <p className="text-sm text-gray-400">年產業經驗</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">
                  500+
                </p>
                <p className="text-sm text-gray-400">服務客戶數</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">
                  99%
                </p>
                <p className="text-sm text-gray-400">客戶滿意度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation CTA Section */}
      <section className="py-20 lg:py-28 bg-[var(--surface)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-2xl lg:text-4xl font-bold text-[var(--primary)] leading-relaxed mb-6">
            當別家工廠搖頭說
            <br className="lg:hidden" />
            <span className="text-[var(--accent)]">「這個做不出來」</span>
            <br />
            我們往往是客戶會想到的
            <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">
              下一通電話
            </span>
          </p>
          <p className="text-lg text-[var(--text-secondary)] mb-10 mt-8">
            以<strong>品質、交期、合理價格</strong>三大優勢，服務全台與海外客戶。
            <br />
            歡迎來電洽詢或線上索取報價，我們將以最快速度回覆您的需求。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              線上索取報價
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0423356451"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-[var(--bg)] transition-colors"
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
