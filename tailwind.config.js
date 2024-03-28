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
      colors: {
        navHeading: "#131313",
        navHeadingEighty: "#131313CC",
        btnBgSignIn: "#23BE0A",
        btnBgSignInFive: "#23BE0A0D",
        btnBgSignup: "#59C6D2",
      },
      
      
    },
  },
  plugins: [require("daisyui")],
}

