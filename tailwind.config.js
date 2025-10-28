/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#F97316',
          light: '#FB923C',
        }
      }
    },
  },
  plugins: [],
}