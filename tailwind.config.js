/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prodia-blue": "#D0EAF1",
        "prodia-teal-dark": "#026666",
        "prodia-teal-medium": "#049999"
      },
    },
  },
  plugins: [],
};
