module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fillFromLeft: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
      },
      animation: {
        fillFromLeft: 'fillFromLeft 0.4s ease forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
