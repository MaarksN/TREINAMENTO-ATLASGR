import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "6": "24px",
      "8": "32px",
      "10": "40px",
      "12": "48px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "32": "128px",
    },
    extend: {
      colors: {
        atlas: {
          orange: "#FF5618",
          dark: "#333333",
        },
      },
      fontFamily: {
        sans: ["var(--font-mont)", "var(--font-inter)", "sans-serif"],
        secondary: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow 2s ease-in-out infinite",
        "ripple": "ripple 0.6s linear",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 86, 24, 0.4)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 86, 24, 0.8)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      boxShadow: {
        "glow": "0 0 15px rgba(255, 86, 24, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
