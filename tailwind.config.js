/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Inter_700Bold',
        body: 'Inter_400Regular',
      },
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#8284FA',
          100: '#5E60CE',
        },
        red: {
          100: '#E25858',
        },
        blue: {
          50: '#4EA8DE',
          100: '#1E6F9F',
        },
      },
    },
  },
  plugins: [],
}
