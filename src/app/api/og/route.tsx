import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const v = searchParams.get("v") || "1";

  const size = { width: 1200, height: 630 };

  // Variation 2: Crisp Clean Light Theme
  if (v === "2") {
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

  // Variation 3: Vibrant Dual-Tone Sunset Theme
  if (v === "3") {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            background: "linear-gradient(180deg, #0b1329 0%, #1e1b4b 55%, #431407 100%)",
            position: "relative",
            fontFamily: "system-ui, sans-serif",
            padding: "54px 44px",
            color: "#ffffff",
          }}
        >
          {/* Top Brand Banner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "50%",
                  backgroundColor: "#f97316",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(249, 115, 22, 0.5)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "42px", fontWeight: 900, color: "#ffffff" }}>
                    CENTRAL
                  </span>
                  <span style={{ fontSize: "42px", fontWeight: 900, color: "#60a5fa" }}>
                    MARKETPLACE
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 800,
                    color: "#fb923c",
                    letterSpacing: "4px",
                  }}
                >
                  CHENNAI DESK
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f97316",
                color: "#ffffff",
                padding: "10px 24px",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "1px",
                boxShadow: "0 4px 12px rgba(249, 115, 22, 0.4)",
              }}
            >
              DIRECT CHENNAI DESK
            </div>
          </div>

          {/* Center Title Block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              margin: "16px 0",
            }}
          >
            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "14px",
                letterSpacing: "-1px",
              }}
            >
              Find Locally! Connect Directly!
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#cbd5e1",
                maxWidth: "860px",
                lineHeight: 1.4,
              }}
            >
              We connect people, customers and buyers with property owners, service providers and local sellers in Chennai.
            </div>
          </div>

          {/* Category pills */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                padding: "14px 24px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              🏠 Property & Rooms
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                padding: "14px 24px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              🍱 Home Foods
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                padding: "14px 24px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              🛠️ Service Providers
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                padding: "14px 24px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
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

  // Variation 1 (Default): Dark Slate Premium Theme
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          padding: "60px 40px",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(0,0,0,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              backgroundColor: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
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

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "56px", fontWeight: 900, color: "#ffffff" }}>
                CENTRAL
              </span>
              <span style={{ fontSize: "56px", fontWeight: 900, color: "#3b82f6" }}>
                MARKETPLACE
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
              <span style={{ fontSize: "20px", fontWeight: 800, color: "#f97316", letterSpacing: "4px" }}>
                CHENNAI DESK
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "38px", fontWeight: 800, color: "#f8fafc", marginBottom: "16px" }}>
          Find Locally! Connect Directly!
        </div>

        <div style={{ display: "flex", fontSize: "22px", color: "#94a3b8", textAlign: "center", maxWidth: "850px", marginBottom: "40px" }}>
          We connect buyers & customers with property owners, service providers, home food & local sellers in Chennai.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", border: "1px solid rgba(148, 163, 184, 0.2)", padding: "12px 24px", borderRadius: "50px", fontSize: "18px", fontWeight: 600, color: "#e2e8f0", display: "flex" }}>
            🏠 Property Rentals
          </div>
          <div style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", border: "1px solid rgba(148, 163, 184, 0.2)", padding: "12px 24px", borderRadius: "50px", fontSize: "18px", fontWeight: 600, color: "#e2e8f0", display: "flex" }}>
            🛠️ Service Providers
          </div>
          <div style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", border: "1px solid rgba(148, 163, 184, 0.2)", padding: "12px 24px", borderRadius: "50px", fontSize: "18px", fontWeight: 600, color: "#e2e8f0", display: "flex" }}>
            🍱 Home Food
          </div>
          <div style={{ backgroundColor: "rgba(30, 41, 59, 0.8)", border: "1px solid rgba(148, 163, 184, 0.2)", padding: "12px 24px", borderRadius: "50px", fontSize: "18px", fontWeight: 600, color: "#e2e8f0", display: "flex" }}>
            🛍️ Local Sellers
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
