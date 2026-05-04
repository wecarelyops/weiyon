import { ImageResponse } from "next/og";

// 觸發此檔的路由：所有 [locale] 路徑下的頁面（首頁、子頁面共用）
export const alt = "Weiyon Industry — Precision Metal Parts Manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG 分享圖 — 用品牌色（黑底 + 金色強調），英文為主以避開 CJK 字型載入
export default async function Image() {
  const PRIMARY = "#1a1a1a";
  const ACCENT = "#d4a84b";
  const TEXT = "#ffffff";
  const MUTED = "#888888";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: PRIMARY,
          color: TEXT,
          padding: "72px 80px",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Top: Logo Mark + Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* W mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              backgroundColor: ACCENT,
              borderRadius: 16,
              fontSize: 56,
              fontWeight: 900,
              color: PRIMARY,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            W
          </div>
          {/* Brand text */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <div
              style={{
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              WEIYON INDUSTRY
            </div>
            <div
              style={{
                fontSize: 18,
                color: MUTED,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Since 1986 · Taiwan
            </div>
          </div>
        </div>

        {/* Middle: Big Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Precision Metal Parts
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: ACCENT,
            }}
          >
            Manufacturing.
          </div>
        </div>

        {/* Bottom: Capabilities + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
            paddingTop: 32,
            borderTop: `2px solid ${ACCENT}`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 22,
                color: MUTED,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              CNC · Semiconductor · Aerospace · Medical
            </div>
            <div
              style={{
                fontSize: 22,
                color: MUTED,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              40+ Years · Taichung, Taiwan
            </div>
          </div>
          <div
            style={{
              fontSize: 26,
              color: ACCENT,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            weiyon.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
