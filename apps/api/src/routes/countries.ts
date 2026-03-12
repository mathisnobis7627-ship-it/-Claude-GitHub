import { Router } from 'express';
import { countriesController } from '../controllers/countries.controller';

const router = Router();

// GET /countries - List all countries with pagination
router.get('/', (req, res, next) => countriesController.getAll(req, res, next));

// GET /countries/:code - Get country by ISO 3166 code
router.get('/:code', (req, res, next) => countriesController.getByCode(req, res, next));

// GET /countries/:code/geography - Get geography data for a country
router.get('/:code/geography', (req, res, next) => countriesController.getGeography(req, res, next));

// GET /countries/:code/history - Get history data for a country
router.get('/:code/history', (req, res, next) => countriesController.getHistory(req, res, next));

// GET /countries/:code/events - Get major historical events for a country
router.get('/:code/events', (req, res, next) => countriesController.getEvents(req, res, next));

// GET /countries/:code/quizzes - Get quizzes associated with a country
router.get('/:code/quizzes', (req, res, next) => countriesController.getQuizzes(req, res, next));

export default router;
