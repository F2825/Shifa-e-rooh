import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { THEME_SLUGS } from './lib/themes';

// Articles live in src/content/articles/<lang>/<slug>.md
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    theme: z.enum(THEME_SLUGS),
    pullQuote: z.string().optional(),
    // Articles are drafts until you switch this off in the editor.
    draft: z.boolean().default(true),
  }),
});

// Static pages such as "About": src/content/pages/<lang>/about.md
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string() }),
});

export const collections = { articles, pages };
