/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        configPrimary: "#172554",
        configSecond: "#f4f7fe",
        configThird: "#051c33",
      },
    },
  },
  plugins: [],
};
