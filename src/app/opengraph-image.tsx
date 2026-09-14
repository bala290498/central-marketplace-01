import { ImageResponse } from "next/og";

export const alt = "Central Marketplace - Chennai Desk";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(#e2e8f0 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          padding: "50px 40px",
          color: "#0f172a",
        }}
      >
        {/* Top border accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "linear-gradient(90deg, #f97316 0%, #2563eb 50%, #10b981 100%)",
            display: "flex",
          }}
        />

        {/* Top Brand Header Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
            backgroundColor: "#ffffff",
            border: "2px solid #e2e8f0",
            padding: "18px 40px",
            borderRadius: "100px",
            boxShadow: "0 15px 30px -10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              width: "76px",
              height: "76px",
              borderRadius: "50%",
              backgroundColor: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 16px -2px rgba(249, 115, 22, 0.4)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"
                fill="#ffffff"
                stroke="#f97316"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="10" r="3" fill="#f97316" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", lineHeight: 1.1 }}>
              <span style={{ fontSize: "42px", fontWeight: 900, color: "#0f172a", letterSpacing: "-1px" }}>
                CENTRAL
              </span>
              <span style={{ fontSize: "42px", fontWeight: 900, color: "#2563eb", letterSpacing: "-1px" }}>
                MARKETPLACE
              </span>
            </div>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: "#f97316",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginTop: "4px",
                textAlign: "left",
              }}
            >
              CHENNAI DESK
            </span>
          </div>
        </div>

        {/* Slogan */}
        <div
          style={{
            display: "flex",
            fontSize: "46px",
            fontWeight: 900,
            color: "#0f172a",
            marginBottom: "16px",
            textAlign: "center",
            letterSpacing: "-1px",
          }}
        >
          Find Locally! Connect Directly!
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#475569",
            textAlign: "center",
            maxWidth: "840px",
            marginBottom: "40px",
            lineHeight: 1.4,
            fontWeight: 500,
          }}
        >
          We connect buyers & customers with property owners, service providers, home food & local sellers in Chennai.
        </div>

        {/* Category badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              padding: "12px 22px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#1d4ed8",
            }}
          >
            🏠 Property Rentals
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ecfdf5",
              border: "1.5px solid #a7f3d0",
              padding: "12px 22px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#047857",
            }}
          >
            🛠️ Service Providers
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fff7ed",
              border: "1.5px solid #fed7aa",
              padding: "12px 22px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#c2410c",
            }}
          >
            🍱 Home Food
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fef2f2",
              border: "1.5px solid #fecaca",
              padding: "12px 22px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#b91c1c",
            }}
          >
            🛍️ Local Sellers
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
