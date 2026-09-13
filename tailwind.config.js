/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FBF8F5',
        card: '#FDFBF8',
        rose: {
          DEFAULT: '#C88A80',
          soft: 'rgba(200, 138, 128, 0.4)',
        },
        ink: {
          DEFAULT: '#1C1917',
          soft: '#78716C',
        },
        cream: '#FBF8F5',
      },
      fontFamily: {
        sans: ['Work Sans', 'Arial', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
