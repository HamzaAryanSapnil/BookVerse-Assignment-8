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
        navHeadingSeventy: "#131313B3",
        navHeadingSixty: "#13131399",
        btnBgSignIn: "#23BE0A",
        btnBgSignInFive: "#23BE0A0D",
        btnBgSignup: "#59C6D2",
        bookImgBg: "#F3F3F3",
        rating: "#424242",
        ratingBtnBgFifteen: "#FFAC3326",
        ratingBtnColor: "#FFAC33",
        catagoryBtnColor: "#328EFF",
        catagoryBtnBgFifteen: "#328EFF26",
      },
      
      
    },
  },
  plugins: [require("daisyui")],
}

