import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Seiten bleiben statisch (schnell, günstig). Nur /api/checkout läuft als Vercel Function.
export default defineConfig({
  site: 'https://www.lina-und-luksen.de', // eigene Domain eintragen
  output: 'static',
  adapter: vercel(),
});
