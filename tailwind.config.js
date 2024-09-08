/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#35374B',
        'secondary': '#344955',
        'tertiary': '#50727B',
        'fourth' : "#78A083",
        'fifth': '#F0F8FF',
      },

    },
  },
  plugins: [],
}

