import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Định nghĩa cấu hình Vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port để chạy frontend cục bộ
    proxy: {
      '/api': {
        target: 'https://demcalo.onrender.com', // URL backend production
        changeOrigin: true,
        secure: true, // Đảm bảo proxy HTTPS
      },
    },
  },
  build: {
    outDir: 'dist', // Thư mục chứa bản build
  },
});
