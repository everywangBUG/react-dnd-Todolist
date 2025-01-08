/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '1000': '1000px',
        '600': '600px',
        '200': '200px',
        '100': '100px',
        '40': '40px',
        '10': '10px',
      },
      width: {},
      height: {},
      flex: {
        2: 2
      }
    },
  },
  plugins: [],
}
