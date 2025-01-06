/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '1000': '1000px'
      },
      height: {
        '600': '600px'
      },
      flex: {
        2: 2
      }
    },
  },
  plugins: [],
}

