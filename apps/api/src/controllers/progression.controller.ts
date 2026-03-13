import type { Request, Response, NextFunction } from 'express';
import { progressionService } from '../services/progression.service';

export class ProgressionController {
  async getProgress(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId } = req.params;
      const summary = await progressionService.getProgressSummary(userId);
      res.json({ success: true, data: summary });
    } catch (error) {
      next(error);
    }
  }

  async getChapterProgress(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId, chapterId } = req.params;
      const progress = await progressionService.getChapterProgress(userId, chapterId);
      res.json({ success: true, data: progress });
    } catch (error) {
      next(error);
    }
  }

  async getQuizHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId } = req.params;
      const { page, limit } = req.query;
      const result = await progressionService.getQuizHistory(
        userId,
        page ? Number(page) : undefined,
        limit ? Number(limit) : undefined
      );
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getLeaderboard(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { levelId } = req.params;
      const { limit } = req.query;
      const leaderboard = await progressionService.getLeaderboard(
        levelId,
        limit ? Number(limit) : undefined
      );
      res.json({ success: true, data: leaderboard });
    } catch (error) {
      next(error);
    }
  }
}

export const progressionController = new ProgressionController();
