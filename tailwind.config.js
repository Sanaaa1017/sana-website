/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px 手機內文
        base: "1rem", // 16px 手機副標題
        lg: "1.125rem", // 18px PC內文
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px PC副標題
        "4xl": "2.25rem", // 36px PC大標題
        "5xl": "3rem", // 48px
        "6xl": "3.5rem", // 56px
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    theme: {
      screens: {
        phone: "375px",
        // => @media (min-width: 375px) { ... }
        tablet: "768px",
        // => @media (min-width: 768px) { ... }
        laptop: "1440px",
        // => @media (min-width: 1440px) { ... }
        pc: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};
