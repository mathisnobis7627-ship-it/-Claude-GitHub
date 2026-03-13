import type { Request, Response, NextFunction } from 'express';
import { quizzesService } from '../services/quizzes.service';
import { progressionService } from '../services/progression.service';
import type { QuizSubmission, DifficultyLevel } from '../types';

export class QuizzesController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, category, difficulty, level_id, chapter_id } = req.query;
      const result = await quizzesService.getAll({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        category: category as string,
        difficulty: difficulty as string,
        level_id: level_id as string,
        chapter_id: chapter_id as string,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const quiz = await quizzesService.getById(id);

      res.json({ success: true, data: quiz });
    } catch (error) {
      next(error);
    }
  }

  async getByChapter(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { chapterId } = req.params;
      const { difficulty } = req.query;
      const quizzes = await quizzesService.getByChapter(
        chapterId,
        difficulty as DifficultyLevel | undefined
      );

      res.json({ success: true, data: quizzes });
    } catch (error) {
      next(error);
    }
  }

  async submit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { user_id, time_spent_seconds } = req.body;
      const submission: QuizSubmission = {
        quiz_id: id,
        answers: req.body.answers,
      };
      const result = await quizzesService.submit(id, submission);

      // Record progression if user_id is provided
      if (user_id) {
        await progressionService.recordAttempt(user_id, id, result, time_spent_seconds);
      }

      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

export const quizzesController = new QuizzesController();
