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
          'navy': '#0B192C',
          'lightNavy': '#1A365D',
          'red': '#E3000F',
          'crimson': '#990000',
          'gold': '#D4AF37',
          'dark': '#111111',
          'light': '#F8F9FA'
        }
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'sans-serif'],
        'serif': ['"Noto Serif JP"', 'serif'],
      }
    },
  },
  plugins: [],
}
