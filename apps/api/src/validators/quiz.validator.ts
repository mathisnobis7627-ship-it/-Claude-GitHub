import { z } from 'zod';

export const quizSubmissionSchema = z.object({
  answers: z
    .array(
      z.object({
        question_id: z.string().uuid('Question ID must be a valid UUID'),
        selected_option: z
          .number()
          .int()
          .min(0, 'Selected option index must be non-negative')
          .optional(),
        map_answers: z.record(z.string(), z.string()).optional(),
        chronology_order: z.array(z.string()).optional(),
      })
    )
    .min(1, 'At least one answer is required'),
});

export type QuizSubmissionInput = z.infer<typeof quizSubmissionSchema>;
