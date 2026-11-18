import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección de Productos de Market-Pet
 * Gestionada con Astro 5 Content Layer y validación estricta con Zod
 */
const productos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/productos' }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      slug: z.string(),
      name: z.string(),
      brand: z.string().default('Market-Pet'),
      description: z.string(),
      shortDescription: z.string().optional(),
      price: z.number().int().positive(),
      originalPrice: z.number().int().positive().optional(),
      discount: z.string().optional(),
      petType: z.enum(['perros', 'gatos', 'pequenas-mascotas', 'todas']),
      category: z.string(),
      categorySlug: z.string(),
      lifeStage: z.enum(['cachorros', 'adultos', 'seniors', 'todas']).default('todas'),
      rating: z.number().min(0).max(5).default(5),
      reviewsCount: z.number().int().min(0).default(0),
      stock: z.number().int().min(0).default(10),
      sku: z.string(),
      badge: z.string().optional(),
      badgeColor: z.string().optional(),
      isOffer: z.boolean().default(false),
      isNew: z.boolean().default(false),
      isBestSeller: z.boolean().default(false),
      image: image(),
      imageAlt: z.string(),
      features: z.array(z.string()).default([]),
      specifications: z.record(z.string(), z.string()).optional(),
    }),
});

export const collections = { productos };
