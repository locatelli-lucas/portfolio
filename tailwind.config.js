/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./src/**/*.{ts,tsx}"]
  },
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
        '70vw': '70vw',
        '85em': '85em',
        '10vw': '10vw',
        '90vh': '90vh'
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

