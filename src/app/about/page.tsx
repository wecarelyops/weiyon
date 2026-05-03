import { Metadata } from "next";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "關於我們 | 偉勇工業社",
  description: "了解偉勇工業社40年的專業歷程，我們致力於提供高品質的CNC精密加工服務，從傳統金屬零件到半導體設備、航太零件，為客戶創造價值。",
};

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
              深耕產業 40 年，以專業技術與品質承諾，成為客戶最信賴的製造夥伴
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
                  偉勇工業社成立於民國時期，從一家小型金屬加工廠起步，歷經四十年的深耕與發展，
                  如今已成為中部地區知名的精密金屬零件製造專家。
                </p>
                <p>
                  我們的創辦人本著「品質第一、客戶至上」的理念，一步一腳印地建立起完善的生產體系。
                  從早期傳統的手工具加工，到引進第一批 CNC 數控機床，再到如今涵蓋半導體、
                  航太等高科技領域的加工服務，每一步都凝聚著偉勇人的智慧與汗水。
                </p>
                <p>
                  今天的我們，不僅傳承了老一輩工匠的精湛技藝，更積極擁抱新技術、新製程，
                  以創新思維回應市場變化，持續為客戶提供最優質的製造解決方案。
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

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-[var(--surface)]">
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
            {[
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
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-xl border border-[var(--border)]"
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
              以技術創新和品質承諾，推動客戶產品商業化成功。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">40+</p>
                <p className="text-sm text-gray-400">年產業經驗</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">500+</p>
                <p className="text-sm text-gray-400">服務客戶數</p>
              </div>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">99%</p>
                <p className="text-sm text-gray-400">客戶滿意度</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
