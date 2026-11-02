import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			lang: z.enum(['en', 'id']).default('en'),
			translationKey: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.enum(['Engineering', 'Product thinking', 'Building in public']).default('Engineering'),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
