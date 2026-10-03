import { defineMiddleware } from 'astro:middleware';

// Passwortschutz bis zum Launch. Greift nur, wenn SHOP_PASSWORD gesetzt ist.
export const onRequest = defineMiddleware((ctx, next) => {
  const pass = process.env.SHOP_PASSWORD;
  if (!pass || ctx.isPrerendered) return next();
  const user = process.env.SHOP_USER || 'vorschau';

  const [scheme, encoded] = (ctx.request.headers.get('authorization') ?? '').split(' ');
  if (scheme === 'Basic' && encoded) {
    const decoded = atob(encoded);
    const i = decoded.indexOf(':');
    if (decoded.slice(0, i) === user && decoded.slice(i + 1) === pass) return next();
  }
  return new Response('Zugang nur mit Passwort.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Lina & Luksen - Vorschau", charset="UTF-8"' },
  });
});
