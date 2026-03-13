import { Router } from 'express';
import { searchController } from '../controllers/search.controller';
import { validate } from '../middleware/validate';
import { searchQuerySchema, suggestQuerySchema } from '../validators/search.validator';
import { searchLimiter } from '../middleware/rateLimiter';

const router = Router();

// GET /search?q=&type=&category=&country=&period=&era=&personality= - Full search
router.get(
  '/',
  searchLimiter,
  validate(searchQuerySchema, 'query'),
  (req, res, next) => searchController.search(req, res, next)
);

// GET /search/suggest?q= - Fast autocomplete suggestions
router.get(
  '/suggest',
  searchLimiter,
  validate(suggestQuerySchema, 'query'),
  (req, res, next) => searchController.suggest(req, res, next)
);

// GET /search/filters - Available filter values
router.get(
  '/filters',
  (req, res, next) => searchController.getFilters(req, res, next)
);

export default router;
