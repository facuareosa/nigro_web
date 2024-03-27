/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'custom-gray':'#5D6970',
        'custom-lightblue':'#A7B9BB'
      },
      fontFamily: {
        'saira': ['Saira Extra Condensed', 'sans-serif'],   
      },
      boxShadow: {
        'custom': '5px 5px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.4)',
        'custom-static': '0 0 4px rgba(0, 0, 0, 0.4)',
      },
      height: {
        'custom': 'calc(100vh - 10.5rem)', // nav container + py-3
      },
    },
  },
  plugins: [],
}

