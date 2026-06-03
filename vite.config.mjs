import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  root: 'src',
  define: {
    global: 'globalThis'
  },
  plugins: [
    svgr()
  ],
  build: {
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'frontpage/index': path.resolve(__dirname, 'src/index.html')
      }
    }
  },
  server: {
    port: 5173
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  test: {
    include: ['../test/**/*.js']
  }
});
