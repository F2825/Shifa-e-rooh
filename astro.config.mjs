// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE are set automatically by the GitHub Pages workflow.
// Locally they fall back to sensible defaults.
export default defineConfig({
  site: process.env.SITE || 'https://example.github.io',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
