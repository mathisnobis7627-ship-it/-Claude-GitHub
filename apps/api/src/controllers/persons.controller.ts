import type { Request, Response, NextFunction } from 'express';
import { personsService } from '../services/persons.service';
import type { PersonCategory } from '../types';

export class PersonsController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page, limit, sort, order } = req.query;
      const result = await personsService.getAll({
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
      const person = await personsService.getBySlug(slug);

      res.json({ success: true, data: person });
    } catch (error) {
      next(error);
    }
  }

  async getByCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { category } = req.params;
      const { page, limit } = req.query;

      const result = await personsService.getByCategory(category as PersonCategory, {
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
      });

      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
}

export const personsController = new PersonsController();
