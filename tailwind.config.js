/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3': {
              'font-weight': '700'
            }
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}