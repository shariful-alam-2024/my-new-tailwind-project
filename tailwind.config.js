/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'textColor1':'#09090B',
        'textColor2':'#71717A',
        'cheColor1':'#F26922',
        'cheColor2':'#3F3F46',
        'cheColor3':'#F4F4F5',

      }
    },
  },
  plugins: [],
}