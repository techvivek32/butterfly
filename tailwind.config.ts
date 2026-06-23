import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Butterfly brand palette — clean AiSensy-style grass green
        brand: {
          50: "#eefdf3",
          100: "#d6fbe3",
          200: "#aff4c9",
          300: "#79e9a6",
          400: "#3dd47e",
          500: "#16bd5e",
          600: "#0fa04d",
          700: "#107e3f",
          800: "#126435",
          900: "#10522e",
          950: "#022c17",
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
          "linear-gradient(135deg,#3dd47e 0%,#16bd5e 52%,#0fa04d 100%)",
        "wing-gradient":
          "linear-gradient(135deg,#16bd5e 0%,#14b8a6 50%,#0fa04d 100%)",
        "mesh-light":
          "radial-gradient(60% 60% at 12% 8%, rgba(22,189,94,0.13) 0%, transparent 60%), radial-gradient(45% 45% at 92% 6%, rgba(22,189,94,0.08) 0%, transparent 55%), radial-gradient(55% 55% at 82% 96%, rgba(16,160,77,0.07) 0%, transparent 60%)",
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
