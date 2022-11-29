// /* @type {import('tailwindcss').Config} /
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EFEEE0",
        dark: "#1D2123",    
        altDark: "#A4C7C6",
        primary: "#A4C7C6",
        cardBg:"rgba(15, 18, 19, 0.4)",
        altPrimary: "#A4C7C6",
        secondary: "#FACD66",
        secondaryLight: "rgba(250, 205, 102, 0.4)",
        playlistBg: "#609EAF",
        secondaryDark: "#33373B5E",
        glassBg: "#1d2123",
        transparentBtn: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        quickSand: ["Quicksand, sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};