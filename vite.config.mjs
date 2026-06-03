import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
        'mastermind/index': path.resolve(__dirname, 'src/mastermind/index.html')
      }
    }
  },
  server: {
    port: 5173
  }
});
