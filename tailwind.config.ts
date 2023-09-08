import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ], theme: {
    extend: {
      colors: {
        'primary-light': '#ffffff',
        'primary-dark': '#333333',
        'accent': '#ffcc29',
        'section-light': '#f5f5f5',
        'section-dark': '#333333',
        'accent-1': '#d32f2f',
        'accent-2': '#2196f3',
        'button-light': '#ffffff',
        'button-dark': '#333333',
        'footer-light': '#ffffff',
        'footer-dark': '#333333',
        'bg-navbar':'#1a1a1a',
        'text-text-dark': '#333333',
        'text-white': '#ffffff'
      },
    },
  },
  plugins: [],
}
export default config
