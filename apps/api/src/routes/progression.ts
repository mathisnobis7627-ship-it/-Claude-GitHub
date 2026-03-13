import { Router } from 'express';
import { progressionController } from '../controllers/progression.controller';

const router = Router();

// GET /progression/:userId - Get full progress summary for a user
router.get('/:userId', (req, res, next) => progressionController.getProgress(req, res, next));

// GET /progression/:userId/history - Get quiz attempt history
router.get('/:userId/history', (req, res, next) => progressionController.getQuizHistory(req, res, next));

// GET /progression/:userId/chapter/:chapterId - Get chapter-specific progress
router.get('/:userId/chapter/:chapterId', (req, res, next) =>
  progressionController.getChapterProgress(req, res, next)
);

// GET /progression/leaderboard/:levelId - Get leaderboard for a school level
router.get('/leaderboard/:levelId', (req, res, next) =>
  progressionController.getLeaderboard(req, res, next)
);

export default router;
