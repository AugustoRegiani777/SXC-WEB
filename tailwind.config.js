/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        fg: '#f2f2f2',
        neon: '#361245ff',
        mustard: '#FFA500',
        bordo: '#ecedf2ff',
        white: '#ffffff',
        black: '#000000',
        frost: '#ffffff90',
        transparent: 'transparent',
      },
      boxShadow: {
        glow: '0 0 30px rgba(234, 234, 234, 0.99), 0 8px 30px rgba(191, 191, 191, 0.15)'
      },
      fontFamily: {
        display: ['"Black Ops One"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
