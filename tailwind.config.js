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
            fontFamily: 'Inter',
            'h1, h2, h3': {
              fontWeight: '700',
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