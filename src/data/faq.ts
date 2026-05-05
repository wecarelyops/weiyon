export type FaqItem = {
  q: string;
  a: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

// 中英雙語 FAQ — 可直接編輯本檔
export const faqData: Record<"zh" | "en", FaqCategory[]> = {
  zh: [
    {
      title: "報價與訂單",
      items: [
        {
          q: "怎麼向偉勇詢價？需要費用嗎？",
          a: `詢價完全免費，無任何手續費。歡迎透過以下方式聯絡：

・電話：04-23356451（週一至週五 08:00 - 17:30）
・Email：agesmyth@gmail.com

詢價時建議提供：
・圖面（2D 或 3D 皆可）或產品照片
・材質規格（如 SUS304、A6061 等）
・預計數量
・表面處理需求（如有）
・期望交期

我們通常在 1-2 個工作天內回覆報價。若需現場評估或有特殊規格，會主動致電與您確認細節。`,
        },
        {
          q: "沒有圖面只有實品，可以加工嗎？",
          a: `沒問題！常見有兩種方式：

1. 實品反推圖面：把樣品送來工廠，我們幫您測量、繪圖之後再加工。
2. 業務拜訪取件：樣品不方便寄送的話，可以預約業務到府取件評估。

繪圖的工本費會先報價給您確認，您 OK 之後我們才動工。如果之後也是由我們加工量產，繪圖費用通常可以協商折抵到後續訂單。`,
        },
        {
          q: "接受哪些圖面格式？",
          a: `常見工程圖面格式皆可：

・2D：DWG（AutoCAD）、DXF、PDF
・3D：STEP（.stp）、IGES（.igs）、STL
・手繪草圖：可接受，但詢價精度可能受限

3D 圖面有助於加工程式編寫，能加快交期。如圖面格式較特殊或需轉檔，請於詢價時告知，我們會視狀況協助。`,
        },
        {
          q: "有最小起訂量（MOQ）嗎？",
          a: `沒有強制 MOQ，1 件起就接。試做、研發、客製訂單我們從以前到現在都這樣做。

不過實務上要提醒您：

・少量訂單：因為設備調機、夾治具準備等固定成本要攤提，單件單價會比較高
・量產訂單：批量越大，平均單價越低
・試做轉量產：相關工治具費用通常可以協商折抵

實際單價請以正式報價為準。`,
        },
      ],
    },
    {
      title: "付款與交期",
      items: [
        {
          q: "付款方式？",
          a: `國內客戶首次合作我們以月結 30 天為主，老客戶可以依合作關係彈性配合。

海外訂單的付款方式（T/T、L/C 等）我們另外洽談。

開立發票可配合您的需求（一般稅額、免用統一發票等），下單時告訴我們就好。`,
        },
        {
          q: "一般交期多久？",
          a: `國內訂單的交期：

・一般單件 / 小批量：7-14 個工作天
・量產 / 大批量：依數量、複雜度評估，通常 14-30 個工作天
・急件：可以幫您協調，特殊情況最快 3-5 天交貨 — 下單時跟我們提一下就行

海外訂單的交期我們另外算（含運送時間）。

年節期間（春節、清明連假等）會另行公告，記得提前下單。`,
        },
        {
          q: "可以分批出貨嗎？",
          a: `可以喔。常見的分批方式：

・依數量分批：總量 1000 件，分 200 件一批，每月出貨
・依完工進度：先做完的先出，後段持續加工
・依您現場節奏：配合您的生產或庫存狀況排程

下單時跟我們提一下分批的需求就好，這樣可以一起排好生產，省得後面再調整。`,
        },
      ],
    },
    {
      title: "材質與加工能力",
      items: [
        {
          q: "偉勇能加工哪些材料？",
          a: `常見材質：

【金屬類】
・不鏽鋼系列：SUS303、SUS304、SUS316 等
・鋁合金：A6061、A7075、A2024 等
・銅合金：黃銅、青銅、磷青銅
・鋼材：S45C、SCM440 等
・特殊金屬：鈦合金等（其他規格可洽詢評估）

【非金屬類】
・工程塑膠（POM、PEEK、Teflon 等）— 視個案評估
・陶瓷材料 — 視個案評估

不在列表的特殊材料，歡迎來電洽詢。`,
        },
        {
          q: "常加工的不鏽鋼有哪些等級？",
          a: `常見等級：

・SUS303：易切削不鏽鋼，常用於螺絲、軸類
・SUS304：最通用的不鏽鋼，耐蝕性佳，廣泛應用
・SUS316：含鉬，耐蝕性更高，適用於海洋、化工環境
・SUS440C：高硬度不鏽鋼，可熱處理至 HRC 58 以上

其他特殊等級（如 SUS630 / 17-4PH、SUS630H 等）可洽詢評估。`,
        },
        {
          q: "鋁合金接受哪些等級？",
          a: `常見等級：

・A6061：通用機械結構件，性價比高，最常用
・A7075：高強度航太級鋁，適合受力結構件
・A2024：高強度耐疲勞，常用於航太零件

表面處理可整合外協廠完成：
・陽極處理（透明、彩色、黑色）
・硬質陽極（耐磨）
・鍍膜處理

其他規格如 A5052、A2017 等可洽詢。`,
        },
        {
          q: "銅合金能加工哪些等級？",
          a: `常見可加工銅合金：

【純銅 / 高純度銅】
・C1020（無氧銅）：高導電性，電子零件
・C1100（韌煉銅 / Tough Pitch）：通用純銅，耐蝕
・C1220（磷脫氧銅）：焊接性佳，熱交換器

【黃銅】
・C2801：船舶級黃銅，耐蝕、強度兼具
・C3604（快削黃銅）：含鉛快削，黃銅加工最常用

【磷青銅 / 鋁青銅】
・C5191（磷青銅）：彈性、耐磨，軸承、彈片
・C5341（快削磷青銅）：加工性更佳
・C6191（鋁青銅）：高強度、耐磨、耐蝕

其他特殊銅合金規格可洽詢評估。`,
        },
        {
          q: "鐵 / 碳鋼能加工哪些等級？",
          a: `常見可加工鐵 / 碳鋼：

【一般構造用鋼】
・SS400：通用結構鋼

【機械構造用碳鋼（S-C 系列）】
・S10C / S15C / S20C：低碳鋼，焊接性佳
・S25C / S35C：中碳鋼
・S45C / S48C / S50C / S55C：通用機構件，可熱處理

【鉻鉬鋼（Cr-Mo / クロモリ）】
・SCM415 / SCM420：滲碳處理常用
・SCM435 / SCM440：高強度結構件、軸類、齒輪

熱處理（淬火、回火、滲碳、氮化）透過合作廠商完成，提供整合服務。`,
        },
        {
          q: "工具鋼、模具鋼能加工嗎？",
          a: `可加工常見工具鋼 / 模具鋼：

【冷作工具鋼】
・SK3 / SK4（碳工具鋼）：基本工具鋼
・SKS3 / SKS93、GOA、SGT：低變形工具鋼，量規、衝模常用
・SKD11：高鉻冷作模具鋼，耐磨耐衝擊

【熱作工具鋼】
・SKD61：通用熱作模具鋼，壓鑄、鍛造

【高速鋼】
・SKH51：通用高速鋼，刀具、衝頭

加工後的熱處理（淬火、回火）由合作廠商完成。`,
        },
        {
          q: "預硬鋼（Pre-hardened steel）能加工嗎？",
          a: `預硬鋼出廠即帶 HRC 30-40 硬度，省去後段熱處理：

・NAK55、NAK80：鏡面拋光性佳，塑膠模具常用
・HPM38、HPM1：耐蝕、可拋光
・GO40F、PXS：通用預硬模具鋼

預硬鋼適合對尺寸穩定、需直接拋光使用的場合。`,
        },
        {
          q: "鈦合金有哪些等級可加工？",
          a: `常見鈦合金：

・純鈦（Grade 1 ~ Grade 4）：耐蝕、生醫應用
・Ti-6Al-4V（Grade 5、俗稱 64 鈦）：最常用鈦合金，航太、醫療、精密設備

鈦加工對刀具、冷卻條件較敏感，請提供完整材料規格、圖面與公差要求，方便評估加工方式與交期。

注意：鈦的板金加工、曲げ加工、焊接等非廠內主力製程，可協調合作廠商處理。`,
        },
        {
          q: "難切削材料的加工注意事項？",
          a: `承接鈦合金、高鉻不鏽鋼（440C、630 / 17-4PH 等）等難切削材料，加工時會根據材料特性調整：

・刀具選擇：使用塗層硬質合金或陶瓷刀片，依材料硬度與韌性配置
・轉速與進給：低轉速、慢進給，避免加工硬化或熱變形
・冷卻液：使用適當冷卻方式，控制刀具壽命與工件熱膨脹
・刀具壽命：難切削材料刀具消耗較高，反映於報價中

詢價時請提供：完整材料規格 / 牌號、圖面與公差要求、預計用途，方便評估加工方式、刀具配置與合理交期。`,
        },
        {
          q: "客戶可以自備材料嗎？",
          a: `可以。常見兩種模式：

・客戶供料：您提供材料（已有庫存或指定來源），我方僅負責加工
・我方代購：依規格採購，含於報價內，一站式服務

客戶供料時請注意：
・材料規格須符合圖面要求
・必要時提供材料證明（如航太、醫療等高要求產業）
・建議事先切妥毛坯尺寸，或委由我方協助切料

材質、尺寸如有不符，需重新評估加工成本與工時。`,
        },
        {
          q: "工廠的加工能力涵蓋哪些製程？",
          a: `廠內主要設備：
・CNC 車床（精密車削）
・CNC 銑床 / 加工中心（多軸銑削）

整合服務（透過長期合作廠商）：
・表面處理：陽極、鍍鎳、鍍鉻、發黑、鈍化
・熱處理：淬火、回火、滲碳、氮化
・鈑金加工
・線切割、放電加工

提供從圖面到成品的整合解決方案，您只需對單一窗口負責，無須分頭協調多家廠商。`,
        },
        {
          q: "主要服務哪些產業？",
          a: `累積 40 餘年產業經驗，主要服務：

・半導體設備：機台零件、晶圓搬運機構、真空腔體零件
・航太零件：高精度、輕量化、難切削材料零件
・機器人 / 自動化：機構件、夾爪、運動軸零件
・氣壓 / 油壓設備：氣缸零件、活塞、軸承座
・汽車零組件：引擎周邊、底盤、傳動零件
・工業機械：精密軸、齒輪、模具零件

長期服務客戶超過 500 家，涵蓋台灣多個重點產業。`,
        },
      ],
    },
    {
      title: "加工品項",
      items: [
        {
          q: "接受哪些類型的訂單？",
          a: `常見的訂單類型我們都接：

・試作品 / 樣品：研發階段、新產品打樣
・量產：穩定批量生產
・特殊規格客製：市售規格找不到的零件
・設計修改 / 改良：依您現場使用回饋調整
・替代品研發：原廠零件停產時的替代加工

從 1 件起接，沒有上限。告訴我們您的需求，我們會給您最合適的方案。`,
        },
        {
          q: "可加工特殊規格的螺絲、螺帽嗎？",
          a: `可以！特殊螺絲、螺帽的客製我們做很多。常見變化：

・頭型：六角、內六角、十字、一字、特殊頭型
・長度：超長、超短、非標長度
・材質：SUS304、SUS316、鈦合金、銅、鋁等
・螺紋：公制（M）、英制（UNF / UNC）、特殊牙距
・表面處理：染黑、鍍鋅、鈍化等

把圖面或樣品給我們，我們會依規格評估加工方式跟交期。`,
        },
        {
          q: "治具、夾具、刀具能加工嗎？",
          a: `可以喔。我們常承接的項目：

・產線治具：定位治具、組裝治具、檢驗治具
・夾具：CNC 夾具、銑床夾具、自動化夾爪
・刀具 / 刀把：自製刀具、特殊刀把
・檢測工具：通止規、量測 fixture

如果您只有現場使用情境、還沒圖面，可以約我們業務到廠評估，幫您設計再加工。`,
        },
        {
          q: "可加工機構零件、結構件嗎？",
          a: `可以，日常常做的類型包括：

・半導體設備零件：腔體、機構件、傳動軸
・機器人結構件：基座、連桿、關節零件
・氣壓 / 油壓零件：缸體、活塞、軸承座
・汽車零組件：引擎周邊、底盤結構件
・自動化機構：滑軌座、定位塊、軸承塊

圖面或實品給我們評估都可以。`,
        },
      ],
    },
    {
      title: "物流與配送",
      items: [
        {
          q: "配送方式？",
          a: `國內配送有幾種選擇：

・物流配送：黑貓宅急便、新竹貨運等，可以指定送達日期
・客戶自取：歡迎，事先預約取貨時間就好
・客戶委派物流：您指定物流公司，我們配合包裝出貨

海外配送請另外洽談（含貨代、清關、運送方式等）。

包裝會依產品特性適度防護（防鏽、防撞）。如果有特殊包裝需求（指定棧板、專用箱等），下單時告訴我們。`,
        },
      ],
    },
    {
      title: "其他",
      items: [
        {
          q: "可以參觀工廠嗎？",
          a: `歡迎，合作客戶事先預約就可以。

預約方式：
・電話：04-23356451
・Email：agesmyth@gmail.com

事前確認時段跟目的，這樣我們可以安排好接待人員，也不會影響現場作業。`,
        },
        {
          q: "營業時間？",
          a: `週一至週五 08:00 - 17:30，週六、週日跟國定假日休息。

如果是週末/假日有急事，先 Email 留言，我們週一上班會優先回覆。`,
        },
      ],
    },
  ],
  en: [
    {
      title: "Quotation & Orders",
      items: [
        {
          q: "How do I request a quote? Is there a fee?",
          a: `Quotes are completely free — no service fee. You can reach us via:

・Phone: +886-4-2335-6451 (Mon - Fri 08:00 - 17:30, Taiwan time)
・Email: agesmyth@gmail.com

When requesting a quote, please include:
・Drawing (2D or 3D) or product photo
・Material specifications (e.g., SUS304, A6061)
・Estimated quantity
・Surface finish requirements (if any)
・Desired lead time

We typically respond with a quote within 1-2 business days. For special specifications or on-site evaluation, we will follow up by phone to confirm details.`,
        },
        {
          q: "Can you machine parts without drawings, only a sample?",
          a: `Sure! Two common ways:

1. Reverse-engineer from sample — send the part to our factory and we'll measure it, create drawings, then machine.
2. On-site visit — if shipping is inconvenient, we'll schedule a sales visit to evaluate.

We'll quote the drafting fee upfront for your approval before any work begins. If we also handle the production, drafting fees can typically be credited toward your next order.`,
        },
        {
          q: "Which drawing formats do you accept?",
          a: `We accept all common engineering drawing formats:

・2D: DWG (AutoCAD), DXF, PDF
・3D: STEP (.stp), IGES (.igs), STL
・Hand-drawn sketches: Acceptable, but quote precision may be limited

3D drawings help with CAM programming and shorten lead times. For unusual formats or files needing conversion, please mention it when requesting a quote.`,
        },
        {
          q: "Is there a minimum order quantity (MOQ)?",
          a: `No mandatory MOQ — we accept orders starting from 1 piece. Prototype, R&D, and custom orders are part of our daily work.

A few practical notes:

・Small orders — fixed costs (machine setup, fixturing) are spread over fewer units, so unit price is higher.
・Volume orders — larger batches mean lower average unit cost.
・Prototype to production — tooling costs can usually be credited toward later production runs.

Final pricing is based on the individual quote.`,
        },
      ],
    },
    {
      title: "Payment & Lead Time",
      items: [
        {
          q: "What are the payment terms?",
          a: `For domestic first-time clients we use Net 30 as the standard term; long-term clients have flexibility based on the relationship.

For international orders, we'll discuss payment terms (T/T, L/C, etc.) with you separately.

Invoice format can be tailored to your needs (standard tax invoice, no-invoice format, etc.) — just let us know when ordering.`,
        },
        {
          q: "What's the typical lead time?",
          a: `Domestic orders:
・Single piece / small batch: 7-14 business days
・Production / large batch: 14-30 business days depending on volume and complexity
・Rush orders: Negotiable; in some cases we can deliver in 3-5 days. Please flag at order time.

International orders: Lead times to be discussed (including shipping time).

Holiday periods (Lunar New Year, Tomb-Sweeping holidays, etc.) will be announced separately. We recommend ordering in advance.`,
        },
        {
          q: "Can orders be shipped in batches?",
          a: `Sure. Common partial-shipment options:

・By quantity — e.g., 1,000 pieces total, 200 pieces per batch, monthly shipments
・By completion progress — finished items ship first, remainder follows
・By your operational pace — aligned with your production or inventory schedule

Just let us know your batch needs at order time so we can plan production and shipping together.`,
        },
      ],
    },
    {
      title: "Materials & Capabilities",
      items: [
        {
          q: "Which materials can Weiyon machine?",
          a: `Common materials:

[Metals]
・Stainless steel series: SUS303, SUS304, SUS316, etc.
・Aluminum alloys: A6061, A7075, A2024, etc.
・Copper alloys: brass, bronze, phosphor bronze
・Steels: S45C, SCM440, etc.
・Specialty metals: titanium alloys (other grades available on inquiry)

[Non-metals]
・Engineering plastics (POM, PEEK, Teflon, etc.) — case-by-case
・Ceramics — case-by-case

For materials not on this list, please contact us.`,
        },
        {
          q: "Which stainless steel grades do you commonly machine?",
          a: `Common grades:

・SUS303: Free-machining stainless, often used for screws and shafts
・SUS304: The most general-purpose stainless, broad application with good corrosion resistance
・SUS316: Molybdenum-bearing, higher corrosion resistance, suited for marine and chemical environments
・SUS440C: High-hardness stainless, can be heat-treated to HRC 58+

Other specialty grades (e.g., SUS630 / 17-4PH, SUS630H) available on inquiry.`,
        },
        {
          q: "Which aluminum alloy grades do you handle?",
          a: `Common grades:

・A6061: General mechanical structure, best price/performance, most common
・A7075: High-strength aerospace-grade aluminum, suited for load-bearing parts
・A2024: High-strength fatigue-resistant alloy, common in aerospace

Surface treatments via partner shops:
・Anodizing (clear, color, black)
・Hard anodizing (wear-resistant)
・Coatings

Other grades like A5052, A2017 available on inquiry.`,
        },
        {
          q: "Which copper alloy grades can you machine?",
          a: `Common copper alloys we machine:

[Pure copper / High-purity copper]
・C1020 (oxygen-free copper): High conductivity, electronic parts
・C1100 (tough pitch copper): General-purpose pure copper, corrosion-resistant
・C1220 (phosphorus-deoxidized copper): Good weldability, heat exchangers

[Brass]
・C2801: Marine-grade brass, balanced corrosion resistance and strength
・C3604 (free-cutting brass): Lead-bearing, the most commonly machined brass

[Phosphor bronze / Aluminum bronze]
・C5191 (phosphor bronze): Spring properties, wear resistance — bearings, contacts
・C5341 (free-cutting phosphor bronze): Improved machinability
・C6191 (aluminum bronze): High strength, wear- and corrosion-resistant

Other specialty copper alloys available on inquiry.`,
        },
        {
          q: "Which iron and carbon steel grades can you machine?",
          a: `Common iron / carbon steels:

[General structural steel]
・SS400: General-purpose structural steel

[Machine structural carbon steels (S-C series)]
・S10C / S15C / S20C: Low-carbon, good weldability
・S25C / S35C: Medium-carbon
・S45C / S48C / S50C / S55C: General mechanical parts, heat-treatable

[Cr-Mo steels (Chromium-Molybdenum)]
・SCM415 / SCM420: Often used with carburizing
・SCM435 / SCM440: High-strength structures, shafts, gears

Heat treatment (quench, temper, carburize, nitride) is performed via our partner shops as part of an integrated service.`,
        },
        {
          q: "Can you machine tool steel and mold steel?",
          a: `We machine common tool / mold steels:

[Cold-work tool steel]
・SK3 / SK4 (carbon tool steel): Basic tool steel
・SKS3 / SKS93, GOA, SGT: Low-distortion tool steel, common for gauges and stamping dies
・SKD11: High-chromium cold-work mold steel, wear- and shock-resistant

[Hot-work tool steel]
・SKD61: General-purpose hot-work mold steel, die-casting and forging

[High-speed steel]
・SKH51: General-purpose HSS, cutters and punches

Post-machining heat treatment (quench, temper) is handled by partner shops.`,
        },
        {
          q: "Can you machine pre-hardened steel?",
          a: `Pre-hardened steel ships at HRC 30-40, eliminating post-machining heat treatment:

・NAK55, NAK80: Excellent mirror-polish capability, common for plastic molds
・HPM38, HPM1: Corrosion-resistant, polishable
・GO40F, PXS: General-purpose pre-hardened mold steel

Pre-hardened steel suits applications requiring dimensional stability and direct polishing.`,
        },
        {
          q: "Which titanium alloy grades can you machine?",
          a: `Common titanium alloys:

・Pure titanium (Grade 1 ~ Grade 4): Corrosion-resistant, biomedical applications
・Ti-6Al-4V (Grade 5, "64 titanium"): The most common titanium alloy — aerospace, medical, precision equipment

Titanium machining is sensitive to tooling and cooling conditions. Please provide complete material specs, drawings, and tolerance requirements for accurate evaluation.

Note: Sheet metal forming, bending, and welding of titanium are not our primary in-house processes; we coordinate with partner shops as needed.`,
        },
        {
          q: "What should I know about machining difficult materials?",
          a: `For difficult-to-machine materials such as titanium alloys and high-chromium stainless steels (440C, 630 / 17-4PH, etc.), we adjust based on material characteristics:

・Tooling: Coated carbide or ceramic inserts, configured for material hardness and toughness
・Speeds & feeds: Lower RPM and feed rates to avoid work-hardening or thermal distortion
・Coolant: Appropriate cooling strategy to manage tool life and thermal expansion
・Tool wear: Difficult materials consume tools faster, which is reflected in pricing

When requesting a quote, please provide complete material specs/grade, drawings with tolerances, and intended use to help us plan tooling and a realistic lead time.`,
        },
        {
          q: "Can I supply my own material?",
          a: `Yes. Two common arrangements:

・Customer-supplied: You provide the material (existing stock or specific source), we machine only
・We procure: Material is sourced per spec, included in the quote — one-stop service

When supplying material, please ensure:
・Specs match the drawing requirements
・Material certifications (when needed for aerospace, medical, etc.)
・Stock is pre-cut to billet size, or arrange for us to cut it

If specs or dimensions don't match, machining cost and time may need to be re-evaluated.`,
        },
        {
          q: "What processes does the factory cover?",
          a: `In-house equipment:
・CNC lathes (precision turning)
・CNC mills / machining centers (multi-axis milling)

Integrated services (via long-term partner shops):
・Surface treatment: anodizing, nickel plating, chrome plating, blackening, passivation
・Heat treatment: quench, temper, carburize, nitride
・Sheet metal
・Wire-cut and EDM

We provide an end-to-end solution from drawing to finished part — single point of contact, no need to coordinate multiple shops yourself.`,
        },
        {
          q: "Which industries do you primarily serve?",
          a: `With 40+ years of industry experience, we mainly serve:

・Semiconductor equipment: machine parts, wafer-handling mechanisms, vacuum chamber parts
・Aerospace: high-precision, lightweight, difficult-material parts
・Robotics & automation: mechanism parts, grippers, motion-axis components
・Pneumatic / hydraulic equipment: cylinder parts, pistons, bearing seats
・Automotive: engine peripherals, chassis, drivetrain parts
・Industrial machinery: precision shafts, gears, mold parts

We have served 500+ clients across major Taiwan industries.`,
        },
      ],
    },
    {
      title: "Part Types",
      items: [
        {
          q: "What kinds of orders do you accept?",
          a: `We handle pretty much every common order type:

・Prototypes / samples — R&D and new product validation
・Production — stable volume runs
・Custom specs — parts you can't find off-the-shelf
・Design modifications / improvements — based on field feedback
・Replacement parts — substitute machining when OEM parts are discontinued

From 1 piece to virtually no upper limit. Tell us what you need and we'll propose the best approach.`,
        },
        {
          q: "Can you make custom screws and nuts?",
          a: `Yes! We do a lot of custom screw and nut work. Common variations:

・Head types — hex, socket-head, Phillips, slotted, custom shapes
・Lengths — extra-long, extra-short, non-standard
・Materials — SUS304, SUS316, titanium alloys, copper, aluminum, etc.
・Threads — metric (M), imperial (UNF / UNC), special pitch
・Surface finish — blackening, zinc plating, passivation, etc.

Send us a drawing or sample and we'll evaluate the machining approach and lead time.`,
        },
        {
          q: "Can you machine jigs, fixtures, and tooling?",
          a: `Sure. Items we typically handle:

・Production jigs — locating, assembly, inspection
・Fixtures — CNC fixtures, mill fixtures, automation grippers
・Tooling / tool holders — custom cutters, special holders
・Inspection tools — go/no-go gauges, measurement fixtures

If you have a use case but no drawing yet, we can schedule a sales visit, evaluate on-site, then design before machining.`,
        },
        {
          q: "Can you machine mechanical and structural parts?",
          a: `Yes — these are part categories we handle daily:

・Semiconductor equipment parts — chambers, mechanism parts, drive shafts
・Robot structural parts — bases, linkages, joint components
・Pneumatic / hydraulic parts — cylinder bodies, pistons, bearing seats
・Automotive components — engine peripherals, chassis structural parts
・Automation mechanisms — linear-rail seats, locating blocks, bearing blocks

Send a drawing or physical sample and we'll evaluate.`,
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      items: [
        {
          q: "How do you ship orders?",
          a: `For domestic shipping you have a few options:

・Logistics — T-cat, Hsinchu Express, etc., with date specification available
・Customer pickup — welcome, just schedule a pickup time in advance
・Customer-arranged logistics — you designate the carrier, we package and ship accordingly

International shipping — let's discuss it together (forwarder, customs clearance, shipping mode).

Packaging is matched to the product (rust prevention, shock protection). For special packaging needs (designated pallets, custom crates), just let us know at order time.`,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          q: "Can I visit the factory?",
          a: `Partner clients are welcome — please schedule in advance.

To book a visit:
・Phone: +886-4-2335-6451
・Email: agesmyth@gmail.com

Confirming the time and purpose ahead lets us arrange the right person to host you and avoid disrupting active production.`,
        },
        {
          q: "What are your business hours?",
          a: `Mon - Fri 08:00 - 17:30 (Taiwan time). Closed on Saturdays, Sundays, and Taiwan public holidays.

For urgent off-hours inquiries, drop us an email — we'll get back to you first thing on the next business day.`,
        },
      ],
    },
  ],
};
