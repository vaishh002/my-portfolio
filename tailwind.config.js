/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F3EE',
          light: '#FCFBF8',
          dark: '#EFE8DF',
        },
        sand: {
          DEFAULT: '#EAE3D9',
          dark: '#DFC9B3',
        },
        terracotta: {
          DEFAULT: '#C85A32',
          hover: '#B54D27',
          dark: '#8C3B1E',
          light: '#F5E4DC',
          soft: '#E89874',
        },
        olive: {
          DEFAULT: '#464F38',
          dark: '#343B29',
          light: '#626C50',
          soft: '#DCE2D3',
        },
        earth: {
          DEFAULT: '#8C5E4A',
          dark: '#5A3D30',
          light: '#D9C5BC',
        },
        charcoal: {
          DEFAULT: '#2C2825',
          muted: '#66605B',
          light: '#A39C96',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'arch': '12rem 12rem 0 0',
        'arch-sm': '6rem 6rem 0 0',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(70, 79, 56, 0.08)',
        'warm-hover': '0 20px 50px -10px rgba(200, 90, 50, 0.15)',
        'mockup': '0 25px 50px -12px rgba(44, 40, 37, 0.25)',
      },
    },
  },
  plugins: [],
}
