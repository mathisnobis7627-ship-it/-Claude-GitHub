import type { Request, Response, NextFunction } from 'express';
import { curriculumService } from '../services/curriculum.service';

export class CurriculumController {
  async getLevels(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const levels = await curriculumService.getLevels();

      res.json({ success: true, data: levels });
    } catch (error) {
      next(error);
    }
  }

  async getSubjects(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { level } = req.params;
      const result = await curriculumService.getSubjects(level);

      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async getChapters(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { level, subject } = req.params;
      const chapters = await curriculumService.getChapters(level, subject);

      res.json({ success: true, data: chapters });
    } catch (error) {
      next(error);
    }
  }

  async getChaptersByLevel(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { level } = req.params;
      const chapters = await curriculumService.getChaptersByLevel(level);

      res.json({ success: true, data: chapters });
    } catch (error) {
      next(error);
    }
  }
}

export const curriculumController = new CurriculumController();
