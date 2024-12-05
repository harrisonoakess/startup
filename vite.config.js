import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Adjust this to match your backend port if different
      '/ws': {
        target: 'ws://localhost:4000',
        ws: true,
      },
    },
  },
});