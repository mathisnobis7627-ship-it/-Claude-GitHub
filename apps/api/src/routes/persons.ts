import { Router } from 'express';
import { personsController } from '../controllers/persons.controller';

const router = Router();

// GET /persons - List all persons with pagination
router.get('/', (req, res, next) => personsController.getAll(req, res, next));

// GET /persons/category/:category - Get persons by category
router.get('/category/:category', (req, res, next) => personsController.getByCategory(req, res, next));

// GET /persons/:slug - Get person by slug
router.get('/:slug', (req, res, next) => personsController.getBySlug(req, res, next));

export default router;
