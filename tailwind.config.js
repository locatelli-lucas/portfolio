/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: '#0A001B',
        customBlue: '#141C3A',
      },
      keyframes: {
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underline: 'underline 0.5s ease-out forwards',
      },
      backgroundImage: {
        'customGradient': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(53,51,205,1) 100%)',
      }
    },
  },
  plugins: [],
}

