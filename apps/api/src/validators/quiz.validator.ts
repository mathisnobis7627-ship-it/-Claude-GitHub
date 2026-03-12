import { z } from 'zod';

export const quizSubmissionSchema = z.object({
  answers: z
    .array(
      z.object({
        question_id: z.number().int().positive('Question ID must be a positive integer'),
        selected_option: z
          .number()
          .int()
          .min(0, 'Selected option index must be non-negative'),
      })
    )
    .min(1, 'At least one answer is required'),
});

export type QuizSubmissionInput = z.infer<typeof quizSubmissionSchema>;
