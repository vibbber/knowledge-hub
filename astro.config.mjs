// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://kungfu.family',
  integrations: [sitemap()],
  vite: {
    server: {
      watch: {
        ignored: ['**/node_modules/**', '**/books/**', '**/processed/**', '**/logs/**']
      }
    }
  }
});