/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-pink': '#F8E8E8',
        'medical-rose': '#E8C4C4',
        'medical-blue': '#E8F0F8',
        'medical-teal': '#D4E8E4',
        'medical-purple': '#E8E0F0',
        'brand-blue': '#0066CC',
        'brand-black': '#000000',
        'brand-orange': '#FF6600',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

