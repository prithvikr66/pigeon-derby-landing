/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "advent-bold": ["Advent-Pro-Bold", "sans-serif"],
        "advent-semibold": ["Advent-Pro-SemiBold", "sans-serif"],
        "advent-regular": ["Advent-Pro-Regular", "sans-serif"],
        "paladins-condensed": ["Paladins-Condensed", "sans-serif"],
        "paladins-straight": ["Paladins-Straight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
