/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
        '24': '24%'
      },
      colors: {
        'opac': 'rgba(24, 24, 27, 0.7);',
      },
    },
  },
  plugins: [],
}
