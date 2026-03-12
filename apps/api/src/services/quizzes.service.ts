import db from '../config/database';
import type { Quiz, QuizQuestion, QuizResult, QuizSubmission, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class QuizzesService {
  async getAll(query: PaginationQuery & { category?: string; difficulty?: string }): Promise<PaginatedResponse<Omit<Quiz, 'questions'>>> {
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
      baseQuery = baseQuery.where({ difficulty: query.difficulty });
      countQuery = countQuery.where({ difficulty: query.difficulty });
    }

    const [{ count }] = await countQuery.count('* as count');
    const total = Number(count);

    const data = await baseQuery
      .select('id', 'title', 'description', 'category', 'difficulty', 'time_limit_seconds', 'created_at')
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

  async getById(id: number): Promise<Quiz> {
    const quiz = await db('quizzes').where({ id }).first();

    if (!quiz) {
      throw new AppError(`Quiz not found: ${id}`, 404);
    }

    const questions: QuizQuestion[] = await db('quiz_questions')
      .where({ quiz_id: id })
      .select('id', 'quiz_id', 'question', 'options', 'points')
      .orderBy('id', 'asc');

    return { ...quiz, questions };
  }

  async submit(id: number, submission: QuizSubmission): Promise<QuizResult> {
    const quiz = await db('quizzes').where({ id }).first();

    if (!quiz) {
      throw new AppError(`Quiz not found: ${id}`, 404);
    }

    const questions: QuizQuestion[] = await db('quiz_questions')
      .where({ quiz_id: id })
      .orderBy('id', 'asc');

    const questionMap = new Map(questions.map((q) => [q.id, q]));

    let correctCount = 0;
    let totalScore = 0;
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);

    const details = submission.answers.map((answer) => {
      const question = questionMap.get(answer.question_id);

      if (!question) {
        throw new AppError(`Invalid question ID: ${answer.question_id}`, 400);
      }

      const correct = question.correct_answer === answer.selected_option;
      if (correct) {
        correctCount++;
        totalScore += question.points;
      }

      return {
        question_id: answer.question_id,
        correct,
        correct_answer: question.correct_answer,
        selected_option: answer.selected_option,
        explanation: question.explanation,
      };
    });

    return {
      quiz_id: id,
      total_questions: questions.length,
      correct_answers: correctCount,
      score: totalScore,
      percentage: maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0,
      details,
    };
  }
}

export const quizzesService = new QuizzesService();
