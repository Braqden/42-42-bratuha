/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D4D',
        secondary: '#4D4DFF',
        accent: '#FFD700',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-montserrat)'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
} 