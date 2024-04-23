/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-body': '#000000',
        'bg-body1': '#191919',
        'bg-body2': '#BB2156',
        'bg-body3': '#FDE829',
        'bg-body4': '#3E2030',
        'overlay': 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        'regular-text': ['Poppins, sans-serif'],
      },
      colors: {
        'newcolor1': '#2E2065',
        'newcolor2': '#382164',
        'newcolor3': '#EDEDFF',
        'newcolor4': '#FFE7E3',
        'newcolor5': '#EEFBE7',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

