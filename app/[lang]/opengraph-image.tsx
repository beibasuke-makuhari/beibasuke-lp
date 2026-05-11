import { ImageResponse } from "next/og";

export const alt = "beibasuke — Casual basketball in Makuhari";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 4ロケール共通のOG画像。Satoriに同梱のフォントはASCIIのみ確実に出るので、
// ロケール別のCJKタイトルではなく英字のブランド表現で統一する。
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fff8f0 0%, #ffe9d6 55%, #ffd6ad 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "9999px",
              background: "#e87722",
            }}
          />
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: -1,
            }}
          >
            beibasuke
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#b85a12",
            }}
          >
            Neighborhood basketball circle
          </span>
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#1a1a1a",
              letterSpacing: -3,
            }}
          >
            Casual basketball
            <br />
            in Makuhari.
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#1a1a1a",
              opacity: 0.7,
              marginTop: 8,
            }}
          >
            Once a month · Beginners & families welcome
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span style={{ fontSize: 22, color: "#1a1a1a", opacity: 0.55 }}>
            Chiba · 幕張
          </span>
          <svg
            width="180"
            height="180"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#e87722"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.5 }}
          >
            <circle cx="24" cy="24" r="18" />
            <path d="M6 24h36M24 6v36M11 11c8 6 8 20 0 26M37 11c-8 6-8 20 0 26" />
          </svg>
        </div>
      </div>
    ),
    { ...size },
  );
}
