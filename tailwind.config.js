/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#202020',
        light: '#2b2b2b',
        mid: '#242424',
        white: '#f4ebd9',
        dullBlue: '#84d5ed',
        dullRed: '#ff6666',
        lime: '#b3d23e',
        yellow: '#ffcc33',
      },
      boxShadow: {
        inset: 'inset 0px 0px 16px 9px black',
      }
    },
  },
  plugins: [],
}

