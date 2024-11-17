import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Adjust this to match your backend port if different
    },
  },
});