import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Centrul Național de Mediere și Conflict Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F2B4C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Top — logo mark (the bridge arcs) */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg
            width="120"
            height="40"
            viewBox="0 0 170 57"
            fill="none"
          >
            <path
              d="M169.5 56.5004H151.5C143.1 20.5008 102.333 8.50056 83 7.00042C143 6.20042 165.667 39.6671 169.5 56.5004Z"
              fill="rgba(255,255,255,0.7)"
            />
            <path
              d="M7.62939e-06 57H18.7283C27.4682 15.5576 69.8844 1.74316 90 0.01622C27.5723 -0.90473 3.98844 37.6217 7.62939e-06 57Z"
              fill="rgba(255,255,255,0.7)"
            />
            <path
              d="M26.5 57H41.0665C47.8642 28.6447 80.8545 19.1927 96.5 18.0111C47.9451 17.381 29.6021 43.7411 26.5 57Z"
              fill="#C4A96A"
            />
          </svg>
        </div>

        {/* Center — main text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "28px",
              color: "#A08B6E",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Centrul Național de Mediere
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Transformăm conflictul
            <br />
            <span style={{ color: "#A08B6E" }}>în soluție</span>
          </div>
        </div>

        {/* Bottom — tagline + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              fontStyle: "italic",
            }}
          >
            Dialogul, garanția soluțiilor durabile.
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            mediere-nationala.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
