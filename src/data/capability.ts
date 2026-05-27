// 能力說明書頁的結構化內容（資料取自 industries.ts / processes.ts / materials.ts）
// 不宣稱 CMM/三次元、不寫死公差；批次追溯非常態能力故不列入。

type Tri = { zh: string; en: string; de: string };

export const STATS: { n: string; label: Tri }[] = [
  { n: "40+", label: { zh: "年加工經驗", en: "Years of experience", de: "Jahre Erfahrung" } },
  { n: "10+", label: { zh: "台專業機台", en: "CNC machines", de: "CNC-Maschinen" } },
  { n: "500+", label: { zh: "合作客戶", en: "Clients served", de: "Kunden" } },
  { n: "1000+", label: { zh: "交付品項", en: "Parts delivered", de: "Gefertigte Teile" } },
];

export const PROCESSES: Tri[] = [
  { zh: "CNC 車削", en: "CNC turning", de: "CNC-Drehen" },
  { zh: "CNC 銑削", en: "CNC milling", de: "CNC-Fräsen" },
  { zh: "車銑複合加工", en: "Turn-mill machining", de: "Dreh-Fräs-Bearbeitung" },
  { zh: "放電加工 EDM", en: "EDM (electrical discharge)", de: "Funkenerosion (EDM)" },
  { zh: "鈑金加工", en: "Sheet-metal fabrication", de: "Blechbearbeitung" },
  { zh: "表面處理整合", en: "Surface-treatment integration", de: "Oberflächenbehandlung" },
];

export const INDUSTRIES: Tri[] = [
  { zh: "半導體設備", en: "Semiconductor", de: "Halbleiter" },
  { zh: "航太", en: "Aerospace", de: "Luft- und Raumfahrt" },
  { zh: "醫療器材", en: "Medical devices", de: "Medizintechnik" },
  { zh: "汽車零組件", en: "Automotive", de: "Automotive" },
  { zh: "自動化機構", en: "Automation", de: "Automatisierung" },
  { zh: "油氣 / 閥件", en: "Oil & gas / valves", de: "Öl & Gas / Ventile" },
  { zh: "改裝車", en: "Automotive tuning", de: "Fahrzeug-Tuning" },
];

export const PARTS: Tri[] = [
  { zh: "軸承座", en: "Bearing housings", de: "Lagergehäuse" },
  { zh: "閥體 / 歧管", en: "Valve bodies / manifolds", de: "Ventilkörper / Verteiler" },
  { zh: "法蘭件", en: "Flanged parts", de: "Flanschteile" },
  { zh: "各式支架", en: "Brackets", de: "Halterungen" },
  { zh: "車銑複合件", en: "Turn-mill components", de: "Dreh-Frästeile" },
  { zh: "量產批件", en: "Volume batches", de: "Serienteile" },
];

export const MATERIALS: { label: Tri; grades: string }[] = [
  {
    label: { zh: "不鏽鋼", en: "Stainless steel", de: "Edelstahl" },
    grades: "SUS304 / 316 / 316L / 321 / 440C / 630(17-4PH) / Duplex",
  },
  {
    label: { zh: "合金鋼・碳鋼", en: "Alloy & carbon steel", de: "Legierter & Kohlenstoffstahl" },
    grades: "SCM435 / SCM440 / S45C / S50C / S55C",
  },
  {
    label: { zh: "工具鋼", en: "Tool steel", de: "Werkzeugstahl" },
    grades: "SKD11 / SKD61 / SKH51",
  },
  {
    label: { zh: "鋁合金", en: "Aluminium", de: "Aluminium" },
    grades: "A6061 / A7075 / A2024 / A2017 / A5052",
  },
  {
    label: { zh: "鈦合金", en: "Titanium", de: "Titan" },
    grades: "Ti-6Al-4V",
  },
  {
    label: { zh: "工程塑膠", en: "Engineering plastics", de: "Technische Kunststoffe" },
    grades: "PEEK",
  },
];

export const QUALITY: Tri[] = [
  { zh: "依圖面要求承接", en: "Made strictly to your drawing", de: "Fertigung streng nach Zeichnung" },
  { zh: "可附 EN 10204 3.1 材質證明", en: "EN 10204 3.1 material certificates available", de: "Werkszeugnis EN 10204 3.1 verfügbar" },
  { zh: "少量多樣彈性接單", en: "Low-to-mid volume, high-mix", de: "Klein- bis Mittelserien, hohe Variantenvielfalt" },
  { zh: "報價 1–2 個工作天", en: "Quote within 1–2 business days", de: "Angebot in 1–2 Werktagen" },
];

// 能力頁展示的實績照（取自 public/images/works/）
export const WORK_PHOTO_IDS = [1, 13, 3, 38, 39, 33];

export function pick(t: Tri, locale: string): string {
  if (locale === "en") return t.en;
  if (locale === "de") return t.de;
  return t.zh;
}
