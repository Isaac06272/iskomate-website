/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./IskoMateShowcase.jsx",
    "./App.jsx",
    "./main.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#B71C1C',
          600: '#B71C1C',
          700: '#8B1A1A',
          900: '#7F1D1D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}