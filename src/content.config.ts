import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    medium: z.string(),
    dimensions: z.string().optional(),
    location: z.string().optional(),
    thumbnail: z.string(),
    images: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const films = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/films' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    duration: z.string(),
    format: z.string().optional(),
    videoId: z.string(),
    videoPlatform: z.enum(['vimeo', 'youtube']).default('vimeo'),
    thumbnail: z.string(),
    stills: z.array(z.string()).default([]),
    credits: z.array(z.object({
      role: z.string(),
      name: z.string(),
    })).default([]),
    screenings: z.array(z.object({
      festival: z.string(),
      year: z.string(),
      note: z.string().optional(),
    })).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects, films };
