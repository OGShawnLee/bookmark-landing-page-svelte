import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      blue: {
        gray: 'hsl(229, 8%, 60%)',
        dark: 'hsl(229, 31%, 21%)',
      },
      soft: {
        blue: 'hsl(231, 69%, 60%)',
        red: 'hsl(0, 94%, 66%)',
      },
      transparent: 'transparent',
      white: 'hsl(0, 100%, 100%)',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
  },
});
