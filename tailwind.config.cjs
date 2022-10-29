const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      minHeight: {
        inherit: 'inherit',
      },
      width: {
        20: '5rem',
      },
      height: {
        20: '5rem',
        '11/12': '91.66667%',
      },
      colors: {
        transparent: 'transparent',
        black: '#22292f',
        white: '#ffffff',
        grey: '#b8c2cc',
        gray: {
          200: '#e0e0e0',
          300: '#eaeaea',
          400: '#9a9b9b',
        },
        orange: {
          ...colors.orange,
          600: '#FA5300',
        },
        'grey-light': '#dae1e7',
        turquoise: {
          500: '#017975',
        },
      },
      fontSize: {
        tiny: ['0.667rem', '0.917rem'],
      },
      boxShadow: {
        'top-sm': '0px -1px 11px 0px #00000030;',
        'top-md': '0px -1px 11px 0px #0000004a;',
      },
      fontFamily: {
        sans: [
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif',
        ],
        controllers: [
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif',
        ],
      },
      keyframes: {
        'pulse-sm': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        'pulse-sm': 'pulse-sm 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
