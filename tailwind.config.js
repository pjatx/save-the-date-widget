module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './assets/css/*.css',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['"Libre Baskerville"', 'serif'],
      decorative: ['saonara', 'serif'],
    },
    extend: {
      colors: {
        sage: '#A1A994',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      borderColor: ['autofill', 'dark'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-autofill')],
}
