import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Эта строчка делает пути относительными (важно для многих хостингов)
  base: './', 
  build: {
    rollupOptions: {
      input: {
        // Перечисляем все твои HTML файлы
        main: resolve(__dirname, 'index.html'),
        desktop: resolve(__dirname, 'desktop.html'),
        mobile: resolve(__dirname, 'mobile.html'),
      },
    },
  },
}); 