import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const tone = z.enum(['green', 'blue', 'pink', 'amber', 'purple', 'rust', 'plum', 'mustard']);

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

const helpItems = defineCollection({
  loader: file('src/data/help-items.json'),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    tone,
    title: z.string(),
    body: z.string(),
    cta: z.string(),
    href: z.string(),
  }),
});

const faq = defineCollection({
  loader: file('src/data/faq.json'),
  schema: z.object({
    id: z.string(),
    question: z.string(),
    answer: z.string(),
  }),
});

const samplePrograms = defineCollection({
  loader: file('src/data/sample-programs.json'),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    categoryTone: tone,
    name: z.string(),
    confidence: z.string(),
    amount: z.string(),
    amountAnnual: z.string(),
    why: z.string(),
    citations: z.array(z.object({ label: z.string(), url: z.string() })),
    documents: z.array(z.string()),
    deadline: z.string(),
    renewal: z.string(),
    processingTime: z.string(),
    agency: z.string(),
    applyUrl: z.string(),
    applyMethod: z.string(),
    phone: z.string(),
  }),
});

export const collections = { categories, opportunities, trustPillars, formFields, helpItems, faq, samplePrograms };
