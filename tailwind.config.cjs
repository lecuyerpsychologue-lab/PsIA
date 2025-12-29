module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FDFBF7',
        coral: '#FF8FAB',
        teal: '#2A9D8F',
        yellow: '#E9C46A',
        text: '#2D3748',
        cream: '#FFF7ED'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
