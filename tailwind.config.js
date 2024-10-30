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
      inset: {
        '75rem': '75rem',
        '55vw': '55vw',
      },
    },
  },
  plugins: [],
}

