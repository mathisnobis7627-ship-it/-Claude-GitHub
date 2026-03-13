import type { Request, Response, NextFunction } from 'express';
import { videosService } from '../services/videos.service';

export class VideosController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, sort, order, category } = req.query;
      const result = await videosService.getAll({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        sort: sort as string,
        order: order as 'asc' | 'desc',
        category: category as string,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const video = await videosService.getById(id);

      res.json({ success: true, data: video });
    } catch (error) {
      next(error);
    }
  }
}

export const videosController = new VideosController();
