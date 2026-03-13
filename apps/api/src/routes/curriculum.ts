import { Router } from 'express';
import { curriculumController } from '../controllers/curriculum.controller';

const router = Router();

// GET /curriculum/levels - List all curriculum levels
router.get('/levels', (req, res, next) => curriculumController.getLevels(req, res, next));

// GET /curriculum/:level/subjects - Get subjects for a level
router.get('/:level/subjects', (req, res, next) => curriculumController.getSubjects(req, res, next));

// GET /curriculum/:level/chapters - Get all chapters for a level (across all subjects)
router.get('/:level/chapters', (req, res, next) => curriculumController.getChaptersByLevel(req, res, next));

// GET /curriculum/:level/:subject/chapters - Get chapters for a level and subject
router.get('/:level/:subject/chapters', (req, res, next) => curriculumController.getChapters(req, res, next));

export default router;
