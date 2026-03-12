import db from '../config/database';
import type { CurriculumLevel, CurriculumSubject, CurriculumChapter, PaginatedResponse } from '../types';
import { AppError } from '../types';

interface LevelInfo {
  level: CurriculumLevel;
  label: string;
  cycle: string;
  subjects: CurriculumSubject[];
}

const LEVELS: LevelInfo[] = [
  { level: 'cp', label: 'CP', cycle: 'Cycle 2', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: 'ce1', label: 'CE1', cycle: 'Cycle 2', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: 'ce2', label: 'CE2', cycle: 'Cycle 2', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: 'cm1', label: 'CM1', cycle: 'Cycle 3', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: 'cm2', label: 'CM2', cycle: 'Cycle 3', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: '6eme', label: '6eme', cycle: 'Cycle 3', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: '5eme', label: '5eme', cycle: 'Cycle 4', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: '4eme', label: '4eme', cycle: 'Cycle 4', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: '3eme', label: '3eme', cycle: 'Cycle 4', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: '2nde', label: 'Seconde', cycle: 'Lycee', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: '1ere', label: 'Premiere', cycle: 'Lycee', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
  { level: 'terminale', label: 'Terminale', cycle: 'Lycee', subjects: ['histoire', 'geographie', 'sciences', 'emc'] },
];

export class CurriculumService {
  async getLevels(): Promise<LevelInfo[]> {
    return LEVELS;
  }

  async getSubjects(level: CurriculumLevel): Promise<{ level: string; subjects: CurriculumSubject[] }> {
    const levelInfo = LEVELS.find((l) => l.level === level);

    if (!levelInfo) {
      throw new AppError(`Invalid curriculum level: ${level}`, 400);
    }

    return {
      level: levelInfo.level,
      subjects: levelInfo.subjects,
    };
  }

  async getChapters(
    level: CurriculumLevel,
    subject: CurriculumSubject
  ): Promise<CurriculumChapter[]> {
    const levelInfo = LEVELS.find((l) => l.level === level);

    if (!levelInfo) {
      throw new AppError(`Invalid curriculum level: ${level}`, 400);
    }

    if (!levelInfo.subjects.includes(subject)) {
      throw new AppError(`Invalid subject for level ${level}: ${subject}`, 400);
    }

    const chapters = await db('curriculum_chapters')
      .where({ level, subject })
      .orderBy('chapter_number', 'asc');

    return chapters;
  }
}

export const curriculumService = new CurriculumService();
