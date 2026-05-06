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
    slug: "titanium-alloy-grades-comparison",
    title: {
      zh: "鈦合金等級完整指南：Grade 1-4 / Ti-6Al-4V / ELI 怎麼選？",
      en: "Titanium Alloy Grades Complete Guide: Grade 1-4 vs Ti-6Al-4V vs ELI",
      de: "Vollständiger Leitfaden zu Titanlegierungen: Grade 1-4 vs. Ti-6Al-4V vs. ELI",
    },
    excerpt: {
      zh: "鈦合金不只「Grade 5」一種 — 從純鈦 Grade 1-4 到航太級 Ti-6Al-4V、生醫 ELI 等級，性能差距很大。本文逐項對比常用鈦合金等級的耐蝕性、強度、加工性、應用場景。",
      en: "Titanium isn't just 'Grade 5' — from pure titanium Grade 1-4 to aerospace Ti-6Al-4V to medical-grade ELI, performance varies widely. We compare common titanium grades on corrosion, strength, machinability, and applications.",
      de: "Titan ist nicht nur Grade 5 — von Reintitan Grade 1-4 über Luftfahrt-Ti-6Al-4V bis zu medizinischem ELI variiert die Leistung erheblich. Wir vergleichen gängige Titansorten nach Korrosion, Festigkeit, Zerspanbarkeit und Anwendungen.",
    },
    category: { zh: "知識庫", en: "Knowledge Base", de: "Wissen" },
    date: "2026-05-02",
    imageUrl:
      "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>鈦合金一向被當成「高階金屬」— 但很多採購跟工程師會把所有鈦都統稱「Ti」或「鈦合金」，忽略了不同等級之間的差距。Grade 1 跟 Grade 5（Ti-6Al-4V）在強度上差 3 倍、價格差 2 倍、加工性也完全不同。</p>

<p>本文整理常用鈦合金等級的特性對比，協助設計者跟採購做出對的選擇。</p>

<h2>鈦合金的兩大類別</h2>

<p>商業鈦合金分兩大家族：</p>
<ul>
<li><strong>純鈦（Commercially Pure, CP）</strong>：Grade 1、2、3、4 — 含氧量、鐵量遞增，強度遞增、耐蝕性遞減</li>
<li><strong>鈦合金（Alloyed）</strong>：加入鋁、釩、鉬等合金元素提升強度。Grade 5（Ti-6Al-4V）為市場主流</li>
</ul>

<h2>純鈦 Grade 1-4</h2>

<h3>Grade 1 — 最軟、最耐蝕</h3>
<ul>
<li>抗拉強度約 240 MPa（最低）</li>
<li>耐蝕性最佳，可成形性極佳</li>
<li>典型應用：化工反應器內襯、海水管路、電鍍夾具</li>
</ul>

<h3>Grade 2 — 通用商業純鈦</h3>
<ul>
<li>抗拉強度約 345 MPa</li>
<li>市場上「純鈦」最常用 — 強度與耐蝕性平衡</li>
<li>典型應用：醫療器械、化工設備、海洋零件、建築裝飾件</li>
</ul>

<h3>Grade 3 / Grade 4 — 高強度純鈦</h3>
<ul>
<li>Grade 4 抗拉強度可達 550 MPa（接近一般合金鋼）</li>
<li>仍保持純鈦的耐蝕性</li>
<li>典型應用：航太緊固件、軍工結構件</li>
</ul>

<h2>鈦合金 Ti-6Al-4V（Grade 5）— 業界主流</h2>

<p>俗稱「64 鈦」（含 6% 鋁、4% 釩），佔全球鈦合金消費量的 50% 以上。原因：強度跟重量比優於大多數金屬。</p>

<ul>
<li><strong>抗拉強度</strong>：950-1100 MPa（接近高強度鋼）</li>
<li><strong>密度</strong>：4.43 g/cm³（鋼的 56%）</li>
<li><strong>強度重量比</strong>：頂級</li>
<li><strong>耐溫</strong>：可在 400°C 連續工作</li>
<li><strong>典型應用</strong>：航太結構件、軍機零件、衛星、頂級改裝排氣、高階自行車架、植入物（搭配 ELI）</li>
</ul>

<h2>Ti-6Al-4V ELI — 生醫植入物專用</h2>

<p>ELI = Extra Low Interstitial（超低間隙元素）。同樣是 6Al-4V 成分，但氧、氮、碳、鐵含量更低。差異：</p>

<ul>
<li>氧 ≤ 0.13%（一般 Grade 5 為 0.20%）</li>
<li>韌性更佳、抗疲勞性更好</li>
<li>強度略低（抗拉約 860 MPa）</li>
<li>價格高於一般 Grade 5 約 30-50%</li>
</ul>

<p>典型應用：人工關節、骨釘、牙科植入物、心臟支架。<strong>非生醫應用幾乎不需要 ELI</strong>，用一般 Grade 5 就夠。</p>

<h2>其他鈦合金（簡介）</h2>

<table>
<tr><th>等級</th><th>俗稱</th><th>特性</th><th>應用</th></tr>
<tr><td>Grade 7</td><td>鈀鈦</td><td>含 0.15% 鈀，極致耐蝕</td><td>強腐蝕化工環境</td></tr>
<tr><td>Grade 9</td><td>3-2.5</td><td>含 3% Al、2.5% V，中強度</td><td>運動器材、自行車管</td></tr>
<tr><td>Grade 12</td><td>—</td><td>含 0.3% Mo、0.8% Ni</td><td>耐蝕熱交換器</td></tr>
<tr><td>Grade 19</td><td>Beta-C</td><td>β 鈦合金，超高強度可熱處理</td><td>賽車彈簧、特殊緊固件</td></tr>
<tr><td>Grade 23</td><td>Ti-6Al-4V ELI</td><td>同 ELI，正式 ASTM 編號</td><td>生醫植入物</td></tr>
</table>

<h2>價格與加工成本（相對比例）</h2>

<p>以 Grade 2 純鈦為基準：</p>
<ul>
<li>Grade 1 純鈦：約 Grade 2 的 0.95 倍</li>
<li>Grade 4 純鈦：約 Grade 2 的 1.2 倍</li>
<li>Ti-6Al-4V（Grade 5）：約 Grade 2 的 <strong>1.5-1.8 倍</strong></li>
<li>Ti-6Al-4V ELI：約 Grade 5 的 <strong>1.3-1.5 倍</strong></li>
<li>Grade 7 鈀鈦：約 Grade 2 的 <strong>3-5 倍</strong>（含貴金屬）</li>
</ul>

<p>加工成本：所有鈦合金的切削成本約是 Aluminum A6061 的 <strong>3-8 倍</strong>（刀具消耗 + 慢進給 + 高壓冷卻）。實際金額請以個別報價為準。</p>

<h2>選擇 flowchart</h2>

<ol>
<li><strong>需要植入人體？</strong> → Ti-6Al-4V ELI（Grade 23）</li>
<li><strong>需要極致耐蝕（化工 / 海水）？</strong> → Grade 1-2 純鈦或 Grade 7</li>
<li><strong>強度為首要（航太 / 軍工 / 高階改裝）？</strong> → Ti-6Al-4V（Grade 5）</li>
<li><strong>中強度 + 耐蝕（運動器材）？</strong> → Grade 9</li>
<li><strong>不確定？</strong> → 從 Grade 5（Ti-6Al-4V）起步，這是 90% 應用的合理預設</li>
</ol>

<h2>加工注意事項</h2>

<p>所有鈦合金加工都要面對：</p>
<ul>
<li><strong>低熱導率</strong> → 切削熱集中於刀刃，刀具壽命短</li>
<li><strong>易加工硬化</strong> → 不能太慢進給</li>
<li><strong>反應性高</strong> → 高溫易與氧氮反應，需充足冷卻</li>
<li><strong>需要塗層硬質合金或陶瓷刀片</strong></li>
</ul>

<p>不同等級的加工難度排序：純鈦 Grade 1-2（最易）&lt; Grade 4 &lt; Ti-6Al-4V &lt; β 系列鈦（最難）。</p>

<h2>偉勇承接的鈦合金加工</h2>

<p>我們長期承接：</p>
<ul>
<li>Ti-6Al-4V（Grade 5）：航太結構件、衛星零件、頂級改裝排氣</li>
<li>Ti-6Al-4V ELI（Grade 23）：醫療植入物、骨科器械（提供材料追溯）</li>
<li>純鈦 Grade 1-4：化工設備、海洋零件、客製化緊固件</li>
</ul>

<p>所有鈦合金加工皆可附材質證明（Mill Test Cert）+ 量測報告。圖面與規格傳給我們即可評估。</p>`,
      en: `<p>Titanium isn't just "Grade 5" — performance varies widely across grades.</p>

<h2>Pure Titanium (Grade 1-4)</h2>
<ul>
<li><strong>Grade 1</strong>: Softest, most corrosion-resistant. ~240 MPa tensile. Chemical reactor liners, seawater piping.</li>
<li><strong>Grade 2</strong>: General-purpose CP titanium. ~345 MPa. Medical, chemical, marine.</li>
<li><strong>Grade 3-4</strong>: Higher strength CP. Grade 4 reaches ~550 MPa. Aerospace fasteners.</li>
</ul>

<h2>Ti-6Al-4V (Grade 5) — the workhorse</h2>
<p>The standard. 950-1100 MPa tensile, 56% the density of steel. ~50%+ of all titanium consumption. Aerospace structures, satellites, high-end exhaust, premium bicycles.</p>

<h2>Ti-6Al-4V ELI (Grade 23)</h2>
<p>Extra Low Interstitial — lower oxygen, nitrogen, carbon, iron. Better toughness and fatigue. Reserved for medical implants. ~30-50% more expensive than standard Grade 5.</p>

