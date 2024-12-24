/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: ["class"],
    fontFamily: {
      inter: ["Inter", "serif"],
      lato: ["Lato", "serif"],
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      "2xl": ["1.5rem", { lineHeight: "1.875rem" }], // 22px
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      "5xl": ["3rem", { lineHeight: "1" }], // 48px
      "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
      "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      "8xl": ["6rem", { lineHeight: "1" }], // 96px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    boxShadow: {
      DEFAULT: "var(--shadow)",
    },
    extend: {
      spacing: {
        sidebar: "var(--sidebar)",
        header: "var(--header)",
      },
      height: {
        25: "100px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          hover: "var(--background-hover)",
        },
        text: {
          DEFAULT: "var(--text)",
          accent: "var(--text-accent)",
          input: "var(--text-input)",
        },
        accent: "var(--accent)",
        border: {
          DEFAULT: "var(--border)",
          accent: "var(--border-accent)",
        },
        line: {
          DEFAULT: "var(--line)",
          dashed: "var(--line)",
        },
        positive: "var(--positive)",
        negative: "var(--negative)",
        inactive: "var(--inactive)",
        blue: "var(--blue)",
        deepBlue: "var(--deep-blue)",
        darkBlue: "var(--dark-blue)",
        teal: "var(--teal)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
      },
      backgroundImage: {
        "card-gradient": "var(--card-gradient)",
        "card-gradient-bottom": "var(--card-gradient-bottom)",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(yellow|teal|blue|gray)/,
    },
    {
      pattern: /text-(positive|negative)/,
    },
    {
      pattern: /fill-(yellow|teal|blue|gray)/,
    },
  ],
  plugins: [require("tailwindcss-animate")],
};
