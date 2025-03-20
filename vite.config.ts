import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import zlib from 'zlib';

export default defineConfig({
  base: '/',
  build: {
    minify: 'esbuild',
  },
  plugins: [
    react(),
    compression({
      include: /\.(html|css|js|mjs|svg)$/,
      threshold: 1024,
      algorithm: 'brotliCompress',
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      deleteOriginalAssets: false,
      filename: '[path][base].br',
    }),
    compression({
      include: /\.(html|css|js|mjs|svg)$/,
      threshold: 1024,
      algorithm: 'gzip',
      compressionOptions: {
        level: 9,
      },
      deleteOriginalAssets: false,
      filename: '[path][base].gz',
    }),
    ViteImageOptimizer({
      jpg: { quality: 50 },
      jpeg: { quality: 50 },
      webp: { quality: 60 },
      avif: { quality: 50 },
      png: { quality: 50 },
      svg: { multipass: true },
    }),    
  ],
});
