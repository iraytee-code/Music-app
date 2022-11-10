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
        altPrimary: "#A4C7C6",
        secondary: "#FACD66",
        playlistBg: "#609EAF",
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
