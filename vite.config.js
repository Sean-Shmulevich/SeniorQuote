import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/SeniorQuote/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        solved: resolve(__dirname, 'solved.html'),
      },
    },
  },
});
