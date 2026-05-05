export type Bilingual = { zh: string; en: string };
export type BilingualList = { zh: string[]; en: string[] };

export type Industry = {
  slug: string;
  title: Bilingual;
  shortTitle: Bilingual;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  heroSubtitle: Bilingual;
  intro: Bilingual;
  whyTitle: Bilingual;
  whyPoints: BilingualList;
  partsTitle: Bilingual;
  parts: BilingualList;
  materialsTitle: Bilingual;
  materials: BilingualList;
  standardsTitle: Bilingual;
  standards: BilingualList;
  imageUrl: string;
};

// 2 個產業專屬 landing pages（中英雙語）
export const industries: Industry[] = [
  {
    slug: "semiconductor",
    title: {
      zh: "半導體設備精密零件加工",
      en: "Semiconductor Equipment Precision Parts Machining",
    },
    shortTitle: { zh: "半導體", en: "Semiconductor" },
    metaTitle: {
      zh: "半導體設備零件加工 | 真空腔體 / 晶圓搬運機構 — 偉勇工業社",
      en: "Semiconductor Equipment Parts Machining | Vacuum Chambers, Wafer Handling — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社 40 年加工經驗，專業承接半導體製造設備關鍵零件 — 真空腔體、晶圓搬運機構、機台結構件、氣體閥相關零件。提供 SUS304/316、A6061 加工、Class 100 潔淨包裝、表面處理整合。台中烏日精密加工廠。",
      en: "Weiyon Industry's 40-year experience serves Taiwan's semiconductor industry — vacuum chambers, wafer-handling mechanisms, machine structures, gas / vacuum valve parts. SUS304/316, A6061 machining with Class 100 cleanroom packaging and integrated surface treatment. Based in Taichung.",
    },
    heroSubtitle: {
      zh: "40 年加工經驗服務台灣半導體產業 — 嚴格潔淨度、短交期、客戶長期合作",
      en: "40 years serving Taiwan's semiconductor industry — strict cleanliness, short lead times, long-term partnerships",
    },
    intro: {
      zh: "半導體製程環境嚴苛 — 真空、高潔淨、腐蝕性氣體、超精密配合面。每一個零件的尺寸、材質、表面處理都直接影響晶圓良率。我們長期承接半導體設備零件加工，深知這個產業對品質與時效的雙重要求。",
      en: "Semiconductor processing is unforgiving — vacuum, ultra-clean, corrosive gases, sub-micron mating surfaces. Every dimension, material, and surface finish directly impacts wafer yield. We've supported semiconductor equipment manufacturers for decades and understand the industry's dual demand for quality and speed.",
    },
    whyTitle: { zh: "為什麼選擇偉勇承接半導體零件", en: "Why Weiyon for Semiconductor Parts" },
    whyPoints: {
      zh: [
        "40 年加工經驗，半導體客戶長期合作",
        "對應 SUS304 / SUS316 / A6061 等半導體常用材料庫存",
        "可整合電解拋光、鈍化、硬陽等表面處理",
        "提供 Class 100 / Class 10 潔淨包裝（依客戶需求）",
        "產業急件配合 — 一般工廠搖頭的緊急訂單我們也接",
        "完整量測報告與材料追溯",
      ],
      en: [
        "40 years of experience with long-term semiconductor clients",
        "Stock of common materials: SUS304, SUS316, A6061",
        "Integrated surface treatments: electropolishing, passivation, hard anodizing",
        "Class 100 / Class 10 cleanroom packaging on request",
        "Rush orders accepted — even when other shops decline",
        "Full measurement reports and material traceability",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts" },
    parts: {
      zh: [
        "真空腔體零件（Chamber components）",
        "晶圓搬運機構：End effector、Handler arm、夾爪",
        "機台結構件、安裝座、調整座",
        "氣體 / 真空閥零件",
        "潔淨度敏感件、機構導引件",
        "晶圓加工治具",
      ],
      en: [
        "Vacuum chamber components",
        "Wafer-handling: end effectors, handler arms, grippers",
        "Machine structures, mounting bases, adjustment seats",
        "Gas / vacuum valve components",
        "Cleanliness-critical parts, mechanism guides",
        "Wafer processing fixtures",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials" },
    materials: {
      zh: [
        "SUS304 / SUS316 / SUS316L（耐腐蝕、低顆粒）",
        "A6061-T6 / A7075（陽極處理後使用）",
        "C1100 / C1220 純銅（高熱導需求）",
        "POM、PEEK 等工程塑膠（依個案）",
      ],
      en: [
        "SUS304 / SUS316 / SUS316L (corrosion-resistant, low-particle)",
        "A6061-T6 / A7075 (post-anodizing)",
        "C1100 / C1220 pure copper (high thermal conductivity)",
        "POM, PEEK engineering plastics (case-by-case)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards" },
    standards: {
      zh: [
        "公差控制：可達 ±0.005 mm",
        "表面處理：電解拋光、陽極氧化、鈍化",
        "潔淨度：Class 100 / Class 10 包裝",
        "量測報告：尺寸量測書、材質證明（Mill Cert）",
        "可配合 ASTM、JIS、SEMI 規範",
      ],
      en: [
        "Tolerance: down to ±0.005 mm",
        "Surface: electropolishing, anodizing, passivation",
        "Cleanliness: Class 100 / Class 10 packaging",
        "Documentation: dimensional inspection reports, mill test certs",
        "Compliance with ASTM, JIS, SEMI as required",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/12951626/pexels-photo-12951626.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "aerospace",
    title: {
      zh: "航太精密零件加工",
      en: "Aerospace Precision Parts Machining",
    },
    shortTitle: { zh: "航太", en: "Aerospace" },
    metaTitle: {
      zh: "航太零件加工 | 鈦合金 / 高強度鋁 / 5 軸 CNC — 偉勇工業社",
      en: "Aerospace Parts Machining | Titanium, High-Strength Aluminum, 5-Axis CNC — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接航太精密零件加工 — 衛星零件、無人機機構件、結構骨架接頭、引擎周邊零件。鈦合金（Ti-6Al-4V）、A7075、A2024 等難切削材料加工經驗。提供材質證明、量測報告、追溯紀錄。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines aerospace precision parts — satellite components, UAV mechanisms, structural joints, engine peripherals. Experience with difficult materials including Ti-6Al-4V, A7075, A2024. Material certificates, measurement reports, traceability. 40-year Taichung precision machining shop.",
    },
    heroSubtitle: {
      zh: "難切削合金、高精度公差、輕量化結構 — 偉勇的航太加工專長",
      en: "Difficult alloys, tight tolerances, lightweight structures — Weiyon's aerospace expertise",
    },
    intro: {
      zh: "航太零件對精度、材料性能、可追溯性的要求都比一般機械業更嚴。鈦合金切削難、A7075 高強度鋁加工易變形、薄壁結構需要精準的應力控制。偉勇承接航太零件多年，掌握難切削材料的加工策略與品管流程，是中小企業航太供應鏈的可靠選項。",
      en: "Aerospace parts demand more — tighter tolerances, exotic materials, full traceability. Titanium is hard to cut, A7075 deforms easily, thin walls require precise stress control. With years of aerospace work, Weiyon has the difficult-material strategies and quality processes that mid-tier aerospace supply chains rely on.",
    },
    whyTitle: { zh: "為什麼選擇偉勇承接航太零件", en: "Why Weiyon for Aerospace Parts" },
    whyPoints: {
      zh: [
        "鈦合金、Inconel 等難切削材料加工經驗",
        "高精度公差控制（標配 ±0.005 mm）",
        "完整的量測 / 追溯流程",
        "可承接從單件試做到小批量（適合 R&D 階段）",
        "材料供應商 / 表面處理外協廠長期合作",
        "提供材質證明（Mill Test Cert）與檢驗報告",
      ],
      en: [
        "Experience with titanium, Inconel, and other difficult alloys",
        "Tight tolerance control (±0.005 mm standard)",
        "Full measurement and traceability workflow",
        "Single-piece prototyping through small-batch production (R&D-friendly)",
        "Long-term partnerships with material suppliers and surface treatment shops",
        "Mill test certificates and inspection reports provided",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts" },
    parts: {
      zh: [
        "衛星零件、結構配件",
        "無人機機構件、骨架接頭",
        "引擎周邊：耐熱零件、軸承座",
        "機翼結構件、輕量化承力件",
        "客製化緊固件、特殊螺絲螺帽",
        "原型零件（Prototype）",
      ],
      en: [
        "Satellite components, structural fittings",
        "UAV mechanism parts, frame joints",
        "Engine peripherals: heat-resistant parts, bearing seats",
        "Wing structures, lightweight load-bearing parts",
        "Custom fasteners, special bolts and nuts",
        "Prototype parts",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials" },
    materials: {
      zh: [
        "鈦合金 Ti-6Al-4V（Grade 5）— 主流航太鈦",
        "純鈦 Grade 1-4（特殊應用）",
        "A7075-T6 高強度鋁（受力結構件）",
        "A2024 高強度耐疲勞鋁",
        "SUS630 / 17-4PH 析出硬化不鏽鋼",
        "其他難切削合金（如 Inconel — 視個案）",
      ],
      en: [
        "Ti-6Al-4V (Grade 5) — the standard aerospace titanium",
        "Pure titanium Grade 1-4 (specialty applications)",
        "A7075-T6 high-strength aluminum (load-bearing)",
        "A2024 fatigue-resistant aluminum",
        "SUS630 / 17-4PH precipitation-hardened stainless",
        "Other difficult alloys including Inconel (case-by-case)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards" },
    standards: {
      zh: [
        "公差控制：標配 ±0.005 mm，特殊規格可洽",
        "表面粗糙度：Ra 0.4 ~ Ra 1.6（精車 / 精銑）",
        "材質證明：Mill Test Cert（航太級材料供應）",
        "尺寸檢驗報告：每批附量測紀錄",
        "可配合 AS9100 客戶供應鏈品管要求",
      ],
      en: [
        "Tolerance: ±0.005 mm standard, tighter on inquiry",
        "Surface finish: Ra 0.4 ~ Ra 1.6 (precision turning / milling)",
        "Material certs: aerospace-grade Mill Test Certificates",
        "Dimensional reports: measurement records per batch",
        "Compatible with AS9100 customer supply-chain QC requirements",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
];

export type IndustryLocale = "zh" | "en";

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
