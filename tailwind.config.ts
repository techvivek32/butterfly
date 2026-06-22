import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Butterfly brand palette — emerald primary (AiSensy-like) + butterfly accents
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        // Butterfly "wing" accents
        wing: {
          violet: "#7c3aed",
          fuchsia: "#d946ef",
          teal: "#14b8a6",
          sky: "#0ea5e9",
          amber: "#f59e0b",
        },
        ink: {
          DEFAULT: "#0a1410",
          soft: "#1f2937",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16,185,129,0.08), 0 18px 60px -15px rgba(16,185,129,0.35)",
        soft: "0 10px 40px -12px rgba(10,20,16,0.18)",
        card: "0 4px 24px -8px rgba(10,20,16,0.12)",
        float: "0 24px 70px -20px rgba(10,20,16,0.30)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg,#10b981 0%,#14b8a6 45%,#0ea5e9 100%)",
        "wing-gradient":
          "linear-gradient(135deg,#7c3aed 0%,#d946ef 50%,#10b981 100%)",
        "mesh-light":
          "radial-gradient(60% 60% at 15% 10%, rgba(16,185,129,0.16) 0%, transparent 60%), radial-gradient(50% 50% at 95% 5%, rgba(124,58,237,0.14) 0%, transparent 55%), radial-gradient(55% 55% at 80% 95%, rgba(14,165,233,0.12) 0%, transparent 60%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(6deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flutter: {
          "0%,100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(55deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 32s linear infinite",
        flutter: "flutter 0.5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
