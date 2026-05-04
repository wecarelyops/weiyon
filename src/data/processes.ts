export type Bilingual = { zh: string; en: string };
export type BilingualList = { zh: string[]; en: string[] };

export type Process = {
  slug: string;
  inHouse: boolean;
  title: Bilingual;
  shortDescription: Bilingual;
  description: Bilingual;
  equipment: BilingualList;
  applications: BilingualList;
  materials: BilingualList;
  specs: BilingualList;
  imageUrl: string;
};

// 5 個加工製程的詳細資料（中英雙語）
// imageUrl 採用 Pexels 圖庫（已授權商業使用）
export const processes: Process[] = [
  {
    slug: "cnc-milling",
    inHouse: true,
    title: {
      zh: "CNC 銑削加工",
      en: "CNC Milling",
    },
    shortDescription: {
      zh: "加工中心、CNC 銑床、龍門銑床",
      en: "Machining centers, CNC mills, gantry mills",
    },
    description: {
      zh: "提供高精度 CNC 銑削加工服務，擅長處理複雜幾何零件、機構件、模具零件等。憑藉 40 餘年現場經驗，能依設計需求選擇最適合的刀具策略與加工順序，控制變形與公差。",
      en: "High-precision CNC milling for complex geometries, mechanism parts, and mold components. With 40+ years of shop-floor experience, we tailor tooling strategy and machining sequence to control deformation and meet tight tolerances.",
    },
    equipment: {
      zh: [
        "立式 / 臥式加工中心",
        "三軸、四軸 CNC 銑床",
        "龍門銑床（適合大型結構件）",
        "高速 CNC 銑床（適合鋁合金量產）",
      ],
      en: [
        "Vertical / horizontal machining centers",
        "3-axis and 4-axis CNC mills",
        "Gantry mill (suited for large structural parts)",
        "High-speed CNC mill (for aluminum volume production)",
      ],
    },
    applications: {
      zh: [
        "半導體設備機構零件、真空腔體零件",
        "機器人結構件、關節座、連桿",
        "氣壓 / 油壓零件、軸承座",
        "自動化機構：滑軌座、定位塊",
        "模具零件、精密治具",
      ],
      en: [
        "Semiconductor equipment mechanisms, vacuum chamber parts",
        "Robot structural parts, joint mounts, linkages",
        "Pneumatic / hydraulic parts, bearing seats",
        "Automation mechanisms: linear-rail seats, locating blocks",
        "Mold parts, precision jigs",
      ],
    },
    materials: {
      zh: [
        "鋁合金（A6061、A7075、A2024）",
        "不鏽鋼（SUS303、SUS304、SUS316、SUS440C）",
        "銅合金（C3604、C5191、C6191 等）",
        "鋼材（S45C、SCM440 等）",
        "鈦合金、工程塑膠（PEEK、POM 等）",
      ],
      en: [
        "Aluminum alloys (A6061, A7075, A2024)",
        "Stainless steel (SUS303, SUS304, SUS316, SUS440C)",
        "Copper alloys (C3604, C5191, C6191, etc.)",
        "Steels (S45C, SCM440, etc.)",
        "Titanium alloys, engineering plastics (PEEK, POM, etc.)",
      ],
    },
    specs: {
      zh: [
        "加工精度：可達 ±0.005 mm（依工件特性）",
        "粗糙度：Ra 0.8 ~ Ra 3.2（標準）",
        "最大工件尺寸：依機台配置，請於詢價時告知",
        "支援 4 軸聯動加工",
      ],
      en: [
        "Tolerance: down to ±0.005 mm (depending on part characteristics)",
        "Surface finish: Ra 0.8 ~ Ra 3.2 (standard)",
        "Max workpiece size: depends on machine setup — please specify when quoting",
        "4-axis simultaneous machining supported",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "cnc-turning",
    inHouse: true,
    title: {
      zh: "CNC 車削加工",
      en: "CNC Turning",
    },
    shortDescription: {
      zh: "CNC 車床、自動車床、通用車床",
      en: "CNC lathes, automatic lathes, conventional lathes",
    },
    description: {
      zh: "高精度 CNC 車削加工，承接軸類、套筒、銷類、特殊規格緊固件等迴轉體零件。CNC 自動車床支援連續批量生產，通用車床搭配老師傅調機，靈活處理試做與小量訂單。",
      en: "High-precision CNC turning for shafts, sleeves, pins, and custom fasteners. Automatic CNC lathes support continuous volume production, while conventional lathes — operated by senior technicians — handle prototypes and small-batch orders flexibly.",
    },
    equipment: {
      zh: [
        "CNC 車床（標準 / 高精度型）",
        "CNC 自動車床（連續送料量產）",
        "通用車床（試做、特殊形狀）",
        "車銑複合機（一次裝夾完成多工序）",
      ],
      en: [
        "CNC lathes (standard and high-precision)",
        "Automatic CNC lathes (continuous bar feed for production)",
        "Conventional lathes (prototypes, special shapes)",
        "Mill-turn complex machines (multi-process in single setup)",
      ],
    },
    applications: {
      zh: [
        "軸類、銷類、套筒",
        "特殊規格螺絲、螺帽（客製頭型 / 牙距）",
        "氣缸活塞、軸承內外環",
        "電子接頭、連接器零件",
        "光學鏡座、精密配件",
      ],
      en: [
        "Shafts, pins, sleeves",
        "Custom screws and nuts (special heads / thread pitches)",
        "Cylinder pistons, bearing rings",
        "Electrical connectors and contact parts",
        "Optical lens mounts, precision fittings",
      ],
    },
    materials: {
      zh: [
        "易切削不鏽鋼（SUS303、SUS440C）",
        "鋁合金（A6061、A2024）",
        "黃銅 C3604（快削黃銅）",
        "磷青銅 C5191、C5341",
        "碳鋼（S45C、SCM440）",
      ],
      en: [
        "Free-machining stainless (SUS303, SUS440C)",
        "Aluminum alloys (A6061, A2024)",
        "Brass C3604 (free-cutting brass)",
        "Phosphor bronze C5191, C5341",
        "Carbon steel (S45C, SCM440)",
      ],
    },
    specs: {
      zh: [
        "加工精度：可達 ±0.005 mm",
        "粗糙度：Ra 0.4 ~ Ra 1.6（精車）",
        "棒材直徑：Φ3 ~ Φ200 mm（依機台）",
        "最小批量：1 件起",
      ],
      en: [
        "Tolerance: down to ±0.005 mm",
        "Surface finish: Ra 0.4 ~ Ra 1.6 (finish turning)",
        "Bar diameter: Φ3 ~ Φ200 mm (machine-dependent)",
        "MOQ: from 1 piece",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/28929510/pexels-photo-28929510.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "edm",
    inHouse: false,
    title: {
      zh: "精密放電加工",
      en: "Precision EDM",
    },
    shortDescription: {
      zh: "線切割、電火花成型、微孔放電（透過合作廠整合）",
      en: "Wire-cut, sinker EDM, micro-hole EDM (via partner network)",
    },
    description: {
      zh: "放電加工適合處理高硬度材料、複雜內輪廓、深窄槽等難以用切削加工的形狀。我們透過長期合作的精密放電廠商整合服務，與廠內 CNC 加工銜接，為您提供完整一站式方案。",
      en: "EDM is ideal for high-hardness materials, complex internal contours, and deep narrow slots that conventional cutting can't reach. Through our long-standing partner network, we integrate EDM with our in-house CNC machining for a complete one-stop solution.",
    },
    equipment: {
      zh: [
        "線切割機（Wire EDM）",
        "電火花成型機（Sinker EDM）",
        "微孔放電機（Micro-hole EDM）",
      ],
      en: [
        "Wire-cut EDM",
        "Sinker EDM (Die-sinking)",
        "Micro-hole EDM",
      ],
    },
    applications: {
      zh: [
        "複雜內輪廓（無法銑削的形狀）",
        "高硬度模具零件、衝模、量規",
        "深窄槽、精密齒形",
        "微孔加工（噴嘴、注射器、流體控制零件）",
      ],
      en: [
        "Complex internal profiles (shapes inaccessible to milling)",
        "Hardened mold parts, stamping dies, gauges",
        "Deep narrow slots, precision tooth profiles",
        "Micro holes (nozzles, injectors, fluid-control parts)",
      ],
    },
    materials: {
      zh: [
        "高硬度淬火鋼（SKD11、SKD61、SKH51）",
        "硬質合金（碳化鎢系列）",
        "高碳鋼（SK3、SK4）",
        "預硬鋼、不鏽鋼",
        "其他導電材料",
      ],
      en: [
        "Hardened tool steel (SKD11, SKD61, SKH51)",
        "Cemented carbide (tungsten carbide types)",
        "High-carbon steel (SK3, SK4)",
        "Pre-hardened steel, stainless steel",
        "Other conductive materials",
      ],
    },
    specs: {
      zh: [
        "線切割精度：可達 ±0.002 mm",
        "電火花成型粗糙度：Ra 0.2 以下（精修）",
        "微孔最小直徑：依放電條件評估",
        "需材料導電方可加工",
      ],
      en: [
        "Wire EDM tolerance: down to ±0.002 mm",
        "Sinker EDM surface finish: Ra 0.2 or better (fine pass)",
        "Micro-hole minimum diameter: depends on EDM conditions",
        "Material must be electrically conductive",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "sheet-metal",
    inHouse: false,
    title: {
      zh: "鈑金加工",
      en: "Sheet Metal Fabrication",
    },
    shortDescription: {
      zh: "雷射切割、轉塔沖床、壓床、折彎、捲板（透過合作廠整合）",
      en: "Laser cutting, turret punch, press, bending, rolling (via partner network)",
    },
    description: {
      zh: "鈑金加工提供從板材切割、沖孔、折彎到組裝的完整服務。我們透過長期合作的鈑金廠商整合，與精密 CNC 加工件搭配，為您交付完整的機殼、結構件、面板成品。",
      en: "Sheet metal fabrication services from cutting, punching, and bending to assembly. We integrate through our long-standing sheet metal partners — combining with our precision CNC parts to deliver complete enclosures, structures, and panels.",
    },
    equipment: {
      zh: [
        "光纖雷射切割機",
        "CNC 轉塔沖床",
        "液壓折彎機（NC 折床）",
        "捲板機、壓床",
        "點焊、TIG 焊接",
      ],
      en: [
        "Fiber laser cutter",
        "CNC turret punch press",
        "Hydraulic press brake (NC bending)",
        "Plate roller, press machine",
        "Spot welding, TIG welding",
      ],
    },
    applications: {
      zh: [
        "機殼、控制箱、配電箱",
        "面板、儀表板",
        "結構支架、機台外殼",
        "通風管、罩蓋",
        "客製化金屬製品",
      ],
      en: [
        "Enclosures, control boxes, distribution panels",
        "Front panels, instrument panels",
        "Structural brackets, machine covers",
        "Ducts, hoods",
        "Custom metal products",
      ],
    },
    materials: {
      zh: [
        "冷軋鋼板 (SPCC)、熱軋鋼板",
        "不鏽鋼板（SUS304、SUS316）",
        "鋁板（A1050、A5052）",
        "鍍鋅鋼板",
        "銅板、黃銅板",
      ],
      en: [
        "Cold-rolled (SPCC) and hot-rolled steel sheet",
        "Stainless steel sheet (SUS304, SUS316)",
        "Aluminum sheet (A1050, A5052)",
        "Galvanized steel sheet",
        "Copper, brass sheet",
      ],
    },
    specs: {
      zh: [
        "板厚範圍：0.5 ~ 12 mm（依材質）",
        "最大切割尺寸：1500 × 3000 mm（標準）",
        "折彎精度：±0.1 mm",
        "可整合表面處理（粉體塗裝、烤漆）",
      ],
      en: [
        "Sheet thickness: 0.5 ~ 12 mm (material-dependent)",
        "Max cutting size: 1500 × 3000 mm (standard)",
        "Bending tolerance: ±0.1 mm",
        "Integrates with surface treatments (powder coating, painting)",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/12951626/pexels-photo-12951626.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "surface-treatment",
    inHouse: false,
    title: {
      zh: "表面處理",
      en: "Surface Treatment",
    },
    shortDescription: {
      zh: "熱處理、電鍍、陽極處理、噴漆、拋光、噴砂（透過合作廠整合）",
      en: "Heat treatment, plating, anodizing, painting, polishing, sandblasting (via partner network)",
    },
    description: {
      zh: "表面處理是金屬零件的最後一道工序，影響耐蝕、耐磨、外觀與功能性。我們透過長期合作的專業表面處理廠商，提供完整整合服務 — 您只需對偉勇單一窗口負責，全程不必分頭協調。",
      en: "Surface treatment is the final step for metal parts — impacting corrosion resistance, wear resistance, appearance, and function. Through our long-term professional surface-treatment partners, we provide a complete integrated service: a single point of contact at Weiyon coordinates the full workflow for you.",
    },
    equipment: {
      zh: [
        "熱處理：淬火爐、回火爐、滲碳 / 氮化爐",
        "電鍍：鍍鎳、鍍鉻、鍍鋅、鍍金、鍍銀",
        "陽極處理：透明、彩色、硬陽（鋁專用）",
        "噴漆 / 粉體塗裝：靜電粉體、烤漆",
        "機械處理：拋光、鏡面拋光、噴砂、髮絲紋",
      ],
      en: [
        "Heat treatment: quench / temper, carburizing / nitriding furnaces",
        "Electroplating: nickel, chrome, zinc, gold, silver",
        "Anodizing: clear, color, hard anodizing (aluminum)",
        "Painting: electrostatic powder coating, baked enamel",
        "Mechanical: polishing, mirror polish, sandblasting, hairline finish",
      ],
    },
    applications: {
      zh: [
        "提升耐蝕性（戶外、化工、海洋環境）",
        "提升表面硬度與耐磨耗",
        "達到外觀規格（裝飾、品牌一致性）",
        "符合潔淨需求（半導體、醫療、食品）",
        "電氣絕緣或導電性調整",
      ],
      en: [
        "Improved corrosion resistance (outdoor, chemical, marine)",
        "Enhanced surface hardness and wear resistance",
        "Aesthetic / brand-consistency requirements",
        "Cleanliness requirements (semiconductor, medical, food)",
        "Electrical insulation or conductivity tuning",
      ],
    },
    materials: {
      zh: [
        "鋁合金（陽極、硬陽、鍍膜）",
        "鋼材（淬火、回火、發黑、鍍層）",
        "不鏽鋼（鈍化、拋光、噴砂）",
        "銅合金（拋光、鍍金 / 銀）",
        "鈦合金（陽極、鏡面）",
      ],
      en: [
        "Aluminum alloys (anodizing, hard anodizing, coatings)",
        "Steels (quench, temper, blackening, plating)",
        "Stainless steel (passivation, polishing, sandblasting)",
        "Copper alloys (polishing, gold / silver plating)",
        "Titanium alloys (anodizing, mirror polish)",
      ],
    },
    specs: {
      zh: [
        "鍍層厚度：依規格訂製（標準 5 ~ 25 μm）",
        "陽極厚度：5 ~ 50 μm（含硬陽）",
        "色彩：依客戶指定 RAL / Pantone 色號",
        "可提供處理證明 / SGS 報告",
      ],
      en: [
        "Plating thickness: per spec (typical 5 ~ 25 μm)",
        "Anodizing thickness: 5 ~ 50 μm (incl. hard anodizing)",
        "Color: per customer-specified RAL / Pantone codes",
        "Treatment certificates / SGS reports available",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
];

export type Locale = "zh" | "en";

export function getProcessBySlug(slug: string): Process | undefined {
  return processes.find((p) => p.slug === slug);
}
