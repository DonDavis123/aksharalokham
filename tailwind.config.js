/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all React files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
