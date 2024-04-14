/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0a0e09',
        'background': '#f9fcf9',
        'primary': '#64b955',
        'secondary': '#9ed994',
        'accent': '#74d164',
      },
      fontFamily: {
        heading: 'Gloock',
        body: 'Raleway',
      }
    },
  },
  plugins: [require("daisyui")],
}

