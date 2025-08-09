import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const BlogSchema = z.object({
  pubDatetime: z.date(),
  series: z.string().optional(),
  image: z.string().optional(),
  title: z.string(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(['others']),
  category: z.string(),
  description: z.string(),
});

export type Blog = z.infer<typeof BlogSchema>;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: () => BlogSchema,
});

const ProjectSchema = z.object({
  name: z.string(),
  technologies: z.array(z.string()),
  description: z.string(),
  image: z.string().optional(),
  sourceCode: z.string().optional(),
  preview: z.string().optional(),
  type: z.union([z.literal('core'), z.literal('side')]),
});

export type Project = z.infer<typeof ProjectSchema>;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
  schema: () => ProjectSchema,
});

export const collections = { blog, projects };
