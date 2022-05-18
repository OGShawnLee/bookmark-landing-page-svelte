import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      soft: {
        blue: 'hsl(231, 69%, 60%)',
        red: 'hsl(0, 94%, 66%)',
      },
      blue: {
        gray: 'hsl(229, 8%, 60%)',
        dark: 'hsl(229, 31%, 21%)',
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
  },
});
