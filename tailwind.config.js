/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from 'tailwindcss/colors';

export const content = ["./src/**/*.{html,js}",
  './index.html',
  'node_modules/preline/dist/*.js',];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  backgroundImage: {
    'custom-image': "url('image\hero-sec-bg.jpg')",
  },

  colors: {
    'blue': '#1fb6ff',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    dance: ['Playwrite NL', 'cursive;']
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('preline/tabs'),
 require("@tailwindcss/typography"), 
];

