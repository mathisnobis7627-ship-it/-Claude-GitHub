import { z } from 'zod';

export const searchQuerySchema = z.object({
  q: z
    .string({ required_error: 'Search query is required' })
    .min(2, 'Search query must be at least 2 characters')
    .max(200, 'Search query must not exceed 200 characters')
    .trim(),
  type: z
    .enum(['countries', 'persons', 'articles', 'events', 'lessons', 'quizzes', 'videos', 'all'])
    .optional()
    .default('all'),
  category: z.string().optional(),
  country: z.string().optional(),
  period: z.string().optional(),
  era: z
    .enum([
      'prehistoire',
      'antiquite',
      'moyen_age',
      'renaissance',
      'temps_modernes',
      'epoque_contemporaine',
    ])
    .optional(),
  personality: z.string().optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export const suggestQuerySchema = z.object({
  q: z
    .string({ required_error: 'Search query is required' })
    .min(1, 'Search query must be at least 1 character')
    .max(100, 'Search query must not exceed 100 characters')
    .trim(),
  limit: z.coerce.number().int().min(1).max(10).optional().default(6),
});

export type SearchQueryInput = z.infer<typeof searchQuerySchema>;
export type SuggestQueryInput = z.infer<typeof suggestQuerySchema>;
