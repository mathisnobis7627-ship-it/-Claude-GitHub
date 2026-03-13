import db from '../config/database';
import type {
  UserQuizAttempt,
  UserChapterProgress,
  UserLevelStats,
  UserProgressSummary,
  QuizResult,
  DifficultyLevel,
} from '../types';
import { AppError } from '../types';

export class ProgressionService {
  // ── Record a quiz attempt and update progression ──────────────────────

  async recordAttempt(
    userId: string,
    quizId: string,
    result: QuizResult,
    timeSpentSeconds?: number
  ): Promise<UserQuizAttempt> {
    const quiz = await db('quizzes').where({ id: quizId }).first();
    if (!quiz) throw new AppError('Quiz not found', 404);

    const [attempt] = await db('user_quiz_attempts')
      .insert({
        user_id: userId,
        quiz_id: quizId,
        score: result.score,
        max_score: result.total_questions,
        percentage: result.percentage,
        correct_answers: result.correct_answers,
        total_questions: result.total_questions,
        time_spent_seconds: timeSpentSeconds || null,
        answers_detail: JSON.stringify(result.details),
      })
      .returning('*');

    // Update chapter progress if quiz is linked to a chapter
    if (quiz.chapter_id) {
      await this.updateChapterProgress(userId, quiz.chapter_id, quiz.difficulty_level, result.percentage);
    }

    // Update level stats if quiz is linked to a level
    if (quiz.level_id) {
      await this.updateLevelStats(userId, quiz.level_id, result);
    }

    return attempt;
  }

  // ── Update chapter progress ───────────────────────────────────────────

  private async updateChapterProgress(
    userId: string,
    chapterId: string,
    difficulty: DifficultyLevel,
    percentage: number
  ): Promise<void> {
    const existing = await db('user_chapter_progress')
      .where({ user_id: userId, chapter_id: chapterId })
      .first();

    const scoreField = difficulty === 'debutant' ? 'best_score_easy'
      : difficulty === 'intermediaire' ? 'best_score_medium'
      : 'best_score_hard';

    const attemptsField = difficulty === 'debutant' ? 'attempts_easy'
      : difficulty === 'intermediaire' ? 'attempts_medium'
      : 'attempts_hard';

    if (existing) {
      const newBestScore = Math.max(existing[scoreField], percentage);
      const newAttempts = existing[attemptsField] + 1;

      const updates: Record<string, unknown> = {
        [scoreField]: newBestScore,
        [attemptsField]: newAttempts,
        last_attempt_at: db.fn.now(),
      };

      // Recalculate mastery: weighted average (easy 20%, medium 30%, hard 50%)
      const easy = scoreField === 'best_score_easy' ? newBestScore : existing.best_score_easy;
      const medium = scoreField === 'best_score_medium' ? newBestScore : existing.best_score_medium;
      const hard = scoreField === 'best_score_hard' ? newBestScore : existing.best_score_hard;
      updates.mastery_percentage = Math.round(easy * 0.2 + medium * 0.3 + hard * 0.5);

      await db('user_chapter_progress')
        .where({ user_id: userId, chapter_id: chapterId })
        .update(updates);
    } else {
      const initial: Record<string, unknown> = {
        user_id: userId,
        chapter_id: chapterId,
        [scoreField]: percentage,
        [attemptsField]: 1,
        last_attempt_at: db.fn.now(),
        mastery_percentage: difficulty === 'debutant' ? percentage * 0.2
          : difficulty === 'intermediaire' ? percentage * 0.3
          : percentage * 0.5,
      };

      await db('user_chapter_progress').insert(initial);
    }
  }

  // ── Update level stats ────────────────────────────────────────────────

