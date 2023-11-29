/** @type {import('tailwindcss').Config} */
export default {
  content: [],content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'matrix_ltr': 'matrix 3s linear reverse infinite',
        'matrix_rtl': 'matrix 3s linear infinite',
        'matrix_btt': 'matrixY 2s linear infinite',
        'matrix_ttb': 'matrixY 2s linear reverse infinite'
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        matrixY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      }
    },
  },
  plugins: [],
}

