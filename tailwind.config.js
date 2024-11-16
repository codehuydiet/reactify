/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#000000',
        'under-bg': '#1f1f1f',
        'main-bg2': '#111111'
      },
      colors: {
        'icon-color': '#b3b3b3'
      },
      borderColor: {
        'border-color': '#b3b3b3'
      }
    },
  },
  plugins: [],
}

