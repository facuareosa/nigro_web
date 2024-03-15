/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'custom-grey':'#5D6970',
        'custom-lightblue':'#A7B9BB'
      },
      fontFamily: {
        'saira': ['Saira Extra Condensed', 'sans-serif'],
        'saira-bold':[]
      },
    },
  },
  plugins: [],
}

