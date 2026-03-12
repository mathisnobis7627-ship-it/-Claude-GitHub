import { Router } from 'express';
import { searchController } from '../controllers/search.controller';
import { validate } from '../middleware/validate';
import { searchQuerySchema } from '../validators/search.validator';
import { searchLimiter } from '../middleware/rateLimiter';

const router = Router();

// GET /search?q=&type=&category= - Search across all content types
router.get(
  '/',
  searchLimiter,
  validate(searchQuerySchema, 'query'),
  (req, res, next) => searchController.search(req, res, next)
);

export default router;
