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
      backgroundImage: {
        'morning': './src/assets/city-morning.jpg',
        'night': "./src/assets/city-night.jpg",
      },
      screens: {
        'phone': '390px',
        // => @media (min-width: 390px) { ... }
  
        'laptop': '900px',
        // => @media (min-width: 900px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
