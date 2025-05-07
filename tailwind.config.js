/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: {
          100: '#E0F2F1',
          200: '#00796B',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        retro: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}
