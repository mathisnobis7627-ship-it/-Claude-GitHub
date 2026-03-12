import { z } from 'zod';

export const searchQuerySchema = z.object({
  q: z
    .string({ required_error: 'Search query is required' })
    .min(2, 'Search query must be at least 2 characters')
    .max(200, 'Search query must not exceed 200 characters')
    .trim(),
  type: z
    .enum(['countries', 'persons', 'articles', 'events', 'all'])
    .optional()
    .default('all'),
  category: z.string().optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type SearchQueryInput = z.infer<typeof searchQuerySchema>;
