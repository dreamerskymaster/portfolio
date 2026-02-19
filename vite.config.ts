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
    minify: 'esbuild',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion'],
          'ui': ['lucide-react', 'react-vertical-timeline-component'],
          'markdown': ['unified', 'remark-parse', 'remark-gfm', 'remark-rehype', 'rehype-slug', 'rehype-stringify', 'gray-matter'],
        },
      },
      // Cache settings to potentially speed up builds on OneDrive
      cache: true
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
      'gray-matter'
    ],
  },
  // Development server configuration
  server: {
    port: 5173,
    open: true,
  },
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },
});