import { defineConfig } from 'astro/config';
import sass from 'sass'; // Import sass as an ESM module

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass, // Use the imported sass module
        },
      },
    },
  },
});