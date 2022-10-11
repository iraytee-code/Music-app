/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        quickSand: ["Quicksand, sans-serif"],
      },
    },
  },
  plugins: [],
};
