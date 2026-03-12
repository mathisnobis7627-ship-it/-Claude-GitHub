import { Router } from 'express';
import { articlesController } from '../controllers/articles.controller';

const router = Router();

// GET /articles - List all published articles with pagination
router.get('/', (req, res, next) => articlesController.getAll(req, res, next));

// GET /articles/category/:category - Get articles by category
router.get('/category/:category', (req, res, next) => articlesController.getByCategory(req, res, next));

// GET /articles/:slug - Get article by slug
router.get('/:slug', (req, res, next) => articlesController.getBySlug(req, res, next));

export default router;
