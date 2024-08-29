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
        sans: ['Roboto', 'Arial', 'sans-serif'],  // 自訂 sans 字體系列
        serif: ['Merriweather', 'serif'],         // 自訂 serif 字體系列
        custom1: ['"Open Sans"', 'Helvetica', 'sans-serif'],  // 自訂字體家族1
        custom2: ['"Lora"', 'Georgia', 'serif'],             // 自訂字體家族2
      },
    },
  },
  plugins: [],
};
