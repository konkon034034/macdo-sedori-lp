/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'red': '#E3000F',
          'yellow': '#FFC72C',
          'gold': '#D4AF37',
          'dark': '#111111',
        }
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
