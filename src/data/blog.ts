export type BlogPost = {
  slug: string;
  title: { zh: string; en: string; de: string };
  excerpt: { zh: string; en: string; de: string };
  category: { zh: string; en: string; de: string };
  date: string; // YYYY-MM-DD
  imageUrl: string;
  // HTML 字串內容（已是受信任、由作者撰寫）
  content: { zh: string; en: string; de: string };
};

// 部落格實質內容（中文完整版；英 / 德為精簡摘要）
// 內容均為原創，依業界通用知識撰寫
export const blogPosts: BlogPost[] = [
  {
    slug: "stainless-steel-grades-selection-guide",
    title: {
      zh: "不鏽鋼選擇指南：SUS304 / SUS316 / SUS440C 何時用哪個？",
      en: "Stainless Steel Selection Guide: SUS304 vs SUS316 vs SUS440C",
      de: "Edelstahl-Auswahlleitfaden: SUS304 vs. SUS316 vs. SUS440C",
    },
    excerpt: {
      zh: "不鏽鋼是 CNC 加工最常用的金屬，但 SUS304、SUS316、SUS440C 三種的耐蝕性、強度、加工性差很大，選錯材料會讓零件壽命大打折扣。本文逐項對比，幫您快速決定該用哪一級。",
      en: "Stainless steel is the most common CNC material, but SUS304, SUS316, and SUS440C differ significantly in corrosion resistance, strength, and machinability. A side-by-side comparison.",
      de: "Edelstahl ist der häufigste CNC-Werkstoff, doch SUS304, SUS316 und SUS440C unterscheiden sich erheblich in Korrosionsbeständigkeit, Festigkeit und Zerspanbarkeit. Ein direkter Vergleich.",
    },
    category: { zh: "知識庫", en: "Knowledge Base", de: "Wissen" },
    date: "2026-05-05",
    imageUrl:
      "https://images.pexels.com/photos/12951626/pexels-photo-12951626.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>不鏽鋼是 CNC 加工最普遍的金屬之一。市場上九成以上的不鏽鋼零件，都落在 <strong>SUS304</strong>、<strong>SUS316</strong>、<strong>SUS440C</strong> 這三個等級之間。但這三種雖然都叫「不鏽鋼」，特性卻有明顯落差 — 用錯了會讓零件提早生鏽、強度不足，或是加工費用爆增。</p>

<p>本文逐項對比這三個等級，協助設計者跟採購快速做出對的選擇。</p>

<h2>化學成分對比</h2>
<table>
<tr><th>等級</th><th>鉻 (Cr)</th><th>鎳 (Ni)</th><th>鉬 (Mo)</th><th>碳 (C)</th></tr>
<tr><td>SUS304</td><td>18-20%</td><td>8-10.5%</td><td>—</td><td>≤ 0.08%</td></tr>
<tr><td>SUS316</td><td>16-18%</td><td>10-14%</td><td>2-3%</td><td>≤ 0.08%</td></tr>
<tr><td>SUS440C</td><td>16-18%</td><td>—</td><td>≤ 0.75%</td><td>0.95-1.2%</td></tr>
</table>
<p>鉻決定耐蝕性、鎳決定韌性、鉬決定耐氯化物腐蝕能力、碳決定可否熱處理 — 從成分就能初步判斷材料適合什麼場合。</p>

<h2>SUS304 — 最通用的不鏽鋼</h2>
<p>市場主流，台灣加工廠庫存最大、相對便宜。一般機械、食品、建築、家電零件大多用這級。</p>
<ul>
<li><strong>耐蝕性</strong>：耐一般大氣、清水、弱酸鹼，可長年無鏽</li>
<li><strong>強度</strong>：屈服強度約 215 MPa，抗拉約 520 MPa</li>
<li><strong>加工性</strong>：好切，可拉伸、可焊接、可拋光成鏡面</li>
<li><strong>限制</strong>：怕海水、強氯化物、高溫氯離子環境</li>
<li><strong>定位</strong>：價格基準（後續其他等級皆以此比較）</li>
</ul>

<h2>SUS316 — 海洋 / 化工等級</h2>
<p>SUS304 的加強版，加了 2-3% 鉬之後，耐氯化物腐蝕能力大幅提升。</p>
<ul>
<li><strong>耐蝕性</strong>：耐海水、強氯化物、化工製程環境</li>
<li><strong>強度</strong>：與 SUS304 接近</li>
<li><strong>加工性</strong>：與 SUS304 接近，但刀具壽命略短</li>
<li><strong>典型應用</strong>：化工管路、海洋零件、半導體製程腔體、醫療器械（SUS316L 是生醫等級）</li>
<li><strong>價格</strong>：約 SUS304 的 <strong>1.5-1.8 倍</strong>（依時點材料行情而異）</li>
</ul>

<h3>SUS316 vs SUS316L 怎麼選？</h3>
<p>L 是 Low Carbon 的意思（含碳量 ≤ 0.03%）。低碳的 SUS316L 焊接後不會在熱影響區產生晶界腐蝕，是<strong>需要焊接 + 高耐蝕</strong>的應用首選 — 化工管路焊接件、生醫植入物、半導體腔體。如果不焊接，一般 SUS316 就夠用、便宜一點。</p>

<h2>SUS440C — 高碳可熱處理</h2>
<p>SUS440C 跟前兩級不同 — 它是<strong>馬氏體不鏽鋼</strong>，含碳量高（0.95-1.2%），可以淬火熱處理到 HRC 58 以上。</p>
<ul>
<li><strong>耐蝕性</strong>：弱於 SUS304，怕酸 / 鹽霧</li>
<li><strong>強度</strong>：熱處理後極高，硬度 HRC 56-60</li>
<li><strong>加工性</strong>：軟態時可加工，硬化後幾乎只能磨削</li>
<li><strong>典型應用</strong>：軸承、刀具、模具導引件、需要硬度 + 部分耐蝕的場合</li>
<li><strong>價格</strong>：圓棒約 SUS304 的 <strong>1.7-2.2 倍</strong>，再加上熱處理整合成本</li>
</ul>

<h2>選擇 flowchart — 一張圖快速決定</h2>
<ol>
<li><strong>會接觸海水或強氯化物嗎？</strong> → Yes：SUS316（焊接件用 SUS316L）</li>
<li><strong>需要硬度 HRC 50+？</strong> → Yes：SUS440C</li>
<li><strong>以上都不是？</strong> → SUS304（最便宜、最通用、最多現貨）</li>
</ol>

<h2>常見錯誤</h2>

<h3>錯誤 1：不鏽鋼就是不會生鏽</h3>
<p>所有不鏽鋼在「對的」（錯的）環境下都會生鏽。SUS304 在高鹽分環境會出現點蝕；SUS440C 在淡水長期浸泡也會出鏽斑。沒有萬靈丹。</p>

<h3>錯誤 2：用 SUS316 取代 SUS304 一定比較好</h3>
<p>SUS316 比 SUS304 貴 50%，但在<strong>非氯化物環境</strong>下，耐蝕性沒有優勢。一般機械零件用 SUS304 就好，把預算花在更需要的地方。</p>

<h3>錯誤 3：SUS440C 當作通用結構材料</h3>
<p>SUS440C 不是「更強的不鏽鋼」— 它是「會生鏽的工具鋼」。設計成持續接觸液體的結構件絕對不適合。</p>

<h2>偉勇承接的不鏽鋼項目</h2>
<p>我們三種等級都有經驗：</p>
<ul>
<li><strong>SUS304</strong>：機構件、結構件、客製夾具最常用</li>
<li><strong>SUS316 / 316L</strong>：半導體腔體、醫療器械、化工零件</li>
<li><strong>SUS440C</strong>：軸承、刀具、模具零件（含熱處理整合）</li>
</ul>
<p>如果不確定該選哪一級，告訴我們零件的<strong>使用環境 + 受力大小 + 加工後表面要求</strong>，我們會建議最合適也最划算的選擇。</p>`,
      en: `<p>Stainless steel is the most common CNC material, but SUS304, SUS316, and SUS440C differ significantly. The wrong choice means premature corrosion, insufficient strength, or unnecessary cost.</p>
<h2>Quick comparison</h2>
<ul>
<li><strong>SUS304:</strong> General-purpose, the price baseline. Good for general machinery, fails in saltwater/strong chlorides.</li>
<li><strong>SUS316:</strong> Adds 2-3% molybdenum, resists saltwater and chlorides. ~1.5× the cost of SUS304. Choice for marine, chemical, semiconductor, medical.</li>
<li><strong>SUS440C:</strong> Martensitic, high-carbon, heat-treatable to HRC 58+. Used for bearings, cutting tools, mold guides. Weaker corrosion resistance — not for prolonged liquid contact.</li>
</ul>
<h2>Decision flow</h2>
<ol>
<li>Saltwater / chlorides? → SUS316 (use SUS316L for welded parts)</li>
<li>Need hardness HRC 50+? → SUS440C</li>
<li>Otherwise → SUS304</li>
</ol>
<h2>Common mistakes</h2>
<p><strong>"Stainless steel never rusts"</strong> — wrong, every grade rusts in the wrong environment. <strong>"SUS316 is always better than SUS304"</strong> — only when chlorides matter; otherwise it's just 50% more expensive. <strong>"SUS440C is the strongest stainless"</strong> — it's a hard-but-rust-prone tool steel, not a structural material.</p>`,
      de: `<p>Edelstahl ist der häufigste CNC-Werkstoff, doch SUS304, SUS316 und SUS440C unterscheiden sich erheblich. Die falsche Wahl bedeutet vorzeitige Korrosion, mangelnde Festigkeit oder unnötige Kosten.</p>
<h2>Kurzvergleich</h2>
<ul>
<li><strong>SUS304:</strong> Universeller Allrounder, bestes Preis-Leistungs-Verhältnis. Für allgemeinen Maschinenbau gut, versagt in Salzwasser/starken Chloriden.</li>
<li><strong>SUS316:</strong> Mit 2-3 % Molybdän — beständig gegen Salzwasser und Chloride. Etwa 1,5× der Kosten von SUS304. Erste Wahl für Meer-, Chemie-, Halbleiter- und Medizintechnik.</li>
<li><strong>SUS440C:</strong> Martensitisch, hoher Kohlenstoffgehalt, härtbar bis HRC 58+. Für Lager, Schneidwerkzeuge, Formgeber. Geringere Korrosionsbeständigkeit — nicht für längeren Flüssigkeitskontakt.</li>
</ul>
<h2>Entscheidungsbaum</h2>
<ol>
<li>Salzwasser / Chloride? → SUS316 (für Schweißteile SUS316L)</li>
<li>Härte HRC 50+ erforderlich? → SUS440C</li>
<li>Sonst → SUS304</li>
</ol>
<h2>Häufige Irrtümer</h2>
<p><strong>„Edelstahl rostet nie"</strong> — falsch, jede Sorte rostet in der falschen Umgebung. <strong>„SUS316 ist immer besser als SUS304"</strong> — nur bei Chloriden; sonst nur 50 % teurer. <strong>„SUS440C ist der festeste Edelstahl"</strong> — es ist ein harter, aber rostanfälliger Werkzeugstahl, kein Strukturwerkstoff.</p>`,
    },
  },
  {
    slug: "cnc-machining-cost-calculation-guide",
    title: {
      zh: "CNC 加工費怎麼算？採購新手必看的 5 大成本項目",
      en: "How CNC Machining Costs Are Calculated: 5 Key Cost Drivers",
      de: "Wie sich CNC-Bearbeitungskosten zusammensetzen: 5 entscheidende Faktoren",
    },
    excerpt: {
      zh: "第一次找 CNC 加工，看到報價單常霧煞煞 — 為什麼這個零件 200 元、那個 2000 元？本文拆解 CNC 報價的 5 大成本構成，並提供降低成本的實用設計建議。",
      en: "First time working with a CNC shop and confused why prices for similar-looking parts can differ 10× or more? We break down the 5 cost components in every CNC quote and how to design parts that quote cheaper.",
      de: "Zum ersten Mal mit einer CNC-Werkstatt arbeiten und unsicher, warum sich ähnlich aussehende Teile preislich um das 10-Fache oder mehr unterscheiden können? Wir zerlegen die 5 Kostenkomponenten jedes CNC-Angebots — und wie sich Teile günstiger konstruieren lassen.",
    },
    category: { zh: "採購指南", en: "Procurement Guide", de: "Einkaufsleitfaden" },
    date: "2026-04-28",
    imageUrl:
      "https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>第一次找 CNC 加工，看到報價單常常霧煞煞 — 為什麼同樣看起來都是「鋁合金小零件」，價差可以到 10 倍以上？</p>

<p>答案是：CNC 加工費不是看「材料 × 重量」算的，而是 <strong>5 大成本因子</strong>共同決定。本文拆解這 5 項，讓您看懂報價、也學會怎麼設計「便宜的零件」。</p>

<p><em>※ 本文僅說明各成本項目的相對比例與影響因素，實際金額會因材料行情、訂單規模、加工複雜度而異 — 請以個別報價為準。</em></p>

<h2>成本因子 1：材料費</h2>
<p>佔總成本約 <strong>20-40%</strong>，看材料種類差距很大：</p>
<ul>
<li><strong>通用級</strong>（A6061 鋁合金、SUS304 不鏽鋼）：相對便宜、最常用</li>
<li><strong>進階不鏽鋼</strong>（SUS316）：比 SUS304 約貴 <strong>50-80%</strong>，耐蝕性更好</li>
<li><strong>銅合金</strong>（黃銅、青銅）：比鋁合金貴 <strong>2-4 倍</strong></li>
<li><strong>難加工材料</strong>（鈦合金 Ti-6Al-4V）：材料費可達鋁合金的 <strong>15-25 倍</strong></li>
<li><strong>特殊合金</strong>（Inconel、Hastelloy）：依規格不同，更高</li>
</ul>
<p>關鍵：CNC 加工是<strong>從一塊大料切下來</strong>，多餘的部分變成切屑（chip）丟掉。所以你付的不是成品重量，而是<strong>毛坯重量</strong>。</p>
<p><strong>省錢做法</strong>：設計零件時讓外形接近標準棒材 / 板材尺寸，減少「切掉的部分」。</p>

<h2>成本因子 2：機台時間</h2>
<p>佔總成本約 <strong>30-50%</strong>，是<strong>最大變數</strong>。</p>
<p>機台時間 = 加工時間 + 換刀時間 + 量測時間。機台越精密、運轉成本越高（含設備折舊 + 電費 + 人工）。常見差異：</p>
<ul>
<li>3 軸 CNC 銑床：基準</li>
<li>5 軸聯動 CNC：時薪約為 3 軸的 <strong>1.5-2.5 倍</strong></li>
<li>精密磨床 / 線切割：另計、依精度需求加價</li>
</ul>
<p>哪些設計會讓機台時間爆增？</p>
<ul>
<li><strong>過深的內穴</strong>：刀具懸長、要慢慢切才不會斷</li>
<li><strong>很多小孔（< 1 mm）</strong>：每孔換鑽頭、每孔慢進給</li>
<li><strong>複雜曲面</strong>：需要 5 軸機 + 長路徑</li>
<li><strong>過嚴公差（< ±0.005 mm）</strong>：精車精銑 + 多次量測</li>
<li><strong>薄壁（厚度 < 1 mm）</strong>：易振動、需慢速切削</li>
</ul>
<p><strong>省錢做法</strong>：避免不必要的嚴公差、減少加工面數、避開薄壁設計。</p>

<h2>成本因子 3：程式 / 設定費</h2>
<p>佔總成本約 <strong>5-20%</strong>，這是<strong>固定成本</strong>，跟生產數量無關。</p>
<p>包含：</p>
<ul>
<li>CAM 編程（讀圖、規劃刀路、模擬碰撞）</li>
<li>機台對刀、夾具設定</li>
<li>首件試切、量測校正</li>
</ul>
<p>一支單純零件約 30 分鐘到 2 小時，複雜零件可能要 4-8 小時。<strong>所以小批量訂單的單件單價特別高</strong> — 因為固定成本被攤到少數件上。</p>
<p><strong>省錢做法</strong>：</p>
<ul>
<li>下單盡量批量化（例：要 10 件就一次下，別分 5 次各 2 件）</li>
<li>同款零件不同尺寸 → 一張訂單下，省設定費</li>
<li>標準化設計：複用既有零件的程式</li>
</ul>

<h2>成本因子 4：刀具費</h2>
<p>佔總成本約 <strong>5-15%</strong>。</p>
<p>普通鋁合金刀具消耗低，幾乎不影響報價。但這幾種會讓刀具費爆增：</p>
<ul>
<li><strong>鈦合金 / Inconel</strong>：刀具壽命可能只剩鋁合金的 1/10</li>
<li><strong>硬度 HRC 50+ 材料</strong>：需用陶瓷或 CBN 刀片，單價是普通硬質合金刀片的 <strong>5-15 倍</strong></li>
<li><strong>特殊刀型（小直徑 + 長刃）</strong>：脆弱、易斷</li>
</ul>
<p><strong>省錢做法</strong>：除非真的需要，避免使用鈦合金、超硬材料；用標準刀具能加工到的特徵。</p>

<h2>成本因子 5：表面處理</h2>
<p>佔總成本約 <strong>10-30%</strong>，可選但常被低估。</p>
<p>常見處理及概略加價：</p>
<ul>
<li>陽極處理（透明 / 黑色）：+5-10%</li>
<li>硬質陽極：+15-25%</li>
<li>電解拋光（不鏽鋼）：+10-15%</li>
<li>鍍鎳：+10-20%</li>
<li>PVD 塗層（如 TiN）：+30-50%</li>
<li>達克鋅（Dacromet）：+8-15%</li>
</ul>
<p><strong>省錢做法</strong>：</p>
<ul>
<li>內部使用、不接觸液體 → 直接用素材，不做處理</li>
<li>美觀需求 → 噴砂（最便宜）就有效果</li>
<li>耐蝕需求 → 選對材料就好（如 SUS316），不一定要表面處理</li>
</ul>

<h2>實用：報價單該看什麼</h2>
<p>正規的 CNC 報價單應該至少列出：</p>
<ul>
<li>單件單價</li>
<li>數量</li>
<li>材料規格 / 等級</li>
<li>表面處理（如有）</li>
<li>交期</li>
<li>付款條件</li>
<li>是否含稅</li>
</ul>
<p>如果報價單只給一個總價、沒拆細項 — 建議要求拆細，至少看出「材料」「加工」「表面處理」三大項，比較不會被當凱子。</p>

<h2>給採購的最終建議</h2>
<p>同一張圖找 3 家報價，差距 30% 以內都算正常 — 加工費受工廠機台水準、訂單滿載率、客戶結構影響。</p>
<p>但如果有一家報價遠低於市場行情（< 60%）— 要小心：可能是用次級材料、跳過量測流程、或單純不想接這單故意亂報。<strong>太便宜的不一定划算</strong>，重做一批的成本比省下的還多。</p>

<p>偉勇報價的原則：透明、合理、長期合作 — 我們不打殺價戰，但保證「給的單價背後的品質一定到位」。</p>`,
      en: `<p>First time working with a CNC shop and confused why prices for similar-looking parts can differ 10× or more? CNC pricing isn't simple "material × weight" — it's driven by 5 key cost components.</p>
<p><em>Note: this article describes proportions and relative impact only. Actual quotes vary with market prices, batch size, and complexity — always rely on individual quotes.</em></p>
<h2>The 5 cost drivers</h2>
<ol>
<li><strong>Material (20-40%):</strong> You pay for the billet, not the finished part. SUS316 typically costs ~50-80% more than SUS304; titanium can be 15-25× the cost of aluminum.</li>
<li><strong>Machine time (30-50%):</strong> The biggest variable. 5-axis machine time is 1.5-2.5× the rate of 3-axis. Tight tolerances, deep pockets, thin walls, complex surfaces all multiply time.</li>
<li><strong>Programming & setup (5-20%):</strong> Fixed cost. Small batches pay disproportionately. Combine orders to amortize.</li>
<li><strong>Tooling (5-15%):</strong> Negligible for aluminum. For titanium/Inconel, tool life can drop to 1/10 — and ceramic/CBN inserts cost 5-15× standard carbide.</li>
<li><strong>Surface treatment (10-30%):</strong> Often overlooked. Anodizing +5-10%, hard anodizing +15-25%, PVD coating +30-50%.</li>
</ol>
<h2>How to design cheaper parts</h2>
<p>Avoid unnecessary tight tolerances, minimize machined faces, avoid thin walls under 1mm, batch orders, standardize designs across SKUs.</p>
<h2>Reading a quote</h2>
<p>A proper quote breaks out material, machining, and surface treatment separately. Lump-sum quotes hide markup. Compare 3 quotes — variance under 30% is normal; quotes 60%+ below market often indicate cut corners.</p>`,
      de: `<p>Zum ersten Mal mit einer CNC-Werkstatt arbeiten und unsicher, warum sich ähnlich aussehende Teile preislich um das 10-Fache oder mehr unterscheiden können? CNC-Preise folgen nicht der einfachen Formel „Material × Gewicht" — sie werden von 5 Faktoren bestimmt.</p>
<p><em>Hinweis: Dieser Artikel beschreibt nur Anteile und relative Auswirkungen. Tatsächliche Angebote variieren mit Marktpreisen, Losgrößen und Komplexität — verbindlich ist stets das individuelle Angebot.</em></p>
<h2>Die 5 Kostentreiber</h2>
<ol>
<li><strong>Werkstoff (20-40 %):</strong> Sie bezahlen den Rohling, nicht das Fertigteil. SUS316 kostet typischerweise 50-80 % mehr als SUS304; Titan kann das 15- bis 25-Fache von Aluminium kosten.</li>
<li><strong>Maschinenzeit (30-50 %):</strong> Der größte Kostentreiber. 5-Achs-Maschinenzeit ist das 1,5- bis 2,5-Fache von 3-Achs. Enge Toleranzen, tiefe Kavitäten, dünne Wände und komplexe Flächen vervielfachen die Zeit.</li>
<li><strong>Programmierung & Rüsten (5-20 %):</strong> Fixkosten. Kleinmengen tragen unverhältnismäßig viel. Aufträge bündeln amortisiert.</li>
<li><strong>Werkzeuge (5-15 %):</strong> Bei Aluminium kaum spürbar. Bei Titan/Inconel kann die Standzeit auf 1/10 fallen — und Keramik-/CBN-Wendeschneidplatten kosten das 5- bis 15-Fache von Standard-Hartmetall.</li>
<li><strong>Oberflächenbehandlung (10-30 %):</strong> Oft unterschätzt. Eloxieren +5-10 %, Harteloxieren +15-25 %, PVD-Beschichtung +30-50 %.</li>
</ol>
<h2>Günstiger konstruieren</h2>
<p>Unnötig enge Toleranzen vermeiden, Bearbeitungsflächen minimieren, dünne Wände unter 1 mm meiden, Aufträge bündeln, Konstruktionen über SKUs hinweg standardisieren.</p>
<h2>Angebot richtig lesen</h2>
<p>Ein gutes Angebot weist Werkstoff, Bearbeitung und Oberfläche getrennt aus. Pauschalpreise verschleiern Aufschläge. 3 Angebote vergleichen — Streuung unter 30 % ist normal; mehr als 60 % unter Markt deutet meist auf Kompromisse hin.</p>`,
    },
  },
  {
    slug: "cnc-machining-aerospace-applications",
    title: {
      zh: "CNC 加工技術在航太產業的應用與展望",
      en: "CNC Machining in Aerospace: Applications and Outlook",
      de: "CNC-Bearbeitung in der Luft- und Raumfahrt: Anwendungen und Ausblick",
    },
    excerpt: {
      zh: "航太零件公差以微米計、材料極難切削、結構日益複雜。本文從技術需求、5 軸加工、難切削材料策略到產業趨勢，剖析 CNC 加工如何支撐現代航太製造。",
      en: "Aerospace parts demand tolerances in microns, work in difficult materials, and feature increasingly complex geometries. This article explores how CNC machining supports modern aerospace manufacturing.",
      de: "Luft- und Raumfahrtteile fordern Toleranzen im Mikrometerbereich, schwer zerspanbare Werkstoffe und zunehmend komplexe Geometrien. Wie die CNC-Bearbeitung die moderne Luftfahrtfertigung trägt.",
    },
    category: { zh: "技術分享", en: "Technical", de: "Technik" },
    date: "2026-04-15",
    imageUrl:
      "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>航太產業是全球最嚴苛的精密製造領域之一。從機翼結構件到引擎內部小如指甲蓋的精密元件，每個零件都關係到飛行器的安全與性能。在這樣的背景下，<strong>CNC 精密加工</strong>成為航太製造不可或缺的關鍵能力。</p>

<h2>航太零件對 CNC 加工的三大要求</h2>
<p>相較於一般機械零件，航太零件有三個明顯的高標準：</p>
<ul>
<li><strong>極高精度</strong>：許多零件公差控制在 ±0.005 mm 以內，相當於頭髮直徑的 1/15。</li>
<li><strong>難加工材料</strong>：鈦合金（Ti-6Al-4V）、Inconel 鎳基合金、超高強度鋁合金（A7075）為航太常用材料，這些材料切削性差、刀具消耗快。</li>
<li><strong>輕量化設計</strong>：許多零件採用薄壁結構或複雜內部空腔，需要 5 軸聯動加工才能一次成形。</li>
</ul>

<h2>常見的航太 CNC 加工技術</h2>
<h3>5 軸聯動加工</h3>
<p>傳統 3 軸 CNC 銑床能處理大部分零件，但對於複雜曲面（如渦輪葉片、機翼骨架接頭），5 軸聯動是必需的。5 軸機可以同時控制 X / Y / Z 三個直線軸與兩個旋轉軸，讓刀具以最佳角度切削，大幅減少裝夾次數與誤差累積。</p>

<h3>難切削材料專用刀具</h3>
<p>加工鈦合金、Inconel 等材料時，刀具選擇至關重要。常見策略：</p>
<ul>
<li>使用 PVD 塗層硬質合金刀片（TiAlN、AlTiN 等）</li>
<li>陶瓷刀片（高速加工 Inconel 時）</li>
<li>低轉速、慢進給，避免加工硬化</li>
<li>充足冷卻液（高壓內冷或微量潤滑）</li>
</ul>

<h3>線切割與精密磨削</h3>
<p>對於熱處理後硬化的零件（如齒輪、模具零件），CNC 銑削難以加工。此時線切割（Wire EDM）能在高硬度材料上切出精確輪廓，精度可達 ±0.002 mm，常與 CNC 加工搭配整合應用。</p>

<h2>產業趨勢：自動化與智慧加工</h2>
<p>近年航太製造朝幾個方向加速發展：</p>
<ul>
<li><strong>無人化生產</strong>：搭配機械手臂自動裝卸料，CNC 機台可 24 小時運轉</li>
<li><strong>製程數位化</strong>：刀具狀態、加工溫度、振動數據即時上傳雲端，預測刀具壽命</li>
<li><strong>數位孿生（Digital Twin）</strong>：在虛擬環境中模擬整個加工過程，提前發現碰撞、過切等問題</li>
<li><strong>3D 列印 + CNC 混合製造</strong>：先列印近似形狀，再用 CNC 精密加工關鍵配合面</li>
</ul>

<h2>結語</h2>
<p>CNC 加工在航太產業的角色將持續強化。能同時掌握難切削材料、5 軸加工、與整合製程的廠商，才能在這個高門檻市場立足。對台灣加工業而言，深耕航太是高附加價值的方向 — 進入門檻高，但客戶忠誠度與單價也相對優渥。</p>`,
      en: `<p>The aerospace industry is one of the most demanding domains in precision manufacturing. From wing structural components to engine parts the size of a fingernail, every component impacts aircraft safety and performance. <strong>CNC precision machining</strong> is therefore an essential capability.</p>
<h2>Three core requirements</h2>
<ul>
<li><strong>Tight tolerances</strong> — often within ±0.005 mm.</li>
<li><strong>Difficult materials</strong> — titanium (Ti-6Al-4V), Inconel, high-strength aluminum (A7075).</li>
<li><strong>Lightweight design</strong> — thin walls and complex internal cavities, often requiring 5-axis simultaneous machining.</li>
</ul>
<h2>Key technologies</h2>
<p>5-axis simultaneous machining handles complex curves and reduces fixturing errors. Coated carbide and ceramic inserts are essential for difficult materials, with carefully tuned speeds and feeds to avoid work-hardening. Wire EDM complements milling for hardened parts requiring precise internal contours.</p>
<h2>Industry trends</h2>
<p>Modern aerospace manufacturing is moving toward unmanned production, real-time process data, digital twins, and hybrid 3D-print-plus-CNC manufacturing. Shops that master difficult materials, 5-axis work, and integrated processes are positioned to thrive in this high-barrier, high-value market.</p>`,
      de: `<p>Die Luft- und Raumfahrt zählt weltweit zu den anspruchsvollsten Bereichen der Präzisionsfertigung. Von tragenden Tragflächenstrukturen bis zu Triebwerksbauteilen in Fingernagelgröße — jedes Teil beeinflusst Sicherheit und Leistung des Flugzeugs. Die <strong>CNC-Präzisionsbearbeitung</strong> ist deshalb eine unverzichtbare Schlüsselkompetenz.</p>
<h2>Drei zentrale Anforderungen</h2>
<ul>
<li><strong>Enge Toleranzen</strong> — häufig innerhalb ±0,005 mm.</li>
<li><strong>Schwer zerspanbare Werkstoffe</strong> — Titan (Ti-6Al-4V), Inconel, hochfestes Aluminium (A7075).</li>
<li><strong>Leichtbau</strong> — dünne Wände und komplexe Innenkavitäten, häufig nur durch 5-Achs-Simultanbearbeitung in einer Aufspannung herstellbar.</li>
</ul>
<h2>Schlüsseltechnologien</h2>
<p>5-Achs-Simultanbearbeitung beherrscht komplexe Freiformflächen und reduziert Aufspannfehler. Beschichtete Hartmetall- und Keramikwendeschneidplatten sind bei schwer zerspanbaren Werkstoffen Pflicht — mit sorgfältig abgestimmten Schnitt- und Vorschubwerten gegen Kaltverfestigung. Drahterodieren ergänzt das Fräsen bei gehärteten Teilen mit präzisen Innenkonturen.</p>
<h2>Branchentrends</h2>
<p>Die moderne Luftfahrtfertigung bewegt sich in Richtung mannlose Produktion, Echtzeit-Prozessdaten, Digital Twins und Hybridfertigung aus 3D-Druck und CNC. Werkstätten, die schwer zerspanbare Werkstoffe, 5-Achs-Bearbeitung und integrierte Prozesse sicher beherrschen, sind in diesem Hochbarriere-Hochwertmarkt bestens positioniert.</p>`,
    },
  },
  {
    slug: "semiconductor-equipment-surface-treatment",
    title: {
      zh: "半導體設備零件的表面處理技術",
      en: "Surface Treatment for Semiconductor Equipment Parts",
      de: "Oberflächenbehandlung von Halbleiteranlagenteilen",
    },
    excerpt: {
      zh: "半導體製程環境嚴苛 — 真空、高溫、強腐蝕氣體、等離子體衝擊都會侵蝕零件。表面處理是延長設備壽命、確保製程穩定的關鍵。本文介紹常見處理方法與選擇邏輯。",
      en: "Semiconductor processing environments are extreme — vacuum, heat, corrosive gases, and plasma all attack equipment parts. Surface treatment is key to longevity and process stability.",
      de: "Halbleiterprozessumgebungen sind extrem — Vakuum, Hitze, korrosive Gase und Plasma greifen Anlagenteile an. Die Oberflächenbehandlung ist entscheidend für Lebensdauer und Prozessstabilität.",
    },
    category: { zh: "技術分享", en: "Technical", de: "Technik" },
    date: "2026-03-28",
    imageUrl:
      "https://images.pexels.com/photos/12951626/pexels-photo-12951626.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>半導體設備中的金屬零件，必須長時間承受幾種極端環境：高真空、超純水化學品清洗、腐蝕性氣體（如 HF、HCl、F₂）、高溫工作（>200°C）、以及製程腔體內的等離子體衝擊。任何一處表面失效，輕則影響晶圓良率，重則造成整批產品報廢。</p>

<p>因此，<strong>表面處理</strong>不是錦上添花，而是設計階段就必須納入的關鍵工序。</p>

<h2>常見的表面處理技術</h2>

<h3>陽極處理（Anodizing）— 鋁合金的標準護身符</h3>
<p>半導體設備常用 A6061、A6063 鋁合金做機構件、腔體骨架。原始表面易氧化、易刮傷。陽極處理在表面形成緻密氧化鋁膜：</p>
<ul>
<li><strong>透明陽極</strong>：5-25 μm，提升耐蝕、耐磨</li>
<li><strong>硬質陽極</strong>：25-50 μm，硬度可達 HV400 以上，適合高耐磨應用</li>
<li><strong>製程級陽極</strong>：嚴控膜厚均勻性與孔隙率，避免製程氣體滲透</li>
</ul>

<h3>電鍍鎳（Nickel Plating）</h3>
<p>用於需要更高耐蝕、耐磨、或需電氣傳導的零件。常見有：</p>
<ul>
<li><strong>無電解鍍鎳（化學鎳）</strong>：膜厚均勻，適合複雜形狀</li>
<li><strong>低應力鎳</strong>：避免薄壁件變形</li>
<li><strong>鎳磷合金</strong>：含磷量越高，耐蝕性越好</li>
</ul>

<h3>PVD / DLC 塗層</h3>
<p>對於極端耐磨需求（如氣閥內密封面、高速轉動軸承），物理氣相沉積（PVD）或類鑽碳膜（DLC）可提供更高硬度與低摩擦係數。常見有 TiN、CrN、TiAlN 等。</p>

<h3>電解拋光與鈍化</h3>
<p>不鏽鋼零件在半導體製程中常需電解拋光，去除表面微觀粗糙、降低顆粒滯留風險，再以鈍化處理形成保護膜，增強耐蝕。這是製程腔體零件的標準流程。</p>

<h2>選擇處理方式的考量</h2>
<p>表面處理選擇沒有萬能解，需綜合考量：</p>
<ul>
<li><strong>使用環境</strong>：真空、化學氣體種類、溫度範圍</li>
<li><strong>機械要求</strong>：是否需高耐磨、抗衝擊</li>
<li><strong>電氣要求</strong>：絕緣或導電</li>
<li><strong>成本與交期</strong>：硬陽比一般陽極貴 2-3 倍，特殊塗層更貴</li>
<li><strong>清潔度等級</strong>：半導體製程零件常需要 Class 100 / Class 10 等級的清潔包裝</li>
</ul>

<h2>實務建議</h2>
<p>下單前一定要與表面處理廠商或加工廠（如有整合服務）確認以下細節：</p>
<ul>
<li>膜厚規格（最小、最大）與量測方法</li>
<li>是否需要遮蔽特定區域（如螺紋、配合面）</li>
<li>處理後尺寸變化（厚膜會讓孔徑變小）</li>
<li>是否需要附 SGS 或材料證明</li>
</ul>

<h2>結語</h2>
<p>表面處理看似後段工序，實為半導體設備零件能否在產線穩定運轉數萬小時的關鍵。選對處理方式，零件壽命可延長 3-5 倍；選錯了，可能上線後幾天就需要更換。</p>`,
      en: `<p>Semiconductor equipment exposes metal parts to extreme conditions — vacuum, heat, corrosive gases, and plasma. <strong>Surface treatment</strong> isn't optional; it's a fundamental design consideration.</p>
<h2>Common surface treatments</h2>
<ul>
<li><strong>Anodizing (aluminum)</strong> — clear, color, hard anodizing (25-50 μm) for wear and corrosion resistance.</li>
<li><strong>Nickel plating</strong> — including electroless nickel-phosphorus, providing uniform thickness over complex shapes.</li>
<li><strong>PVD / DLC coatings</strong> — TiN, CrN, AlTiN for extreme wear and low-friction applications.</li>
<li><strong>Electropolishing + passivation</strong> — standard for stainless parts in process chambers.</li>
</ul>
<h2>Selection considerations</h2>
<p>Choose based on environment (vacuum, gases, temperature), mechanical and electrical requirements, cleanliness level (Class 100 / Class 10 packaging), and cost. The right surface treatment can extend part life 3-5×; the wrong one fails within days.</p>`,
      de: `<p>Halbleiterausrüstung setzt Metallteile extremen Bedingungen aus — Vakuum, Hitze, korrosive Gase und Plasma. <strong>Oberflächenbehandlung</strong> ist nicht optional, sondern eine grundlegende Konstruktionsentscheidung.</p>
<h2>Gängige Oberflächenbehandlungen</h2>
<ul>
<li><strong>Eloxieren (Aluminium)</strong> — klar, farbig, hart (25-50 μm) für Verschleiß- und Korrosionsschutz.</li>
<li><strong>Vernickeln</strong> — einschließlich chemisch Nickel-Phosphor, mit gleichmäßiger Schichtdicke auch bei komplexen Geometrien.</li>
<li><strong>PVD- / DLC-Beschichtungen</strong> — TiN, CrN, AlTiN für extreme Verschleiß- und Reibungsanforderungen.</li>
<li><strong>Elektropolieren + Passivieren</strong> — Standard für Edelstahlteile in Prozesskammern.</li>
</ul>
<h2>Auswahlkriterien</h2>
<p>Wahl nach Umgebung (Vakuum, Gase, Temperatur), mechanischen und elektrischen Anforderungen, Reinheitsklasse (Class 100 / Class 10) und Kosten. Die richtige Behandlung verlängert die Lebensdauer um das 3- bis 5-Fache; die falsche versagt schon nach Tagen.</p>`,
    },
  },
  {
    slug: "5-axis-vs-3-axis-cnc-when-to-upgrade",
    title: {
      zh: "5 軸 CNC vs 3 軸 CNC：何時值得升級？",
      en: "5-axis vs 3-axis CNC: When Is the Upgrade Worth It?",
      de: "5-Achs- vs. 3-Achs-CNC: Wann lohnt sich der Umstieg?",
    },
    excerpt: {
      zh: "5 軸 CNC 投資高、操作複雜，但對的應用情境下能大幅縮短交期、減少裝夾誤差。本文解析兩者差異與升級判斷標準，幫助加工廠與客戶共同做最佳選擇。",
      en: "5-axis CNC machines are pricier and more complex, but in the right scenarios they dramatically reduce lead times and fixturing errors. This article explains how to decide.",
      de: "5-Achs-CNC ist teurer und komplexer, kann aber im richtigen Einsatz Lieferzeiten und Aufspannfehler drastisch reduzieren. So fällt die Entscheidung leichter.",
    },
    category: { zh: "技術分享", en: "Technical", de: "Technik" },
    date: "2026-03-10",
    imageUrl:
      "https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>「我這個零件需要 5 軸 CNC 嗎？」是加工廠最常被客戶問的問題之一。也是工廠主在投資設備前最常思考的決策。</p>

<p>答案不是「越多軸越好」，而是「對的工件，配對的機器」。</p>

<h2>3 軸 CNC：通用之王</h2>
<p>3 軸 CNC 銑床（X、Y、Z 三個直線軸）是業界主流，能處理大多數零件：</p>
<ul>
<li>板狀零件、結構件、模板</li>
<li>形狀相對「四四方方」的機構件</li>
<li>需要多次裝夾才能加工不同面，但每面都不複雜的零件</li>
</ul>
<p>優勢：機台便宜、操作簡單、刀具路徑容易規劃、加工程式好寫、單件成本低。</p>

<h2>5 軸 CNC：複雜曲面殺手</h2>
<p>5 軸機在 3 軸基礎上增加兩個旋轉軸（多為 A 軸 + B 軸 或 A 軸 + C 軸），讓刀具能從任意角度接觸工件：</p>
<ul>
<li>渦輪葉片、葉輪</li>
<li>骨架接頭、模具複雜內輪廓</li>
<li>醫療植入物、人工關節</li>
<li>需從多個角度加工但不能多次裝夾的精密零件</li>
</ul>
<p>優勢：一次裝夾完成多面加工，誤差累積大幅降低；複雜曲面可一刀到位、表面更平整；長刀具可用短刀模擬，剛性更佳。</p>

<h2>什麼時候該升級到 5 軸？</h2>

<h3>👍 升級值得的情境</h3>
<ul>
<li><strong>零件形狀需要從多個角度加工</strong>（例如有斜面、倒勾、複雜曲面）</li>
<li><strong>裝夾次數 > 3 次</strong>就完成不了一個零件</li>
<li><strong>客戶長期訂單以航太、醫療、模具為主</strong>，這些客戶天生需要 5 軸</li>
<li><strong>單件加工時間 > 2 小時</strong>，5 軸能省下大量裝夾與校正時間</li>
<li><strong>累積誤差會超出公差</strong>，多次裝夾的累積誤差問題</li>
</ul>

<h3>👎 暫不升級的情境</h3>
<ul>
<li>大宗訂單仍以板件、塊件為主</li>
<li>3 軸機台還未滿載，先把現有產能用滿才有意義</li>
<li>沒有對應的 CAM 軟體與會用 5 軸的師傅</li>
<li>客戶單價無法支撐 5 軸的折舊成本</li>
</ul>

<h2>實務數字參考</h2>
<p>業界粗略比例（不公開絕對金額，請以實際採購報價為準）：</p>
<ul>
<li>5 軸聯動 CNC 機台採購成本：約 3 軸機台的 <strong>3-6 倍</strong>（依軸配置與規格）</li>
<li>5 軸操作人員時薪：約為 3 軸的 <strong>1.5-2 倍</strong></li>
<li>5 軸刀具消耗：略高於 3 軸（複雜路徑 + 高速進給）</li>
<li>5 軸折舊攤提：通常需要量產訂單支撐才划算</li>
</ul>

<h2>結論：先看訂單結構</h2>
<p>升級 5 軸的關鍵不是技術，而是<strong>訂單結構</strong>。如果您的訂單裡有 30% 以上是「現在 3 軸做起來很痛苦」的零件，那 5 軸的投資回收就會快。如果客戶都是好做的板件，再先進的機台也只是浪費。</p>

<p>跟客戶坦誠溝通需求 — 該用 5 軸的零件用 5 軸做，不需要的就別硬塞 — 才是最務實的策略。</p>`,
      en: `<p>"Do I need a 5-axis CNC for this part?" is one of the most common questions in the shop. The answer isn't "more axes = better"; it's "match the right machine to the right part".</p>
<h2>3-axis CNC: the workhorse</h2>
<p>Plates, brackets, and rectilinear parts. Cheaper, simpler programming, lower cost per unit.</p>
<h2>5-axis CNC: complex-surface specialist</h2>
<p>Turbine blades, joints, mold internal contours, medical implants — anything requiring multi-angle access in a single setup.</p>
<h2>When to upgrade</h2>
<ul>
<li>Parts need approach from multiple angles</li>
<li>More than 3 setups per part</li>
<li>Aerospace / medical / mold customer base</li>
<li>Single-part cycle time > 2 hours</li>
</ul>
<h2>When to wait</h2>
<ul>
<li>Order mix is still mostly plates and rectangular parts</li>
<li>Existing 3-axis machines aren't fully loaded yet</li>
<li>No 5-axis CAM software or trained operators</li>
</ul>
<p>The decision hinges on order mix, not technology FOMO.</p>`,
      de: `<p>„Brauche ich für dieses Teil eine 5-Achs-CNC?" gehört zu den häufigsten Fragen in der Werkstatt. Die Antwort lautet nicht „mehr Achsen = besser", sondern „die richtige Maschine zum richtigen Teil".</p>
<h2>3-Achs-CNC: das Arbeitstier</h2>
<p>Platten, Halter und rechtwinklige Bauteile. Günstiger, einfachere Programmierung, niedrigere Stückkosten.</p>
<h2>5-Achs-CNC: Spezialist für komplexe Flächen</h2>
<p>Turbinenschaufeln, Verbinder, Innenkonturen von Formen, medizinische Implantate — alles, was Mehrwinkelzugang in einer Aufspannung verlangt.</p>
<h2>Wann sich der Umstieg lohnt</h2>
<ul>
<li>Teile erfordern Bearbeitung aus mehreren Winkeln</li>
<li>Mehr als 3 Aufspannungen pro Teil</li>
<li>Kundenkreis aus Luft- und Raumfahrt / Medizin / Formenbau</li>
<li>Einzelteil-Bearbeitungszeit über 2 Stunden</li>
</ul>
<h2>Wann man warten sollte</h2>
<ul>
<li>Auftragsmix besteht überwiegend aus Platten und rechtwinkligen Teilen</li>
<li>Vorhandene 3-Achs-Maschinen sind noch nicht ausgelastet</li>
<li>Keine 5-Achs-CAM-Software oder geschulten Bediener</li>
</ul>
<p>Die Entscheidung hängt vom Auftragsmix ab — nicht von technologischer Mode.</p>`,
    },
  },
  {
    slug: "aluminum-vs-titanium-alloy-comparison",
    title: {
      zh: "金屬材料知識：鋁合金與鈦合金的特性比較",
      en: "Materials 101: Aluminum vs. Titanium Alloys",
      de: "Werkstoffkunde: Aluminium- vs. Titanlegierungen",
    },
    excerpt: {
      zh: "鋁合金輕、便宜、好加工；鈦合金強度高、耐蝕優、但難切削且貴。本文逐項對比兩種材料的特性、加工性、應用場景，協助設計者做合適選擇。",
      en: "Aluminum alloys are light, affordable, and easy to machine; titanium alloys offer high strength and corrosion resistance but are hard to cut and expensive. A side-by-side comparison.",
      de: "Aluminiumlegierungen sind leicht, günstig und gut zerspanbar; Titanlegierungen bieten hohe Festigkeit und Korrosionsbeständigkeit, sind aber schwer zerspanbar und teuer. Ein direkter Vergleich.",
    },
    category: { zh: "知識庫", en: "Knowledge Base", de: "Wissen" },
    date: "2026-02-20",
    imageUrl:
      "https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>當零件設計需要「輕量化 + 高強度 + 耐腐蝕」時，工程師通常會在<strong>鋁合金</strong>和<strong>鈦合金</strong>之間做選擇。雖然兩者都比鋼輕，特性卻有明顯差異。本文逐項對比，幫您快速找到合適的選擇。</p>

<h2>密度與重量</h2>
<ul>
<li>鋁合金：約 2.7 g/cm³</li>
<li>鈦合金：約 4.4 g/cm³（Ti-6Al-4V）</li>
<li>鋼材：約 7.85 g/cm³</li>
</ul>
<p>鋁是鈦的 60%、鈦是鋼的 56%。對需要輕量化的零件（航太、運動器材），鋁是首選；但若強度需求高，鈦的強度重量比甚至超過鋁。</p>

<h2>強度比較</h2>
<table>
<tr><th>材料</th><th>抗拉強度</th><th>屈服強度</th></tr>
<tr><td>A6061-T6（鋁）</td><td>~310 MPa</td><td>~270 MPa</td></tr>
<tr><td>A7075-T6（高強度鋁）</td><td>~570 MPa</td><td>~500 MPa</td></tr>
<tr><td>Ti-6Al-4V（鈦）</td><td>~950 MPa</td><td>~880 MPa</td></tr>
</table>
<p>鈦合金強度約為一般鋁合金的 3 倍、高強度鋁的 1.7 倍，且強度持續到較高溫度（鈦約 400°C 仍維持，鋁超過 200°C 就明顯軟化）。</p>

<h2>耐腐蝕</h2>
<p>鋁靠表面氧化鋁膜抗蝕，但對鹼性環境、氯離子（海水）較弱。鈦則以耐蝕著稱，幾乎不畏海水、酸、鹼，是化工、海洋、人體植入物的標準材料。</p>

<h2>加工性</h2>
<p>這是兩者差異最大的地方：</p>
<ul>
<li><strong>鋁合金</strong>：切削性極佳，可高速加工。一般 CNC 刀具就能勝任，刀具壽命長。</li>
<li><strong>鈦合金</strong>：低熱導率、高切削力、易加工硬化。刀具消耗快（壽命可能僅鋁的 1/10）。需要：
<ul>
<li>低轉速、慢進給</li>
<li>高壓內冷或微量潤滑</li>
<li>塗層硬質合金或陶瓷刀片</li>
</ul>
</li>
</ul>
<p>結果反映在加工成本：同樣形狀的零件，鈦合金加工費可能是鋁合金的 3-8 倍。</p>

<h2>材料價位比較（相對比例）</h2>
<ul>
<li>A6061：價格基準（業界最常用、最便宜的航太鋁）</li>
<li>A7075：約 A6061 的 <strong>1.3-1.7 倍</strong>（高強度航太級）</li>
<li>Ti-6Al-4V：約 A6061 的 <strong>6-10 倍</strong>（依時點鈦原料行情而異）</li>
</ul>
<p>加上鈦合金加工費也明顯高於鋁，所以總成本差距更大。實際金額請以個別報價為準。</p>

<h2>各自適合的應用場景</h2>

<h3>選鋁的時機</h3>
<ul>
<li>消費電子外殼、散熱片</li>
<li>機構件、結構件（不極端受力）</li>
<li>大量量產，成本敏感</li>
<li>需要陽極處理上色</li>
</ul>

<h3>選鈦的時機</h3>
<ul>
<li>航太關鍵零件（強度與重量同時要求）</li>
<li>醫療植入物、人工關節</li>
<li>化工、海洋環境</li>
<li>運動器材高階產品（自行車、登山扣具）</li>
<li>高溫工作環境（如發動機周邊）</li>
</ul>

<h2>實務建議</h2>
<p>選材時請依優先順序回答這三個問題：</p>
<ol>
<li>使用環境會接觸什麼（高溫？腐蝕？海水？）</li>
<li>強度與重量哪個更重要？或兩者都要？</li>
<li>預算與量產規模？</li>
</ol>
<p>大部分情況下，<strong>A6061 仍是最佳通用選擇</strong>。當您發現 A6061 滿足不了需求，先升級到 A7075；A7075 還不夠，才考慮鈦合金。每升一級，成本可能 2-5 倍跳升。</p>

<h2>結語</h2>
<p>沒有絕對最好的材料，只有最適合的材料。理解每種材料的特性、加工性、成本，才能在設計階段就做出最划算的選擇。對加工廠來說，能熟練處理這兩種材料，就能服務從消費電子到航太醫療等廣大客群。</p>`,
      en: `<p>When a part needs to be light, strong, and corrosion-resistant, engineers usually choose between <strong>aluminum</strong> and <strong>titanium</strong> alloys. Both are lighter than steel, but they differ significantly.</p>
<h2>Density</h2>
<p>Aluminum ~2.7 g/cm³, Titanium ~4.4 g/cm³, Steel ~7.85 g/cm³. Aluminum wins on raw weight; titanium has a higher strength-to-weight ratio.</p>
<h2>Strength</h2>
<p>Ti-6Al-4V (~950 MPa) is roughly 3× stronger than A6061 (~310 MPa) and retains strength at 400°C. A7075 sits in between.</p>
<h2>Machinability</h2>
<p>Aluminum is easy to machine and supports high speeds. Titanium has low thermal conductivity and tends to work-harden — tool life can drop to 10% of aluminum, requiring lower speeds, high-pressure coolant, and coated carbide or ceramic inserts. Cost reflects this: titanium machining is typically 3-8× more expensive than aluminum.</p>
<h2>When to choose which</h2>
<p>Aluminum: consumer electronics, structural parts, anodizing finishes, cost-sensitive volume production. Titanium: aerospace critical parts, medical implants, marine/chemical environments, high-temp applications.</p>`,
      de: `<p>Wenn ein Teil leicht, fest und korrosionsbeständig sein soll, fällt die Wahl meist zwischen <strong>Aluminium</strong>- und <strong>Titanlegierungen</strong>. Beide sind leichter als Stahl, unterscheiden sich aber deutlich.</p>
<h2>Dichte</h2>
<p>Aluminium ~2,7 g/cm³, Titan ~4,4 g/cm³, Stahl ~7,85 g/cm³. Aluminium gewinnt beim reinen Gewicht; Titan hat das bessere Festigkeits-Gewichts-Verhältnis.</p>
<h2>Festigkeit</h2>
<p>Ti-6Al-4V (~950 MPa) ist rund dreimal so fest wie A6061 (~310 MPa) und behält seine Festigkeit bis 400 °C. A7075 liegt dazwischen.</p>
<h2>Zerspanbarkeit</h2>
<p>Aluminium ist gut zerspanbar und erlaubt hohe Schnittgeschwindigkeiten. Titan hat niedrige Wärmeleitfähigkeit und neigt zur Kaltverfestigung — die Werkzeugstandzeit kann auf 10 % des Aluminiums fallen und erfordert niedrigere Drehzahlen, Hochdruckkühlung und beschichtete Hartmetall- oder Keramikschneiden. Die Kosten spiegeln das: Titanbearbeitung ist üblicherweise 3-8× teurer als Aluminium.</p>
<h2>Wann was wählen</h2>
<p>Aluminium: Konsumelektronik, Strukturbauteile, eloxierte Oberflächen, kostensensitive Serien. Titan: kritische Luft- und Raumfahrtteile, medizinische Implantate, Meer- und Chemieumgebungen, Hochtemperaturanwendungen.</p>`,
    },
  },
  {
    slug: "smart-manufacturing-industry-4-0",
    title: {
      zh: "工業 4.0 時代下的智慧製造趨勢",
      en: "Smart Manufacturing in the Industry 4.0 Era",
      de: "Smart Manufacturing in der Ära Industrie 4.0",
    },
    excerpt: {
      zh: "工業 4.0 不只是大廠的專利。中小型 CNC 加工廠也能用 IoT、雲端、AI 提升產能與品質。本文盤點台灣中小廠在 5 年內可務實落地的關鍵項目。",
      en: "Industry 4.0 isn't just for large factories. Small and mid-sized CNC shops can leverage IoT, cloud, and AI to boost productivity and quality. Practical steps for the next 5 years.",
      de: "Industrie 4.0 ist nicht nur etwas für Großbetriebe. Kleine und mittelständische CNC-Werkstätten können IoT, Cloud und KI nutzen, um Produktivität und Qualität zu steigern. Eine praxisnahe Roadmap für die nächsten 5 Jahre.",
    },
    category: { zh: "產業趨勢", en: "Industry Trends", de: "Branchentrends" },
    date: "2026-02-05",
    imageUrl:
      "https://images.pexels.com/photos/32845674/pexels-photo-32845674.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>工業 4.0 自德國 2011 年提出至今已超過十年。回頭檢視，台灣金屬加工業有個明顯落差 — <strong>大廠進度快、中小廠仍以傳統方式運作</strong>。但這個落差不是非此即彼。中小型 CNC 加工廠也能在 3-5 年內，循序漸進地落地關鍵的智慧製造能力。</p>

<h2>工業 4.0 的核心是什麼？</h2>
<p>簡單講，是「讓機器、製程、產品自己會說話」。透過：</p>
<ul>
<li><strong>IoT 感測器</strong>：採集機台運轉狀態、刀具消耗、工件溫度等</li>
<li><strong>雲端平台</strong>：把數據集中、可分析</li>
<li><strong>大數據與 AI</strong>：找出規律、預測異常</li>
<li><strong>自動化整合</strong>：機械手臂、自動倉儲、無人化生產</li>
</ul>
<p>結果：減少停機時間、降低不良率、增加單機產出、客戶可即時查詢進度。</p>

<h2>中小型 CNC 加工廠的務實落地路徑</h2>

<h3>第 1 階段：機台聯網（半年內可完成）</h3>
<p>絕大多數 2015 年後的 CNC 機台都支援 OPC-UA、MTConnect 等通訊協定。把所有機台接入區網，就能：</p>
<ul>
<li>即時看到每台機台運轉 / 待機 / 故障狀態</li>
<li>累積每日 / 每月實際開機率（OEE）</li>
<li>遠端查看進度，老闆不必每小時去現場巡視</li>
</ul>
<p>投資門檻屬於低成本可入手 — 主要是每機台一個聯網閘道器 + 雲端平台月費。具體金額視供應商方案而定。</p>

<h3>第 2 階段：刀具與品質追溯（1 年內）</h3>
<ul>
<li>刀具壽命管理：累計切削時間自動報警，提前更換</li>
<li>三次元量測數據自動上傳：每件量測值都有紀錄、客戶要報告隨時調出</li>
<li>NCR（不良品）資料庫：每次不良的原因、對策、責任人都記錄，後續分析改善</li>
</ul>

<h3>第 3 階段：預測性維護（2-3 年）</h3>
<p>機台主軸振動、伺服馬達電流、潤滑油溫度等數據累積夠多後，可訓練 AI 模型，在故障發生前 1-2 週就警告。可大幅減少非預期停機。</p>

<h3>第 4 階段：自動化串接（3-5 年）</h3>
<p>機械手臂自動裝卸料、AGV 搬運成品、無人倉儲。這階段資本投入較大（單機械手臂的價位通常是中階 CNC 機台的 1-2 倍），但對於量產類訂單可大幅降低人力依賴。</p>

<h2>中小廠常見的迷思與破解</h2>

<h3>迷思 1：「我們規模小，不適合工業 4.0」</h3>
<p>實際上：規模小的好處是<strong>系統部署更快、改變更靈活</strong>。大廠要動 IT 系統往往要半年以上跨部門協調；小廠老闆一句話，下週就能上線。</p>

<h3>迷思 2：「導入要花很多錢」</h3>
<p>實際上：第 1 階段（機台聯網）屬於低投資門檻，但可立刻看到 OEE 提升 <strong>5-10%</strong>。投資回收期通常 6-12 個月。</p>

<h3>迷思 3：「員工不會用」</h3>
<p>實際上：現在主流系統的介面都已經像手機 APP 般直觀。重點是<strong>讓員工感受到好處</strong> — 例如「以前要手寫日報，現在系統自動生成」— 而不是強迫他們學新技術。</p>

<h2>從哪一步開始？</h2>
<p>不要一次規劃到第 4 階段。先做第 1 階段的「機台聯網 + OEE 監控」，3 個月後檢視數據、看見成效，再決定下一步。</p>

<p>典型的台灣 CNC 中小廠：</p>
<ol>
<li>第 1 年：機台聯網 + OEE 監控 + 數位化日報</li>
<li>第 2 年：刀具管理 + 量測數據追溯</li>
<li>第 3-4 年：預測性維護 + 部分自動化</li>
<li>第 5 年：客戶查單 / 自動報價 / 數據驅動排程</li>
</ol>

<h2>結語</h2>
<p>工業 4.0 對中小型 CNC 加工廠不是「要不要做」，而是「什麼時候做、做到哪個階段」。早 1 年起步的廠商，3 年後在交期、品質、客戶體驗上都會有明顯領先。</p>

<p>對台灣加工業而言，這也是擺脫「殺價競爭」、走向「附加價值競爭」的關鍵轉型。</p>`,
      en: `<p>Industry 4.0 isn't just for large factories. Small and mid-sized CNC shops can leverage IoT, cloud, and AI to dramatically improve operations.</p>
<h2>What it really means</h2>
<p>Connect machines, processes, and products via IoT sensors, cloud platforms, AI analytics, and automation integration. Result: less downtime, lower defects, higher single-machine output.</p>
<h2>Practical roadmap for small / mid shops</h2>
<ol>
<li><strong>Year 1:</strong> Machine connectivity (OPC-UA / MTConnect) + OEE monitoring + digital daily reports.</li>
<li><strong>Year 2:</strong> Tool life management + measurement data traceability.</li>
<li><strong>Year 3-4:</strong> Predictive maintenance via AI models + partial automation.</li>
<li><strong>Year 5:</strong> Customer order tracking + automated quoting + data-driven scheduling.</li>
</ol>
<h2>Common myths</h2>
<p><strong>"We're too small."</strong> — Actually, small shops deploy faster and adapt quicker than large enterprises. <strong>"It costs too much."</strong> — Stage 1 typically pays back within 6-12 months. <strong>"My staff won't adopt it."</strong> — Modern interfaces are app-like; the key is showing tangible benefits to operators.</p>`,
      de: `<p>Industrie 4.0 ist nicht nur etwas für Großbetriebe. Kleine und mittelständische CNC-Werkstätten können IoT, Cloud und KI nutzen, um den Betrieb deutlich zu verbessern.</p>
<h2>Worum es eigentlich geht</h2>
<p>Maschinen, Prozesse und Produkte über IoT-Sensoren, Cloud-Plattformen, KI-Analytik und Automatisierung verknüpfen. Ergebnis: weniger Stillstand, geringere Ausschussraten, höherer Output pro Maschine.</p>
<h2>Praxisnahe Roadmap für KMU-Werkstätten</h2>
<ol>
<li><strong>Jahr 1:</strong> Maschinenvernetzung (OPC-UA / MTConnect) + OEE-Monitoring + digitale Tagesberichte.</li>
<li><strong>Jahr 2:</strong> Werkzeuglebensdauer-Management + Messdaten-Rückverfolgbarkeit.</li>
<li><strong>Jahr 3-4:</strong> Predictive Maintenance via KI-Modelle + Teilautomatisierung.</li>
<li><strong>Jahr 5:</strong> Kunden-Auftragsstatus + automatisierte Angebote + datengetriebene Planung.</li>
</ol>
<h2>Häufige Mythen</h2>
<p><strong>„Wir sind zu klein."</strong> — Tatsächlich rollen kleine Betriebe schneller aus und passen sich agiler an als Großunternehmen. <strong>„Zu teuer."</strong> — Stufe 1 amortisiert sich meist innerhalb von 6-12 Monaten. <strong>„Mein Team macht nicht mit."</strong> — Moderne Oberflächen sind App-ähnlich; entscheidend ist der spürbare Nutzen für die Bediener.</p>`,
    },
  },
  {
    slug: "precision-machining-quality-control",
    title: {
      zh: "精密加工的品質管控：從原料到出貨",
      en: "Quality Control in Precision Machining: From Material to Shipment",
      de: "Qualitätskontrolle in der Präzisionsfertigung: Vom Material bis zum Versand",
    },
    excerpt: {
      zh: "好品質不是出貨前才檢驗出來的，而是從進料、加工到出貨每一個階段都做對。本文拆解精密加工品質管控的 5 大環節，與業界常用的工具與做法。",
      en: "Quality isn't checked at the end — it's built in at every stage from material receipt to shipment. We break down the 5 key checkpoints and common tools.",
      de: "Qualität entsteht nicht erst bei der Endprüfung — sie wird in jeder Phase von Wareneingang bis Versand aufgebaut. Die 5 zentralen Kontrollpunkte und gängigen Werkzeuge im Überblick.",
    },
    category: { zh: "技術分享", en: "Technical", de: "Technik" },
    date: "2026-01-18",
    imageUrl:
      "https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>「品質是檢驗出來的嗎？」這個問題在製造業內爭論已久。答案是：<strong>不是。品質是做出來的，檢驗只是把已經做錯的零件抓出來</strong>。</p>

<p>真正的精密加工品質管控，是從原料進廠到產品出貨，每個環節都做對。本文拆解 5 大關鍵環節。</p>

<h2>環節 1：進料檢驗（IQC）</h2>
<p>客戶供料 vs 我方代購，無論哪種，進廠時都要確認：</p>
<ul>
<li><strong>材料證明</strong>：航太、醫療等高要求產業，必須附 Mill Test Cert（材質報告）</li>
<li><strong>外觀</strong>：表面是否有刮傷、鏽蝕、氧化</li>
<li><strong>尺寸</strong>：原料截面尺寸是否在容許範圍</li>
<li><strong>標籤可追溯</strong>：每批料給予獨立批號，後續若有不良可追到具體哪批料</li>
</ul>
<p>這一步常被忽略，但「材料用錯」造成的損失最大 — 一旦加工完才發現材質不對，整批報廢。</p>

<h2>環節 2：加工前準備</h2>
<ul>
<li><strong>圖面確認</strong>：客戶圖、加工圖、編程圖是否一致？公差、表面處理、毛邊處理是否標清楚？</li>
<li><strong>刀具準備</strong>：依加工要求選對刀具，不能因為「順手有什麼用什麼」</li>
<li><strong>夾治具校正</strong>：每批生產前確認夾具定位精度</li>
<li><strong>首件確認</strong>：第一件加工完後立即量測，確認沒問題才連續生產</li>
</ul>

<h2>環節 3：加工中監控</h2>
<p>加工中不是放著不管，而是要：</p>
<ul>
<li><strong>定期抽件量測</strong>：每 10 件、每 50 件抽量一次，確保刀具磨耗未造成尺寸漂移</li>
<li><strong>關注機台異常</strong>：振動、聲音、切削屑形狀都是線索</li>
<li><strong>加工日誌</strong>：記錄轉速、進給、刀具壽命，後續若有不良可追因</li>
</ul>

<h2>環節 4：完工檢驗（FQC）</h2>
<p>不同精度等級的零件，用不同量具：</p>
<ul>
<li><strong>一般尺寸（±0.05 mm 以上）</strong>：游標卡尺、千分卡、針規 / 環規</li>
<li><strong>高精度（±0.005 mm 級）</strong>：三次元量測儀（CMM）、光學投影機</li>
<li><strong>表面粗糙度</strong>：粗糙度儀（如 Ra、Rz 量測）</li>
<li><strong>形狀公差（直度、平面度、圓度等）</strong>：CMM 配合特殊量測程式</li>
</ul>
<p>檢驗報告應該標準化：每個關鍵尺寸量測值、判定（PASS/NG）、量測者、量測日期都要清楚。</p>

<h2>環節 5：出貨前確認與包裝</h2>
<ul>
<li><strong>數量清點</strong>：與訂單一致</li>
<li><strong>外觀最終檢視</strong>：搬運過程是否造成新刮傷</li>
<li><strong>清潔</strong>：依客戶需求清潔（無塵、無油、特定潔淨等級）</li>
<li><strong>包裝</strong>：依產品防護需求（防鏽油、防撞泡棉、客戶指定規格）</li>
<li><strong>標籤</strong>：批號、料號、數量、日期清楚標示</li>
<li><strong>檢驗報告</strong>：依客戶需求附上</li>
</ul>

<h2>業界常用的品質管理工具</h2>

<h3>SPC（統計製程管制）</h3>
<p>對量產零件，把量測值畫在管制圖上，可即時看出尺寸有無漂移趨勢，在做出不良品之前先調整。</p>

<h3>FMEA（失效模式分析）</h3>
<p>事前列出「可能哪裡出錯」，預防勝於檢驗。</p>

<h3>8D 報告</h3>
<p>當發生客訴時，依 8 步驟調查根因 + 對策 + 預防再發。</p>

<h2>實務建議</h2>
<ul>
<li><strong>檢驗紀錄要保存至少 3 年</strong>：客戶可能事後追溯</li>
<li><strong>量具要校正</strong>：每年送外校正一次，校正報告留存</li>
<li><strong>不良品要分析</strong>：不只是丟掉，要找出為什麼，下次不再犯</li>
<li><strong>建立公司的品質手冊</strong>：流程標準化，新人也能照做</li>
</ul>

<h2>結語</h2>
<p>精密加工的品質管控不是某個環節的事，而是貫穿整個生產流程的紀律。對客戶而言，看到加工廠有完整的品質流程、能提供詳細的檢驗報告、面對客訴有規範化的處理機制 — 這些「軟實力」往往比機台多新、設備多貴更能贏得長期信任。</p>`,
      en: `<p>"Is quality just inspection?" The answer is no — quality is built in at every stage. Inspection only catches what's already gone wrong.</p>
<h2>Five key checkpoints</h2>
<ol>
<li><strong>Incoming material inspection (IQC):</strong> mill test certs, dimensional check, batch traceability.</li>
<li><strong>Pre-machining setup:</strong> drawing review, tool selection, fixture verification, first-article inspection.</li>
<li><strong>In-process monitoring:</strong> periodic sampling (every 10-50 pieces), machine condition awareness, process logs.</li>
<li><strong>Final quality inspection (FQC):</strong> calipers and gauges for general tolerances; CMM and optical comparators for ±0.005 mm precision; roughness testers; geometric tolerance measurement.</li>
<li><strong>Pre-shipment:</strong> count, cleanliness, packaging per spec, labeling, inspection reports as required.</li>
</ol>
<h2>Industry tools</h2>
<p>Statistical Process Control (SPC) catches drift before defects occur. FMEA prevents failures by mapping risks upfront. 8D reports drive systematic root-cause analysis after customer complaints.</p>
<h2>Bottom line</h2>
<p>Customers value robust quality processes, detailed inspection reports, and standardized complaint handling more than the latest machinery. These "soft" capabilities win long-term trust.</p>`,
      de: `<p>„Ist Qualität nur eine Frage der Endprüfung?" Die Antwort lautet nein — Qualität wird in jeder Phase aufgebaut. Die Prüfung fängt nur ab, was bereits schiefgelaufen ist.</p>
<h2>Fünf zentrale Kontrollpunkte</h2>
<ol>
<li><strong>Wareneingangsprüfung (IQC):</strong> Werkszeugnisse, Maßprüfung, Chargenrückverfolgbarkeit.</li>
<li><strong>Rüsten vor der Bearbeitung:</strong> Zeichnungsprüfung, Werkzeugwahl, Vorrichtungsverifikation, Erstmusterprüfung.</li>
<li><strong>In-Prozess-Überwachung:</strong> regelmäßige Stichproben (alle 10-50 Stück), Maschinenzustandsbeobachtung, Prozessprotokolle.</li>
<li><strong>Endprüfung (FQC):</strong> Messschieber und Lehren für allgemeine Toleranzen; KMG und Profilprojektoren für ±0,005 mm; Rauheitsmessgeräte; Form- und Lagetoleranzmessung.</li>
<li><strong>Vor dem Versand:</strong> Stückzahl, Sauberkeit, Verpackung gemäß Spezifikation, Kennzeichnung, Prüfberichte nach Bedarf.</li>
</ol>
<h2>Branchenwerkzeuge</h2>
<p>Statistische Prozessregelung (SPC) erkennt Drift, bevor Ausschuss entsteht. FMEA verhindert Ausfälle durch vorausschauende Risikobewertung. 8D-Berichte treiben die systematische Ursachenanalyse nach Kundenreklamationen.</p>
<h2>Fazit</h2>
<p>Kunden schätzen robuste Qualitätsprozesse, detaillierte Prüfberichte und standardisierte Reklamationsbearbeitung höher ein als die neueste Maschine. Diese „weichen" Fähigkeiten gewinnen langfristiges Vertrauen.</p>`,
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
