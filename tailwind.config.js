/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-background': '#555454',
      },
      dropShadow:{
        "header-shadow":"rgba(0, 0, 0, 0.22) 0px 15px 12px",
        "product-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }
    },
  },
  plugins: [],
}

