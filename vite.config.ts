import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // Handle markdown files as assets
  assetsInclude: ['**/*.md'],
  build: {
    target: 'esnext',
    minify: 'oxc',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 3000,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor';
            if (id.includes('three')) return 'three';
            if (id.includes('framer-motion')) return 'animations';
            if (id.includes('lucide-react')) return 'ui';
            return 'libs';
          }
        },
      },
      // Cache settings should be handled by Rolldown automatically or via specific cache plugins if needed
    },
    // Speed up build by avoiding some disk writes if possible
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-vertical-timeline-component',
      'unified',
      'remark-parse',
      'remark-gfm',
      'remark-rehype',
      'rehype-slug',
      'rehype-stringify',
      'gray-matter',
      '@vercel/analytics/react'
    ],
  },
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },
});