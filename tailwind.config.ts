import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":   "#0B0F19",
        "bg-secondary": "#111827",
        "bg-elevated":  "#1F2937",
        accent:         "#3B82F6",
        "accent-light": "#60A5FA",
        "accent-cyan":  "#06B6D4",
        "text-primary": "#F9FAFB",
        "text-muted":   "#9CA3AF",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-sm":  "0 0 20px rgba(59,130,246,0.18)",
        "glow-md":  "0 0 40px rgba(59,130,246,0.22), 0 0 80px rgba(59,130,246,0.08)",
        "glow-lg":  "0 0 60px rgba(59,130,246,0.28), 0 0 120px rgba(59,130,246,0.12)",
        "glow-card":"0 20px 60px rgba(59,130,246,0.10)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(120deg, #3B82F6, #06B6D4)",
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      animation: {
        float:        "float 3s ease-in-out infinite",
        "float-d1":   "float 3s ease-in-out 0.6s infinite",
        "float-d2":   "float 3s ease-in-out 1.2s infinite",
        "float-d3":   "float 3s ease-in-out 1.8s infinite",
        "float-d4":   "float 3s ease-in-out 2.4s infinite",
        "float-d5":   "float 3s ease-in-out 0.9s infinite",
        "spin-slow":  "spin-slow 6s linear infinite",
        shimmer:      "shimmer 3s linear infinite",
        pulse:        "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
