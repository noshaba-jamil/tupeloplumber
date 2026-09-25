import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2A4A", // primary brand foundation
        dark: "#071A2B", // deepest sections (footer, final CTA)
        black: "#0A0D10", // true-black sections for stronger contrast, used sparingly
        brand: "#145DA0", // secondary blue
        accent: "#FFD21F", // yellow — CTAs, highlights, stats, emergency indicators only
        surface: "#F5F7FA",
        ink: "#17202A",
        muted: "#64748B",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
