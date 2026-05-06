export type Bilingual = { zh: string; en: string; de: string };
export type BilingualList = { zh: string[]; en: string[]; de: string[] };
export type IndustryLocale = "zh" | "en" | "de";

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

// 5 個產業專屬 landing pages（中 / 英 / 德 三語）
export const industries: Industry[] = [
  {
    slug: "semiconductor",
    title: {
      zh: "半導體設備精密零件加工",
      en: "Semiconductor Equipment Precision Parts Machining",
      de: "Präzisionsteile für Halbleiterausrüstung",
    },
    shortTitle: { zh: "半導體", en: "Semiconductor", de: "Halbleiter" },
    metaTitle: {
      zh: "半導體設備零件加工 | 真空腔體 / 晶圓搬運機構 — 偉勇工業社",
      en: "Semiconductor Equipment Parts Machining | Vacuum Chambers, Wafer Handling — Weiyon Industry",
      de: "Halbleiter-Präzisionsteile | Vakuumkammern, Wafer-Handling — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社 40 年加工經驗，專業承接半導體製造設備關鍵零件 — 真空腔體、晶圓搬運機構、機台結構件、氣體閥相關零件。提供 SUS304/316、A6061 加工、Class 100 潔淨包裝、表面處理整合。台中烏日精密加工廠。",
      en: "Weiyon Industry's 40-year experience serves Taiwan's semiconductor industry — vacuum chambers, wafer-handling mechanisms, machine structures, gas / vacuum valve parts. SUS304/316, A6061 machining with Class 100 cleanroom packaging and integrated surface treatment. Based in Taichung.",
      de: "Weiyon Industry — 40 Jahre Erfahrung für Taiwans Halbleiterindustrie. Vakuumkammern, Wafer-Handling-Mechaniken, Maschinenstrukturen, Gas- und Vakuumventilteile. SUS304/316, A6061-Bearbeitung mit Class-100-Reinraumverpackung und integrierter Oberflächenbehandlung. Standort Taichung, Taiwan.",
    },
    heroSubtitle: {
      zh: "40 年加工經驗服務台灣半導體產業 — 嚴格潔淨度、短交期、客戶長期合作",
      en: "40 years serving Taiwan's semiconductor industry — strict cleanliness, short lead times, long-term partnerships",
      de: "40 Jahre für Taiwans Halbleiterindustrie — strenge Reinheit, kurze Lieferzeiten, langjährige Partnerschaften",
    },
    intro: {
      zh: "半導體製程環境嚴苛 — 真空、高潔淨、腐蝕性氣體、超精密配合面。每一個零件的尺寸、材質、表面處理都直接影響晶圓良率。我們長期承接半導體設備零件加工，深知這個產業對品質與時效的雙重要求。",
      en: "Semiconductor processing is unforgiving — vacuum, ultra-clean, corrosive gases, sub-micron mating surfaces. Every dimension, material, and surface finish directly impacts wafer yield. We've supported semiconductor equipment manufacturers for decades and understand the industry's dual demand for quality and speed.",
      de: "Die Halbleiterfertigung verzeiht keine Fehler — Vakuum, Reinstumgebung, korrosive Gase, Passflächen im Submikrometerbereich. Jede Bemaßung, jedes Material und jede Oberfläche wirkt sich direkt auf die Wafer-Ausbeute aus. Seit Jahrzehnten beliefern wir Hersteller von Halbleiterausrüstung und kennen die doppelte Anforderung dieser Branche an Qualität und Termintreue.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接半導體零件",
      en: "Why Weiyon for Semiconductor Parts",
      de: "Warum Weiyon für Halbleiterteile",
    },
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
      de: [
        "40 Jahre Erfahrung mit langjährigen Halbleiterkunden",
        "Lagerbestände gängiger Werkstoffe: SUS304, SUS316, A6061",
        "Integrierte Oberflächenbehandlungen: Elektropolieren, Passivieren, Harteloxieren",
        "Reinraumverpackung Class 100 / Class 10 auf Anfrage",
        "Eilaufträge angenommen — auch wenn andere Werkstätten ablehnen",
        "Vollständige Messprotokolle und Materialrückverfolgbarkeit",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
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
      de: [
        "Vakuumkammer-Komponenten",
        "Wafer-Handling: Endeffektoren, Handlerarme, Greifer",
        "Maschinenstrukturen, Montagesockel, Justiersitze",
        "Gas- und Vakuumventilteile",
        "Reinheitskritische Teile, Mechanikführungen",
        "Wafer-Bearbeitungsvorrichtungen",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
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
      de: [
        "SUS304 / SUS316 / SUS316L (korrosionsbeständig, partikelarm)",
        "A6061-T6 / A7075 (nach Eloxieren einsetzbar)",
        "C1100 / C1220 Reinkupfer (hohe Wärmeleitfähigkeit)",
        "POM, PEEK Konstruktionskunststoffe (fallweise)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards", de: "Qualität & Normen" },
    standards: {
      zh: [
        "公差控制：依客戶圖面要求承接",
        "表面處理：電解拋光、陽極氧化、鈍化",
        "潔淨度：Class 100 / Class 10 包裝",
        "量測報告：尺寸量測書、材質證明（Mill Cert）",
        "可配合 ASTM、JIS、SEMI 規範",
      ],
      en: [
        "Tolerance: per customer drawing specification",
        "Surface: electropolishing, anodizing, passivation",
        "Cleanliness: Class 100 / Class 10 packaging",
        "Documentation: dimensional inspection reports, mill test certs",
        "Compliance with ASTM, JIS, SEMI as required",
      ],
      de: [
        "Toleranzen: gemäß Kundenzeichnung",
        "Oberflächen: Elektropolieren, Eloxieren, Passivieren",
        "Reinheit: Class 100 / Class 10 Verpackung",
        "Dokumentation: Maßprüfberichte, Werksattestate (Mill Cert)",
        "Konform mit ASTM, JIS, SEMI nach Bedarf",
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
      de: "Präzisionsteile für die Luft- und Raumfahrt",
    },
    shortTitle: { zh: "航太", en: "Aerospace", de: "Luft- & Raumfahrt" },
    metaTitle: {
      zh: "航太零件加工 | 鈦合金 / 高強度鋁 / 5 軸 CNC — 偉勇工業社",
      en: "Aerospace Parts Machining | Titanium, High-Strength Aluminum, 5-Axis CNC — Weiyon Industry",
      de: "Luft- & Raumfahrt-Präzisionsteile | Titan, hochfestes Aluminium, 5-Achs-CNC — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接航太精密零件加工 — 衛星零件、無人機機構件、結構骨架接頭、引擎周邊零件。鈦合金（Ti-6Al-4V）、A7075、A2024 等難切削材料加工經驗。提供材質證明、量測報告、追溯紀錄。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines aerospace precision parts — satellite components, UAV mechanisms, structural joints, engine peripherals. Experience with difficult materials including Ti-6Al-4V, A7075, A2024. Material certificates, measurement reports, traceability. 40-year Taichung precision machining shop.",
      de: "Weiyon Industry fertigt Präzisionsteile für die Luft- und Raumfahrt — Satellitenkomponenten, UAV-Mechaniken, Strukturverbinder, Triebwerksperipherie. Erfahrung mit schwer zerspanbaren Werkstoffen wie Ti-6Al-4V, A7075, A2024. Werkszeugnisse, Messprotokolle, Rückverfolgbarkeit. 40 Jahre Präzisionsbearbeitung in Taichung.",
    },
    heroSubtitle: {
      zh: "難切削合金、高精度公差、輕量化結構 — 偉勇的航太加工專長",
      en: "Difficult alloys, tight tolerances, lightweight structures — Weiyon's aerospace expertise",
      de: "Schwer zerspanbare Legierungen, enge Toleranzen, Leichtbaustrukturen — Weiyons Kompetenz für die Luft- und Raumfahrt",
    },
    intro: {
      zh: "航太零件對精度、材料性能、可追溯性的要求都比一般機械業更嚴。鈦合金切削難、A7075 高強度鋁加工易變形、薄壁結構需要精準的應力控制。偉勇承接航太零件多年，掌握難切削材料的加工策略與品管流程，是中小企業航太供應鏈的可靠選項。",
      en: "Aerospace parts demand more — tighter tolerances, exotic materials, full traceability. Titanium is hard to cut, A7075 deforms easily, thin walls require precise stress control. With years of aerospace work, Weiyon has the difficult-material strategies and quality processes that mid-tier aerospace supply chains rely on.",
      de: "Luft- und Raumfahrtteile stellen höhere Anforderungen — engere Toleranzen, exotische Werkstoffe, vollständige Rückverfolgbarkeit. Titan ist schwer zerspanbar, A7075 verzieht sich leicht, dünnwandige Strukturen verlangen präzise Spannungskontrolle. Mit langjähriger Erfahrung in der Luft- und Raumfahrtfertigung verfügt Weiyon über die Strategien und Qualitätsprozesse, auf die mittelständische Luft- und Raumfahrt-Lieferketten angewiesen sind.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接航太零件",
      en: "Why Weiyon for Aerospace Parts",
      de: "Warum Weiyon für Luft- und Raumfahrtteile",
    },
    whyPoints: {
      zh: [
        "鈦合金、Inconel 等難切削材料加工經驗",
        "依航太圖面公差需求承接，含形位公差規範",
        "完整的量測 / 追溯流程",
        "可承接從單件試做到小批量（適合 R&D 階段）",
        "材料供應商 / 表面處理外協廠長期合作",
        "提供材質證明（Mill Test Cert）與檢驗報告",
      ],
      en: [
        "Experience with titanium, Inconel, and other difficult alloys",
        "Tolerance per aerospace drawing specifications, including GD&T",
        "Full measurement and traceability workflow",
        "Single-piece prototyping through small-batch production (R&D-friendly)",
        "Long-term partnerships with material suppliers and surface treatment shops",
        "Mill test certificates and inspection reports provided",
      ],
      de: [
        "Erfahrung mit Titan, Inconel und weiteren schwer zerspanbaren Legierungen",
        "Toleranzen gemäß Luftfahrt-Zeichnungsspezifikation, inkl. GD&T",
        "Vollständiger Mess- und Rückverfolgbarkeits-Workflow",
        "Einzelstück-Prototyping bis zur Kleinserienfertigung (F&E-freundlich)",
        "Langjährige Partnerschaften mit Werkstoff- und Oberflächenbehandlungs-Lieferanten",
        "Werksattestate (Mill Test Cert) und Prüfberichte inklusive",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
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
      de: [
        "Satellitenkomponenten, Strukturbeschläge",
        "UAV-Mechanikteile, Rahmenverbinder",
        "Triebwerksperipherie: hitzebeständige Teile, Lagersitze",
        "Tragflächenstrukturen, leichte tragende Bauteile",
        "Sonderverbindungselemente, Spezialschrauben und -muttern",
        "Prototypen",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
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
      de: [
        "Ti-6Al-4V (Grade 5) — das Standardtitan der Luftfahrt",
        "Reintitan Grade 1-4 (Spezialanwendungen)",
        "A7075-T6 hochfestes Aluminium (tragende Teile)",
        "A2024 ermüdungsbeständiges Aluminium",
        "SUS630 / 17-4PH ausscheidungsgehärteter Edelstahl",
        "Weitere schwer zerspanbare Legierungen wie Inconel (fallweise)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards", de: "Qualität & Normen" },
    standards: {
      zh: [
        "公差控制：依圖面公差規範承接，特殊精度可洽",
        "表面粗糙度：Ra 0.4 ~ Ra 1.6（精車 / 精銑）",
        "材質證明：Mill Test Cert（航太級材料供應）",
        "尺寸檢驗報告：每批附量測紀錄",
        "可配合 AS9100 客戶供應鏈品管要求",
      ],
      en: [
        "Tolerance: per drawing specification, tighter precision on inquiry",
        "Surface finish: Ra 0.4 ~ Ra 1.6 (precision turning / milling)",
        "Material certs: aerospace-grade Mill Test Certificates",
        "Dimensional reports: measurement records per batch",
        "Compatible with AS9100 customer supply-chain QC requirements",
      ],
      de: [
        "Toleranzen: gemäß Zeichnungsspezifikation, engere Werte auf Anfrage",
        "Oberflächengüte: Ra 0,4 – Ra 1,6 (Präzisionsdrehen / -fräsen)",
        "Werkszeugnisse: Mill Test Certificates in Luftfahrtqualität",
        "Maßprüfberichte: Messprotokolle pro Charge",
        "Kompatibel mit AS9100-Anforderungen der Kundenlieferkette",
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
      de: "Präzisionsteile für die Medizintechnik",
    },
    shortTitle: { zh: "醫療", en: "Medical", de: "Medizintechnik" },
    metaTitle: {
      zh: "醫療器材零件加工 | 生醫不鏽鋼 SUS316L / 純鈦 — 偉勇工業社",
      en: "Medical Device Parts Machining | SUS316L, Pure Titanium — Weiyon Industry",
      de: "Medizintechnik-Präzisionsteile | SUS316L, Reintitan — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接醫療器材精密零件加工 — 手術器械、檢測設備機構件、影像系統零件。提供 SUS316L 生醫不鏽鋼、純鈦 Grade 1-4、Ti-6Al-4V ELI、PEEK 等生物相容材料加工經驗。可配合 ISO 13485 供應鏈品管。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines medical device precision parts — surgical instruments, diagnostic equipment mechanisms, imaging system components. Experience with SUS316L medical-grade stainless steel, pure titanium Grade 1-4, Ti-6Al-4V ELI, PEEK and other biocompatible materials. ISO 13485 supply-chain QC compatible. 40-year Taichung shop.",
      de: "Weiyon Industry fertigt Präzisionsteile für die Medizintechnik — Operationsinstrumente, Diagnosegerätemechaniken, Bildgebungskomponenten. Erfahrung mit SUS316L medizinischem Edelstahl, Reintitan Grade 1-4, Ti-6Al-4V ELI, PEEK und weiteren biokompatiblen Werkstoffen. Kompatibel mit ISO-13485-Lieferketten-QM. 40 Jahre Präzisionsbearbeitung in Taichung.",
    },
    heroSubtitle: {
      zh: "生物相容材料、嚴格表面要求、完整追溯 — 偉勇的醫療器材加工",
      en: "Biocompatible materials, strict surface specs, full traceability — Weiyon's medical device machining",
      de: "Biokompatible Werkstoffe, strenge Oberflächenanforderungen, lückenlose Rückverfolgbarkeit — Weiyons Medizintechnik-Fertigung",
    },
    intro: {
      zh: "醫療器材的零件要面對人體接觸、滅菌循環、長期使用等嚴苛要求。SUS316L 生醫不鏽鋼、純鈦、PEEK 等生物相容材料的加工，需要的不只是精度，更要考慮表面處理、潔淨度與材料追溯。偉勇承接醫療零件多年，能配合醫療器材廠的供應鏈品管流程。",
      en: "Medical device parts face skin contact, sterilization cycles, and long-duration use — demands that go beyond precision alone. Machining biocompatible materials like SUS316L, pure titanium, and PEEK requires careful attention to surface treatment, cleanliness, and material traceability. Weiyon's experience with medical clients lets us fit smoothly into device-maker supply chains.",
      de: "Medizintechnikteile sind Hautkontakt, Sterilisationszyklen und Langzeiteinsatz ausgesetzt — Anforderungen, die über reine Präzision hinausgehen. Die Bearbeitung biokompatibler Werkstoffe wie SUS316L, Reintitan und PEEK erfordert sorgfältige Berücksichtigung von Oberflächenbehandlung, Reinheit und Materialrückverfolgbarkeit. Weiyons langjährige Erfahrung mit Medizinkunden erlaubt eine reibungslose Integration in Lieferketten von Geräteherstellern.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接醫療零件",
      en: "Why Weiyon for Medical Parts",
      de: "Warum Weiyon für Medizintechnikteile",
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
      de: [
        "Erfahrung mit SUS316L, Reintitan und PEEK als biomedizinische Werkstoffe",
        "Integrierte Oberflächenbehandlungen: Elektropolieren, Passivieren, Hochglanz",
        "Werkszeugnisse plus medizinische Werkstoffprüfung",
        "Vollständige Chargenrückverfolgbarkeit bis zum Rohmaterial",
        "Kompatibel mit ISO-13485-QM in Kundenlieferketten",
        "Flexibilität vom Prototyp bis zur Kleinserie",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
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
      de: [
        "Operationsinstrumententeile (Nadelhalter, Zangen, Pinzettenkomponenten)",
        "Implantatträger, Titan-Komponenten für die Biomedizin",
        "Diagnosegerätemechaniken, Bewegungsachsenteile",
        "Bildgebungssysteme: Mechaniken und Justierbaugruppen",
        "Medizinische Hilfsmittel, Mechanikgestänge",
        "Dentalinstrumente in Präzisionsausführung",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
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
      de: [
        "SUS316L (medizinischer Edelstahl)",
        "Reintitan Grade 1-4 (korrosionsbeständig, biokompatibel)",
        "Ti-6Al-4V ELI (Extra Low Interstitial, für biomedizinische Implantate)",
        "PEEK (biokompatibler Konstruktionskunststoff)",
        "Aluminiumlegierungen in Medizinqualität",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards", de: "Qualität & Normen" },
    standards: {
      zh: [
        "公差控制：依客戶圖面要求承接",
        "表面處理：電解拋光、鈍化、Ra 0.2 鏡面",
        "材質證明：Mill Test Cert + 生醫等級認證",
        "包裝：依客戶需求（潔淨包裝可配合）",
        "可配合 ISO 13485 供應鏈品管要求",
      ],
      en: [
        "Tolerance: per customer drawing specification",
        "Surface: electropolishing, passivation, Ra 0.2 mirror finish",
        "Mill test certs + medical-grade material verification",
        "Packaging: per customer requirement (cleanroom packaging available)",
        "Compatible with ISO 13485 supply-chain QC",
      ],
      de: [
        "Toleranzen: gemäß Kundenzeichnung",
        "Oberflächen: Elektropolieren, Passivieren, Ra 0,2 Hochglanz",
        "Werkszeugnisse plus medizinische Werkstoffprüfung",
        "Verpackung: nach Kundenanforderung (Reinraumverpackung möglich)",
        "Kompatibel mit ISO-13485-Lieferketten-QM",
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
      de: "Präzisionsteile für die Automobilindustrie",
    },
    shortTitle: { zh: "汽車", en: "Automotive", de: "Automobil" },
    metaTitle: {
      zh: "汽車零件加工 | 引擎 / 傳動 / 底盤精密零件 — 偉勇工業社",
      en: "Automotive Parts Machining | Engine, Drivetrain, Chassis — Weiyon Industry",
      de: "Automobilteile-Bearbeitung | Motor, Antriebsstrang, Fahrwerk — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接汽車零組件精密加工 — 引擎周邊、傳動系統零件、底盤結構件、車載感測器外殼。SCM440、S45C、A6061、SUS304 等汽車常用材料加工經驗，可配合 IATF 16949 客戶 PPAP 文件、批次追溯需求。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines automotive precision parts — engine peripherals, drivetrain components, chassis structures, automotive sensor housings. Experience with SCM440, S45C, A6061, SUS304, and other automotive materials. Compatible with IATF 16949 customer PPAP and batch traceability. 40-year Taichung shop.",
      de: "Weiyon Industry fertigt Präzisionsteile für die Automobilindustrie — Motorperipherie, Antriebsstrangteile, Fahrwerksstrukturen, Sensorgehäuse. Erfahrung mit SCM440, S45C, A6061, SUS304 und weiteren Automobilwerkstoffen. Kompatibel mit IATF-16949-PPAP-Anforderungen und Chargenrückverfolgbarkeit. 40 Jahre Präzisionsbearbeitung in Taichung.",
    },
    heroSubtitle: {
      zh: "量產穩定、規範配合、批次追溯 — 偉勇的汽車零件加工",
      en: "Volume stability, standards compliance, batch traceability — Weiyon's automotive parts machining",
      de: "Serienstabilität, Normenkonformität, Chargenrückverfolgbarkeit — Weiyons Automobilteilefertigung",
    },
    intro: {
      zh: "汽車產業對量產穩定性、品質一致性、批次追溯的要求都比一般機械業嚴格。從引擎周邊的高溫零件、傳動系統的精密軸，到底盤結構件，每個零件都需要在大批量生產中維持穩定品質。我們能配合汽車零件供應商的 PPAP 文件、批次追溯、抽樣檢驗等品管流程。",
      en: "Automotive demands more volume stability, consistency, and traceability than general machinery. From engine peripherals to drivetrain shafts to chassis structures, each part must hold quality across large production runs. We coordinate with automotive supply chain processes — PPAP documentation, batch traceability, sampling inspection — without missing a beat.",
      de: "Die Automobilindustrie fordert mehr Serienstabilität, Konsistenz und Rückverfolgbarkeit als der allgemeine Maschinenbau. Von Motorperipherie über Antriebswellen bis zu Fahrwerksstrukturen muss jedes Teil seine Qualität über große Serienläufe halten. Wir bedienen Lieferketten-Prozesse der Automobilindustrie — PPAP-Dokumentation, Chargenrückverfolgbarkeit, Stichprobenprüfung — ohne Reibungsverluste.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接汽車零件",
      en: "Why Weiyon for Automotive Parts",
      de: "Warum Weiyon für Automobilteile",
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
      de: [
        "Serienstabilität auf Basis langjähriger Großserienfertigung",
        "Erfahrung mit SCM Cr-Mo-Stahl und automatenfähigem Kohlenstoffstahl",
        "Integrierte Wärmebehandlung (Härten, Anlassen, Aufkohlen, Nitrieren)",
        "Vollständige Chargenrückverfolgbarkeit",
        "Kompatibel mit IATF-16949-PPAP-Anforderungen",
        "Stichprobenpläne und statistische Prozessregelung (SPC)",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
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
      de: [
        "Motorperipherie (Lagersitze, Wellen)",
        "Antriebsstrangteile (Zahnräder, Wellen, Hülsen)",
        "Fahrwerksstrukturen, Aufhängungsmechaniken",
        "Sensorgehäuse für Fahrzeugelektronik",
        "Bremsanlagen-Mechanikteile",
        "Sonderverbindungselemente (Spezialschrauben und -muttern)",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
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
      de: [
        "SCM435 / SCM440 (hochfester Konstruktionsstahl)",
        "S45C / S50C (mittlerer Kohlenstoffstahl, härtbar)",
        "A6061 / A2024 (Aluminiumlegierungen für Leichtbau)",
        "SUS304 / SUS316 (korrosionsbeständige Bauteile)",
        "Kupferlegierungen (Lager, Buchsen)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards", de: "Qualität & Normen" },
    standards: {
      zh: [
        "公差控制：依客戶圖面要求承接",
        "表面處理：電鍍鋅、發黑、粉體塗裝、達克鋅",
        "熱處理：淬火、回火、滲碳、氮化",
        "批次追溯與 PPAP 文件配合",
        "SPC 統計製程管制（量產訂單）",
      ],
      en: [
        "Tolerance: per customer drawing specification",
        "Surface: zinc plating, blackening, powder coating, Dacromet",
        "Heat treatment: quench, temper, carburize, nitride",
        "Batch traceability and PPAP documentation",
        "SPC statistical process control for volume orders",
      ],
      de: [
        "Toleranzen: gemäß Kundenzeichnung",
        "Oberflächen: Verzinken, Brünieren, Pulverbeschichten, Dacromet",
        "Wärmebehandlung: Härten, Anlassen, Aufkohlen, Nitrieren",
        "Chargenrückverfolgbarkeit und PPAP-Dokumentation",
        "SPC-Prozessregelung für Serienaufträge",
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
      de: "Präzisionsteile für die Automatisierungstechnik",
    },
    shortTitle: { zh: "自動化", en: "Automation", de: "Automatisierung" },
    metaTitle: {
      zh: "自動化零件加工 | 機器人 / 機構件 / 夾爪 — 偉勇工業社",
      en: "Automation Parts Machining | Robotics, Mechanisms, Grippers — Weiyon Industry",
      de: "Automatisierungs-Präzisionsteile | Robotik, Mechaniken, Greifer — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接自動化機械精密零件加工 — 機器人關節座、線軌座、夾爪、定位塊、滑軌座、感測器固定座等。A6061、SUS304、SUS440C 等自動化常用材料加工，重複精度與長期穩定性兼顧。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines automation equipment precision parts — robot joint mounts, linear-rail seats, grippers, locating blocks, sensor mounts. Experience with A6061, SUS304, SUS440C, and other automation-friendly materials. Repeatability and long-term stability balanced. 40-year Taichung shop.",
      de: "Weiyon Industry fertigt Präzisionsteile für die Automatisierungstechnik — Robotergelenkträger, Linearschienensitze, Greifer, Positionsblöcke, Sensorhalter. Erfahrung mit A6061, SUS304, SUS440C und weiteren automatisierungsgeeigneten Werkstoffen. Wiederholgenauigkeit und Langzeitstabilität im Gleichgewicht. 40 Jahre Präzisionsbearbeitung in Taichung.",
    },
    heroSubtitle: {
      zh: "機構件、關節座、夾爪 — 偉勇的自動化零件加工",
      en: "Mechanism parts, joint mounts, grippers — Weiyon's automation parts machining",
      de: "Mechanikteile, Gelenkträger, Greifer — Weiyons Fertigung für Automatisierungsteile",
    },
    intro: {
      zh: "自動化機械的零件需要在連續運轉中保持精度與穩定性。每個關節座的尺寸、每條導軌的平行度、每個夾爪的重複定位精度，都會直接影響產線良率與效率。我們長期承接機器人手臂、自動化模組、產線設備的精密零件，從機構件的尺寸控制到耐用性都有具體經驗。",
      en: "Automation parts must hold precision and stability across continuous operation. Joint-mount dimensions, linear-rail parallelism, gripper repeatability — every detail flows through to line yield and efficiency. With years of experience machining for robot arms, automation modules, and production line equipment, we know how to control dimensions and durability where it matters.",
      de: "Automatisierungsteile müssen Präzision und Stabilität im Dauerbetrieb halten. Maße der Gelenkträger, Parallelität der Linearschienen, Wiederholgenauigkeit der Greifer — jedes Detail wirkt sich auf Linienausbeute und Effizienz aus. Mit langjähriger Erfahrung in der Bearbeitung von Roboterarmen, Automatisierungsmodulen und Produktionsanlagen wissen wir, wie sich Maßhaltigkeit und Lebensdauer dort kontrollieren lassen, wo es zählt.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接自動化零件",
      en: "Why Weiyon for Automation Parts",
      de: "Warum Weiyon für Automatisierungsteile",
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
      de: [
        "Strenge Kontrolle von Maßen und Form-/Lagetoleranzen an Mechanikteilen",
        "Umfangreiche Bearbeitung von Aluminium und Edelstahl",
        "Integrierte Oberflächenbehandlungen: Eloxieren, Brünieren, Passivieren",
        "Langjährige Automatisierungskunden — vertraut mit deren Arbeitsabläufen",
        "Flexibilität vom Prototyp bis zur Serie",
        "Konkretes Verständnis für Bewegungs- und Präzisionsanforderungen",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
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
      de: [
        "Robotergelenkträger und Grundgestelle",
        "Linearschienensitze, Schlittenhalterungen",
        "Automatisierungsgreifer, Vorrichtungen",
        "Positionsblöcke, Lagerblöcke",
        "Motorwellen, Getriebekomponenten",
        "Sensorhalter, Endschaltersockel",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
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
      de: [
        "A6061-T6 (am häufigsten verwendet, Leichtbaustrukturen)",
        "A7075 (hochfeste tragende Bauteile)",
        "SUS304 / SUS440C (korrosionsbeständig, härtbar)",
        "Kupferlegierungen (Lager, Buchsen)",
        "POM Konstruktionskunststoff (verschleißfest, isolierend)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards", de: "Qualität & Normen" },
    standards: {
      zh: [
        "公差控制：依客戶圖面要求承接",
        "形位公差：平行度、垂直度、平面度檢驗",
        "表面處理：陽極氧化（鋁件）、發黑（鋼件）、鈍化（不鏽鋼）",
        "量測報告 + 形位公差檢驗",
        "可配合客戶供應商品管要求",
      ],
      en: [
        "Tolerance: per customer drawing specification",
        "Geometric tolerances: parallelism, perpendicularity, flatness inspected",
        "Surface: anodizing (aluminum), blackening (steel), passivation (stainless)",
        "Measurement reports with geometric tolerance verification",
        "Compatible with customer supplier QC requirements",
      ],
      de: [
        "Toleranzen: gemäß Kundenzeichnung",
        "Form-/Lagetoleranzen: Prüfung von Parallelität, Rechtwinkligkeit, Ebenheit",
        "Oberflächen: Eloxieren (Aluminium), Brünieren (Stahl), Passivieren (Edelstahl)",
        "Messprotokolle mit Form-/Lagetoleranzprüfung",
        "Kompatibel mit Lieferanten-QM-Anforderungen der Kunden",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/28929510/pexels-photo-28929510.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "tuning",
    title: {
      zh: "改裝車零件精密加工",
      en: "Aftermarket & Tuning Parts Machining",
      de: "Tuning- und Aftermarket-Teile",
    },
    shortTitle: { zh: "改裝車", en: "Tuning", de: "Tuning" },
    metaTitle: {
      zh: "改裝車零件加工 | 排氣 / 進氣 / 底盤強化件 — 偉勇工業社",
      en: "Aftermarket & Tuning Parts | Exhaust, Intake, Chassis — Weiyon Industry",
      de: "Tuning-Teile-Bearbeitung | Auspuff, Ansaugung, Fahrwerk — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接改裝車零件精密加工 — 排氣管路、進氣管段、防傾桿座、引擎室件、底盤強化件、客製化緊固件。SUS304、A6061、SCM440 等改裝常用材料，從 1 件起接、設計修正彈性配合、表面處理整合。台中 40 年精密加工廠，改裝品牌與車隊長期合作。",
      en: "Weiyon Industry machines aftermarket and tuning parts — exhaust piping, intake components, anti-roll bar mounts, engine bay parts, chassis bracing, custom fasteners. SUS304, A6061, SCM440 and more. From 1 piece up, flexible revisions, integrated surface finishes. 40-year Taichung shop trusted by tuning brands and racing teams.",
      de: "Weiyon Industry fertigt Tuning- und Aftermarket-Teile — Auspuffrohre, Ansaugkomponenten, Stabilisatorhalter, Motorraumteile, Fahrwerksverstärkungen, Sonderverbindungselemente. SUS304, A6061, SCM440 u. v. m. Ab 1 Stück, flexible Anpassungen, integrierte Oberflächen. 40 Jahre Präzisionsbearbeitung in Taichung — Partner für Tuning-Marken und Rennteams.",
    },
    heroSubtitle: {
      zh: "排氣 / 進氣 / 底盤 / 引擎室 — 改裝品牌與車隊的精密加工夥伴",
      en: "Exhaust, intake, chassis, engine bay — your precision partner for tuning brands and racing teams",
      de: "Auspuff, Ansaugung, Fahrwerk, Motorraum — Ihr Präzisionspartner für Tuning-Marken und Rennteams",
    },
    intro: {
      zh: "改裝車市場跟一般 OEM 不同 — 訂單常以單件、小批量為主，客戶要的是設計自由度、表面質感、與短交期。從一條客製排氣中段、一組防傾桿座到一個 catch can 固定架，每個案子都需要工廠能配合靈活的設計修正、提供漂亮的成品外觀。我們長期承接改裝品牌、車隊、與個人玩家的客製需求。",
      en: "Aftermarket isn't OEM — orders are often single-piece or small-batch, and clients prize design freedom, surface quality, and quick turnaround. From a custom exhaust section to anti-roll bar mounts to a catch-can bracket, each project needs a shop that handles flexible revisions and produces parts that look as good as they perform. We've supported tuning brands, racing teams, and enthusiasts on countless one-off and short-run projects.",
      de: "Aftermarket ist kein OEM-Geschäft — Aufträge sind meist Einzelstücke oder Kleinserien, und Kunden legen Wert auf Designfreiheit, Oberflächenqualität und schnelle Durchlaufzeit. Vom maßgefertigten Mittelschalldämpfer über Stabilisatorhalter bis zur Catch-Can-Halterung braucht jedes Projekt eine Werkstatt, die flexibel auf Konstruktionsänderungen reagiert und Teile liefert, die genauso gut aussehen wie sie funktionieren. Wir unterstützen Tuning-Marken, Rennteams und Enthusiasten seit Jahren bei Einzelanfertigungen und Kleinserien.",
    },
    whyTitle: {
      zh: "為什麼改裝品牌選擇偉勇",
      en: "Why Tuning Brands Choose Weiyon",
      de: "Warum Tuning-Marken sich für Weiyon entscheiden",
    },
    whyPoints: {
      zh: [
        "1 件起接，沒有最低量門檻 — 試做、客製、收藏件都接",
        "設計修正配合度高 — 改裝件常邊做邊調，我們配合",
        "SUS304 / 不鏽鋼髮絲、鏡面拋光整合",
        "A6061 陽極處理（黑、紅、藍、灰、消光），CNC 刀痕保留可指定",
        "短交期 — 急件可協調 5-7 天內出貨",
        "直接面對玩家、工作室、車隊，溝通沒有層層轉達",
      ],
      en: [
        "1-piece minimum — prototypes, customs, one-offs all welcome",
        "Flexible design revisions — aftermarket parts often iterate during production",
        "Integrated brushed and mirror polishing for SUS304 and stainless",
        "A6061 anodizing in black / red / blue / grey / matte; CNC tool-mark retention on request",
        "Short lead times — rush orders can ship within 5-7 days",
        "Direct communication with enthusiasts, tuning shops, racing teams — no layered handoffs",
      ],
      de: [
        "Ab 1 Stück — Prototypen, Sonderanfertigungen, Einzelstücke willkommen",
        "Flexible Konstruktionsänderungen — Tuning-Teile werden oft während der Fertigung angepasst",
        "Integriertes Schliff- und Spiegelpolieren für SUS304 und Edelstahl",
        "A6061-Eloxierung in Schwarz / Rot / Blau / Grau / Matt; CNC-Fräsriefen auf Wunsch erhalten",
        "Kurze Lieferzeiten — Eilaufträge in 5-7 Tagen versandbereit",
        "Direkte Kommunikation mit Enthusiasten, Tuning-Werkstätten und Rennteams — ohne Zwischenstationen",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
    parts: {
      zh: [
        "排氣管路：中段、尾段、頭段法蘭、消音器外殼",
        "進氣管段：濾芯固定座、節氣門連接管、進氣歧管法蘭",
        "底盤強化件：防傾桿座、引擎室拉桿、底盤連桿",
        "引擎室件：catch can 固定座、機油冷卻器座、渦輪 / 中冷器管路法蘭",
        "輪圈墊片、輪圈轉接座（hub-centric）",
        "客製緊固件、油管接頭、特殊螺絲螺帽",
      ],
      en: [
        "Exhaust system: mid-section, tail section, header flanges, muffler housings",
        "Intake parts: air filter mounts, throttle body adapters, manifold flanges",
        "Chassis bracing: anti-roll bar mounts, engine bay strut bars, chassis links",
        "Engine bay: catch-can mounts, oil cooler brackets, turbo / IC piping flanges",
        "Wheel spacers, hub-centric wheel adapters",
        "Custom fasteners, fluid line fittings, special bolts and nuts",
      ],
      de: [
        "Abgasanlage: Mittelteil, Endrohrabschnitt, Krümmerflansche, Schalldämpfergehäuse",
        "Ansaugteile: Luftfilterhalter, Drosselklappenadapter, Ansaugkrümmerflansche",
        "Fahrwerksverstärkung: Stabilisatorhalter, Motorraum-Domstreben, Fahrwerksstreben",
        "Motorraum: Catch-Can-Halter, Ölkühlerhalter, Turbo- / Ladeluftrohrflansche",
        "Distanzscheiben, hub-zentrische Spurplatten",
        "Sonderverbindungselemente, Fluidanschlüsse, Spezialschrauben und -muttern",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
    materials: {
      zh: [
        "SUS304 / SUS316 / SUS321（耐高溫排氣件首選）",
        "A6061-T6 / A7075（輕量化結構、可陽極處理）",
        "SCM440 / S45C（高強度受力件、可熱處理）",
        "鈦合金 Ti-6Al-4V（高階改裝排氣 / 輕量化）",
        "銅合金（接點、特殊接頭）",
      ],
      en: [
        "SUS304 / SUS316 / SUS321 (top choice for high-temp exhaust)",
        "A6061-T6 / A7075 (lightweight, anodizable)",
        "SCM440 / S45C (high-strength load-bearing, heat-treatable)",
        "Titanium Ti-6Al-4V (premium exhaust / weight reduction)",
        "Copper alloys (contacts, specialty fittings)",
      ],
      de: [
        "SUS304 / SUS316 / SUS321 (erste Wahl für Hochtemperatur-Abgas)",
        "A6061-T6 / A7075 (leicht, eloxierbar)",
        "SCM440 / S45C (hochfest tragend, härtbar)",
        "Titan Ti-6Al-4V (Premium-Auspuff / Gewichtsreduktion)",
        "Kupferlegierungen (Kontakte, Spezialanschlüsse)",
      ],
    },
    standardsTitle: { zh: "規格與表面處理", en: "Quality & Finish", de: "Qualität & Oberfläche" },
    standards: {
      zh: [
        "公差控制：±0.01 ~ ±0.05 mm（依零件性質彈性調整）",
        "陽極處理：黑、紅、藍、灰、消光（鋁件）",
        "不鏽鋼處理：髮絲、鏡面拋光、噴砂",
        "雷雕 logo / 序號（合作品牌可代雕）",
        "焊接整合：TIG 焊接 SUS / 鈦（透過合作廠）",
      ],
      en: [
        "Tolerance: ±0.01 ~ ±0.05 mm depending on part type",
        "Anodizing: black, red, blue, grey, matte (aluminum parts)",
        "Stainless finishes: brushed, mirror polish, bead-blasted",
        "Laser engraving for logos / serial numbers (we engrave for partner brands)",
        "Integrated welding: TIG for stainless and titanium (via partner shop)",
      ],
      de: [
        "Toleranzen: ±0,01 bis ±0,05 mm je nach Bauteil",
        "Eloxieren: Schwarz, Rot, Blau, Grau, Matt (Aluminiumteile)",
        "Edelstahl-Oberflächen: Schliff, Spiegelpolitur, Strahlen",
        "Lasergravur für Logos / Seriennummern (auf Wunsch für Partnermarken)",
        "Integriertes Schweißen: TIG für Edelstahl und Titan (über Partnerbetrieb)",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
  {
    slug: "oil-gas",
    title: {
      zh: "油氣產業精密金屬零件加工",
      en: "Oil & Gas Precision Parts Machining",
      de: "Präzisionsteile für die Öl- und Gasindustrie",
    },
    shortTitle: { zh: "油氣", en: "Oil & Gas", de: "Öl & Gas" },
    metaTitle: {
      zh: "油氣零件加工 | 閥門內件 / 法蘭 / 泵浦零件 — 偉勇工業社",
      en: "Oil & Gas Precision Parts | Valve Internals, Flanges, Pump Parts — Weiyon Industry",
      de: "Öl- & Gas-Präzisionsteile | Ventilteile, Flansche, Pumpenteile — Weiyon Industry",
    },
    metaDescription: {
      zh: "偉勇工業社承接油氣產業精密金屬零件加工 — 閥門內件（seat / disc / stem / bonnet）、管接頭、法蘭、泵浦零件、Christmas tree 配件、儀錶接頭。對應 SUS316L、Duplex、Super Duplex、Inconel、Monel 等耐蝕難切削合金。可配合 API 6A、API 6D、NORSOK M-650 客戶供應鏈品管。服務 GCC（UAE / 沙烏地 / 卡達 / 科威特 / 阿曼）油氣 MRO 與 EPC 採購鏈。台中 40 年精密加工廠。",
      en: "Weiyon Industry machines oil & gas precision parts — valve internals (seat, disc, stem, bonnet), pipe fittings, flanges, pump components, Christmas tree fittings, instrument connectors. Compatible with SUS316L, Duplex, Super Duplex, Inconel, Monel. Supports API 6A, API 6D, NORSOK M-650 customer QC. Serving GCC (UAE, Saudi, Qatar, Kuwait, Oman) oil & gas MRO and EPC supply chains. 40-year Taichung precision machining shop.",
      de: "Weiyon Industry fertigt Öl- & Gas-Präzisionsteile — Ventilinnenteile (Sitz, Scheibe, Spindel, Haube), Rohrverbindungen, Flansche, Pumpenteile, Christmas-Tree-Komponenten, Instrumentenanschlüsse. Verarbeitet SUS316L, Duplex, Super Duplex, Inconel, Monel. Konform mit API 6A, API 6D, NORSOK M-650 in Kundenlieferketten. Bedient GCC-Öl- & Gas-MRO sowie EPC-Lieferketten (VAE, Saudi-Arabien, Katar, Kuwait, Oman). 40 Jahre Präzisionsbearbeitung in Taichung.",
    },
    heroSubtitle: {
      zh: "閥門內件、法蘭、泵浦零件 — 對應 GCC 與全球油氣供應鏈的精密加工",
      en: "Valve internals, flanges, pump parts — precision machining for GCC and global oil & gas supply chains",
      de: "Ventilinnenteile, Flansche, Pumpenteile — Präzisionsbearbeitung für GCC und globale Öl- und Gas-Lieferketten",
    },
    intro: {
      zh: "油氣產業的金屬零件，要面對高溫、高壓、強腐蝕、含硫氣體、海水浸泡等嚴苛環境。閥門內件的密封、法蘭的尺寸精度、泵浦零件的耐蝕性 — 任何一處失效，輕則停機損失，重則人員傷亡。我們對應 SUS316L、Duplex、Super Duplex、Inconel 等耐蝕難切削合金多年，能配合歐美閥門品牌（Cameron、Emerson、Flowserve、KSB 等）的 OEM 供應鏈品管，也能配合中東 EPC 承包商與 NOC distributor 的採購要求。",
      en: "Oil & gas parts face extreme conditions — high temperature, high pressure, corrosive media, sour gas, seawater immersion. Valve seal integrity, flange dimensional accuracy, pump corrosion resistance — any failure means downtime at best, casualties at worst. We've worked with SUS316L, Duplex, Super Duplex, Inconel, and other corrosion-resistant difficult alloys for years. We support OEM supply chains for European/American valve brands (Cameron, Emerson, Flowserve, KSB) and procurement requirements from Middle East EPC contractors and NOC distributors.",
      de: "Öl- und Gasteile sind extremen Bedingungen ausgesetzt — hohe Temperaturen, hoher Druck, korrosive Medien, Sauergas, Meerwasser. Ventildichtheit, Flanschmaßgenauigkeit, Pumpen-Korrosionsbeständigkeit — jeder Fehler bedeutet bestenfalls Stillstand, schlimmstenfalls Verluste. Wir bearbeiten seit Jahren SUS316L, Duplex, Super Duplex, Inconel und weitere korrosionsbeständige, schwer zerspanbare Legierungen. Wir bedienen OEM-Lieferketten europäischer und amerikanischer Ventilmarken (Cameron, Emerson, Flowserve, KSB) sowie Beschaffungsanforderungen von EPC-Auftragnehmern und NOC-Vertriebshändlern im Nahen Osten.",
    },
    whyTitle: {
      zh: "為什麼選擇偉勇承接油氣零件",
      en: "Why Weiyon for Oil & Gas Parts",
      de: "Warum Weiyon für Öl- und Gasteile",
    },
    whyPoints: {
      zh: [
        "40 年難切削材料加工經驗 — Inconel、Duplex、Monel 為熟悉領域",
        "SUS316L、Duplex、Super Duplex 庫存與穩定供應",
        "可整合熱處理、表面處理、量測 / FAI 報告",
        "材質證明（Mill Test Cert）+ 完整批次追溯",
        "短交期配合海外油氣 MRO 急件需求",
        "與歐美閥門品牌 OEM 代工經驗 — 熟悉供應鏈品管流程",
      ],
      en: [
        "40 years of experience with difficult alloys — Inconel, Duplex, Monel are familiar territory",
        "Stock and steady supply of SUS316L, Duplex, Super Duplex",
        "Integrated heat treatment, surface treatment, measurement / FAI reports",
        "Mill Test Certificates + complete batch traceability",
        "Short lead times for offshore oil & gas MRO rush orders",
        "OEM experience with European/American valve brands — fluent in supply chain QC",
      ],
      de: [
        "40 Jahre Erfahrung mit schwer zerspanbaren Legierungen — Inconel, Duplex, Monel als vertrautes Terrain",
        "Bestand und stetige Versorgung mit SUS316L, Duplex, Super Duplex",
        "Integrierte Wärmebehandlung, Oberflächenbehandlung, Messung / FAI-Berichte",
        "Werkszeugnisse (Mill Test Cert) + vollständige Chargenrückverfolgbarkeit",
        "Kurze Lieferzeiten für Offshore-Öl- und Gas-MRO-Eilaufträge",
        "OEM-Erfahrung mit europäischen und amerikanischen Ventilmarken — vertraut mit Lieferketten-QM",
      ],
    },
    partsTitle: { zh: "常見承接零件", en: "Typical Parts", de: "Typische Bauteile" },
    parts: {
      zh: [
        "閥門內件：seat、disc、stem、bonnet、ball、gate",
        "法蘭：raised face、ring type joint (RTJ)、blind flange",
        "管接頭、儀錶接頭、卡套接頭",
        "泵浦零件：軸、葉輪、密封座、襯套",
        "Christmas tree 配件、井口設備周邊件",
        "緊固件：高強度螺栓、螺帽（B7 / 2H、B16 / 4 等）",
      ],
      en: [
        "Valve internals: seat, disc, stem, bonnet, ball, gate",
        "Flanges: raised face, ring type joint (RTJ), blind flange",
        "Pipe fittings, instrument fittings, ferrule fittings",
        "Pump parts: shafts, impellers, mechanical seal seats, sleeves",
        "Christmas tree fittings, wellhead peripherals",
        "Fasteners: high-strength bolts and nuts (B7 / 2H, B16 / 4 etc.)",
      ],
      de: [
        "Ventilinnenteile: Sitz, Scheibe, Spindel, Haube, Kugel, Schieber",
        "Flansche: Vorsprung-Dichtfläche, Ring-Joint (RTJ), Blindflansch",
        "Rohrverbindungen, Instrumentenanschlüsse, Klemmringverschraubungen",
        "Pumpenteile: Wellen, Laufräder, Gleitringdichtungssitze, Hülsen",
        "Christmas-Tree-Komponenten, Bohrlochkopf-Peripherie",
        "Verbindungselemente: hochfeste Schrauben und Muttern (B7 / 2H, B16 / 4 usw.)",
      ],
    },
    materialsTitle: { zh: "對應材料", en: "Compatible Materials", de: "Verarbeitbare Werkstoffe" },
    materials: {
      zh: [
        "SUS316 / SUS316L（耐氯化物腐蝕，海洋油氣首選）",
        "Duplex S31803 / Super Duplex S32750（耐酸性、海水）",
        "Inconel 625 / 718（高溫、酸性氣體環境）",
        "Monel 400（耐強酸、油氣加工接觸）",
        "F22 / F11 低合金鋼（壓力閥門、管件）",
      ],
      en: [
        "SUS316 / SUS316L (chloride corrosion resistance, top choice for offshore oil & gas)",
        "Duplex S31803 / Super Duplex S32750 (sour service, seawater)",
        "Inconel 625 / 718 (high-temp, sour gas environments)",
        "Monel 400 (strong acid resistance, oil & gas processing contact)",
        "F22 / F11 low-alloy steel (pressure valves, fittings)",
      ],
      de: [
        "SUS316 / SUS316L (chloridkorrosionsbeständig, erste Wahl für Offshore-Öl & Gas)",
        "Duplex S31803 / Super Duplex S32750 (Sauerservice, Meerwasser)",
        "Inconel 625 / 718 (Hochtemperatur, Sauergas-Umgebungen)",
        "Monel 400 (starke Säurebeständigkeit, Öl- und Gas-Prozesskontakt)",
        "F22 / F11 niedriglegierter Stahl (Druckventile, Armaturen)",
      ],
    },
    standardsTitle: { zh: "規格與品管", en: "Quality & Standards", de: "Qualität & Normen" },
    standards: {
      zh: [
        "公差控制：依客戶圖面要求承接",
        "材質證明：Mill Test Cert（全程追溯）",
        "可配合 API 6A、API 6D、NORSOK M-650 客戶要求",
        "FAI / PPAP 報告（依客戶需求）",
        "PED 2014/68/EU 歐系壓力設備指令可整合",
      ],
      en: [
        "Tolerance: per customer drawing specification",
        "Mill Test Certificates (full traceability)",
        "Compatible with API 6A, API 6D, NORSOK M-650 customer requirements",
        "FAI / PPAP reports (per customer specification)",
        "PED 2014/68/EU European pressure equipment directive integration",
      ],
      de: [
        "Toleranzen: gemäß Kundenzeichnung",
        "Werkszeugnisse (Mill Test Cert) — vollständige Rückverfolgbarkeit",
        "Konform mit Kundenanforderungen API 6A, API 6D, NORSOK M-650",
        "FAI- / PPAP-Berichte (je nach Kundenvorgabe)",
        "Integration der EU-Druckgeräterichtlinie PED 2014/68/EU",
      ],
    },
    imageUrl:
      "https://images.pexels.com/photos/32845674/pexels-photo-32845674.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
