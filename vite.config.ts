import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, // Generate source maps
    minify: 'terser', // Use terser for minification
    rollupOptions: {
      input: 'src/main.tsx', // Entry point
    },
    // Optimizations
    chunkSizeWarningLimit: 500, // Limit for chunk size warning
  },
  server: {
    port: 3000, // Development server port
  },
  // TypeScript configuration support
  optimizeDeps: {
    include: ['react', 'react-dom'], // Include dependencies
  },
});