<h2>Other grades (briefly)</h2>
<ul>
<li>Grade 7 (Pd-Ti): extreme corrosion resistance, costly</li>
<li>Grade 9 (3-2.5): mid-strength, sports equipment</li>
<li>Grade 12: corrosion-resistant heat exchangers</li>
<li>Grade 19 (Beta-C): heat-treatable beta alloy</li>
</ul>

<h2>Selection guide</h2>
<ol>
<li>Body implant? → Grade 23 (ELI)</li>
<li>Extreme corrosion? → Grade 1-2 or Grade 7</li>
<li>Strength priority? → Grade 5</li>
<li>Default fallback? → Grade 5 covers 90% of applications</li>
</ol>

<h2>Machining notes</h2>
<p>All titanium grades demand low thermal conductivity, work-hardening tendency, and reactivity at elevated temperatures. Coated carbide or ceramic inserts required. Difficulty: pure Ti < Grade 4 < Ti-6Al-4V < beta alloys.</p>`,
      de: `<p>Titan ist nicht nur „Grade 5" — die Leistung variiert erheblich zwischen den Sorten.</p>

<h2>Reintitan (Grade 1-4)</h2>
<ul>
<li><strong>Grade 1</strong>: Weichste Sorte, höchste Korrosionsbeständigkeit. ~240 MPa Zugfestigkeit. Chemiereaktorauskleidungen, Meerwasserrohre.</li>
<li><strong>Grade 2</strong>: Allzweck-CP-Titan. ~345 MPa. Medizin, Chemie, Marine.</li>
<li><strong>Grade 3-4</strong>: Höhere Festigkeit. Grade 4 erreicht ~550 MPa. Luftfahrt-Verbindungselemente.</li>
</ul>

<h2>Ti-6Al-4V (Grade 5) — der Standard</h2>
<p>Die Standardsorte. 950-1100 MPa Zugfestigkeit, 56 % der Stahldichte. Über 50 % des gesamten Titanverbrauchs. Luftfahrtstrukturen, Satelliten, High-End-Auspuffanlagen, Premium-Fahrräder.</p>

<h2>Ti-6Al-4V ELI (Grade 23)</h2>
<p>Extra Low Interstitial — niedrigere Sauerstoff-, Stickstoff-, Kohlenstoff- und Eisengehalte. Bessere Zähigkeit und Ermüdungsbeständigkeit. Speziell für medizinische Implantate. Etwa 30-50 % teurer als Standard-Grade-5.</p>

<h2>Weitere Sorten (kurz)</h2>
<ul>
<li>Grade 7 (Pd-Ti): extreme Korrosionsbeständigkeit, teuer</li>
<li>Grade 9 (3-2.5): mittlere Festigkeit, Sportgeräte</li>
<li>Grade 12: korrosionsbeständige Wärmetauscher</li>
<li>Grade 19 (Beta-C): härtbare Beta-Legierung</li>
</ul>

<h2>Auswahlleitfaden</h2>
<ol>
<li>Körperimplantat? → Grade 23 (ELI)</li>
<li>Extreme Korrosion? → Grade 1-2 oder Grade 7</li>
<li>Festigkeit prioritär? → Grade 5</li>
<li>Default? → Grade 5 deckt 90 % der Anwendungen ab</li>
</ol>

