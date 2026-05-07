import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "#ffffff",
          50: "#f7f7f8",
          100: "#ececef",
          200: "#d5d5db",
          300: "#a8a8b2",
          400: "#7a7a86",
          500: "#52525b",
          600: "#3a3a42",
          700: "#27272d",
          800: "#16161a",
          900: "#0a0a0c",
          950: "#050507",
        },
        accent: {
          DEFAULT: "#dcdde3",
          glow: "#f4f4f7",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: [
          "var(--font-sans)",
          "-apple-system",
          "SF Pro Display",
          "Inter",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "grid":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -20px rgba(0,0,0,0.6), 0 8px 24px -8px rgba(0,0,0,0.4)",
        "glass-lg":
          "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 60px 120px -30px rgba(0,0,0,0.7)",
        ring: "0 0 0 1px rgba(255,255,255,0.08)",
      },
      animation: {
        "float-slow": "floatSlow 14s ease-in-out infinite",
        "float-slower": "floatSlow 22s ease-in-out infinite",
        "shimmer": "shimmer 6s linear infinite",
        "ticker": "ticker 36s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ticker: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
