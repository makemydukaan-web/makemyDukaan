/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#F8FAFC"
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF"
        },
        accent: {
          DEFAULT: "#14B8A6",
          foreground: "#FFFFFF"
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
