/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      },
      colors: {
        bg: '#1d3557',
        fg: '#457b9d'
      }
    },
    container: {
      padding: {
        DEFAULT: "12px"
      },
      center: true
    }
  },
  plugins: [],
}