<h2>Bearbeitungshinweise</h2>
<p>Alle Titansorten erfordern wegen niedriger Wärmeleitfähigkeit, Kaltverfestigungsneigung und Reaktivität bei höheren Temperaturen besondere Strategien. Beschichtetes Hartmetall oder Keramikeinsätze erforderlich. Schwierigkeit: Reintitan < Grade 4 < Ti-6Al-4V < Beta-Legierungen.</p>`,
    },
  },
  {
    slug: "machining-tolerance-standards-guide",
    title: {
      zh: "CNC 加工公差規範入門：ISO 2768、IT 等級、GD&T 怎麼看？",
      en: "CNC Machining Tolerance Standards Guide: ISO 2768, IT Grades, GD&T",
      de: "Leitfaden zu CNC-Toleranznormen: ISO 2768, IT-Toleranzklassen, GD&T",
    },
    excerpt: {
      zh: "圖面上的公差標註，直接決定加工成本。標太嚴 — 報價爆增；標太寬 — 零件裝不上。本文介紹 ISO 2768、IT 等級、GD&T 三大公差體系，協助採購跟設計者做出合理的公差規格。",
      en: "Tolerance callouts on drawings directly drive machining cost. Too tight — quote skyrockets; too loose — parts don't fit. We cover ISO 2768, IT grades, and GD&T to help engineers and buyers spec sensibly.",
      de: "Toleranzangaben auf Zeichnungen bestimmen direkt die Bearbeitungskosten. Zu eng — Preis explodiert; zu locker — Teile passen nicht. Wir behandeln ISO 2768, IT-Toleranzklassen und GD&T für sinnvolle Spezifikationen.",
    },
    category: { zh: "技術分享", en: "Technical", de: "Technik" },
    date: "2026-04-25",
    imageUrl:
      "https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>圖面上的公差，是 CNC 加工成本的最大決定因素之一。同一個零件，公差從 ±0.1 mm 改到 ±0.005 mm，加工費可能差 5-10 倍。</p>

<p>但很多採購、設計新手不熟悉公差規範，容易犯兩種錯：要嘛全部標 ±0.05 mm 太籠統，要嘛把每個尺寸都標到 ±0.005 mm 過度嚴格。本文整理三大公差體系，協助你做出合理的規格。</p>

<h2>三大公差體系</h2>

<p>業界主要的公差規範有：</p>
<ol>
<li><strong>ISO 2768</strong>：一般公差（沒有特別標註時的預設）</li>
<li><strong>IT 等級</strong>：精密配合（軸 / 孔的標準公差）</li>
<li><strong>GD&T（Geometric Dimensioning &amp; Tolerancing）</strong>：形位公差（垂直度 / 平行度 / 圓度等）</li>
</ol>

<h2>體系 1：ISO 2768 一般公差</h2>

<p>當圖面尺寸沒有單獨標註公差時，使用 ISO 2768 為「預設公差」。分四個等級：</p>

<table>
<tr><th>等級</th><th>名稱</th><th>適用</th></tr>
<tr><td>f（fine）</td><td>精</td><td>精密機構件</td></tr>
<tr><td>m（medium）</td><td>中</td><td>一般機械（最常用）</td></tr>
<tr><td>c（coarse）</td><td>粗</td><td>結構件、焊接件</td></tr>
<tr><td>v（very coarse）</td><td>很粗</td><td>鑄件、粗加工</td></tr>
</table>

<p>不同尺寸範圍對應不同公差值。例如「ISO 2768-m」（中等級）的常見值：</p>

<table>
<tr><th>尺寸範圍</th><th>m 級公差</th></tr>
<tr><td>0.5 ~ 3 mm</td><td>±0.1 mm</td></tr>
<tr><td>3 ~ 6 mm</td><td>±0.1 mm</td></tr>
<tr><td>6 ~ 30 mm</td><td>±0.2 mm</td></tr>
<tr><td>30 ~ 120 mm</td><td>±0.3 mm</td></tr>
<tr><td>120 ~ 400 mm</td><td>±0.5 mm</td></tr>
</table>

<p><strong>實務建議</strong>：90% 的零件，圖面上寫「ISO 2768-m（中）」就夠用。只在配合面、關鍵尺寸用更嚴的單獨標註。</p>

<h2>體系 2：IT 等級（國際公差等級）</h2>

<p>IT（International Tolerance）等級用於精密配合 — 軸 / 孔的標準公差體系。從 IT01（最嚴）到 IT18（最鬆），共 20 級。</p>

<p>常見等級的應用：</p>
<ul>
<li><strong>IT5-IT6</strong>：精密軸承配合（公差約 ±0.005 mm）</li>
<li><strong>IT7</strong>：齒輪、滑動配合（公差約 ±0.012 mm）— <strong>機械業最常用</strong></li>
<li><strong>IT8</strong>：一般配合面（公差約 ±0.02 mm）</li>
<li><strong>IT9-IT10</strong>：粗略配合（公差約 ±0.05 mm）</li>
<li><strong>IT11+</strong>：免配合（一般加工面）</li>
</ul>

<h3>軸 / 孔的配合代號</h3>
<p>常見配合：</p>
<ul>
<li><strong>H7/h6</strong>：精密滑動配合（齒輪箱齒輪）</li>
<li><strong>H7/g6</strong>：間隙配合（精密滑塊）</li>
<li><strong>H7/k6</strong>：過渡配合（軸承內圈）</li>
<li><strong>H7/p6</strong>：過盈配合（緊配合，需壓入）</li>
</ul>

<h2>體系 3：GD&T 形位公差</h2>

<p>除了「尺寸公差」之外，零件還需要「形狀」與「位置」的規範。GD&T 是國際標準（ASME Y14.5 / ISO 1101）。常見符號：</p>

<table>
<tr><th>符號</th><th>名稱</th><th>用途</th></tr>
<tr><td>—</td><td>直度（Straightness）</td><td>軸是不是直的</td></tr>
<tr><td>○</td><td>圓度（Roundness）</td><td>圓形是不是真圓</td></tr>
<tr><td>⊥</td><td>垂直度（Perpendicularity）</td><td>面對面 90 度</td></tr>
<tr><td>∥</td><td>平行度（Parallelism）</td><td>兩面平行</td></tr>
<tr><td>◎</td><td>同心度（Concentricity）</td><td>軸心對軸心</td></tr>
<tr><td>⊕</td><td>位置度（Position）</td><td>孔位是否在規定位置</td></tr>
<tr><td>✓</td><td>輪廓度（Profile）</td><td>曲面整體形狀</td></tr>
</table>

<p>GD&T 配合「基準（Datum）」使用 — 例如「⊥ 0.02 A」表示「相對於基準 A 的垂直度公差為 0.02 mm」。</p>

<h2>表面粗糙度 Ra</h2>

<p>除尺寸與形位之外，表面粗糙度（Ra）也直接影響加工成本：</p>

<ul>
<li><strong>Ra 6.3</strong>：粗銑、粗車（一般加工面）</li>
<li><strong>Ra 3.2</strong>：精銑、精車（標準）</li>
<li><strong>Ra 1.6</strong>：精車（配合面）</li>
<li><strong>Ra 0.8</strong>：精磨</li>
<li><strong>Ra 0.4</strong>：細磨、研磨（密封配合）</li>
<li><strong>Ra 0.1</strong>：鏡面（拋光）</li>
</ul>

<p>Ra 每嚴一級，加工費約 +20-50%。鏡面拋光的成本可能是標準粗糙度的 3-5 倍。</p>

<h2>常見過度規格的錯誤</h2>

<h3>錯誤 1：全部尺寸都標 ±0.005 mm</h3>
<p>大部分尺寸不需要這麼嚴。讓圖面默認 ISO 2768-m，只標註關鍵尺寸的嚴格公差。</p>

<h3>錯誤 2：表面粗糙度全標 Ra 0.4</h3>
<p>除非真的需要密封或鏡面外觀，Ra 1.6 對大部分配合面已經夠用。</p>

<h3>錯誤 3：沒標基準就用 GD&T</h3>
<p>GD&T 沒有指定基準（Datum）等於沒講。加工廠不知道「相對於哪個面」量測。</p>

<h2>給採購的合理規格起點</h2>

<p>如果不確定該標多嚴，從這個合理預設開始：</p>

<ul>
<li><strong>一般尺寸</strong>：ISO 2768-m（中等級）</li>
<li><strong>軸 / 孔配合</strong>：IT7（H7/h6 或 H7/g6）</li>
<li><strong>表面粗糙度</strong>：Ra 3.2（一般）/ Ra 1.6（配合面）</li>
<li><strong>形位公差</strong>：關鍵的兩三個（垂直度、平行度），標 0.05 mm 起跳</li>
</ul>

<p>之後再依實際組裝測試結果，必要時局部加嚴。</p>

<p>如果您在公差規格上不確定，告訴我們零件的<strong>使用情境 + 配合對象 + 受力方式</strong>，我們可以協助您訂出合理的規格。</p>`,
      en: `<p>Tolerance callouts on drawings directly drive machining cost. Tight to ±0.005 mm vs ±0.1 mm can mean 5-10× the price.</p>

<h2>Three tolerance systems</h2>
<ol>
<li><strong>ISO 2768</strong> — general tolerances (default when not otherwise specified). Four grades: f (fine), m (medium), c (coarse), v (very coarse).</li>
<li><strong>IT grades</strong> — precision fits for shafts and holes. IT5-IT6 for bearings, IT7 standard for gears and slides, IT8 for general fits.</li>
<li><strong>GD&T</strong> — geometric dimensioning &amp; tolerancing. Symbols for straightness, roundness, perpendicularity, parallelism, concentricity, position, profile. Always paired with a Datum.</li>
</ol>

<h2>Surface roughness Ra</h2>
<p>Ra 6.3 for rough machining → Ra 0.4 for sealing fits → Ra 0.1 for mirror polish. Each step tighter adds ~20-50% cost.</p>

<h2>Common over-specification mistakes</h2>
<ul>
<li>Marking every dimension to ±0.005 mm (most don't need it — use ISO 2768-m default + tighten only the critical ones)</li>
<li>Specifying Ra 0.4 across the board (Ra 1.6 covers most fits)</li>
<li>Using GD&T without a Datum reference (meaningless — the shop can't measure "relative to what")</li>
</ul>

<h2>Sensible starting spec</h2>
<ul>
<li>General dimensions: ISO 2768-m</li>
<li>Shaft/hole fits: IT7 (H7/h6 or H7/g6)</li>
<li>Surface: Ra 3.2 general, Ra 1.6 for fits</li>
<li>GD&T: 2-3 critical features at ~0.05 mm</li>
</ul>

<p>If you're unsure about tolerances, share the part's <strong>use case + mating partner + load conditions</strong> — we'll help define a sensible spec.</p>`,
      de: `<p>Toleranzangaben auf Zeichnungen bestimmen direkt die Bearbeitungskosten. Eng wie ±0,005 mm gegenüber ±0,1 mm kann das 5- bis 10-Fache des Preises bedeuten.</p>

<h2>Drei Toleranzsysteme</h2>
<ol>
<li><strong>ISO 2768</strong> — Allgemeintoleranzen (Standard, wenn nicht anders angegeben). Vier Stufen: f (fein), m (mittel), c (grob), v (sehr grob).</li>
<li><strong>IT-Toleranzklassen</strong> — Präzisionspassungen für Wellen und Bohrungen. IT5-IT6 für Lager, IT7 Standard für Zahnräder und Gleitbahnen, IT8 für allgemeine Passungen.</li>
<li><strong>GD&T</strong> — Form- und Lagetoleranzen. Symbole für Geradheit, Rundheit, Rechtwinkligkeit, Parallelität, Konzentrizität, Position, Profil. Immer mit Bezugselement (Datum) gepaart.</li>
</ol>

<h2>Oberflächenrauheit Ra</h2>
<p>Ra 6,3 für Schruppen → Ra 0,4 für Dichtpassungen → Ra 0,1 für Hochglanz. Jede engere Stufe erhöht die Kosten um 20-50 %.</p>

<h2>Häufige Überspezifikations-Fehler</h2>
<ul>
<li>Alle Maße mit ±0,005 mm bemaßen (die meisten brauchen es nicht — ISO 2768-m als Standard, nur kritische enger toleriert)</li>
<li>Ra 0,4 pauschal vorschreiben (Ra 1,6 deckt die meisten Passungen)</li>
<li>GD&T ohne Bezugselement (sinnlos — die Werkstatt kann „relativ wozu" nicht messen)</li>
</ul>

<h2>Sinnvolle Ausgangsspezifikation</h2>
<ul>
<li>Allgemeine Maße: ISO 2768-m</li>
<li>Wellen-/Bohrungspassungen: IT7 (H7/h6 oder H7/g6)</li>
<li>Oberfläche: Ra 3,2 allgemein, Ra 1,6 für Passungen</li>
<li>GD&T: 2-3 kritische Merkmale bei ca. 0,05 mm</li>
</ul>

<p>Bei Unsicherheit zur Tolerierung — schicken Sie uns <strong>Einsatzfall, Gegenstück und Belastungsart</strong>. Wir helfen, eine sinnvolle Spezifikation festzulegen.</p>`,
    },
  },
  {
    slug: "industry-certifications-iatf-as9100-iso13485",
    title: {
      zh: "三大產業認證對比：IATF 16949 / AS9100 / ISO 13485 哪個適合你？",
      en: "Three Industry Certifications Compared: IATF 16949 vs AS9100 vs ISO 13485",
      de: "Drei Branchenzertifizierungen im Vergleich: IATF 16949 vs. AS9100 vs. ISO 13485",
    },
    excerpt: {
      zh: "ISO 9001 是基礎，但要進汽車、航太、醫療三大高毛利市場，得拿產業專屬認證。本文比較 IATF 16949（汽車）/ AS9100（航太）/ ISO 13485（醫療）的差異、取得難度、適合的供應商規模。",
      en: "ISO 9001 is the foundation, but entering high-margin automotive, aerospace, and medical markets requires industry-specific certifications. We compare IATF 16949, AS9100, and ISO 13485 — differences, difficulty, and which supplier size fits each.",
      de: "ISO 9001 ist die Basis, doch der Einstieg in margenstarke Automobil-, Luftfahrt- und Medizinmärkte erfordert branchenspezifische Zertifizierungen. Vergleich von IATF 16949, AS9100 und ISO 13485 — Unterschiede, Schwierigkeit, und passende Zulieferergröße.",
    },
    category: { zh: "採購指南", en: "Procurement Guide", de: "Einkaufsleitfaden" },
    date: "2026-04-18",
    imageUrl:
      "https://images.pexels.com/photos/32845674/pexels-photo-32845674.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>「我們的供應商需要什麼認證？」是 B2B 採購最常被問的問題之一。答案不是「越多越好」 — 而是「對的客戶，對的認證」。</p>

<p>本文整理三大產業專屬認證：<strong>IATF 16949（汽車）</strong>、<strong>AS9100（航太）</strong>、<strong>ISO 13485（醫療）</strong> — 比較它們的差異、取得邏輯、與供應商投入回報。</p>

<h2>共同基礎：ISO 9001</h2>

<p>三大認證都是「在 ISO 9001 之上加產業特殊要求」。所以投入順序通常是：</p>
<ol>
<li>先取得 ISO 9001（品質管理系統基礎）</li>
<li>依客戶需求加上 IATF 16949 / AS9100 / ISO 13485</li>
</ol>

<p>沒 ISO 9001 直接申請產業認證？理論上可以，但實務上幾乎都先有 9001。</p>

<h2>IATF 16949 — 汽車產業</h2>

<h3>背景</h3>
<p>由 IATF（International Automotive Task Force）制定，2016 年取代舊的 TS 16949。是全球汽車產業的「進場票」 — Toyota、Ford、Volkswagen、GM、BMW 等大廠的 Tier 1、Tier 2 供應商幾乎都需要。</p>

<h3>核心要求</h3>
<ul>
<li><strong>製程方法（Process Approach）</strong>：所有製造活動視為連續流程</li>
<li><strong>失效模式分析（FMEA）</strong>：事前預測風險點</li>
<li><strong>製程控制計畫（Control Plan）</strong>：每道工序的監控細節</li>
<li><strong>SPC（統計製程管制）</strong>：用統計監控量產品質</li>
<li><strong>PPAP（量產零件認可程序）</strong>：量產前的完整文件包</li>
<li><strong>追溯性</strong>：每件產品可追到原料、機台、操作員</li>
</ul>

<h3>適合誰</h3>
<ul>
<li>已有汽車 OEM / Tier 1 客戶 = <strong>必投</strong></li>
<li>計畫進軍汽車市場 = 投資前先確認潛在客戶量足夠</li>
<li>純改裝後市場（不接 OEM）= 通常不需要</li>
</ul>

<h3>取得難度</h3>
<p>高。要建立完整 QMS、PPAP 流程、FMEA 文件、SPC 系統。從 0 到取得約 12-18 個月。每年維護 + 抽樣稽核。</p>

<h2>AS9100 — 航太產業</h2>

<h3>背景</h3>
<p>由 SAE International 與 IAQG（International Aerospace Quality Group）制定。Boeing、Airbus、Lockheed Martin 等航太 OEM 與 Tier 1 供應商通用標準。</p>

<h3>核心要求（在 ISO 9001 之上）</h3>
<ul>
<li><strong>產品安全（Product Safety）</strong>：航太對失效零容忍</li>
<li><strong>FOD（Foreign Object Debris）控制</strong>：避免異物殘留</li>
<li><strong>關鍵特性（Key Characteristics）</strong>：明確標示安全相關尺寸</li>
<li><strong>第一件檢驗（First Article Inspection, FAI）</strong>：依 AS9102 標準</li>
<li><strong>反偽材料管制（Counterfeit Parts Prevention）</strong>：防止偽造原料</li>
<li><strong>軟體配置管理</strong>（若有電子零件）</li>
</ul>

<h3>適合誰</h3>
<ul>
<li>航太 Tier 1 / Tier 2 供應商 = 必投</li>
<li>無人機 / 衛星新創 = 看客戶要求</li>
<li>純改裝航空件（私人飛機）= 視客戶</li>
</ul>

<h3>取得難度</h3>
<p>很高。比 IATF 嚴。產品追溯到「批料每根原料 + 加工每一步」都要紀錄。從 0 到取得 12-24 個月。文件量極大。</p>

<h2>ISO 13485 — 醫療器材</h2>

<h3>背景</h3>
<p>醫療器材製造的品質管理系統標準。Stryker、Medtronic、Johnson &amp; Johnson、Becton Dickinson 等醫療大廠的供應商標配。同時也是<strong>進入歐盟醫療器材法規（MDR）的基本要求</strong>。</p>

<h3>核心要求（在 ISO 9001 之上）</h3>
<ul>
<li><strong>風險管理（依 ISO 14971）</strong>：每項產品的風險評估</li>
<li><strong>無菌 / 潔淨環境</strong>：依產品分級</li>
<li><strong>追溯性與唯一識別碼（UDI）</strong>：每件可追到病人</li>
<li><strong>不良事件追蹤</strong>：發現問題後的回溯機制</li>
<li><strong>滅菌驗證</strong>（若產品需滅菌）</li>
<li><strong>軟體生命週期管理</strong>（若涉及醫療軟體）</li>
</ul>

<h3>適合誰</h3>
<ul>
<li>醫療器材 OEM / Tier 1 = 必投</li>
<li>植入物製造 = 必投 + 加 ISO 14971 風險管理</li>
<li>醫療輔具（非植入）= 視客戶要求</li>
</ul>

<h3>取得難度</h3>
<p>中高。文件嚴謹度跟 IATF 接近，但風險管理面更深入。從 0 到取得 9-15 個月。需要醫療專業背景的品保人員。</p>

<h2>三大認證對比表</h2>

<table>
<tr><th>項目</th><th>IATF 16949</th><th>AS9100</th><th>ISO 13485</th></tr>
<tr><td>產業</td><td>汽車</td><td>航太</td><td>醫療</td></tr>
<tr><td>取得難度</td><td>高</td><td>很高</td><td>中高</td></tr>
<tr><td>取得時程</td><td>12-18 個月</td><td>12-24 個月</td><td>9-15 個月</td></tr>
<tr><td>關鍵附加要求</td><td>PPAP / FMEA / SPC</td><td>FOD / FAI / 反偽</td><td>ISO 14971 風險 / UDI</td></tr>
<tr><td>典型客戶</td><td>Toyota、Ford、VW</td><td>Boeing、Airbus、Lockheed</td><td>Stryker、Medtronic、J&amp;J</td></tr>
<tr><td>市場毛利</td><td>中（量大）</td><td>高（單價高）</td><td>很高（單價最高）</td></tr>
<tr><td>追溯深度</td><td>批次</td><td>每根原料 + 每件</td><td>每件 + UDI</td></tr>
</table>

<h2>該投資哪個？戰略思考</h2>

<h3>決策關鍵：客戶結構，不是技術</h3>
<p>不是「想做汽車就投 IATF」 — 而是<strong>已有 / 即將有 OEM 客戶</strong>才投。沒客戶投認證 = 純粹燒錢，因為認證費用 + 維護年費 + 內部人力，每年都要花。</p>

<h3>三種典型策略</h3>

<h4>策略 1：客戶集中於某一產業 → 投對應認證</h4>
<p>例如已有 3 家汽車 Tier 1 客戶 → 投 IATF 16949。</p>

<h4>策略 2：多產業混合 → 不投產業認證，靠 ISO 9001 + 客戶供應鏈代理</h4>
<p>適合中小加工廠。客戶的認證涵蓋整個供應鏈，你只需要 ISO 9001 + 材質追溯 + 量測報告，仍可承接 Tier 2 / Tier 3 訂單。<strong>這是台灣中小加工廠最常見的路線</strong>。</p>

<h4>策略 3：先後市場（aftermarket）切入 → 不需產業認證</h4>
<p>改裝車、油氣 MRO 等後市場，認證壓力低很多。等業績穩定再評估投資。</p>

<h2>偉勇的定位</h2>

<p>我們目前持有 <strong>ISO 9001</strong> 品質管理系統認證。針對：</p>
<ul>
<li>汽車產業：以 ISO 9001 + 完整批次追溯 + PPAP / FAI 文件，承接 Tier 2 / Tier 3 OEM 訂單與後市場</li>
<li>航太產業：與 AS9100 認證的 Tier 1 客戶 OEM 合作，提供精密加工 + 材質證明</li>
<li>醫療產業：與 ISO 13485 客戶合作，提供 SUS316L、純鈦、Ti-ELI 等生醫材料加工，含完整追溯</li>
<li>油氣產業：對應 API / NORSOK 客戶供應鏈品管要求（詳見<a href="/blog/api-certification-guide-oil-gas">API 6A / 6D 認證指南</a>）</li>
</ul>

<p>對於想跨入這三大產業但還沒拿認證的客戶，我們也能擔任「OEM 加工夥伴」，讓您的產品能透過已認證品牌進入這些市場。</p>`,
      en: `<p>"What certifications does our supplier need?" is one of the most common B2B procurement questions. The answer isn't "as many as possible" — it's "the right ones for the right customers".</p>

<h2>Common foundation: ISO 9001</h2>
<p>All three industry certifications build on ISO 9001. Get 9001 first, then add industry-specific layers.</p>

<h2>IATF 16949 — Automotive</h2>
<p>Replaced TS 16949 in 2016. Required by Toyota, Ford, VW, GM Tier 1/2 suppliers. Adds: process approach, FMEA, control plans, SPC, PPAP (production part approval), batch traceability. 12-18 months to obtain.</p>

<h2>AS9100 — Aerospace</h2>
<p>By SAE/IAQG. Standard for Boeing, Airbus, Lockheed supply chains. Adds: product safety, FOD control, key characteristics, AS9102 First Article Inspection, counterfeit parts prevention. 12-24 months — most rigorous of the three.</p>

<h2>ISO 13485 — Medical Devices</h2>
<p>Required for Stryker, Medtronic, J&amp;J supply chains and EU MDR market access. Adds: ISO 14971 risk management, sterile/clean environments, UDI traceability, adverse event tracking. 9-15 months.</p>

<h2>Which to invest in?</h2>
<p>Decision driver: <strong>customer mix, not technology</strong>. Don't invest in IATF if you don't have automotive OEM customers — annual costs add up. Three typical strategies:</p>
<ol>
<li>Customer concentration in one industry → invest in matching certification</li>
<li>Mixed customer base → ISO 9001 + customer supply-chain coverage (most common for mid-size shops)</li>
<li>Aftermarket only → industry cert pressure low</li>
</ol>

<h2>Weiyon's positioning</h2>
<p>ISO 9001 certified. We support automotive Tier 2/3, AS9100 Tier 1 OEM partners, ISO 13485 medical customers, and API/NORSOK oil &amp; gas supply chains via integrated material traceability, FAI reports, and full batch records — the substance behind the certifications.</p>`,
      de: `<p>„Welche Zertifizierungen braucht unser Lieferant?" ist eine der häufigsten B2B-Beschaffungsfragen. Die Antwort lautet nicht „so viele wie möglich" — sondern „die richtigen für die richtigen Kunden".</p>

<h2>Gemeinsame Basis: ISO 9001</h2>
<p>Alle drei Branchenzertifizierungen bauen auf ISO 9001 auf. Erst 9001, dann branchenspezifische Schichten.</p>

<h2>IATF 16949 — Automobil</h2>
<p>Ersetzte 2016 TS 16949. Erforderlich bei Toyota, Ford, VW, GM Tier-1/2-Lieferanten. Ergänzt: Prozessansatz, FMEA, Lenkungspläne, SPC, PPAP (Produktteil-Freigabe), Chargenrückverfolgbarkeit. 12-18 Monate Dauer.</p>

<h2>AS9100 — Luftfahrt</h2>
<p>Von SAE/IAQG. Standard für Boeing, Airbus, Lockheed-Lieferketten. Ergänzt: Produktsicherheit, FOD-Kontrolle, Schlüsselmerkmale, AS9102-Erstmusterprüfung, Schutz vor gefälschten Teilen. 12-24 Monate — die strengste der drei.</p>

<h2>ISO 13485 — Medizinprodukte</h2>
<p>Erforderlich für Stryker-, Medtronic-, J&amp;J-Lieferketten und EU-MDR-Marktzugang. Ergänzt: ISO-14971-Risikomanagement, Sterile/Reinraumumgebungen, UDI-Rückverfolgbarkeit, Vorfallverfolgung. 9-15 Monate.</p>

<h2>Welche Zertifizierung lohnt sich?</h2>
<p>Entscheidungstreiber: <strong>Kundenmix, nicht Technologie</strong>. Nicht in IATF investieren ohne Automobil-OEM-Kunden — laufende Kosten summieren sich. Drei typische Strategien:</p>
<ol>
<li>Kundenkonzentration in einer Branche → passende Zertifizierung</li>
<li>Gemischter Kundenstamm → ISO 9001 + Abdeckung über Kundenlieferketten (am häufigsten für mittelständische Werkstätten)</li>
<li>Nur Aftermarket → geringer Zertifizierungsdruck</li>
</ol>

<h2>Weiyons Positionierung</h2>
<p>ISO-9001-zertifiziert. Wir unterstützen Automotive-Tier-2/3, AS9100-Tier-1-OEM-Partner, ISO-13485-Medizinkunden und API/NORSOK-Öl-&amp;-Gas-Lieferketten durch integrierte Werkstoffrückverfolgbarkeit, FAI-Berichte und vollständige Chargendokumentation — das Substantielle hinter den Zertifizierungen.</p>`,
    },
  },
  {
    slug: "api-certification-guide-oil-gas",
    title: {
      zh: "API 6A / 6D 認證指南：油氣產業精密零件的進場票",
      en: "API 6A / 6D Certification Guide: The Ticket Into Oil & Gas Procurement",
      de: "API-6A- und 6D-Zertifizierungs-Leitfaden: Eintrittskarte zur Öl- & Gasbeschaffung",
    },
    excerpt: {
      zh: "想打進中東、北海、北美油氣供應鏈？API 6A 和 API 6D 是基本進場票，沒有就被 distributor 過濾掉。本文拆解兩者差異、適用零件、認證取得邏輯，協助加工廠與品牌商評估投入。",
      en: "Want to enter Middle East, North Sea, or North American oil & gas supply chains? API 6A and 6D are the basic entry tickets — without them, distributors filter you out. We break down the differences, applicable parts, and certification logic.",
      de: "Möchten Sie in die Lieferketten der Öl- und Gasindustrie im Nahen Osten, der Nordsee oder Nordamerika einsteigen? API 6A und 6D sind die grundlegenden Eintrittskarten — ohne sie filtern Vertriebshändler Sie heraus. Wir erklären Unterschiede, Anwendungsbereiche und Zertifizierungslogik.",
    },
    category: { zh: "採購指南", en: "Procurement Guide", de: "Einkaufsleitfaden" },
    date: "2026-05-03",
    imageUrl:
      "https://images.pexels.com/photos/9799730/pexels-photo-9799730.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>油氣產業（Oil &amp; Gas）是全球最嚴苛的零件採購領域之一。從中東 ARAMCO、ADNOC，到北海 BP、Shell，到墨西哥灣的 Chevron — 這些 NOC（國家油公司）和 IOC（國際油公司）的採購門檻有兩個關鍵字：<strong>API 認證</strong> 和 <strong>NORSOK 規範</strong>。</p>

<p>沒這些，就連報價的機會都沒有。本文拆解最常見的 API 6A、API 6D 兩項認證，協助加工廠、品牌商、貿易商評估該不該投入。</p>

<h2>什麼是 API？</h2>

<p>API（American Petroleum Institute，美國石油協會）成立於 1919 年，是全球油氣產業最具公信力的標準制定機構。其發布的 API Standard 系列規範，涵蓋從鑽井設備、管線、閥門、儲罐到煉化設備的各種零件規格。</p>

<p>API 認證不是「政府強制」，而是 <strong>產業共識</strong>。但因為全球油氣採購商都認，所以實質上等於「沒有就出局」。</p>

<h2>API 6A — 井口設備與 Christmas Tree</h2>

<p>API 6A 全名為 <em>Specification for Wellhead and Christmas Tree Equipment</em>，是井口設備（wellhead）跟「聖誕樹」設備（井口控制系統）的標準。</p>

<h3>適用零件</h3>
<ul>
<li>井口閥門（gate valve、ball valve、check valve）</li>
<li>Christmas tree 配件（chokes、master valves、wing valves）</li>
<li>井口連接器（connectors、adapters、flanges）</li>
<li>密封件（seals、gaskets）</li>
</ul>

<h3>關鍵技術要求</h3>
<ul>
<li><strong>材料</strong>：Body 與 Bonnet 通常為碳鋼（4130 / F22 / F11）或不鏽鋼（316L / Duplex），密封件多為 Inconel 625、Monel</li>
<li><strong>壓力等級</strong>：2,000 / 3,000 / 5,000 / 10,000 / 15,000 / 20,000 psi（PSL 1-4）</li>
<li><strong>溫度等級</strong>：K-X（-75°F to 350°F），依環境與介質區分</li>
<li><strong>材質要求</strong>：含 NACE MR0175（抗硫化氫應力腐蝕）為基本</li>
<li><strong>測試</strong>：FAT（出廠驗收）、Hydrostatic test、Gas test、PSL（Product Specification Level）等多重測試</li>
</ul>

<h2>API 6D — 管線閥門</h2>

<p>API 6D 全名為 <em>Specification for Pipeline and Piping Valves</em>，是輸送管線跟製程管路閥門的標準。比 API 6A 應用範圍更廣，從上游管線、中游集輸到下游煉化都涵蓋。</p>

<h3>適用零件</h3>
<ul>
<li>球閥（ball valve）— 輸送管線最常用</li>
<li>閘閥（gate valve）— 大口徑切斷</li>
<li>檢查閥（check valve）— 防止逆流</li>
<li>截止閥（plug valve）— 控制流量</li>
</ul>

<h3>關鍵技術要求</h3>
<ul>
<li><strong>材料</strong>：碳鋼（A105 / LF2）、不鏽鋼（316L）、Duplex S31803、Super Duplex S32750</li>
<li><strong>壓力等級</strong>：ANSI Class 150 / 300 / 600 / 900 / 1500 / 2500</li>
<li><strong>尺寸</strong>：DN15 - DN1500（½″ - 60″）</li>
<li><strong>測試</strong>：殼體水壓測試、密封座測試、Anti-blow-out 測試（防閥桿吹出）</li>
</ul>

<h2>API 6A vs API 6D — 怎麼分？</h2>

<table>
<tr><th>項目</th><th>API 6A</th><th>API 6D</th></tr>
<tr><td>應用</td><td>井口、Christmas tree</td><td>輸送管線、製程管路</td></tr>
<tr><td>環境</td><td>井口 → 高壓含硫氣體環境</td><td>管線 → 一般輸送（部分含硫）</td></tr>
<tr><td>典型客戶</td><td>NOC、井口設備品牌（FMC、Cameron）</td><td>EPC 承包商、管線業主</td></tr>
<tr><td>取得難度</td><td>較高（測試嚴格）</td><td>中高</td></tr>
</table>

<p>簡單講：<strong>井口用 6A、管路用 6D</strong>。一個品牌可能同時取得兩種認證以擴大產品線。</p>

<h2>還有 NORSOK M-650</h2>

<p>歐洲北海油氣產業（特別是挪威 Equinor）採用 NORSOK 規範，比 API 更嚴苛。<strong>NORSOK M-650</strong> 是材料製造商鑑定（Material Manufacturer Qualification），規定材料製造廠必須通過審核才能供材給北海油氣項目。</p>

<p>這對加工廠的影響：用的材料是否來自 NORSOK M-650 認證的鋼廠，會直接影響你能不能切入北海項目。</p>

<h2>取得認證的成本與難度</h2>

<p>API 認證不是廉價投資：</p>

<ul>
<li><strong>API Spec Q1（品質系統）</strong>：API 認證的前置條件，是 ISO 9001 的「進階版」</li>
<li><strong>產品認證費用</strong>：依規模約是中小企業半年到一年的營收佔比較大投入</li>
<li><strong>每年維護</strong>：年費 + 重新審核 + 抽樣測試</li>
<li><strong>時程</strong>：從 0 到取得通常 12-24 個月</li>
</ul>

<p>對於初次進入油氣市場的台灣加工廠 / 品牌商，這是不小的門檻。</p>

<h2>三種務實切入策略</h2>

<h3>策略 1：直接申請 API 認證（適合品牌商）</h3>
<p>適合：已有自有閥門 / 法蘭品牌、年營收充足、長期經營油氣市場決心強。</p>

<h3>策略 2：成為 API 認證品牌的 OEM 加工夥伴（適合加工廠）</h3>
<p>不直接申請 API，而是承接 Cameron、Emerson、Flowserve、KSB 等已認證品牌的 OEM 訂單。客戶的 API 認證涵蓋整個供應鏈，加工廠提供材料追溯（Mill Test Cert）+ 加工品質紀錄即可。</p>
<p>這是台灣加工廠最務實的切入路徑 — 投入低、見效快。</p>

<h3>策略 3：MRO（保養維修）切入（適合中型加工廠）</h3>
<p>不挑戰新建專案（new build），從 spare parts、後市場維修件切入。許多中東、北海營運中的油氣設施需要替換零件，認證要求相對寬鬆（MRO 替換件不一定需要原廠 API 認證，但需材質證明 + 量測報告）。</p>

<h2>偉勇的定位</h2>

<p>我們不是 API 直接認證的閥門品牌商，但長期承接：</p>
<ul>
<li>歐美閥門品牌（Cameron、Emerson、Flowserve、KSB 等）的 OEM 加工</li>
<li>油氣 MRO 替換零件的精密加工</li>
<li>中東 EPC 承包商的小批量 / 緊急零件需求</li>
</ul>

<p>對應的能力：</p>
<ul>
<li>SUS316L、Duplex S31803、Super Duplex S32750 加工經驗</li>
<li>Inconel 625 / 718、Monel 400 難切削合金</li>
<li>提供 Mill Test Cert（材質證明）+ 完整批次追溯</li>
<li>可配合 PED 2014/68/EU、AS9100 等其他規範客戶要求</li>
<li>FAI / 量測報告依客戶需求出具</li>
</ul>

<h2>結語</h2>

<p>API 認證是油氣產業的進場票，但不是「沒有就完全沒機會」。透過成為已認證品牌的 OEM 夥伴、或從 MRO 後市場切入，台灣加工廠仍能參與這個全球高毛利市場。</p>

<p>關鍵不是認證標籤本身，而是<strong>真實的材料能力 + 加工精度 + 品管紀錄</strong> — 這些是認證背後想保證的東西。偉勇 40 年的難切削材料經驗，正是這些能力的累積。</p>

<p>如果您是已認證的閥門品牌、油氣 EPC 承包商、或中東 distributor — 歡迎透過<a href="/contact">詢價表單</a>聯絡我們，討論潛在合作。</p>`,
      en: `<p>Want to enter Middle East, North Sea, or North American oil &amp; gas supply chains? API 6A and 6D are the basic entry tickets — without them, distributors filter you out.</p>

<h2>What is API?</h2>
<p>The American Petroleum Institute publishes industry-consensus standards covering wellhead equipment, pipelines, valves, and refining gear. Not government-mandated, but globally accepted — effectively a market gate.</p>

<h2>API 6A vs API 6D</h2>
<ul>
<li><strong>API 6A</strong> — Wellhead and Christmas Tree equipment. High-pressure (2K-20K psi), sour gas environments. Materials: 4130, F22, 316L, Duplex, Inconel 625, Monel.</li>
<li><strong>API 6D</strong> — Pipeline and piping valves (ball, gate, check, plug). ANSI Class 150-2500, sizes DN15-DN1500. Materials: A105, LF2, 316L, Duplex S31803, Super Duplex S32750.</li>
</ul>
<p>Simple rule: <strong>wellhead → 6A, pipeline → 6D</strong>.</p>

<h2>NORSOK M-650</h2>
<p>European/North Sea standard for material manufacturer qualification. Stricter than API. Required for Norwegian/UK offshore projects.</p>

<h2>Three pragmatic entry strategies</h2>
<ol>
<li><strong>Direct API certification</strong> — for brand owners with capital and long-term commitment. 12-24 months to obtain.</li>
<li><strong>OEM subcontracting to API-certified brands</strong> — most practical for machining shops. Customer's certification covers the supply chain; you provide material traceability and quality records.</li>
<li><strong>MRO / aftermarket</strong> — replacement parts for operating facilities. Lower certification bar.</li>
</ol>

<h2>Weiyon's positioning</h2>
<p>Not directly API-certified; rather, OEM partner to European/American valve brands (Cameron, Emerson, Flowserve, KSB). We deliver SUS316L, Duplex, Super Duplex, Inconel 625/718, and Monel 400 with mill test certificates, FAI reports, and full batch traceability — the substance behind the certification labels.</p>`,
      de: `<p>Möchten Sie in die Öl- und Gas-Lieferketten im Nahen Osten, der Nordsee oder Nordamerika einsteigen? API 6A und 6D sind die grundlegenden Eintrittskarten — ohne sie filtern Vertriebshändler Sie heraus.</p>

<h2>Was ist API?</h2>
<p>Das American Petroleum Institute veröffentlicht branchenweit anerkannte Standards für Bohrlochkopfausrüstung, Rohrleitungen, Ventile und Raffineriegeräte. Nicht staatlich vorgeschrieben, aber weltweit akzeptiert — faktisch ein Markteintrittstor.</p>

<h2>API 6A vs. API 6D</h2>
<ul>
<li><strong>API 6A</strong> — Bohrlochkopf und Christmas-Tree-Ausrüstung. Hochdruck (2K-20K psi), Sauergas-Umgebungen. Werkstoffe: 4130, F22, 316L, Duplex, Inconel 625, Monel.</li>
<li><strong>API 6D</strong> — Rohrleitungs- und Prozessventile (Kugel-, Schieber-, Rückschlag-, Hahnventile). ANSI Klasse 150-2500, Größen DN15-DN1500. Werkstoffe: A105, LF2, 316L, Duplex S31803, Super Duplex S32750.</li>
</ul>
<p>Einfache Regel: <strong>Bohrlochkopf → 6A, Rohrleitung → 6D</strong>.</p>

<h2>NORSOK M-650</h2>
<p>Europäischer/Nordsee-Standard zur Werkstoffherstellerqualifikation. Strenger als API. Erforderlich für norwegische/britische Offshore-Projekte.</p>

<h2>Drei pragmatische Einstiegsstrategien</h2>
<ol>
<li><strong>Direkte API-Zertifizierung</strong> — für Markeninhaber mit Kapital und langfristigem Engagement. 12-24 Monate Dauer.</li>
<li><strong>OEM-Zulieferung für API-zertifizierte Marken</strong> — am praktikabelsten für Bearbeitungswerkstätten. Die Kundenzertifizierung deckt die Lieferkette ab; Sie liefern Werkstoffnachweise und Qualitätsdokumente.</li>
<li><strong>MRO / Aftermarket</strong> — Ersatzteile für laufende Anlagen. Niedrigere Zertifizierungshürde.</li>
</ol>

<h2>Weiyons Positionierung</h2>
<p>Nicht direkt API-zertifiziert, sondern OEM-Partner europäischer und amerikanischer Ventilmarken (Cameron, Emerson, Flowserve, KSB). Wir liefern SUS316L, Duplex, Super Duplex, Inconel 625/718 und Monel 400 mit Werkszeugnissen, FAI-Berichten und vollständiger Chargenrückverfolgbarkeit — das Substantielle hinter den Zertifizierungen.</p>`,
    },
  },
  {
    slug: "tuning-exhaust-material-selection",
    title: {
      zh: "改裝排氣材料選擇：SUS304 / SUS321 / Ti-6Al-4V 完整比較",
      en: "Tuning Exhaust Materials: SUS304 vs SUS321 vs Ti-6Al-4V",
      de: "Tuning-Auspuff-Werkstoffe: SUS304 vs. SUS321 vs. Ti-6Al-4V",
    },
    excerpt: {
      zh: "改裝排氣選錯材料 — 輕則出鏽斑、重則高溫變色甚至開裂。本文比較三種主流改裝排氣材料的耐溫、耐蝕、加工性與重量，協助玩家跟改裝品牌選對料。",
      en: "Pick the wrong exhaust material and you'll see rust spots — or worse, high-temp discoloration and cracking. We compare the three mainstream tuning exhaust materials on heat, corrosion, machinability, and weight.",
      de: "Falsches Auspuffmaterial bedeutet Rostflecken — oder schlimmer: Hochtemperatur-Verfärbung und Risse. Wir vergleichen die drei gängigen Tuning-Auspuffwerkstoffe nach Hitze-, Korrosionsbeständigkeit, Zerspanbarkeit und Gewicht.",
    },
    category: { zh: "改裝專欄", en: "Tuning Column", de: "Tuning-Kolumne" },
    date: "2026-05-04",
    imageUrl:
      "https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>改裝排氣的材料選擇，跟一般機械零件不太一樣 — 排氣管段的工作溫度高（從中段約 400°C 到頭段近 900°C）、要面對排氣冷凝水的腐蝕、要兼顧重量、有時候還要 deliver 漂亮的視覺效果。</p>

<p>市場上九成以上的改裝排氣，材料落在 <strong>SUS304</strong>、<strong>SUS321</strong>、<strong>Ti-6Al-4V</strong> 這三種之間。本文逐項對比，協助玩家、改裝品牌、車隊選對料。</p>

<h2>SUS304 — 入門首選</h2>
<p>市場上最常見的改裝排氣材料。一般街道用、輕度改裝、自然進氣車的中尾段都用這級。</p>
<ul>
<li><strong>耐溫上限</strong>：約 400-500°C 連續工作</li>
<li><strong>耐蝕性</strong>：耐一般大氣與冷凝水 OK，海邊環境會點蝕</li>
<li><strong>加工性</strong>：好切、好彎、好焊接</li>
<li><strong>重量</strong>：標準 — 鋼系排氣的基準</li>
<li><strong>表面</strong>：可拋光成鏡面，焊道高溫後會變色</li>
<li><strong>適合</strong>：中段、尾段、消音器外殼、自然進氣車全段</li>
<li><strong>不適合</strong>：渦輪車頭段（溫度超標）</li>
</ul>

<h2>SUS321 — 渦輪頭段專用</h2>
<p>SUS304 的「耐高溫加強版」— 加了鈦元素（Titanium-stabilized）抑制高溫晶界腐蝕。是渦輪改裝車頭段（Manifold / Downpipe）的主流選擇。</p>
<ul>
<li><strong>耐溫上限</strong>：約 700-900°C 連續工作</li>
<li><strong>耐蝕性</strong>：跟 SUS304 接近</li>
<li><strong>加工性</strong>：可加工、可焊接，但需用對應的 SUS321 焊條</li>
<li><strong>重量</strong>：與 SUS304 接近（同為鐵基不鏽鋼）</li>
<li><strong>價格</strong>：約 SUS304 的 <strong>1.3-1.6 倍</strong></li>
<li><strong>適合</strong>：渦輪頭段、Downpipe、高溫排氣岐管</li>
</ul>

<h3>為什麼渦輪頭段不能用 SUS304？</h3>
<p>渦輪車頭段（manifold）持續工作溫度可達 800°C 以上。SUS304 在 600°C 以上會發生「敏化」現象 — 晶界析出鉻碳化物，導致晶界腐蝕、最終出現裂紋。SUS321 加了鈦穩定，避免這個問題。</p>

<h2>Ti-6Al-4V（鈦合金）— 高階首選</h2>
<p>頂級改裝排氣材料。重量輕、強度高、耐高溫、耐蝕一流，但價格高、加工難。常見於賽車、Hyper Car、頂級改裝套件。</p>
<ul>
<li><strong>耐溫上限</strong>：可達 600°C 連續工作（純鈦更高，可達 800°C）</li>
<li><strong>耐蝕性</strong>：頂級 — 幾乎不畏海水、酸鹼、冷凝水</li>
<li><strong>加工性</strong>：難加工 — 刀具消耗快、需慢轉速 + 充足冷卻</li>
<li><strong>焊接性</strong>：可焊接，但需在惰性氣體保護環境下，焊道處理技術門檻高</li>
<li><strong>重量</strong>：約 SUS304 的 <strong>56%</strong>（顯著減重）</li>
<li><strong>價格</strong>：材料本身約 SUS304 的 <strong>15-25 倍</strong>，加上加工費總成本可達 5-8 倍</li>
<li><strong>外觀</strong>：可加熱形成漸變藍紫色（俗稱「彩虹效果」）— 改裝圈最愛</li>
<li><strong>適合</strong>：賽車全段、頂級改裝中尾段、Hyper Car</li>
</ul>

<h2>選擇 flowchart</h2>
<ol>
<li><strong>渦輪頭段嗎？</strong> → SUS321（不要省這個錢）</li>
<li><strong>預算充裕想要極致減重 + 視覺？</strong> → Ti-6Al-4V</li>
<li><strong>一般街道用，自然進氣或輕度增壓？</strong> → SUS304（最划算）</li>
</ol>

<h2>常見錯誤</h2>

<h3>錯誤 1：渦輪頭段用 SUS304 省錢</h3>
<p>短期看不出來，但 6-12 個月後焊道會出現裂紋。一旦頭段裂了，渦輪可能受損 — 換一支總成本遠高於當初省下的錢。</p>

<h3>錯誤 2：用 Ti 排氣展示，沒做防熱保護</h3>
<p>Ti 在 500°C 以上會與環境氧結合產生氧化層 — 表面顏色會逐漸變灰、失去原本的視覺效果。要保留漂亮的彩虹色，最好用熱阻擋（heat shield）或不要長時間運轉至高負載。</p>

<h3>錯誤 3：不分等級的「不鏽鋼」報價</h3>
<p>有些工廠賣便宜的「不鏽鋼排氣」實際是 SUS201、SUS430 等劣質等級 — 耐蝕性遠低於 SUS304。要求供應商提供 Mill Test Cert（材質報告）才能確認。</p>

<h2>偉勇承接的改裝排氣項目</h2>
<p>我們做改裝品牌、賽車隊、個人玩家的客製排氣零件多年。常見項目：</p>
<ul>
<li><strong>頭段 / Manifold</strong>：SUS321 為主，可整合 TIG 焊接</li>
<li><strong>中段 / 尾段</strong>：SUS304（多數）、SUS316（沿海客戶）、Ti（高階訂單）</li>
<li><strong>法蘭、消音器外殼</strong>：可雷雕 logo / 序號</li>
<li><strong>客製管徑、彎管、合流接頭</strong></li>
</ul>
<p>1 件起接、設計修正彈性配合 — 詳見<a href="/industries/tuning">改裝車產業頁</a>。</p>`,
      en: `<p>Picking the wrong exhaust material means rust spots — or high-temp discoloration and cracking. The three mainstream materials are SUS304, SUS321, and Ti-6Al-4V.</p>
<h2>SUS304 — entry choice</h2>
<p>Most common, good for ~400-500°C continuous. Mid- and tail-section, naturally aspirated. Not for turbo manifolds — fails above 600°C.</p>
<h2>SUS321 — turbo manifold standard</h2>
<p>Titanium-stabilized stainless. Handles 700-900°C continuous. Resists grain-boundary corrosion that destroys SUS304 at high temps. Costs ~1.3-1.6× SUS304. Don't skimp here.</p>
<h2>Ti-6Al-4V — premium</h2>
<p>~56% the weight of SUS304. Excellent corrosion resistance. The "rainbow blue" heat-tint is the tuning aesthetic. Material costs 15-25× SUS304; total fabricated cost 5-8×. Used for race cars and hyper-car kits.</p>
<h2>Decision flow</h2>
<ol>
<li>Turbo manifold? → SUS321 (don't cheap out)</li>
<li>Budget for premium weight + aesthetics? → Ti-6Al-4V</li>
<li>Street use, NA or light boost? → SUS304</li>
</ol>
<h2>Common mistakes</h2>
<p>Using SUS304 on a turbo manifold (will crack at welds in 6-12 months). Running Ti exhaust at high load without heat shielding (loses the rainbow tint). Accepting "stainless" exhausts that are secretly SUS201/430 — always require mill test certs.</p>`,
      de: `<p>Falsches Auspuffmaterial = Rostflecken oder Hochtemperatur-Verfärbung und Risse. Die drei gängigen Werkstoffe sind SUS304, SUS321 und Ti-6Al-4V.</p>
<h2>SUS304 — Einstieg</h2>
<p>Am häufigsten, dauerfest bis ca. 400-500 °C. Mittel- und Endschalldämpferabschnitte, Saugmotoren. Nicht für Turbo-Krümmer — versagt über 600 °C.</p>
<h2>SUS321 — Standard für Turbo-Krümmer</h2>
<p>Titanstabilisierter Edelstahl. Dauerfest 700-900 °C. Beständig gegen Korngrenzenkorrosion, die SUS304 bei hohen Temperaturen zerstört. Kostet ca. 1,3-1,6× SUS304. Hier nicht sparen.</p>
<h2>Ti-6Al-4V — Premium</h2>
<p>Etwa 56 % des Gewichts von SUS304. Hervorragende Korrosionsbeständigkeit. Der „Regenbogen-Blau"-Anlauffilm ist die Tuning-Ästhetik. Material kostet 15-25× SUS304; Gesamtfertigungskosten 5-8×. Für Rennwagen und Hyper-Car-Kits.</p>
<h2>Entscheidungsbaum</h2>
<ol>
<li>Turbo-Krümmer? → SUS321 (hier nicht sparen)</li>
<li>Budget für Premium-Gewicht + Optik? → Ti-6Al-4V</li>
<li>Straße, Saugmotor oder leichter Boost? → SUS304</li>
</ol>
<h2>Häufige Fehler</h2>
<p>SUS304 für Turbo-Krümmer verwenden (führt nach 6-12 Monaten zu Schweißnahtrissen). Ti-Auspuff bei hoher Last ohne Hitzeschild fahren (verliert die Regenbogen-Optik). „Edelstahl"-Auspuffe akzeptieren, die in Wirklichkeit SUS201/430 sind — immer Werkszeugnis verlangen.</p>`,
    },
  },
  {
    slug: "surface-treatment-selection-guide",
    title: {
      zh: "表面處理選擇指南：陽極、鍍鎳、發黑、鈍化、PVD 怎麼選？",
      en: "Surface Treatment Guide: Anodizing, Nickel Plating, Blackening, Passivation, PVD",
      de: "Oberflächenbehandlungs-Leitfaden: Eloxieren, Vernickeln, Brünieren, Passivieren, PVD",
    },
    excerpt: {
      zh: "加工件的「外觀」與「壽命」往往決定客戶滿意度。本文整理 8 種常見表面處理的差異、適用材料、成本範圍，協助設計者做出對的選擇。",
      en: "A part's appearance and longevity often determine customer satisfaction. We compare 8 common surface treatments — differences, compatible materials, and relative costs.",
      de: "Aussehen und Lebensdauer eines Bauteils bestimmen oft die Kundenzufriedenheit. Wir vergleichen 8 gängige Oberflächenbehandlungen — Unterschiede, kompatible Werkstoffe und relative Kosten.",
    },
    category: { zh: "技術分享", en: "Technical", de: "Technik" },
    date: "2026-04-22",
    imageUrl:
      "https://images.pexels.com/photos/32845674/pexels-photo-32845674.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: {
      zh: `<p>CNC 加工出來的零件，多數情況下不會直接出貨 — 而是要再經過「表面處理」這一道。為什麼？因為原始素材表面：易刮傷、易氧化、外觀單調、耐磨性不夠、有時還會生鏽。表面處理同時解決這些問題，並提升零件的視覺價值。</p>

<p>本文整理業界最常見的 8 種表面處理，幫您快速做選擇。</p>

<h2>1. 陽極處理（Anodizing）— 鋁件首選</h2>
<p>用電化學在鋁件表面長出一層緻密氧化鋁膜。是 A6061、A7075 鋁合金最常見的後處理。</p>
<ul>
<li><strong>顏色</strong>：透明、黑、紅、藍、金、灰...幾乎任何顏色</li>
<li><strong>膜厚</strong>：5-25 μm（透明陽極）</li>
<li><strong>耐磨</strong>：中等（一般陽極）</li>
<li><strong>適合</strong>：消費電子外殼、改裝零件、機構件</li>
</ul>

<h2>2. 硬質陽極（Hard Anodizing）— 耐磨升級版</h2>
<ul>
<li><strong>膜厚</strong>：25-50 μm（厚膜）</li>
<li><strong>硬度</strong>：可達 HV 400 以上</li>
<li><strong>耐磨</strong>：明顯優於普通陽極</li>
<li><strong>顏色</strong>：黑、灰、深棕等深色為主</li>
<li><strong>適合</strong>：氣壓缸活塞、半導體腔體、工業耐磨件</li>
<li><strong>價格</strong>：約普通陽極的 <strong>1.5-2 倍</strong></li>
</ul>

<h2>3. 電鍍鎳（Nickel Plating）— 通用耐蝕</h2>
<p>適用範圍極廣 — 鋼、銅、鋁都能鍍。</p>
<ul>
<li><strong>分類</strong>：電解鎳、無電解鎳（化學鎳）</li>
<li><strong>無電解鎳優勢</strong>：膜厚均勻、可鍍複雜形狀內外</li>
<li><strong>耐蝕</strong>：優於陽極、低於電解拋光不鏽鋼</li>
<li><strong>外觀</strong>：銀白色、可拋光呈鏡面</li>
<li><strong>適合</strong>：機械零件、電子接點、模具導引件</li>
</ul>

<h2>4. 電鍍鉻（Chrome Plating）— 經典耐磨</h2>
<ul>
<li><strong>分類</strong>：硬鉻（耐磨）、裝飾鉻（薄膜美觀）</li>
<li><strong>硬度</strong>：硬鉻可達 HV 800 以上</li>
<li><strong>外觀</strong>：銀白色高光澤</li>
<li><strong>適合</strong>：油壓桿、模具、活塞桿、機械耐磨件</li>
<li><strong>注意</strong>：歐盟對六價鉻有環保限制，部分需用三價鉻替代</li>
</ul>

<h2>5. 發黑 / 染黑（Blackening / Bluing）— 鋼件防鏽</h2>
<ul>
<li><strong>原理</strong>：在鋼鐵表面形成黑色氧化亞鐵 + 油浸</li>
<li><strong>外觀</strong>：消光黑或亮黑</li>
<li><strong>耐蝕</strong>：弱（仰賴油膜，需定期保養）</li>
<li><strong>價格</strong>：最便宜的鋼件處理之一</li>
<li><strong>適合</strong>：工具、刀具、槍械零件、室內機構件</li>
<li><strong>不適合</strong>：戶外、高濕度環境</li>
</ul>

<h2>6. 鈍化（Passivation）— 不鏽鋼專用</h2>
<ul>
<li><strong>原理</strong>：用酸（硝酸或檸檬酸）去除表面雜質鐵屑，加速氧化鉻保護膜形成</li>
<li><strong>效果</strong>：提升不鏽鋼本身的耐蝕性</li>
<li><strong>外觀變化</strong>：肉眼幾乎看不出</li>
<li><strong>適合</strong>：所有不鏽鋼零件出廠前的「最後一道」</li>
<li><strong>幾乎必做</strong>：醫療、半導體、生醫不鏽鋼件標配</li>
</ul>

<h2>7. PVD / DLC 塗層 — 極致耐磨</h2>
<ul>
<li><strong>類型</strong>：TiN（金色）、CrN（銀灰）、AlTiN（深灰）、DLC（黑色類鑽碳）</li>
<li><strong>硬度</strong>：可達 HV 2000 以上</li>
<li><strong>摩擦係數</strong>：DLC 極低（適合滑動配合）</li>
<li><strong>適合</strong>：刀具、模具、高耐磨機構、航太零件</li>
<li><strong>價格</strong>：明顯高於普通電鍍（約 <strong>3-5 倍</strong>）</li>
</ul>

<h2>8. 粉體塗裝（Powder Coating）— 大件、低成本</h2>
<ul>
<li><strong>原理</strong>：靜電吸附粉末 + 高溫熔融成膜</li>
<li><strong>顏色</strong>：任意（RAL 色卡）</li>
<li><strong>厚度</strong>：60-100 μm（厚）</li>
<li><strong>適合</strong>：機殼、結構件、戶外設備</li>
<li><strong>不適合</strong>：精度配合面（厚度會影響尺寸）</li>
</ul>

<h2>選擇 flowchart</h2>
<ol>
<li><strong>什麼材料？</strong>
<ul>
<li>鋁合金 → 陽極 / 硬質陽極</li>
<li>不鏽鋼 → 鈍化 + 拋光（基本）；極端耐磨 → PVD</li>
<li>鋼 / 鐵 → 發黑（內部）/ 鍍鋅（戶外）/ 鍍鎳（通用）</li>
</ul>
</li>
<li><strong>主要訴求？</strong>
<ul>
<li>外觀 → 陽極多色 / 粉體塗裝</li>
<li>耐磨 → 硬陽 / 硬鉻 / PVD</li>
<li>耐蝕 → 鈍化 + 鍍鎳 / 達克鋅</li>
<li>絕緣 → 陽極（鋁）</li>
<li>導電 → 鍍鎳 / 鍍金</li>
</ul>
</li>
<li><strong>預算？</strong>
<ul>
<li>低 → 發黑 / 一般陽極 / 鈍化</li>
<li>中 → 硬陽 / 鍍鎳 / 粉體</li>
<li>高 → PVD / DLC / 客製多層處理</li>
</ul>
</li>
</ol>

<h2>偉勇的整合服務</h2>
<p>我們本身專做 CNC 加工，表面處理透過長期合作的外協廠完成 — 從陽極、鍍鎳、發黑到 PVD、DLC 都能整合。</p>
<p>客戶下一張單，從加工到表面處理我們統一窗口為您處理。圖面 + 您要的處理規格送來，我們會協助評估、報價、品管確認。</p>`,
      en: `<p>CNC parts rarely ship as-machined. Surface treatment improves wear, corrosion, appearance, and longevity. Here's a quick map of the 8 most common options.</p>
<h2>For aluminum</h2>
<ul>
<li><strong>Anodizing</strong> (clear, color, black, etc.) — corrosion + decorative</li>
<li><strong>Hard anodizing</strong> (25-50 μm, HV 400+) — premium wear resistance, ~1.5-2× the cost</li>
</ul>
<h2>For stainless steel</h2>
<ul>
<li><strong>Passivation</strong> — nitric/citric acid bath; standard for medical, semiconductor</li>
<li><strong>Electropolishing</strong> — mirror finish + improved corrosion resistance</li>
<li><strong>PVD coating</strong> (TiN, CrN, DLC) — extreme wear, low friction; ~3-5× standard plating</li>
</ul>
<h2>For steel</h2>
<ul>
<li><strong>Blackening / bluing</strong> — cheapest, indoor only</li>
<li><strong>Nickel plating</strong> — versatile, good corrosion resistance</li>
<li><strong>Hard chrome plating</strong> — HV 800+, classic for hydraulic rods, dies</li>
<li><strong>Powder coating</strong> — RAL colors, thick (60-100 μm), for housings and structural parts</li>
</ul>
<h2>Decision priorities</h2>
<p>Choose by material first, then by primary requirement (appearance / wear / corrosion / electrical), then by budget. The wrong treatment can fail in months; the right one extends part life 3-5×.</p>`,
      de: `<p>CNC-Teile werden selten unbearbeitet ausgeliefert. Oberflächenbehandlung verbessert Verschleiß, Korrosion, Aussehen und Lebensdauer. Eine schnelle Übersicht der 8 gängigen Optionen.</p>
<h2>Für Aluminium</h2>
<ul>
<li><strong>Eloxieren</strong> (klar, farbig, schwarz etc.) — Korrosion + Optik</li>
<li><strong>Harteloxieren</strong> (25-50 μm, HV 400+) — Premium-Verschleißfestigkeit, ca. 1,5-2× Kosten</li>
</ul>
<h2>Für Edelstahl</h2>
<ul>
<li><strong>Passivieren</strong> — Salpeter-/Citronensäurebad; Standard für Medizin, Halbleiter</li>
<li><strong>Elektropolieren</strong> — Hochglanz + verbesserte Korrosionsbeständigkeit</li>
<li><strong>PVD-Beschichtung</strong> (TiN, CrN, DLC) — extremer Verschleiß, geringe Reibung; ca. 3-5× Standardbeschichtung</li>
</ul>
<h2>Für Stahl</h2>
<ul>
<li><strong>Brünieren</strong> — günstigste Lösung, nur innen</li>
<li><strong>Vernickeln</strong> — vielseitig, gute Korrosionsbeständigkeit</li>
<li><strong>Hartverchromen</strong> — HV 800+, klassisch für Hydraulikkolben, Werkzeuge</li>
<li><strong>Pulverbeschichten</strong> — RAL-Farben, dick (60-100 μm), für Gehäuse und Strukturteile</li>
</ul>
<h2>Auswahlpriorität</h2>
<p>Zuerst nach Werkstoff wählen, dann nach Hauptanforderung (Optik / Verschleiß / Korrosion / elektrisch), dann nach Budget. Die falsche Behandlung versagt in Monaten; die richtige verlängert die Bauteillebensdauer um das 3- bis 5-Fache.</p>`,
    },
  },
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
