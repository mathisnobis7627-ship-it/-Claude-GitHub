import type { Request, Response, NextFunction } from 'express';
import { searchService } from '../services/search.service';
import type { SearchType } from '../types';

export class SearchController {
  async search(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { q, type, category, page, limit } = req.query;
      const result = await searchService.search({
        q: q as string,
        type: (type as SearchType) || 'all',
        category: category as string,
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
}

export const searchController = new SearchController();
