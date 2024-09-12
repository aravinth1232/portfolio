/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3D52A0',
        'secondary': '#7091E6',
        'tertiary': '#F9F9F9',
        'fourth' : "#FFFFFF",
        'fifth': '#F0F8FF',
        'sixth':'#F3B105',
        'seventh':'#FFEFBC'
      },

      animation: {
        blink: 'blink 1s step-end infinite', // Define the blink animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      fontFamily: {
        'Mochi': ["Mochiy Pop One"],
      },
      fontFamily: {
        'Poppins': ["Poppins"],
      },
      fontFamily: {
        'Guerilla': ["Protest Guerrilla"],
      },

    },
  },
  plugins: [],
}