  private async updateLevelStats(
    userId: string,
    levelId: string,
    result: QuizResult
  ): Promise<void> {
    const existing = await db('user_level_stats')
      .where({ user_id: userId, level_id: levelId })
      .first();

    if (existing) {
      const totalQuizzes = existing.total_quizzes_completed + 1;
      const totalAnswered = existing.total_questions_answered + result.total_questions;
      const totalCorrect = existing.total_correct_answers + result.correct_answers;
      const avgScore = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

      // Streak: if score >= 70%, continue streak
      const newStreak = result.percentage >= 70 ? existing.current_streak + 1 : 0;
      const bestStreak = Math.max(existing.best_streak, newStreak);

      // Overall mastery: average of all chapter mastery for this level
      const chapterMastery = await db('user_chapter_progress as ucp')
        .join('curriculum_chapters as cc', 'ucp.chapter_id', 'cc.id')
        .where({ 'ucp.user_id': userId, 'cc.level_id': levelId })
        .avg('ucp.mastery_percentage as avg_mastery')
        .first();

      await db('user_level_stats')
        .where({ user_id: userId, level_id: levelId })
        .update({
          total_quizzes_completed: totalQuizzes,
          total_questions_answered: totalAnswered,
          total_correct_answers: totalCorrect,
          average_score: avgScore,
          current_streak: newStreak,
          best_streak: bestStreak,
          overall_mastery: chapterMastery?.avg_mastery || 0,
        });
    } else {
      await db('user_level_stats').insert({
        user_id: userId,
        level_id: levelId,
        total_quizzes_completed: 1,
        total_questions_answered: result.total_questions,
        total_correct_answers: result.correct_answers,
        average_score: result.percentage,
        current_streak: result.percentage >= 70 ? 1 : 0,
        best_streak: result.percentage >= 70 ? 1 : 0,
        overall_mastery: 0,
      });
    }
  }

  // ── Get user progress summary ─────────────────────────────────────────

  async getProgressSummary(userId: string): Promise<UserProgressSummary> {
    const user = await db('users').where({ id: userId }).first();
    if (!user) throw new AppError('User not found', 404);

    const levelStats = user.level_id
      ? await db('user_level_stats')
          .where({ user_id: userId, level_id: user.level_id })
          .first() || null
      : null;

    const chapterProgress = await db('user_chapter_progress as ucp')
      .join('curriculum_chapters as cc', 'ucp.chapter_id', 'cc.id')
      .where({ 'ucp.user_id': userId })
      .select('ucp.*', 'cc.title as chapter_title')
      .orderBy('ucp.mastery_percentage', 'desc');

    const recentAttempts = await db('user_quiz_attempts as uqa')
      .join('quizzes as q', 'uqa.quiz_id', 'q.id')
      .where({ 'uqa.user_id': userId })
      .select('uqa.*', 'q.title as quiz_title')
      .orderBy('uqa.completed_at', 'desc')
      .limit(20);

    const overallMastery = chapterProgress.length > 0
      ? Math.round(
          chapterProgress.reduce((sum: number, cp: UserChapterProgress) => sum + cp.mastery_percentage, 0) /
          chapterProgress.length
        )
      : 0;

    return {
      user,
      level_stats: levelStats,
      chapter_progress: chapterProgress,
      recent_attempts: recentAttempts,
      overall_mastery: overallMastery,
    };
  }

  // ── Get chapter progress for a user ───────────────────────────────────

  async getChapterProgress(userId: string, chapterId: string): Promise<UserChapterProgress | null> {
    return db('user_chapter_progress')
      .where({ user_id: userId, chapter_id: chapterId })
      .first() || null;
  }

  // ── Get quiz history for a user ───────────────────────────────────────

  async getQuizHistory(
    userId: string,
    page: number = 1,
    limit: number = 20
  ): Promise<{ data: UserQuizAttempt[]; total: number }> {
    const offset = (page - 1) * limit;

    const [{ count }] = await db('user_quiz_attempts')
      .where({ user_id: userId })
      .count('* as count');

    const data = await db('user_quiz_attempts as uqa')
      .join('quizzes as q', 'uqa.quiz_id', 'q.id')
      .where({ 'uqa.user_id': userId })
      .select('uqa.*', 'q.title as quiz_title', 'q.difficulty_level', 'q.category')
      .orderBy('uqa.completed_at', 'desc')
      .limit(limit)
      .offset(offset);

    return { data, total: Number(count) };
  }

  // ── Get leaderboard for a level ───────────────────────────────────────

  async getLeaderboard(
    levelId: string,
    limit: number = 10
  ): Promise<{ user_id: string; display_name: string; overall_mastery: number; total_quizzes_completed: number }[]> {
    return db('user_level_stats as uls')
      .join('users as u', 'uls.user_id', 'u.id')
      .where({ 'uls.level_id': levelId })
      .select('uls.user_id', 'u.display_name', 'uls.overall_mastery', 'uls.total_quizzes_completed')
      .orderBy('uls.overall_mastery', 'desc')
      .limit(limit);
  }
}

export const progressionService = new ProgressionService();
