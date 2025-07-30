import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: resolve(__dirname, 'public'), // 👈 обязательно
  esbuild: {
    target: 'esnext'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        order: resolve(__dirname, 'src/pages/order/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
        CLAAS: resolve(__dirname, 'src/pages/CLAAS/index.html'),
        vacancy: resolve(__dirname, 'src/pages/vacancy/index.html'),
        policy: resolve(__dirname, 'src/pages/policy/index.html'),
      },
    },
  },
});
