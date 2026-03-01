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
        // Forest greens
        forest: {
          deep: "#0D2818",
          DEFAULT: "#1B4332",
          light: "#3D5A47",
          glow: "#40916C",
        },
        // Neutrals
        stone: {
          DEFAULT: "#CEC8BE",
          light: "#E8E4DE",
        },
        cream: "#FDF6E3",
        snow: "#FAF9F7",
        // Accents
        gold: {
          DEFAULT: "#C9A227",
          light: "#D4AF37",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          soft: "#2A2A2A",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at top, var(--forest) 0%, var(--forest-deep) 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(13, 40, 24, 0) 0%, rgba(13, 40, 24, 0.2) 40%, rgba(13, 40, 24, 0.6) 80%, rgba(13, 40, 24, 0.85) 100%)',
        'gradient-forest': 'linear-gradient(135deg, var(--forest-deep) 0%, var(--forest) 50%, var(--forest-light) 100%)',
        'gradient-gold': 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
