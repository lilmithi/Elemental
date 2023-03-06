/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Nunito: ["Nunito", "Roboto", "sans-serif"],
      },
      screens: {
        lgPro: "1082px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
