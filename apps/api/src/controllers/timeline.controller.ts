import type { Request, Response, NextFunction } from 'express';
import { timelineService } from '../services/timeline.service';

export class TimelineController {
  async getEvents(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, era, category } = req.query;
      const result = await timelineService.getEvents({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        era: era as string,
        category: category as string,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getPeriods(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const periods = await timelineService.getPeriods();

      res.json({ success: true, data: periods });
    } catch (error) {
      next(error);
    }
  }

  async getEventById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const event = await timelineService.getEventById(Number(id));

      res.json({ success: true, data: event });
    } catch (error) {
      next(error);
    }
  }
}

export const timelineController = new TimelineController();
