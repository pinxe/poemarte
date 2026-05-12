// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [react(), keystatic()],
});
