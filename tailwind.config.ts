import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        "surface-3": "var(--surface-3)",
        line: "var(--line)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "text-dim": "var(--text-dim)",
        red: {
          DEFAULT: "var(--red)",
          hover: "var(--red-hover)",
          press: "var(--red-press)",
          text: "var(--red-text)",
        },
        blue: "var(--blue)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        tamil: ["var(--font-tamil)", "var(--font-tamil-fallback)", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3.25rem, 11vw, 9rem)", { lineHeight: "0.88", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem, 5vw, 4rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.5rem, 3.5vw, 2.75rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        price: ["clamp(4rem, 14vw, 10rem)", { lineHeight: "0.85", letterSpacing: "-0.03em" }],
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.35em" }],
        "body-lg": ["clamp(1rem, 2vw, 1.125rem)", { lineHeight: "1.6" }],
      },
      spacing: {
        "s-1": "var(--space-1)",
        "s-2": "var(--space-2)",
        "s-3": "var(--space-3)",
        "s-4": "var(--space-4)",
        "s-5": "var(--space-5)",
        "s-6": "var(--space-6)",
        "s-7": "var(--space-7)",
        "s-8": "var(--space-8)",
        "s-9": "var(--space-9)",
        "s-10": "var(--space-10)",
        "s-11": "var(--space-11)",
      },
      borderRadius: {
        "r-0": "var(--radius-0)",
        "r-1": "var(--radius-1)",
        "r-2": "var(--radius-2)",
      },
      boxShadow: {
        hard: "var(--shadow-hard)",
      },
      zIndex: {
        header: "40",
        bar: "50",
        modal: "60",
        toast: "70",
      },
      transitionDuration: {
        hover: "120ms",
        ui: "240ms",
        reveal: "480ms",
      },
      transitionTimingFunction: {
        ui: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
