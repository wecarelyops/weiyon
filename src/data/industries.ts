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
  {
    slug: "medical",
    title: {
      zh: "醫療器材精密零件加工",
      en: "Medical Device Precision Parts Machining",
    },
    shortTitle: { zh: "醫療", en: "Medical" },
    metaTitle: {
      zh: "醫療器材零件加工 | 生醫不鏽鋼 SUS316L / 純鈦 — 偉勇工業社",
      en: "Medical Device Parts Machining | SUS316L, Pure Titanium — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接醫療器材精密零件加工 — 手術器械、檢測設備機構件、影像系統零件。提供 SUS316L 生醫不鏽鋼、純鈦 Grade 1-4、Ti-6Al-4V ELI、PEEK 等生物相容材料加工經驗。可配合 ISO 13485 供應鏈品管。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines medical device precision parts — surgical instruments, diagnostic equipment mechanisms, imaging system components. Experience with SUS316L medical-grade stainless steel, pure titanium Grade 1-4, Ti-6Al-4V ELI, PEEK and other biocompatible materials. ISO 13485 supply-chain QC compatible. 40-year Taichung shop.",
    },
    heroSubtitle: {
      zh: "生物相容材料、嚴格表面要求、完整追溯 — 偉勇的醫療器材加工",
      en: "Biocompatible materials, strict surface specs, full traceability — Weiyon's medical device machining",
    },
    intro: {
      zh: "醫療器材的零件要面對人體接觸、滅菌循環、長期使用等嚴苛要求。SUS316L 生醫不鏽鋼、純鈦、PEEK 等生物相容材料的加工，需要的不只是精度，更要考慮表面處理、潔淨度與材料追溯。偉勇承接醫療零件多年，能配合醫療器材廠的供應鏈品管流程。",
      en: "Medical device parts face skin contact, sterilization cycles, and long-duration use — demands that go beyond precision alone. Machining biocompatible materials like SUS316L, pure titanium, and PEEK requires careful attention to surface treatment, cleanliness, and material traceability. Weiyon's experience with medical clients lets us fit smoothly into device-maker supply chains.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接醫療零件",
      en: "Why Weiyon for Medical Parts",
    },
    whyPoints: {
      zh: [
        "SUS316L、純鈦、PEEK 等生醫材料加工經驗",
        "表面處理整合：電解拋光、鈍化、鏡面",
        "材質證明（Mill Test Cert）+ 生醫等級認證",
        "完整批次追溯（每批可追溯至原料來源）",
        "可配合 ISO 13485 客戶供應鏈品管",
        "從原型開發到小量量產彈性配合",
      ],
      en: [
        "Experience with SUS316L, pure titanium, and PEEK biomedical materials",
        "Integrated surface treatments: electropolishing, passivation, mirror finish",
        "Mill test certificates + medical-grade material verification",
        "Full batch traceability back to raw material source",
        "Compatible with ISO 13485 customer supply-chain QC",
        "Flexibility from prototyping through low-volume production",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts" },
    parts: {
      zh: [
        "手術器械零件（持針器、夾鉗、鑷類零件）",
        "植入物固定座、生醫鈦合金零件",
        "檢測設備機構件、移動軸零件",
        "影像設備機構件、調整機構",
        "醫療輔具零件、機構連桿",
        "牙科器械精密零件",
      ],
      en: [
        "Surgical instrument parts (needle holders, forceps, tweezer components)",
        "Implant mounting bases, biomedical titanium components",
        "Diagnostic equipment mechanisms, motion-axis parts",
        "Imaging system mechanisms and adjustment assemblies",
        "Medical assistive device parts, mechanism linkages",
        "Dental instrument precision parts",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials" },
    materials: {
      zh: [
        "SUS316L（生醫等級不鏽鋼）",
        "純鈦 Grade 1-4（耐蝕、生物相容）",
        "Ti-6Al-4V ELI（Extra Low Interstitial，生醫植入物用）",
        "PEEK（生物相容工程塑膠）",
        "醫用級鋁合金",
      ],
      en: [
        "SUS316L (medical-grade stainless)",
        "Pure titanium Grade 1-4 (corrosion-resistant, biocompatible)",
        "Ti-6Al-4V ELI (Extra Low Interstitial, for biomedical implants)",
        "PEEK (biocompatible engineering plastic)",
        "Medical-grade aluminum alloys",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards" },
    standards: {
      zh: [
        "公差控制：可達 ±0.005 mm",
        "表面處理：電解拋光、鈍化、Ra 0.2 鏡面",
        "材質證明：Mill Test Cert + 生醫等級認證",
        "包裝：依客戶需求（潔淨包裝可配合）",
        "可配合 ISO 13485 供應鏈品管要求",
      ],
      en: [
        "Tolerance: down to ±0.005 mm",
        "Surface: electropolishing, passivation, Ra 0.2 mirror finish",
        "Mill test certs + medical-grade material verification",
        "Packaging: per customer requirement (cleanroom packaging available)",
        "Compatible with ISO 13485 supply-chain QC",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "automotive",
    title: {
      zh: "汽車零組件精密加工",
      en: "Automotive Precision Parts Machining",
    },
    shortTitle: { zh: "汽車", en: "Automotive" },
    metaTitle: {
      zh: "汽車零件加工 | 引擎 / 傳動 / 底盤精密零件 — 偉勇工業社",
      en: "Automotive Parts Machining | Engine, Drivetrain, Chassis — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接汽車零組件精密加工 — 引擎周邊、傳動系統零件、底盤結構件、車載感測器外殼。SCM440、S45C、A6061、SUS304 等汽車常用材料加工經驗，可配合 IATF 16949 客戶 PPAP 文件、批次追溯需求。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines automotive precision parts — engine peripherals, drivetrain components, chassis structures, automotive sensor housings. Experience with SCM440, S45C, A6061, SUS304, and other automotive materials. Compatible with IATF 16949 customer PPAP and batch traceability. 40-year Taichung shop.",
    },
    heroSubtitle: {
      zh: "量產穩定、規範配合、批次追溯 — 偉勇的汽車零件加工",
      en: "Volume stability, standards compliance, batch traceability — Weiyon's automotive parts machining",
    },
    intro: {
      zh: "汽車產業對量產穩定性、品質一致性、批次追溯的要求都比一般機械業嚴格。從引擎周邊的高溫零件、傳動系統的精密軸，到底盤結構件，每個零件都需要在大批量生產中維持穩定品質。我們能配合汽車零件供應商的 PPAP 文件、批次追溯、抽樣檢驗等品管流程。",
      en: "Automotive demands more volume stability, consistency, and traceability than general machinery. From engine peripherals to drivetrain shafts to chassis structures, each part must hold quality across large production runs. We coordinate with automotive supply chain processes — PPAP documentation, batch traceability, sampling inspection — without missing a beat.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接汽車零件",
      en: "Why Weiyon for Automotive Parts",
    },
    whyPoints: {
      zh: [
        "量產穩定性 — 大批量生產經驗",
        "SCM 系列鉻鉬鋼、易切削碳鋼加工經驗",
        "熱處理整合（淬火、回火、滲碳、氮化）",
        "批次追溯紀錄完整",
        "可配合 IATF 16949 客戶 PPAP 文件需求",
        "抽樣計畫與 SPC 統計製程管制",
      ],
      en: [
        "Volume stability backed by years of large-batch production",
        "Experience with SCM Cr-Mo steel and free-machining carbon steel",
        "Integrated heat treatment (quench, temper, carburize, nitride)",
        "Complete batch traceability records",
        "Compatible with IATF 16949 customer PPAP requirements",
        "Sampling plans and SPC statistical process control",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts" },
    parts: {
      zh: [
        "引擎周邊零件（軸承座、軸類）",
        "傳動系統零件（齒輪、軸、套筒）",
        "底盤結構件、懸吊機構件",
        "車載感測器外殼",
        "制動系統機構件",
        "客製化緊固件（特殊螺絲螺帽）",
      ],
      en: [
        "Engine peripherals (bearing seats, shafts)",
        "Drivetrain components (gears, shafts, sleeves)",
        "Chassis structures, suspension mechanism parts",
        "Sensor housings for automotive electronics",
        "Brake-system mechanism parts",
        "Custom fasteners (special bolts and nuts)",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials" },
    materials: {
      zh: [
        "SCM435 / SCM440（高強度結構鋼）",
        "S45C / S50C（中碳鋼，可熱處理）",
        "A6061 / A2024（鋁合金，輕量化件）",
        "SUS304 / SUS316（耐蝕零件）",
        "銅合金（軸承、襯套）",
      ],
      en: [
        "SCM435 / SCM440 (high-strength structural steel)",
        "S45C / S50C (medium-carbon steel, heat-treatable)",
        "A6061 / A2024 (aluminum alloys for lightweight parts)",
        "SUS304 / SUS316 (corrosion-resistant components)",
        "Copper alloys (bearings, bushings)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards" },
    standards: {
      zh: [
        "公差控制：可達 ±0.005 mm",
        "表面處理：電鍍鋅、發黑、粉體塗裝、達克鋅",
        "熱處理：淬火、回火、滲碳、氮化",
        "批次追溯與 PPAP 文件配合",
        "SPC 統計製程管制（量產訂單）",
      ],
      en: [
        "Tolerance: down to ±0.005 mm",
        "Surface: zinc plating, blackening, powder coating, Dacromet",
        "Heat treatment: quench, temper, carburize, nitride",
        "Batch traceability and PPAP documentation",
        "SPC statistical process control for volume orders",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "automation",
    title: {
      zh: "自動化機械精密零件加工",
      en: "Automation Equipment Precision Parts Machining",
    },
    shortTitle: { zh: "自動化", en: "Automation" },
    metaTitle: {
      zh: "自動化零件加工 | 機器人 / 機構件 / 夾爪 — 偉勇工業社",
      en: "Automation Parts Machining | Robotics, Mechanisms, Grippers — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接自動化機械精密零件加工 — 機器人關節座、線軌座、夾爪、定位塊、滑軌座、感測器固定座等。A6061、SUS304、SUS440C 等自動化常用材料加工，重複精度與長期穩定性兼顧。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines automation equipment precision parts — robot joint mounts, linear-rail seats, grippers, locating blocks, sensor mounts. Experience with A6061, SUS304, SUS440C, and other automation-friendly materials. Repeatability and long-term stability balanced. 40-year Taichung shop.",
    },
    heroSubtitle: {
      zh: "機構件、關節座、夾爪 — 偉勇的自動化零件加工",
      en: "Mechanism parts, joint mounts, grippers — Weiyon's automation parts machining",
    },
    intro: {
      zh: "自動化機械的零件需要在連續運轉中保持精度與穩定性。每個關節座的尺寸、每條導軌的平行度、每個夾爪的重複定位精度，都會直接影響產線良率與效率。我們長期承接機器人手臂、自動化模組、產線設備的精密零件，從機構件的尺寸控制到耐用性都有具體經驗。",
      en: "Automation parts must hold precision and stability across continuous operation. Joint-mount dimensions, linear-rail parallelism, gripper repeatability — every detail flows through to line yield and efficiency. With years of experience machining for robot arms, automation modules, and production line equipment, we know how to control dimensions and durability where it matters.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接自動化零件",
      en: "Why Weiyon for Automation Parts",
    },
    whyPoints: {
      zh: [
        "機構件的尺寸與形位公差控制",
        "鋁合金、不鏽鋼大量加工經驗",
        "可整合陽極氧化、發黑、鈍化等表面處理",
        "長期合作的自動化客戶 — 流程熟悉",
        "從打樣到量產彈性配合",
        "對機構運動精度需求的具體理解",
      ],
      en: [
        "Tight control on dimensions and geometric tolerances of mechanism parts",
        "Extensive aluminum and stainless steel machining",
        "Integrated surface treatments: anodizing, blackening, passivation",
        "Long-term automation clients — familiar with their workflow",
        "Flexibility from prototyping to volume production",
        "Concrete understanding of motion-precision requirements",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts" },
    parts: {
      zh: [
        "機器人關節座、基座",
        "線軌座、滑軌固定座",
        "自動化夾爪、夾治具",
        "定位塊、軸承塊",
        "馬達軸、減速器零件",
        "感測器固定座、限位座",
      ],
      en: [
        "Robot joint mounts and bases",
        "Linear rail seats, slide mounts",
        "Automation grippers, fixturing",
        "Locating blocks, bearing blocks",
        "Motor shafts, gearbox components",
        "Sensor mounts, limit-switch bases",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials" },
    materials: {
      zh: [
        "A6061-T6（最常用，輕量化結構件）",
        "A7075（高強度受力結構件）",
        "SUS304 / SUS440C（耐蝕、可熱處理）",
        "銅合金（軸承、襯套）",
        "POM 工程塑膠（耐磨件、絕緣件）",
      ],
      en: [
        "A6061-T6 (most common, lightweight structures)",
        "A7075 (high-strength load-bearing parts)",
        "SUS304 / SUS440C (corrosion-resistant, heat-treatable)",
        "Copper alloys (bearings, bushings)",
        "POM engineering plastic (wear-resistant, insulating parts)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards" },
    standards: {
      zh: [
        "公差控制：可達 ±0.005 mm",
        "形位公差：平行度、垂直度、平面度檢驗",
        "表面處理：陽極氧化（鋁件）、發黑（鋼件）、鈍化（不鏽鋼）",
        "量測報告 + 形位公差檢驗",
        "可配合客戶供應商品管要求",
      ],
      en: [
        "Tolerance: down to ±0.005 mm",
        "Geometric tolerances: parallelism, perpendicularity, flatness inspected",
        "Surface: anodizing (aluminum), blackening (steel), passivation (stainless)",
        "Measurement reports with geometric tolerance verification",
        "Compatible with customer supplier QC requirements",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/28929510/pexels-photo-28929510.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
];

export type IndustryLocale = "zh" | "en";

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
