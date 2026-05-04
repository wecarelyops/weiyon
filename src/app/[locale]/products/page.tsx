import { Metadata } from "next";

export const metadata: Metadata = {
  title: "加工品目 | 偉勇工業社",
  description: "偉勇工業社提供多樣化的精密金屬零件加工服務，包含半導體設備、航太零件、自動化組件等專業加工",
};

const categories = [
  {
    title: "加工品目",
    items: [
      "半導體製造設備零件",
      "航太相關零件（衛星零件）",
      "醫療器材零件",
      "自動化省力機械零件",
      "通信機器零件",
      "精密機器零件",
      "真空機器零件",
      "電子機器零件",
      "印刷機械零件",
      "光學機器零件",
      "環境機器零件",
      "航空器零件",
      "氣壓液壓油壓零件",
      "一般機械零件",
      "個人少量訂製亦可接受",
    ],
  },
  {
    title: "加工技術",
    items: [
      "CNC車床加工",
      "CNC銑床加工（加工中心機）",
      "放電加工（線切割・放電火花加工）",
      "CNC研磨加工",
      "熱處理",
      "表面處理（鍍膜・硬化）",
      "沖壓・板金加工",
      "粉末冶金",
      "試作・少量生產快速提案",
    ],
  },
  {
    title: "取扱材料",
    items: [
      "鋁合金：A1050、A2014、A2017、A2024、A5052、A5056、A6061、A7075、多孔鋁合金",
      "不鏽鋼：SUS303、SUS304、SUS316L、SUS420J2、SUS440C、析出硬化不鏽鋼SUS630",
      "鐵・碳鋼：SS400、S15C、S45C、SK、SKH、SKS、SKD、SCM、SUH、SUJ2",
      "伸銅：無氧銅、韌性銅、磷青銅、鉻銅、鈹銅、黃銅、砲銅、高力黃銅",
      "鎳合金：因康合金、因科洛伊、哈斯特合金、蒙乃爾合金、殷鋼、科瓦合金",
      "純金屬：鎳、鈦、釩、鉬、銀、鎢、白金、金、鉛、鉍",
      "磁性材料：純鐵SUY、矽鐵、45 permalloy、78 permalloy、電磁不鏽鋼",
      "其他合金：超硬合金、64鈦合金、銅鎢合金、重合金、硬鉛",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-12 lg:py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
              加工品目
            </h1>
            <p className="text-lg text-[var(--accent)] font-medium mb-2">
              精密金屬零件加工專家
            </p>
            <p className="text-[var(--text-secondary)]">
              從1個零件開始，滿足您多樣化的加工需求
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 lg:py-16 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-[var(--primary)] mb-6 pb-2 border-b-2 border-[var(--accent)]">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full flex-shrink-0 mt-2" />
                      <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
            估價・諮詢
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-6">
            歡迎隨時諮詢。我們會根據圖面、形狀、數量、材料等提供最好的解決方案。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--secondary)] transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </section>
    </>
  );
}