/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '481px', 'max': '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '769px', 'max': '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1025px', 'max': '1200px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1201px' }, 'max': '1440px'
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'DM-Serif-Display': ['DM Serif Display', 'serif'],
      'Public-Sans': ['Public Sans', 'serif']
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}