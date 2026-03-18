/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#FFB800',
          black: '#0A0A0A',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'fadeInUp-1': 'fadeInUp 0.6s ease-out 0.1s forwards',
        'fadeInUp-2': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'fadeInUp-3': 'fadeInUp 0.6s ease-out 0.3s forwards',
        'fadeInUp-4': 'fadeInUp 0.6s ease-out 0.4s forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        'bounce-y': 'bounce-y 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
