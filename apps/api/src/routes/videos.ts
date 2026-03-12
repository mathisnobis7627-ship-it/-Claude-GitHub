import { Router } from 'express';
import { videosController } from '../controllers/videos.controller';

const router = Router();

// GET /videos - List all videos with pagination
router.get('/', (req, res, next) => videosController.getAll(req, res, next));

// GET /videos/topic/:topic - Get videos by topic
router.get('/topic/:topic', (req, res, next) => videosController.getByTopic(req, res, next));

// GET /videos/:id - Get video by ID
router.get('/:id', (req, res, next) => videosController.getById(req, res, next));

export default router;
