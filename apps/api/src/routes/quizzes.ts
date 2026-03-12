import { Router } from 'express';
import { quizzesController } from '../controllers/quizzes.controller';
import { validate } from '../middleware/validate';
import { quizSubmissionSchema } from '../validators/quiz.validator';
import { quizSubmitLimiter } from '../middleware/rateLimiter';

const router = Router();

// GET /quizzes - List all quizzes with pagination and filters
router.get('/', (req, res, next) => quizzesController.getAll(req, res, next));

// GET /quizzes/:id - Get quiz by ID (includes questions without correct answers)
router.get('/:id', (req, res, next) => quizzesController.getById(req, res, next));

// POST /quizzes/:id/submit - Submit quiz answers and get results
router.post(
  '/:id/submit',
  quizSubmitLimiter,
  validate(quizSubmissionSchema, 'body'),
  (req, res, next) => quizzesController.submit(req, res, next)
);

export default router;
