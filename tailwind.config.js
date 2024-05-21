/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EEE5FF',
        'secondary':'#EEE5FFBD'
      },
    },
  },
  plugins: [],
}