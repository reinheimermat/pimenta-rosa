/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          100: '#A25184',
          200: '#9D3173',
          300: '#311626',
        },
        gray: {
          100: '#b3b3b3',
          200: '#242424',
          300: '#121212',
        },
        pinkRose: '#F20090',
        lime: '#1FDF64',
        blue: '#3D91F4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
