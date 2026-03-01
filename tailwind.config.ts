import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alpine Palette (per brief)
        "warm-white": "#F6F4F1",
        "stone": "#CEC8BE",
        "charcoal": "#1E1E1C",
        "deep-forest": "#2F3A34",
        "aged-brass": "#B08D57",
        "terracotta-muted": "#A2674C",

        // Legacy aliases for compatibility
        white: "#FFFFFF",
        "off-white": "#F6F4F1",
        ink: "#1E1E1C",
        forest: "#2F3A34",
        copper: "#B08D57",
        "copper-light": "#C9A068",
        sage: "#4A6741",

        // Text
        text: "#1E1E1C",
        "text-inv": "#F6F4F1",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        6: "48px",
        8: "64px",
        12: "96px",
        16: "128px",
        24: "192px",
      },
      fontSize: {
        // Hero scale per brief
        "hero": "clamp(3rem, 8vw, 6rem)",
        "section-title": "2.5rem",
        "subheading": "1.25rem",
        "body": "1rem",
        "meta": "0.875rem",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "6px", // Max 6px per brief
        xl: "6px",
        "2xl": "6px",
        "3xl": "6px",
        full: "9999px",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(30,30,28,0.6) 70%, rgba(30,30,28,0.9) 100%)",
        "gradient-charcoal": "radial-gradient(ellipse at 40% 50%, rgba(47,58,52,0.4) 0%, rgba(30,30,28,0.98) 70%)",
      },
      letterSpacing: {
        "tight-title": "-0.02em", // Slight negative tracking for large titles
      },
      animation: {
        "scroll-line": "scroll-line 2.5s ease-in-out infinite",
      },
      keyframes: {
        "scroll-line": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(16px)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
