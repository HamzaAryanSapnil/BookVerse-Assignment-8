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
        navHeadingFive: "#1313130D",
        navHeadingEighty: "#131313CC",
        btnBgSignIn: "#23BE0A",
        btnBgSignInFive: "#23BE0A0D",
        btnBgSignup: "#59C6D2",
        bookImgBg: "#F3F3F3",
        rating: "#424242"
      },
      
      
    },
  },
  plugins: [require("daisyui")],
}

