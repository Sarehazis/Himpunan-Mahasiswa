/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      
      colors: {
        text: '#64748b',
        primary: '#092635',
        dark: '#020617',
        cyan: '#0891b2',
        cDark: '#155e75',
      },
      screens: {
        '2xl':'1320px',
      },
    },
    keyframes: {
      animate:{
        '0%,10%,100%,':{
          width:'0%',
        },
        '70%,80%,90%': {
          width:'100%',
        },
      },
    },
    animation: {
      animate: 'animate 6s linear infinite',
    }
  },
  plugins: [require('flowbite/plugin')],
}