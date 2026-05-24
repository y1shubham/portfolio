import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shubham Yadav — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -200, right: -200,
            width: 700, height: 700,
            background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 65%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        {/* Glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -150, left: -100,
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: 999,
            padding: "10px 22px",
            marginBottom: 44,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
          <span style={{ color: "#60A5FA", fontSize: 18, fontWeight: 600 }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <span style={{ fontSize: 88, fontWeight: 900, color: "#60A5FA", lineHeight: 1 }}>
          Shubham
        </span>
        <span style={{ fontSize: 88, fontWeight: 900, color: "#F9FAFB", lineHeight: 1.1, marginTop: 6 }}>
          Yadav
        </span>

        {/* Role */}
        <span style={{ fontSize: 28, color: "#6B7280", marginTop: 28, fontWeight: 500 }}>
          Full Stack Developer · React · Next.js · Node.js · Redis
        </span>

        {/* Bottom row */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {["React.js", "Next.js", "TypeScript", "Node.js", "Redis"].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(31,41,55,0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  padding: "7px 16px",
                  color: "#9CA3AF",
                  fontSize: 15,
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <span style={{ color: "#374151", fontSize: 20, fontWeight: 700 }}>y1shubham.in</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
