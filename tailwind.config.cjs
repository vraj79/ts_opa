/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#F8F4EB",
        "GRAY-50":"#EFE6E5",
        "gray-100":"#DFCCCC",
        "gray-500":"#5E0000",
        "primary-100":"#FFE1E0",
        "primary-300":"#FFA6A3",
        "primary-500":"#FF6B66",
        "secondary-400":"#FFCD58",
        "secondary-500":"#FFC132",
      },
      backgroundImage:(theme)=>({
        "gradient-yellow-red":"linear-gradient(90deg,#FF616A 0%, #FFc837 100%)",
        "mobile-home":"url('./src/assets/home')"
      }),
      fontFamily:{
        dmsans:["DM Sans","sans-serif"],
        montserrat:["Montserrat","sans-serif"]
      },
      content:{
        evolvetext:"url('./src/assets/EvolveText.png')",
        abstractwaves:"url('./src/assets/AbstractWaves.png')",
        sparkles:"url('./src/assets/Sparkles.png')",
        circles:"url('./src/assets/Circles.png')",
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}