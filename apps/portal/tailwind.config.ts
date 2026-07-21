import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    spacing: {
      // Strict 8px multiple scale (4px is the only exception for tiny gaps)
      "4": "0.25rem",  // 4px
      "8": "0.5rem",   // 8px
      "12": "0.75rem", // 12px
      "16": "1rem",    // 16px
      "24": "1.5rem",  // 24px
      "32": "2rem",    // 32px
      "40": "2.5rem",  // 40px
      "48": "3rem",    // 48px
      "64": "4rem",    // 64px
      "80": "5rem",    // 80px
      "96": "6rem",    // 96px
      "128": "8rem",   // 128px
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand Colors
        atlas: {
          orange: "#FF5618",
          graphite: "#333333",
        },

        // Semantic Colors
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        // Status Colors
        success: {
          DEFAULT: "#10B981", // Emerald 500
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B", // Amber 500
          foreground: "#FFFFFF",
        },
        error: {
          DEFAULT: "#EF4444", // Red 500
          foreground: "#FFFFFF",
        },
        info: {
          DEFAULT: "#3B82F6", // Blue 500
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        mont: ["var(--font-mont)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-mont)", "sans-serif"],
      },
      fontSize: {
        // Display & Hero
        display: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        hero: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        // Headings
        h1: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        // Body
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
        label: ["0.875rem", { lineHeight: "1.5", fontWeight: "500" }],
        code: ["0.875rem", { lineHeight: "1.5", fontWeight: "400", fontFamily: "monospace" }],
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
