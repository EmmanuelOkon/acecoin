/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      borderWhite: "#eeeeee",
      blue: "#2962ff",
      textGrey: "#aaaaaa",
      white: "#ffffff",
      deepBlue: "#1E2A52",
      orange: "#ef5350",
      royalBlue: "#283593",
      backgroundColor: "#e3f2fd",
      lightBlue: "#EDF3FF",
      mainBackground: "#FBFCFE",
    },
    extend: {
      backgroundImage: {
        windowsImgXl: "url(../src/assets/3280.jpg)",
        windowsImgLg: "url(../src/assets/1125.jpg)",
        windowsImgSm: "url(../src/assets/520.jpg)",
      },
    },
  },
  plugins: [],
};
