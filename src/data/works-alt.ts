// 每張實績圖的描述性 alt 文字（依實際照片內容撰寫，供 Google 圖片搜尋與無障礙）
// 由 workAlt(id, locale) 取用，會在描述後附上品牌關鍵字。

type AltLocale = "zh" | "en" | "de";

const DESC: Record<number, Record<AltLocale, string>> = {
  1: {
    zh: "不鏽鋼精密軸承座，中央搪孔含銅套與法蘭螺孔",
    en: "Stainless steel bearing housing with bronze-bushed bore and flange holes",
    de: "Edelstahl-Lagergehäuse mit bronzebuchsenbohrung und Flanschbohrungen",
  },
  2: {
    zh: "大型鋼製基座板，中央孔與多處螺栓孔、銑削平面",
    en: "Large machined steel base/mounting plate with central bore and bolt holes",
    de: "Große gefräste Stahl-Grundplatte mit Zentralbohrung",
  },
  3: {
    zh: "不鏽鋼閥體／歧管塊，中央孔、側螺紋口與法蘭面",
    en: "Stainless steel valve body / manifold blocks with threaded side ports",
    de: "Edelstahl-Ventilkörper / Verteilerblöcke mit Gewindeanschlüssen",
  },
  4: {
    zh: "不鏽鋼軸承塊，貫穿搪孔與頂部螺紋孔",
    en: "Stainless steel bearing block with through-bore and tapped holes",
    de: "Edelstahl-Lagerblock mit Durchgangsbohrung und Gewindebohrungen",
  },
  5: {
    zh: "不鏽鋼軸座／閥塊一對，中央孔與法蘭孔",
    en: "Pair of stainless steel bearing / valve blocks with central and flange bores",
    de: "Paar Edelstahl-Lager-/Ventilblöcke mit Zentral- und Flanschbohrung",
  },
  6: {
    zh: "發黑鋼製角形支架板，精密鑽孔",
    en: "Black-oxide steel angle bracket plate with precision-drilled holes",
    de: "Brüniertes Stahl-Winkelblech mit Präzisionsbohrungen",
  },
  7: {
    zh: "CNC 加工鋼組件：L 形角板、槽件與階梯沉孔塊",
    en: "Set of CNC-machined steel components: bracket, channel and stepped counterbored block",
    de: "Satz CNC-gefräster Stahlkomponenten: Winkel, Profil und Stufenblock",
  },
  8: {
    zh: "連接板量產批，兩端精密鑽孔",
    en: "Production batch of machined link plates with end holes",
    de: "Serienfertigung von Verbindungsplatten mit Endbohrungen",
  },
  9: {
    zh: "鋼製模板／安裝板，中央大孔與定位孔",
    en: "Steel die / mounting plate with central and locating bores",
    de: "Stahl-Form-/Montageplatte mit Zentral- und Passbohrungen",
  },
  10: {
    zh: "不鏽鋼精密軸件與管件，整備出貨",
    en: "Stainless steel machined shafts and tubes ready for shipment",
    de: "Edelstahl-Wellen und Rohrteile, versandfertig",
  },
  11: {
    zh: "不鏽鋼夾座塊，頂部孔與矩形開窗",
    en: "Stainless steel clevis / window mounting block",
    de: "Edelstahl-Gabelhalter mit Fensterausschnitt",
  },
  12: {
    zh: "加工成品以週轉箱包裝、整備出貨",
    en: "Finished machined parts packed in crates for shipment",
    de: "Fertige Bearbeitungsteile, verpackt zum Versand",
  },
  13: {
    zh: "大型不鏽鋼液壓歧管板，多螺紋油口",
    en: "Large stainless steel hydraulic manifold plate with multiple threaded ports",
    de: "Großer Edelstahl-Hydraulikverteiler mit mehreren Gewindeanschlüssen",
  },
  14: {
    zh: "成型模具與螺旋槽模板，治具加工",
    en: "Forming die and spiral-groove tooling plate",
    de: "Formwerkzeug und Spiralnut-Werkzeugplatte",
  },
  15: {
    zh: "不鏽鋼十字接頭／歧管塊，中央孔與兩側圓口",
    en: "Stainless steel cross fitting / manifold block with side ports",
    de: "Edelstahl-Kreuzstück / Verteilerblock mit seitlichen Anschlüssen",
  },
  16: {
    zh: "穿孔鋼板量產批，多排精密鑽孔",
    en: "Production batch of drilled / perforated steel plates",
    de: "Serie gebohrter Lochplatten aus Stahl",
  },
  17: {
    zh: "銅製歧管／分配板量產批，多端口沉孔",
    en: "Batch of copper manifold / distributor plates with multiple counterbored ports",
    de: "Serie Kupfer-Verteilerplatten mit mehreren Anschlüssen",
  },
  18: {
    zh: "深色鋼製模板，中央大孔與多處定位孔",
    en: "Dark steel die / mounting plate with central and locating bores",
    de: "Dunkle Stahl-Formplatte mit Zentral- und Passbohrungen",
  },
  19: {
    zh: "發黑鋼製齒輪／鏈輪，含減重孔",
    en: "Black-oxide steel gear / sprocket with lightening holes",
    de: "Brüniertes Stahl-Zahnrad / Kettenrad mit Aussparungen",
  },
  20: {
    zh: "鑄造加工軸承座／泵端蓋一對",
    en: "Pair of cast and machined bearing housings / pump covers",
    de: "Paar gegossene und bearbeitete Lagergehäuse / Pumpendeckel",
  },
  21: {
    zh: "青銅閥盤／閥座量產批，方形凸台",
    en: "Production batch of bronze valve discs / seats with square boss",
    de: "Serie Bronze-Ventilteller / -sitze mit Vierkant-Ansatz",
  },
  22: {
    zh: "不鏽鋼眼端／香蕉接頭，圓螺紋座",
    en: "Stainless steel banjo / eye fitting on threaded round base",
    de: "Edelstahl-Ringanschluss auf rundem Gewindesockel",
  },
  23: {
    zh: "不鏽鋼帶鰭閥塊量產批，中央孔與螺栓孔",
    en: "Production batch of stainless steel finned valve blocks",
    de: "Serie Edelstahl-Ventilblöcke mit Rippen",
  },
  24: {
    zh: "鋼製安裝板與三角支架堆疊，量產交付",
    en: "Stacks of steel mounting plates and triangular brackets, production run",
    de: "Stapel Stahl-Montageplatten und Dreieckwinkel, Serie",
  },
  25: {
    zh: "車削鋼盤／活塞量產批，中央孔",
    en: "Production batch of turned steel discs / pistons with central bore",
    de: "Serie gedrehter Stahlscheiben / Kolben mit Zentralbohrung",
  },
  26: {
    zh: "長不鏽鋼棒材／型材捆綁，整備出貨",
    en: "Bundled long stainless steel bars / profiles ready for shipment",
    de: "Gebündelte lange Edelstahl-Stangen / Profile, versandfertig",
  },
  27: {
    zh: "大型不鏽鋼板機台加工中，多沉孔、治具夾持",
    en: "Large stainless steel plate in machining, multiple counterbores on fixture",
    de: "Große Edelstahlplatte in Bearbeitung, mehrere Senkungen auf Vorrichtung",
  },
  28: {
    zh: "不鏽鋼雙耳座，立耳焊接於法蘭底座",
    en: "Stainless steel double-lug clevis mount welded to flange base",
    de: "Edelstahl-Doppellaschen-Halter, an Flanschbasis geschweißt",
  },
  29: {
    zh: "不鏽鋼厚歧管板，中央大孔與螺紋、螺栓孔",
    en: "Thick stainless steel manifold / mounting plate, bored and tapped",
    de: "Dicke Edelstahl-Verteilerplatte, gebohrt und mit Gewinde",
  },
  30: {
    zh: "車削不鏽鋼活塞／閥芯量產批",
    en: "Production batch of turned stainless steel pistons / valve poppets",
    de: "Serie gedrehter Edelstahl-Kolben / Ventilkegel",
  },
  31: {
    zh: "不鏽鋼法蘭塊一對，內螺紋大孔",
    en: "Pair of stainless steel flanged blocks with internally threaded bore",
    de: "Paar Edelstahl-Flanschblöcke mit Innengewindebohrung",
  },
  32: {
    zh: "不鏽鋼 U 形夾座一對，多孔加工",
    en: "Pair of stainless steel U-brackets with multiple bores",
    de: "Paar Edelstahl-U-Halter mit mehreren Bohrungen",
  },
  33: {
    zh: "不鏽鋼法蘭軸座／閥體，機台加工中",
    en: "Stainless steel flanged bearing block / valve body in machining",
    de: "Edelstahl-Flansch-Lagerblock / Ventilkörper in Bearbeitung",
  },
  34: {
    zh: "不鏽鋼 U 形鞍座支架，角接多孔",
    en: "Stainless steel U-saddle bracket with cornered multi-bore",
    de: "Edelstahl-U-Sattelhalter mit Eckbohrungen",
  },
  35: {
    zh: "不鏽鋼銷座塊與圓棒，治具件",
    en: "Stainless steel pivot / pin block with round bar",
    de: "Edelstahl-Bolzenblock mit Rundstange",
  },
  36: {
    zh: "拋光不鏽鋼板量產批，中央大沉孔與螺栓孔",
    en: "Batch of polished stainless steel plates with large counterbore and bolt holes",
    de: "Serie polierter Edelstahlplatten mit großer Senkung und Schraubenbohrungen",
  },
  37: {
    zh: "不鏽鋼橋形軸座，中央大孔與兩端螺栓孔",
    en: "Stainless steel bridge / T bearing saddle, bored with end bolt holes",
    de: "Edelstahl-Brücken-Lagersattel, gebohrt mit Endbohrungen",
  },
  38: {
    zh: "不鏽鋼法蘭軸承座，含軸承、八孔法蘭",
    en: "Stainless steel flanged bearing housing with fitted bearing, 8-bolt flange",
    de: "Edelstahl-Flansch-Lagergehäuse mit Lager, 8-Loch-Flansch",
  },
  39: {
    zh: "不鏽鋼閥體一對，銅襯套與螺紋油口",
    en: "Pair of stainless steel valve bodies with bronze bushing and threaded ports",
    de: "Paar Edelstahl-Ventilkörper mit Bronzebuchse und Gewindeanschlüssen",
  },
};

const BRAND: Record<AltLocale, string> = {
  zh: "偉勇工業社 CNC 精密加工",
  en: "Weiyon Industry CNC precision machining",
  de: "Weiyon Industry CNC-Präzisionsbearbeitung",
};

export function workAlt(id: number, locale: string): string {
  const l: AltLocale =
    locale === "en" || locale === "de" ? locale : "zh";
  const desc = DESC[id]?.[l];
  return desc ? `${desc} — ${BRAND[l]}` : BRAND[l];
}
