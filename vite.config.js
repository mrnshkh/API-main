import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  esbuild: {
    target: 'esnext'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        signin: resolve(__dirname, 'src/pages/login/index.html'),
        signup: resolve(__dirname, 'src/pages/signup/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        order: resolve(__dirname, 'src/pages/order/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
        CLAAS: resolve(__dirname, 'src/pages/CLAAS/index.html'),
        vacancy: resolve(__dirname, 'src/pages/vacancy/index.html'),
        policy: resolve(__dirname, 'src/pages/policy/index.html'),
        notfound: resolve(__dirname, 'src/pages/404/index.html'),
      },
    },
  },
});
