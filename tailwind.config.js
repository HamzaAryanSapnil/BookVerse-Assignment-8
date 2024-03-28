/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'work': ['Work Sans', 'sans-serif']
      },
      color: {
        navHeading: "#131313",
        navHeadingEighty: "#131313CC",
      }
    },
  },
  plugins: [require("daisyui")],
}

