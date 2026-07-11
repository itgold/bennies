import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const tone = z.enum(['green', 'blue', 'pink', 'amber', 'purple']);

const categories = defineCollection({
  loader: file('src/data/categories.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    tone,
  }),
});

const opportunities = defineCollection({
  loader: file('src/data/opportunities.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    icon: z.string(),
    tone,
  }),
});

const trustPillars = defineCollection({
  loader: file('src/data/trust-pillars.json'),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    label: z.string(),
    description: z.string(),
  }),
});

const formFields = defineCollection({
  loader: file('src/data/form-fields.json'),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    icon: z.string(),
    tone,
    type: z.enum(['text', 'select', 'range', 'pills']),
    placeholder: z.string().optional(),
    options: z.array(z.string()).optional(),
    min: z.number().optional(),
    max: z.number().optional(),
    step: z.number().optional(),
    default: z.union([z.string(), z.number()]).optional(),
    minLabel: z.string().optional(),
    maxLabel: z.string().optional(),
  }),
});

export const collections = { categories, opportunities, trustPillars, formFields };
