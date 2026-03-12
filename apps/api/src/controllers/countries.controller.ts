import type { Request, Response, NextFunction } from 'express';
import { countriesService } from '../services/countries.service';

export class CountriesController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, sort, order } = req.query;
      const result = await countriesService.getAll({
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

  async getByCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { code } = req.params;
      const country = await countriesService.getByCode(code);

      res.json({ success: true, data: country });
    } catch (error) {
      next(error);
    }
  }

  async getGeography(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { code } = req.params;
      const geography = await countriesService.getGeography(code);

      res.json({ success: true, data: geography });
    } catch (error) {
      next(error);
    }
  }

  async getHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { code } = req.params;
      const history = await countriesService.getHistory(code);

      res.json({ success: true, data: history });
    } catch (error) {
      next(error);
    }
  }
}

export const countriesController = new CountriesController();
