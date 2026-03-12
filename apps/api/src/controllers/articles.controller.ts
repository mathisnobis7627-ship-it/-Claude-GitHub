import type { Request, Response, NextFunction } from 'express';
import { articlesService } from '../services/articles.service';
import type { ArticleCategory } from '../types';

export class ArticlesController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, sort, order } = req.query;
      const result = await articlesService.getAll({
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        sort: sort as string,
        order: order as 'asc' | 'desc',
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { slug } = req.params;
      const article = await articlesService.getBySlug(slug);

      res.json({ success: true, data: article });
    } catch (error) {
      next(error);
    }
  }

  async getByCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { category } = req.params;
      const { page, limit } = req.query;

      const result = await articlesService.getByCategory(category as ArticleCategory, {
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
}

export const articlesController = new ArticlesController();
