/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Oswald",
        causal: "Noto Sans",
      }, 

      colors: {
        // mainColor: "#CF9FFF",
      }
    },
  },
  plugins: [],
}
