// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  vite: {
    server: {
      headers: {
        'Cache-Control': 'no-store',
      },
      hmr: {
        host: '127.0.0.1',
        protocol: 'ws',
      },
    },
  },
});
