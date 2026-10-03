import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Eine Personalisierungsoption. Bis zu 8 pro Produkt.
const option = z.object({
  id: z.string(),                                   // technischer Schlüssel, z. B. "vorname"
  label: z.string(),                                // was der Kunde sieht
  type: z.enum(['text', 'textarea', 'select', 'date']),
  required: z.boolean().default(true),
  maxLength: z.number().optional(),                 // für text/textarea
  choices: z.array(z.string()).optional(),          // für select
  hint: z.string().optional(),                      // Hilfetext unter dem Feld
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    price: z.number(),                    // Brutto inkl. 19 % MwSt.
    technique: z.enum(['Stickerei', 'Lasergravur', 'Sublimation']),
    image: z.string(),
    asin: z.string().optional(),
    sku: z.string().optional(),
    amazonUrl: z.string().url().optional(),
    options: z.array(option).max(8).default([]),
    deliveryDays: z.string().default('3–5 Werktage'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    active: z.boolean().default(true),
  }),
});

export const collections = { products };
