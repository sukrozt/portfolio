/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Make sure this matches your app structure
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        pink: '#ff007f', // Use a specific pink shade if needed
      },
    },
  },
  plugins: [],
}

