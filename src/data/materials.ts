export type Trilingual = { zh: string; en: string; de: string };

export type MaterialEntry = {
  grade: string; // 牌號是國際代碼，三語通用
  description: Trilingual;
  applications: Trilingual;
};

export type MaterialCategory = {
  id: string; // 用作 anchor 連結
  title: Trilingual;
  intro: Trilingual;
  items: MaterialEntry[];
};

// 完整材料能力清單 — 偉勇能加工的所有材料系列
export const materialCategories: MaterialCategory[] = [
  {
    id: "stainless-steel",
    title: {
      zh: "不鏽鋼系列",
      en: "Stainless Steel",
      de: "Edelstahl",
    },
    intro: {
      zh: "從通用 SUS304 到耐蝕 SUS316L、可熱處理 SUS440C — 涵蓋食品、機械、半導體、醫療、油氣、航太各等級。",
      en: "From general-purpose SUS304 to corrosion-resistant SUS316L and heat-treatable SUS440C — covering food, machinery, semiconductor, medical, oil & gas, and aerospace grades.",
      de: "Vom Allzweck-SUS304 bis zum korrosionsbeständigen SUS316L und härtbaren SUS440C — abgedeckt sind Lebensmittel-, Maschinenbau-, Halbleiter-, Medizin-, Öl- & Gas- und Luftfahrtsorten.",
    },
    items: [
      {
        grade: "SUS304",
        description: {
          zh: "市場最通用奧氏體不鏽鋼，耐一般大氣 / 弱酸鹼，可長年無鏽。",
          en: "The most general-purpose austenitic stainless. Resists general atmospheres and weak acids/alkalis.",
          de: "Der vielseitigste austenitische Edelstahl. Beständig gegen normale Atmosphären und schwache Säuren/Laugen.",
        },
        applications: {
          zh: "機械零件、結構件、廚具、半導體機構件",
          en: "Machine parts, structures, kitchenware, semiconductor mechanism parts",
          de: "Maschinenteile, Strukturen, Küchengeräte, Halbleiter-Mechanikteile",
        },
      },
      {
        grade: "SUS316 / SUS316L",
        description: {
          zh: "加 2-3% 鉬，耐氯化物腐蝕大幅提升。L 級低碳適合焊接件。",
          en: "2-3% molybdenum significantly boosts chloride resistance. L (low-carbon) variant ideal for welded parts.",
          de: "2-3 % Molybdän verbessern die Chloridbeständigkeit deutlich. L-Variante (niedriger Kohlenstoff) ideal für Schweißteile.",
        },
        applications: {
          zh: "海洋零件、化工管路、半導體腔體、醫療器械（生醫等級）、油氣閥門",
          en: "Marine parts, chemical piping, semiconductor chambers, medical devices, oil & gas valves",
          de: "Meeresteile, Chemierohre, Halbleiterkammern, Medizingeräte, Öl- & Gas-Ventile",
        },
      },
      {
        grade: "SUS321",
        description: {
          zh: "鈦穩定型不鏽鋼，耐 700-900°C 高溫，抗晶界腐蝕。",
          en: "Titanium-stabilized stainless. Withstands 700-900°C, resists grain-boundary corrosion.",
          de: "Titanstabilisierter Edelstahl. Beständig bei 700-900 °C, Korngrenzenkorrosion widerstandsfähig.",
        },
        applications: {
          zh: "渦輪改裝排氣 manifold、Downpipe、高溫管路",
          en: "Turbo-tuning exhaust manifolds, downpipes, high-temp piping",
          de: "Turbo-Tuning-Krümmer, Downpipes, Hochtemperatur-Rohrleitungen",
        },
      },
      {
        grade: "SUS440C",
        description: {
          zh: "高碳馬氏體不鏽鋼，可熱處理至 HRC 58 以上。",
          en: "High-carbon martensitic stainless. Heat-treatable above HRC 58.",
          de: "Hochkohlenstoffhaltiger martensitischer Edelstahl. Härtbar über HRC 58.",
        },
        applications: {
          zh: "軸承、刀具、模具導引件、精密機構耐磨件",
          en: "Bearings, cutting tools, mold guides, precision wear-resistant mechanism parts",
          de: "Lager, Schneidwerkzeuge, Formführungen, Präzisions-Verschleißteile",
        },
      },
      {
        grade: "SUS630 / 17-4PH",
        description: {
          zh: "析出硬化不鏽鋼，兼具高強度與耐蝕性。",
          en: "Precipitation-hardened stainless. Combines high strength with corrosion resistance.",
          de: "Ausscheidungsgehärteter Edelstahl. Vereint hohe Festigkeit mit Korrosionsbeständigkeit.",
        },
        applications: {
          zh: "航太結構件、油氣閥門桿、高強度機構件",
          en: "Aerospace structural parts, oil & gas valve stems, high-strength mechanism parts",
          de: "Luftfahrt-Strukturteile, Öl- & Gas-Ventilspindeln, hochfeste Mechanikteile",
        },
      },
    ],
  },
  {
    id: "aluminum",
    title: {
      zh: "鋁合金系列",
      en: "Aluminum Alloys",
      de: "Aluminiumlegierungen",
    },
    intro: {
      zh: "輕量化首選 — 從通用 A6061 到航太 A7075，全系列可整合陽極處理。",
      en: "Top choice for lightweight applications — from general A6061 to aerospace A7075, all anodizable.",
      de: "Erste Wahl für Leichtbau — vom allgemeinen A6061 bis zum Luftfahrt-A7075, alle eloxierbar.",
    },
    items: [
      {
        grade: "A6061-T6",
        description: {
          zh: "最常用航太鋁合金，性價比高、加工性好、可陽極。",
          en: "The most widely used aerospace aluminum. Best price/performance, good machinability, anodizable.",
          de: "Am häufigsten eingesetztes Luftfahrt-Aluminium. Bestes Preis-Leistungs-Verhältnis, gut zerspanbar, eloxierbar.",
        },
        applications: {
          zh: "機構件、結構件、半導體腔體骨架、消費電子",
          en: "Mechanism parts, structures, semiconductor chamber frames, consumer electronics",
          de: "Mechanikteile, Strukturen, Halbleiterkammergerüste, Konsumelektronik",
        },
      },
      {
        grade: "A7075-T6",
        description: {
          zh: "高強度航太級鋁，強度近於部分鋼材但重量大幅降低。",
          en: "High-strength aerospace aluminum. Strength approaches some steels at much lower weight.",
          de: "Hochfestes Luftfahrt-Aluminium. Festigkeit nahe einiger Stähle bei deutlich geringerem Gewicht.",
        },
        applications: {
          zh: "航太結構件、自行車高階零件、軍工精密件",
          en: "Aerospace structures, premium bicycle parts, defense precision parts",
          de: "Luftfahrtstrukturen, Premium-Fahrradteile, Verteidigungs-Präzisionsteile",
        },
      },
      {
        grade: "A2024",
        description: {
          zh: "高強度耐疲勞鋁合金，航太常用。",
          en: "High-strength fatigue-resistant aluminum. Common in aerospace.",
          de: "Hochfestes ermüdungsbeständiges Aluminium. In der Luftfahrt verbreitet.",
        },
        applications: {
          zh: "機翼結構件、航太骨架、緊固件",
          en: "Wing structures, aerospace frames, fasteners",
          de: "Tragflächenstrukturen, Luftfahrtgerüste, Verbindungselemente",
        },
      },
      {
        grade: "A5052 / A2017",
        description: {
          zh: "耐蝕中強度鋁合金，焊接性與成形性佳。",
          en: "Corrosion-resistant medium-strength aluminum. Good weldability and formability.",
          de: "Korrosionsbeständiges Aluminium mittlerer Festigkeit. Gute Schweißbarkeit und Umformbarkeit.",
        },
        applications: {
          zh: "外殼、面板、化工容器、船舶零件",
          en: "Enclosures, panels, chemical vessels, marine parts",
          de: "Gehäuse, Paneele, Chemiebehälter, Schiffsteile",
        },
      },
    ],
  },
  {
    id: "titanium",
    title: {
      zh: "鈦合金",
      en: "Titanium",
      de: "Titanlegierungen",
    },
    intro: {
      zh: "強度重量比優於鋁與鋼、耐蝕性頂級 — 航太、醫療、頂級改裝的高階選擇。",
      en: "Best strength-to-weight ratio of aluminum and steel, top-tier corrosion resistance — premium choice for aerospace, medical, and high-end tuning.",
      de: "Bestes Festigkeits-Gewichts-Verhältnis im Vergleich zu Aluminium und Stahl, erstklassige Korrosionsbeständigkeit — Premium-Wahl für Luftfahrt, Medizin und High-End-Tuning.",
    },
    items: [
      {
        grade: "Pure Titanium (Grade 1-4)",
        description: {
          zh: "純鈦，耐蝕性最強、生物相容性佳。",
          en: "Pure titanium. Highest corrosion resistance, excellent biocompatibility.",
          de: "Reintitan. Höchste Korrosionsbeständigkeit, ausgezeichnete Biokompatibilität.",
        },
        applications: {
          zh: "醫療植入物、化工設備、海洋零件",
          en: "Medical implants, chemical equipment, marine parts",
          de: "Medizinische Implantate, Chemieanlagen, Meeresteile",
        },
      },
      {
        grade: "Ti-6Al-4V (Grade 5)",
        description: {
          zh: "最常用航太鈦合金（俗稱 64 鈦），高強度高韌性。",
          en: "The most common aerospace titanium (\"6-4 titanium\"). High strength and toughness.",
          de: "Das gebräuchlichste Luftfahrt-Titan (6-4-Titan). Hohe Festigkeit und Zähigkeit.",
        },
        applications: {
          zh: "航太結構件、衛星零件、頂級改裝排氣",
          en: "Aerospace structures, satellite parts, high-end tuning exhaust",
          de: "Luftfahrtstrukturen, Satellitenteile, High-End-Tuning-Abgasanlagen",
        },
      },
      {
        grade: "Ti-6Al-4V ELI",
        description: {
          zh: "Extra Low Interstitial 等級，生醫植入物專用。",
          en: "Extra Low Interstitial grade. Reserved for biomedical implants.",
          de: "Extra-Low-Interstitial-Sorte. Speziell für biomedizinische Implantate.",
        },
        applications: {
          zh: "人工關節、骨釘、植入物",
          en: "Artificial joints, bone screws, implants",
          de: "Künstliche Gelenke, Knochenschrauben, Implantate",
        },
      },
    ],
  },
  {
    id: "copper",
    title: {
      zh: "銅合金",
      en: "Copper Alloys",
      de: "Kupferlegierungen",
    },
    intro: {
      zh: "從高導電純銅、易切削黃銅、到高強度鋁青銅 — 涵蓋電子、機械、海洋應用。",
      en: "From high-conductivity pure copper to free-cutting brass and high-strength aluminum bronze — covering electronics, machinery, and marine applications.",
      de: "Von hochleitfähigem Reinkupfer über automatenfähiges Messing bis zu hochfester Aluminiumbronze — von Elektronik über Maschinenbau bis Meeresanwendungen.",
    },
    items: [
      {
        grade: "C1020 / C1100 / C1220",
        description: {
          zh: "純銅系列 — 高導電 / 高導熱，可分為無氧銅、韌煉銅、磷脫氧銅。",
          en: "Pure copper grades — high electrical and thermal conductivity. OFHC, tough-pitch, and phosphorus-deoxidized variants.",
          de: "Reinkupfersorten — hohe elektrische und thermische Leitfähigkeit. Sauerstofffreie, Tough-Pitch- und phosphor-desoxidierte Varianten.",
        },
        applications: {
          zh: "電子接點、熱交換器、半導體高熱導零件",
          en: "Electronic contacts, heat exchangers, high-thermal-conductivity semiconductor parts",
          de: "Elektronikkontakte, Wärmetauscher, Halbleiterteile mit hoher Wärmeleitfähigkeit",
        },
      },
      {
        grade: "C2801",
        description: {
          zh: "船舶級黃銅，耐蝕性與強度兼具。",
          en: "Marine-grade brass. Balanced corrosion resistance and strength.",
          de: "Schiffsmessing. Ausgewogene Korrosionsbeständigkeit und Festigkeit.",
        },
        applications: {
          zh: "船舶零件、海水閥門、化工設備",
          en: "Marine parts, seawater valves, chemical equipment",
          de: "Schiffsteile, Meerwasserventile, Chemieausrüstung",
        },
      },
      {
        grade: "C3604",
        description: {
          zh: "快削黃銅（含鉛），加工性極佳，黃銅加工最常用。",
          en: "Free-cutting brass (lead-bearing). Excellent machinability, the most common machining brass.",
          de: "Automatenmessing (bleihaltig). Hervorragende Zerspanbarkeit, das meistbearbeitete Messing.",
        },
        applications: {
          zh: "閥門、配件、汽車零件、五金",
          en: "Valves, fittings, automotive parts, hardware",
          de: "Ventile, Armaturen, Automobilteile, Beschläge",
        },
      },
      {
        grade: "C5191 / C5341",
        description: {
          zh: "磷青銅，彈性 + 耐磨 — 適合彈片、軸承、襯套。",
          en: "Phosphor bronze. Spring properties + wear resistance — for springs, bearings, bushings.",
          de: "Phosphorbronze. Federelastisch + verschleißfest — für Federn, Lager, Buchsen.",
        },
        applications: {
          zh: "彈片、襯套、軸承、電子接點",
          en: "Springs, bushings, bearings, electronic contacts",
          de: "Federn, Buchsen, Lager, Elektronikkontakte",
        },
      },
      {
        grade: "C6191",
        description: {
          zh: "鋁青銅，高強度、耐磨、耐蝕，幾近不鏽鋼性能。",
          en: "Aluminum bronze. High strength, wear- and corrosion-resistant — approaches stainless steel performance.",
          de: "Aluminiumbronze. Hochfest, verschleiß- und korrosionsbeständig — nahe Edelstahl-Leistung.",
        },
        applications: {
          zh: "船舶軸承、齒輪、海洋鑽井設備",
          en: "Marine bearings, gears, offshore drilling equipment",
          de: "Schiffslager, Zahnräder, Offshore-Bohrausrüstung",
        },
      },
    ],
  },
  {
    id: "steel",
    title: {
      zh: "結構鋼 / 碳鋼",
      en: "Structural & Carbon Steel",
      de: "Konstruktions- und Kohlenstoffstahl",
    },
    intro: {
      zh: "從通用構造鋼到高強度鉻鉬鋼 — 機械、汽車、油氣管件主力材料。",
      en: "From general structural steel to high-strength Cr-Mo steel — main materials for machinery, automotive, and oil & gas fittings.",
      de: "Vom allgemeinen Baustahl bis zum hochfesten Cr-Mo-Stahl — Hauptwerkstoffe für Maschinenbau, Automobil und Öl- & Gas-Armaturen.",
    },
    items: [
      {
        grade: "SS400",
        description: {
          zh: "通用結構鋼，泛用性高、價格低。",
          en: "General-purpose structural steel. Wide applicability, low cost.",
          de: "Allzweck-Baustahl. Breite Anwendbarkeit, niedrige Kosten.",
        },
        applications: {
          zh: "機械底座、結構件、一般機械件",
          en: "Machine bases, structures, general mechanical parts",
          de: "Maschinensockel, Strukturen, allgemeine Maschinenteile",
        },
      },
      {
        grade: "S45C / S50C / S55C",
        description: {
          zh: "中碳鋼，可熱處理（淬火、回火）— 機構件最常見。",
          en: "Medium-carbon steel, heat-treatable (quench, temper). Most common for mechanism parts.",
          de: "Mittlerer Kohlenstoffstahl, härtbar (Härten, Anlassen). Am häufigsten für Mechanikteile.",
        },
        applications: {
          zh: "軸類、齒輪、模具基座",
          en: "Shafts, gears, mold bases",
          de: "Wellen, Zahnräder, Formenträger",
        },
      },
      {
        grade: "SCM435 / SCM440",
        description: {
          zh: "鉻鉬鋼，高強度結構件首選 — 可滲碳氮化。",
          en: "Cr-Mo steel. Top choice for high-strength structures — carburizable and nitridable.",
          de: "Cr-Mo-Stahl. Erste Wahl für hochfeste Strukturen — aufkohlbar und nitrierbar.",
        },
        applications: {
          zh: "傳動軸、齒輪、汽車引擎零件、油氣壓力件",
          en: "Drive shafts, gears, automotive engine parts, oil & gas pressure parts",
          de: "Antriebswellen, Zahnräder, Automotor-Teile, Öl- & Gas-Druckteile",
        },
      },
      {
        grade: "F22 / F11",
        description: {
          zh: "低合金鋼，油氣產業壓力閥門、管件標準材料。",
          en: "Low-alloy steel. Standard for oil & gas pressure valves and fittings.",
          de: "Niedriglegierter Stahl. Standard für Öl- & Gas-Druckventile und Armaturen.",
        },
        applications: {
          zh: "壓力閥門、法蘭、管件",
          en: "Pressure valves, flanges, fittings",
          de: "Druckventile, Flansche, Armaturen",
        },
      },
    ],
  },
  {
    id: "tool-steel",
    title: {
      zh: "工具鋼 / 模具鋼",
      en: "Tool & Mold Steel",
      de: "Werkzeug- und Formenstahl",
    },
    intro: {
      zh: "高硬度、耐磨、可熱處理 — 模具、刀具、衝頭專用。",
      en: "High hardness, wear-resistant, heat-treatable — for molds, cutting tools, and punches.",
      de: "Hohe Härte, verschleißfest, härtbar — für Formen, Schneidwerkzeuge und Stempel.",
    },
    items: [
      {
        grade: "SK3 / SK4",
        description: {
          zh: "碳工具鋼，基本款工具鋼。",
          en: "Carbon tool steel. Basic tool steel.",
          de: "Kohlenstoff-Werkzeugstahl. Basis-Werkzeugstahl.",
        },
        applications: {
          zh: "簡單工具、衝頭、量規",
          en: "Simple tools, punches, gauges",
          de: "Einfache Werkzeuge, Stempel, Lehren",
        },
      },
      {
        grade: "SKD11",
        description: {
          zh: "高鉻冷作模具鋼，耐磨耐衝擊。",
          en: "High-chromium cold-work mold steel. Wear- and shock-resistant.",
          de: "Hochchromhaltiger Kaltarbeitsstahl. Verschleiß- und schlagfest.",
        },
        applications: {
          zh: "冷作模具、衝模、剪切刀",
          en: "Cold-work molds, stamping dies, shearing blades",
          de: "Kaltarbeitsformen, Stanzwerkzeuge, Scherklingen",
        },
      },
      {
        grade: "SKD61",
        description: {
          zh: "通用熱作模具鋼，壓鑄、鍛造模具用。",
          en: "General-purpose hot-work mold steel. For die-casting and forging molds.",
          de: "Allgemeiner Warmarbeitsstahl. Für Druckguss- und Schmiedeformen.",
        },
        applications: {
          zh: "壓鑄模、鍛造模、熱間工具",
          en: "Die-cast molds, forging dies, hot-work tools",
          de: "Druckgussformen, Schmiedeformen, Warmwerkzeuge",
        },
      },
      {
        grade: "NAK55 / NAK80",
        description: {
          zh: "預硬鋼（HRC 30-40），出廠即帶硬度，省去熱處理。",
          en: "Pre-hardened steel (HRC 30-40). Ships at hardness, eliminating heat treatment.",
          de: "Vorvergüteter Stahl (HRC 30-40). Wird bereits gehärtet geliefert, keine Wärmebehandlung nötig.",
        },
        applications: {
          zh: "塑膠模具（鏡面拋光性極佳）",
          en: "Plastic molds (excellent mirror-polish capability)",
          de: "Kunststoffformen (hervorragend hochglanzpolierbar)",
        },
      },
      {
        grade: "SKH51",
        description: {
          zh: "通用高速鋼，刀具與衝頭專用。",
          en: "General-purpose HSS. Reserved for cutters and punches.",
          de: "Allgemeiner Schnellarbeitsstahl. Speziell für Schneidwerkzeuge und Stempel.",
        },
        applications: {
          zh: "刀具、衝頭、量規",
          en: "Cutting tools, punches, gauges",
          de: "Schneidwerkzeuge, Stempel, Lehren",
        },
      },
    ],
  },
  {
    id: "difficult-alloys",
    title: {
      zh: "難切削合金 / 耐蝕合金",
      en: "Difficult & Corrosion-Resistant Alloys",
      de: "Schwer zerspanbare und korrosionsbeständige Legierungen",
    },
    intro: {
      zh: "極端環境用 — 高溫、酸性氣體、海水、含硫服務。對加工經驗要求極高，是偉勇 40 年累積的核心優勢領域。",
      en: "For extreme conditions — high temperature, sour gas, seawater, sour service. Demands deep machining experience — the core strength accumulated over Weiyon's 40 years.",
      de: "Für extreme Bedingungen — hohe Temperaturen, Sauergas, Meerwasser, Sauer-Service. Erfordert tiefe Bearbeitungserfahrung — die in 40 Jahren bei Weiyon aufgebaute Kernkompetenz.",
    },
    items: [
      {
        grade: "Inconel 625",
        description: {
          zh: "鎳基耐蝕合金，耐高溫、耐酸性氣體 — 油氣 + 航太常用。",
          en: "Nickel-based corrosion-resistant alloy. High-temp, sour gas resistant — common in oil & gas and aerospace.",
          de: "Nickelbasierte korrosionsbeständige Legierung. Hochtemperatur- und sauergasbeständig — in Öl- & Gas- sowie Luftfahrt verbreitet.",
        },
        applications: {
          zh: "海洋平台閥門、航太排氣件、化工耐酸件",
          en: "Offshore platform valves, aerospace exhaust parts, acid-resistant chemical components",
          de: "Offshore-Plattform-Ventile, Luftfahrt-Abgasteile, säurebeständige Chemiekomponenten",
        },
      },
      {
        grade: "Inconel 718",
        description: {
          zh: "鎳基析出硬化合金，極高溫強度 — 航太引擎首選。",
          en: "Nickel-based precipitation-hardened alloy. Exceptional high-temperature strength — top aerospace engine choice.",
          de: "Nickelbasierte ausscheidungsgehärtete Legierung. Außergewöhnliche Hochtemperaturfestigkeit — erste Wahl für Luftfahrtantriebe.",
        },
        applications: {
          zh: "渦輪葉片、引擎零件、火箭組件",
          en: "Turbine blades, engine parts, rocket components",
          de: "Turbinenschaufeln, Triebwerksteile, Raketenbauteile",
        },
      },
      {
        grade: "Monel 400",
        description: {
          zh: "鎳銅合金，耐強酸、海水、油氣加工接觸環境。",
          en: "Nickel-copper alloy. Resists strong acids, seawater, and oil & gas processing environments.",
          de: "Nickel-Kupfer-Legierung. Beständig gegen starke Säuren, Meerwasser und Öl- & Gas-Prozessumgebungen.",
        },
        applications: {
          zh: "化工反應器零件、海水熱交換器、油氣加工件",
          en: "Chemical reactor parts, seawater heat exchangers, oil & gas processing parts",
          de: "Chemiereaktorteile, Meerwasser-Wärmetauscher, Öl- & Gas-Prozessteile",
        },
      },
      {
        grade: "Duplex S31803",
        description: {
          zh: "雙相不鏽鋼，強度約為 SUS316 兩倍，耐氯化物腐蝕。",
          en: "Duplex stainless steel. Roughly twice the strength of SUS316, chloride-resistant.",
          de: "Duplexstahl. Etwa doppelte Festigkeit von SUS316, chloridbeständig.",
        },
        applications: {
          zh: "海洋油氣管路、海水脫鹽設備",
          en: "Marine oil & gas piping, seawater desalination equipment",
          de: "Marine Öl- & Gas-Rohre, Meerwasserentsalzungsanlagen",
        },
      },
      {
        grade: "Super Duplex S32750",
        description: {
          zh: "超級雙相鋼，耐酸性服務（sour service）油氣首選。",
          en: "Super duplex stainless steel. Top choice for sour service oil & gas.",
          de: "Super-Duplexstahl. Erste Wahl für Sauer-Service in Öl- & Gas.",
        },
        applications: {
          zh: "海洋油氣鑽井、酸性氣田、海水腐蝕環境",
          en: "Offshore oil & gas drilling, sour gas fields, seawater corrosion environments",
          de: "Offshore-Öl- & Gas-Bohrungen, Sauergasfelder, Meerwasser-Korrosionsumgebungen",
        },
      },
    ],
  },
  {
    id: "plastics",
    title: {
      zh: "工程塑膠",
      en: "Engineering Plastics",
      de: "Konstruktionskunststoffe",
    },
    intro: {
      zh: "金屬加工廠也可加工的工程塑膠 — 視個案評估。",
      en: "Engineering plastics machinable in our metal-focused shop — case-by-case basis.",
      de: "In unserer metallbearbeitungsorientierten Werkstatt zerspanbare Konstruktionskunststoffe — Fall-zu-Fall-Bewertung.",
    },
    items: [
      {
        grade: "POM",
        description: {
          zh: "尼龍替代品，耐磨、自潤滑、尺寸穩定。",
          en: "Nylon alternative. Wear-resistant, self-lubricating, dimensionally stable.",
          de: "Nylon-Alternative. Verschleißfest, selbstschmierend, maßhaltig.",
        },
        applications: {
          zh: "齒輪、滑輪、襯套、機構件",
          en: "Gears, pulleys, bushings, mechanism parts",
          de: "Zahnräder, Riemenscheiben, Buchsen, Mechanikteile",
        },
      },
      {
        grade: "PEEK",
        description: {
          zh: "高階工程塑膠，生物相容、高溫穩定。",
          en: "Premium engineering plastic. Biocompatible, thermally stable.",
          de: "Premium-Konstruktionskunststoff. Biokompatibel, thermisch stabil.",
        },
        applications: {
          zh: "醫療植入物、半導體腔體絕緣件、航太零件",
          en: "Medical implants, semiconductor chamber insulators, aerospace parts",
          de: "Medizinische Implantate, Halbleiterkammer-Isolatoren, Luftfahrtteile",
        },
      },
      {
        grade: "PTFE / Teflon",
        description: {
          zh: "極低摩擦係數、耐化學、絕緣性佳。",
          en: "Extremely low friction, chemical-resistant, electrically insulating.",
          de: "Extrem niedrige Reibung, chemikalienbeständig, elektrisch isolierend.",
        },
        applications: {
          zh: "化工密封件、絕緣件、滑動軸承",
          en: "Chemical seals, insulators, slide bearings",
          de: "Chemiedichtungen, Isolatoren, Gleitlager",
        },
      },
    ],
  },
];

export type Locale = "zh" | "en" | "de";
