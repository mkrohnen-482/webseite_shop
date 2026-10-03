import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Vorschau-Modus: Ist SHOP_PASSWORD in Vercel gesetzt, laufen alle Seiten über den Server
// und sind passwortgeschützt (src/middleware.ts). Launch = Variable löschen + Redeploy
// → Seiten wieder statisch (schnell, günstig), Schutz aus. Nur /api/checkout bleibt Server-Funktion.
const preview = Boolean(process.env.SHOP_PASSWORD);

export default defineConfig({
  site: 'https://www.lina-und-luksen.de', // eigene Domain eintragen
  output: preview ? 'server' : 'static',
  adapter: vercel(),
});
