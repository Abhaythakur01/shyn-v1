import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <-- Needed for alias resolution

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Enables `@/` for src
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});



