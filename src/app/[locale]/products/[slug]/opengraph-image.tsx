import { ImageResponse } from "next/og";
import { getProcessBySlug } from "@/data/processes";

export const alt = "Weiyon Industry — Machining Process";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 動態生成每個製程頁的 OG 分享圖
// 統一用英文標題避開 CJK 字型載入
export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const proc = getProcessBySlug(slug);

  const PRIMARY = "#1a1a1a";
  const ACCENT = "#d4a84b";
  const TEXT = "#ffffff";
  const MUTED = "#888888";

  const title = proc?.title.en || "Machining Process";
  const subtitle = proc?.shortDescription.en || "";

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
          padding: "60px 72px",
          justifyContent: "space-between",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: brand + Process tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                backgroundColor: ACCENT,
                borderRadius: 12,
                fontSize: 40,
                fontWeight: 900,
                color: PRIMARY,
              }}
            >
              W
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                }}
              >
                WEIYON INDUSTRY
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: MUTED,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Since 1986 · Taiwan
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              border: `2px solid ${ACCENT}`,
              borderRadius: 999,
              fontSize: 16,
              color: ACCENT,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Process
          </div>
        </div>

        {/* Middle: process title + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: title.length > 50 ? 60 : 76,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -1,
              color: ACCENT,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: MUTED,
                lineHeight: 1.35,
                maxWidth: 1000,
              }}
            >
              {subtitle.length > 130
                ? subtitle.slice(0, 127) + "…"
                : subtitle}
            </div>
          )}
        </div>

        {/* Bottom: capabilities + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: `2px solid ${ACCENT}`,
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: MUTED,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            CNC · Difficult Materials · Custom Orders
          </div>
          <div
            style={{
              fontSize: 22,
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
