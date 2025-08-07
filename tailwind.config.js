/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
              montserrat: ['Montserrat', 'sans-serif'],
              lexend: ['Lexend', 'sans-serif'],
              mogra: ['Mogra', 'system-ui'],
              bagel: ['Bagel Fat One', 'system-ui']
          },
      animation: {
        'slow-spin': 'spin 8s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  }
}