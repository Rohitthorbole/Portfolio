/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': {'max': '480px'},
        'xl':'480px',
      },
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
        deserta: ["deserta","Plus Jakarta Sans"]
      },

      backgroundImage: {
        'hero-pattern': "url('/Media/image.png')"
      }
    },
  },
  plugins: [],
}