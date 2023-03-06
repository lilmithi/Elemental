/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        RobotoMono: ["Roboto Mono", "sans-serif"],
        Nunito: ["Nunito", "Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
