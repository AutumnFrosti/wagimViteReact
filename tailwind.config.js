/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '375px',    // 小屏幕
      'md': '768px',    // 中等屏幕
      'lg': '1024px',   // 大屏幕
      'xl': '1280px',   // 超大屏幕
    },
    extend: {
      colors: {
        primaryColor: 'rgb(81, 85, 166)',
        primaryTextColor1: 'rgb(111, 113, 131)',
        bgWallet: 'rgb(246, 245, 250)',
        bgHover: 'rgba(81, 85, 166, 0.04)'
      },
    },
  },
  plugins: [],
  corePlugins: {

  }
}

