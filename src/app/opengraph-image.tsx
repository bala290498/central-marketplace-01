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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          padding: "60px 40px",
          color: "#ffffff",
        }}
      >
        {/* Subtle background glow effect */}
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

        {/* Top Header Row with Brand Icon & Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {/* Brand Icon - Orange circle with white MapPin */}
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
              <span
                style={{
                  fontSize: "56px",
                  fontWeight: 900,
                  letterSpacing: "-1px",
                  color: "#ffffff",
                }}
              >
                CENTRAL
              </span>
              <span
                style={{
                  fontSize: "56px",
                  fontWeight: 900,
                  letterSpacing: "-1px",
                  color: "#3b82f6",
                }}
              >
                MARKETPLACE
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#f97316",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                CHENNAI DESK
              </span>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div
          style={{
            display: "flex",
            fontSize: "38px",
            fontWeight: 800,
            color: "#f8fafc",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Find Locally! Connect Directly!
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "850px",
            marginBottom: "40px",
            lineHeight: 1.4,
          }}
        >
          We connect buyers & customers with property owners, service providers, home food & local sellers in Chennai.
        </div>

        {/* Feature Category Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#e2e8f0",
            }}
          >
            🏠 Property Rentals
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#e2e8f0",
            }}
          >
            🛠️ Service Providers
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#e2e8f0",
            }}
          >
            🍱 Home Food
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#e2e8f0",
            }}
          >
            🛍️ Local Sellers
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
