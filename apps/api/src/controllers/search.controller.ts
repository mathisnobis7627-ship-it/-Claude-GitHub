import type { Request, Response, NextFunction } from 'express';
import { searchService } from '../services/search.service';
import type { SearchType } from '../types';

export class SearchController {
  async search(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { q, type, category, country, period, era, personality, page, limit } = req.query;
      const result = await searchService.search({
        q: q as string,
        type: (type as SearchType) || 'all',
        category: category as string,
        country: country as string,
        period: period as string,
        era: era as string,
        personality: personality as string,
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async suggest(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { q, limit } = req.query;
      const suggestions = await searchService.suggest(
        q as string,
        limit ? Number(limit) : 6,
      );

      res.json({ success: true, data: suggestions });
    } catch (error) {
      next(error);
    }
  }

  async getFilters(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const filters = await searchService.getFilters();
      res.json({ success: true, data: filters });
    } catch (error) {
      next(error);
    }
  }
}

export const searchController = new SearchController();
