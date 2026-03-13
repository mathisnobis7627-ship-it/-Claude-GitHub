import { Router } from 'express';
import countriesRouter from './countries';
import personsRouter from './persons';
import articlesRouter from './articles';
import timelineRouter from './timeline';
import curriculumRouter from './curriculum';
import quizzesRouter from './quizzes';
import searchRouter from './search';
import videosRouter from './videos';
import progressionRouter from './progression';

const router = Router();

router.use('/countries', countriesRouter);
router.use('/persons', personsRouter);
router.use('/articles', articlesRouter);
router.use('/timeline', timelineRouter);
router.use('/curriculum', curriculumRouter);
router.use('/quizzes', quizzesRouter);
router.use('/search', searchRouter);
router.use('/videos', videosRouter);
router.use('/progression', progressionRouter);

export default router;
