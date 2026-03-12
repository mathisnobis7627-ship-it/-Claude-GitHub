import { Router } from 'express';
import { timelineController } from '../controllers/timeline.controller';

const router = Router();

// GET /timeline/events - List timeline events with pagination and filters
router.get('/events', (req, res, next) => timelineController.getEvents(req, res, next));

// GET /timeline/periods - List all timeline periods
router.get('/periods', (req, res, next) => timelineController.getPeriods(req, res, next));

// GET /timeline/events/:id - Get a specific timeline event
router.get('/events/:id', (req, res, next) => timelineController.getEventById(req, res, next));

export default router;
