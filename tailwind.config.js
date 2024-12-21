/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      screens: {
        'custom': '830px',
      },
      colors: {
        customColor1: '#ff0800',
        customColor2: '#878b94', 
        customColor3: '#ffffff', 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
