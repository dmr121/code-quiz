module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        107: '26rem',
      },
      colors: {
        bluegray: {
          50: '#eef1f2',
          300: '#628194',
          DEFAULT: '#516a7a',
          700: '#3c4457'
        },
        burntorange: {
          DEFAULT: '#c05340'
        }
      },
      letterSpacing: {
        evenwider: '.32em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
