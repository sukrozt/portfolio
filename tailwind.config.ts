/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss/types';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    keyframes: {
      shimmer: {
        '0%': { backgroundPosition: '-468px 0' },
        '100%': { backgroundPosition: '468px 0' },
      },  
    },
  },
  plugins: [],
};
export default config;
