/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--dark-bg)',
        'dark-green': 'var(--dark-green)',
        'accent-grey': 'var(--accent-grey)',
        'light-grey': 'var(--light-grey)',
        'glass': 'rgba(93, 116, 109, 0.45)',
        'glass-border': 'rgba(93, 116, 109, 0.5)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        barcode: ['"Libre Barcode 39 Extended Text"', 'serif']
      },
      backdropOpacity: {
        '45': '0.45'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-themer'),
  ],
}