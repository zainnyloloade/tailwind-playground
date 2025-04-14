/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"], // ✅ Make sure this matches your file structure
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888888',
        }
      },
      fontFamily:{
        body:['playfair']
      }
    },
  },
  plugins: [],
};
