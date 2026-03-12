import type { Request, Response, NextFunction } from 'express';
import { quizzesService } from '../services/quizzes.service';
import type { QuizSubmission } from '../types';

export class QuizzesController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, category, difficulty } = req.query;
      const result = await quizzesService.getAll({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        category: category as string,
        difficulty: difficulty as string,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const quiz = await quizzesService.getById(Number(id));

      res.json({ success: true, data: quiz });
    } catch (error) {
      next(error);
    }
  }

  async submit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const submission: QuizSubmission = {
        quiz_id: Number(id),
        answers: req.body.answers,
      };
      const result = await quizzesService.submit(Number(id), submission);

      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

export const quizzesController = new QuizzesController();
