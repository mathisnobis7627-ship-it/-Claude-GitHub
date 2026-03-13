import db from '../config/database';
import type {
  Quiz,
  QuizQuestion,
  QuizOption,
  QuizResult,
  QuizSubmission,
  PaginatedResponse,
  PaginationQuery,
  DifficultyLevel,
  ChronologyData,
} from '../types';
import { AppError } from '../types';

export class QuizzesService {
  async getAll(
    query: PaginationQuery & { category?: string; difficulty?: string; level_id?: string; chapter_id?: string }
  ): Promise<PaginatedResponse<Quiz>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;

    let baseQuery = db('quizzes');
    let countQuery = db('quizzes');

    if (query.category) {
      baseQuery = baseQuery.where({ category: query.category });
      countQuery = countQuery.where({ category: query.category });
    }

    if (query.difficulty) {
      baseQuery = baseQuery.where({ difficulty_level: query.difficulty });
      countQuery = countQuery.where({ difficulty_level: query.difficulty });
    }

    if (query.level_id) {
      baseQuery = baseQuery.where({ level_id: query.level_id });
      countQuery = countQuery.where({ level_id: query.level_id });
    }

    if (query.chapter_id) {
      baseQuery = baseQuery.where({ chapter_id: query.chapter_id });
      countQuery = countQuery.where({ chapter_id: query.chapter_id });
    }

    const [{ count }] = await countQuery.count('* as count');
    const total = Number(count);

    const data = await baseQuery
      .select('*')
      .orderBy('created_at', 'desc')
      .limit(limit)
      .offset(offset);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getById(id: string): Promise<Quiz & { questions: (QuizQuestion & { options: QuizOption[] })[] }> {
    const quiz = await db('quizzes').where({ id }).first();

    if (!quiz) {
      throw new AppError(`Quiz not found: ${id}`, 404);
    }

    const questions: QuizQuestion[] = await db('quiz_questions')
      .where({ quiz_id: id })
      .orderBy('sort_order', 'asc');

    const questionsWithOptions = await Promise.all(
      questions.map(async (q) => {
        const options = await db('quiz_options')
          .where({ question_id: q.id })
          .orderBy('sort_order', 'asc');

        // Don't expose correct answers in the response
        const safeOptions = options.map(({ is_correct, ...opt }: QuizOption) => opt);

        // Don't expose chronology correct positions
        let safeChronologyData = q.chronology_data;
        if (q.question_type === 'chronologie' && q.chronology_data) {
          const data = typeof q.chronology_data === 'string'
            ? JSON.parse(q.chronology_data)
            : q.chronology_data;
          safeChronologyData = {
            ...data,
            events: data.events.map(({ correct_position, ...evt }: { correct_position: number; [key: string]: unknown }) => evt),
          };
        }

        // Don't expose map correct answers
        let safeMapData = q.map_data;
        if (q.question_type === 'carte_a_completer' && q.map_data) {
          const data = typeof q.map_data === 'string' ? JSON.parse(q.map_data) : q.map_data;
          safeMapData = {
            ...data,
            zones: data.zones.map(({ correct_answer, ...zone }: { correct_answer: string; [key: string]: unknown }) => zone),
          };
        }

        return {
          ...q,
          map_data: safeMapData,
          chronology_data: safeChronologyData,
          options: safeOptions,
        };
      })
    );

    return { ...quiz, questions: questionsWithOptions };
  }

  // Get questions for a chapter filtered by difficulty
  async getByChapter(
    chapterId: string,
    difficulty?: DifficultyLevel
  ): Promise<Quiz[]> {
    let query = db('quizzes').where({ chapter_id: chapterId });
    if (difficulty) {
      query = query.where({ difficulty_level: difficulty });
    }
    return query.orderBy('difficulty_level', 'asc');
  }

  async submit(quizId: string, submission: QuizSubmission): Promise<QuizResult> {
    const quiz = await db('quizzes').where({ id: quizId }).first();

    if (!quiz) {
      throw new AppError(`Quiz not found: ${quizId}`, 404);
    }

    const questions: QuizQuestion[] = await db('quiz_questions')
      .where({ quiz_id: quizId })
      .orderBy('sort_order', 'asc');

    const questionMap = new Map(questions.map((q) => [q.id, q]));

    let correctCount = 0;
    let totalScore = 0;
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);

    const details: QuizResult['details'] = [];

    for (const answer of submission.answers) {
      const question = questionMap.get(answer.question_id);
      if (!question) {
        throw new AppError(`Invalid question ID: ${answer.question_id}`, 400);
      }

      let correct = false;

      switch (question.question_type) {
        case 'qcm':
        case 'vrai_faux': {
          // Standard: check selected_option against correct option
          const options = await db('quiz_options')
            .where({ question_id: question.id })
            .orderBy('sort_order', 'asc');
          const correctIdx = options.findIndex((o: QuizOption) => o.is_correct);
          correct = answer.selected_option === correctIdx;
          break;
        }
        case 'carte_a_completer': {
          // Map: check submitted zone answers against correct answers
          if (question.map_data && answer.map_answers) {
            const mapData = typeof question.map_data === 'string'
              ? JSON.parse(question.map_data)
              : question.map_data;
            const zones = mapData.zones || [];
            let zoneCorrect = 0;
            for (const zone of zones) {
              const userAnswer = answer.map_answers?.[zone.zone_id];
              if (userAnswer && userAnswer.toLowerCase().trim() === zone.correct_answer.toLowerCase().trim()) {
                zoneCorrect++;
              }
            }
            correct = zones.length > 0 && zoneCorrect === zones.length;
          }
          break;
        }
        case 'chronologie': {
          // Chronology: check if submitted order matches correct order
          if (question.chronology_data && answer.chronology_order) {
            const chronData: ChronologyData = typeof question.chronology_data === 'string'
              ? JSON.parse(question.chronology_data)
              : question.chronology_data;
            const events = chronData.events || [];
            const correctOrder = events
              .slice()
              .sort((a, b) => a.correct_position - b.correct_position)
              .map((e) => e.event_id);
            correct =
              answer.chronology_order.length === correctOrder.length &&
              answer.chronology_order.every((id, idx) => id === correctOrder[idx]);
          }
          break;
        }
        default: {
          // texte_libre, association: fall back to option check
          const opts = await db('quiz_options')
            .where({ question_id: question.id })
            .orderBy('sort_order', 'asc');
          const correctI = opts.findIndex((o: QuizOption) => o.is_correct);
          correct = answer.selected_option === correctI;
        }
      }

      if (correct) {
        correctCount++;
        totalScore += question.points;
      }

      details.push({
        question_id: answer.question_id,
        correct,
        correct_answer: answer.selected_option ?? 0,
        selected_option: answer.selected_option ?? 0,
        explanation: question.explanation || '',
      });
    }

    return {
      quiz_id: quizId,
      total_questions: questions.length,
      correct_answers: correctCount,
      score: totalScore,
      percentage: maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0,
      details,
    };
  }
}

export const quizzesService = new QuizzesService();
