import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    __DEFINES__: JSON.stringify({
      appName: 'CafeApp',
      version: '1.0.0',
      apiUrl: 'https://api.example.com',
    }),
  },
});