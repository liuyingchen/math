/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#286C55',
          dark: '#225E49',
          light: '#E8F5EE',
        },
        warm: {
          50: '#FDFCF8',
          100: '#F9F7F1',
          200: '#F3EFE5',
        }
      }
    },
  },
  plugins: [],
}
