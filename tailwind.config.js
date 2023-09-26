/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   screens: {
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
  },
  extend: {
    keyframes: {
      slideUp: {
        '0%': {
          visibility: 'visible',
          top: '23rem'
        },
        '100%': {
          visibility: 'visible',
          top: '17rem',
        },
      }
    },
    animation: {
      slideUp: 'slideUp 1s ease 0.5s',
    }
  }
},
  plugins: [],
}

