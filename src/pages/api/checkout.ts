import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import Stripe from 'stripe';

export const prerender = false; // läuft als Vercel Function

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, url }) => {
  const key = import.meta.env.STRIPE_SECRET_KEY;
  if (!key) return json({ error: 'Checkout ist noch nicht eingerichtet.' }, 500);
  const stripe = new Stripe(key);

  const { slug, values } = (await request.json().catch(() => ({}))) as { slug?: string; values?: Record<string, string> };
  const product = slug ? await getEntry('products', slug) : undefined;
  if (!product || !product.data.active) return json({ error: 'Produkt nicht gefunden.' }, 404);

  // Preis und Felder kommen IMMER vom Server, nie vom Browser.
  const clean: Record<string, string> = {};
  for (const o of product.data.options) {
    const v = String(values?.[o.id] ?? '').trim();
    if (o.required && !v) return json({ error: `Bitte "${o.label}" ausfüllen.` }, 400);
    if (o.maxLength && v.length > o.maxLength) return json({ error: `"${o.label}" darf max. ${o.maxLength} Zeichen haben.` }, 400);
    if (o.type === 'select' && v && !o.choices?.includes(v)) return json({ error: `Ungültige Auswahl bei "${o.label}".` }, 400);
    if (v) clean[o.label] = v.slice(0, 450);
  }
  const summary = Object.entries(clean).map(([k, v]) => `${k}: ${v}`).join(' | ');

  const priceCents = Math.round(product.data.price * 100);
  const shipping = Number(import.meta.env.SHIPPING_CENTS ?? 495);
  const freeFrom = Number(import.meta.env.FREE_SHIPPING_FROM_CENTS ?? 0);
  const shippingCents = freeFrom && priceCents >= freeFrom ? 0 : shipping;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    locale: 'de',
    submit_type: 'pay',
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'eur',
        unit_amount: priceCents,
        tax_behavior: 'inclusive',
        product_data: {
          name: product.data.title,
          description: summary || undefined, // Kunde sieht seine Personalisierung im Checkout
          metadata: { slug: product.id, sku: product.data.sku ?? '' },
        },
      },
    }],
    shipping_address_collection: { allowed_countries: ['DE'] },
    shipping_options: [{
      shipping_rate_data: {
        type: 'fixed_amount',
        display_name: shippingCents ? 'Versand DHL' : 'Kostenloser Versand',
        fixed_amount: { amount: shippingCents, currency: 'eur' },
        tax_behavior: 'inclusive',
      },
    }],
    phone_number_collection: { enabled: false },
    metadata: { slug: product.id, ...clean },             // bis zu 8 Optionen + slug
    payment_intent_data: { metadata: { slug: product.id, ...clean } },
    success_url: `${url.origin}/danke`,
    cancel_url: `${url.origin}/produkte/${product.id}`,
  });

  return json({ url: session.url });
};
