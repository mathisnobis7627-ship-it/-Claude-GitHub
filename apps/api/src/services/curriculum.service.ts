import db from '../config/database';
import type { SchoolLevel, Subject, CurriculumChapter, CurriculumLesson } from '../types';
import { AppError } from '../types';

export class CurriculumService {
  async getLevels(): Promise<SchoolLevel[]> {
    return db('school_levels')
      .select('*')
      .orderBy('sort_order', 'asc');
  }

  async getSubjects(levelSlug: string): Promise<{ level: SchoolLevel; subjects: Subject[] }> {
    const level = await db('school_levels').where({ slug: levelSlug }).first();

    if (!level) {
      throw new AppError(`Invalid curriculum level: ${levelSlug}`, 400);
    }

    // Get subjects that have chapters for this level
    const subjects = await db('subjects')
      .select('subjects.*')
      .whereExists(function () {
        this.select(db.raw(1))
          .from('curriculum_chapters')
          .whereRaw('curriculum_chapters.subject_id = subjects.id')
          .andWhere('curriculum_chapters.level_id', level.id);
      })
      .orderBy('subjects.name', 'asc');

    // If no chapters exist yet, return all subjects
    if (subjects.length === 0) {
      const allSubjects = await db('subjects').select('*').orderBy('name', 'asc');
      return { level, subjects: allSubjects };
    }

    return { level, subjects };
  }

  async getChapters(
    levelSlug: string,
    subjectSlug: string
  ): Promise<CurriculumChapter[]> {
    const level = await db('school_levels').where({ slug: levelSlug }).first();
    if (!level) {
      throw new AppError(`Invalid curriculum level: ${levelSlug}`, 400);
    }

    const subject = await db('subjects').where({ slug: subjectSlug }).first();
    if (!subject) {
      throw new AppError(`Invalid subject: ${subjectSlug}`, 400);
    }

    const chapters = await db('curriculum_chapters')
      .where({ level_id: level.id, subject_id: subject.id })
      .orderBy('sort_order', 'asc');

    return chapters;
  }

  async getChaptersByLevel(levelSlug: string): Promise<(CurriculumChapter & { subject_name: string; subject_slug: string })[]> {
    const level = await db('school_levels').where({ slug: levelSlug }).first();
    if (!level) {
      throw new AppError(`Invalid curriculum level: ${levelSlug}`, 400);
    }

    const chapters = await db('curriculum_chapters')
      .join('subjects', 'curriculum_chapters.subject_id', 'subjects.id')
      .where({ 'curriculum_chapters.level_id': level.id })
      .select('curriculum_chapters.*', 'subjects.name as subject_name', 'subjects.slug as subject_slug')
      .orderBy('subjects.name', 'asc')
      .orderBy('curriculum_chapters.sort_order', 'asc');

    return chapters;
  }

  async getLessons(chapterId: string): Promise<CurriculumLesson[]> {
    return db('curriculum_lessons')
      .where({ chapter_id: chapterId })
      .orderBy('sort_order', 'asc');
  }
}

export const curriculumService = new CurriculumService();
