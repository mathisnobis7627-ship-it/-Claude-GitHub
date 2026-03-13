import type { Knex } from 'knex';
import { quizzes6eme } from './data/quizzes_6eme';
import { quizzes5eme } from './data/quizzes_5eme';
import { quizzes4eme, quizzes3eme } from './data/quizzes_4eme_3eme';
import { quizzes2nde, quizzes1ere, quizzesTerminale } from './data/quizzes_lycee';

interface QuizOption {
  text: string;
  is_correct: boolean;
}

interface MapZone {
  zone_id: string;
  label: string;
  x: number;
  y: number;
  correct_answer: string;
}

interface ChronologyEvent {
  event_id: string;
  label: string;
  date: string;
  correct_position: number;
}

interface QuestionData {
  question_text: string;
  question_type: 'qcm' | 'vrai_faux' | 'carte_a_completer' | 'chronologie';
  difficulty_level: string;
  explanation: string;
  points: number;
  options?: QuizOption[];
  map_data?: {
    image_url: string;
    instruction: string;
    zones: MapZone[];
  };
  chronology_data?: {
    instruction: string;
    events: ChronologyEvent[];
  };
}

interface QuizData {
  chapterSlug: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty_level: string;
  levelSlug: string;
  questions: QuestionData[];
}

export async function seed(knex: Knex): Promise<void> {
  // Clean existing quiz data
  await knex('quiz_options').del();
  await knex('quiz_questions').del();
  await knex('quizzes').del();

  // Resolve level and chapter IDs
  const levels = await knex('school_levels').select('id', 'slug');
  const chapters = await knex('curriculum_chapters').select('id', 'slug');

  const getLevelId = (slug: string): string | undefined =>
    levels.find((l: { id: string; slug: string }) => l.slug === slug)?.id;
  const getChapterId = (slug: string): string | undefined =>
    chapters.find((c: { id: string; slug: string }) => c.slug === slug)?.id;

  // Combine all quiz data
  const allQuizzes: QuizData[] = [
    ...quizzes6eme,
    ...quizzes5eme,
    ...quizzes4eme,
    ...quizzes3eme,
    ...quizzes2nde,
    ...quizzes1ere,
    ...quizzesTerminale,
  ];

  // Insert quizzes with their questions and options
  for (const quizData of allQuizzes) {
    const levelId = getLevelId(quizData.levelSlug);
    const chapterId = getChapterId(quizData.chapterSlug);

    if (!levelId) {
      console.warn(`Level not found for slug: ${quizData.levelSlug}, skipping quiz: ${quizData.slug}`);
      continue;
    }

    const [quiz] = await knex('quizzes')
      .insert({
        title: quizData.title,
        slug: quizData.slug,
        description: quizData.description,
        category: quizData.category,
        subcategory: 'programme-scolaire',
        difficulty_level: quizData.difficulty_level,
        level_id: levelId,
        chapter_id: chapterId || null,
        time_limit_seconds: quizData.difficulty_level === 'debutant' ? 600
          : quizData.difficulty_level === 'intermediaire' ? 900
          : 1200,
        question_count: quizData.questions.length,
      })
      .returning('*');

    // Insert questions
    for (let i = 0; i < quizData.questions.length; i++) {
      const q = quizData.questions[i];

      const [question] = await knex('quiz_questions')
        .insert({
          quiz_id: quiz.id,
          question_text: q.question_text,
          question_type: q.question_type,
          difficulty_level: q.difficulty_level,
          chapter_id: chapterId || null,
          explanation: q.explanation,
          sort_order: i + 1,
          points: q.points,
          map_data: q.map_data ? JSON.stringify(q.map_data) : null,
          chronology_data: q.chronology_data ? JSON.stringify(q.chronology_data) : null,
        })
        .returning('*');

      // Insert options for QCM and vrai/faux questions
      if (q.options && q.options.length > 0) {
        await knex('quiz_options').insert(
          q.options.map((opt, idx) => ({
            question_id: question.id,
            option_text: opt.text,
            is_correct: opt.is_correct,
            sort_order: idx + 1,
          }))
        );
      }
    }
  }

  const totalQuizzes = await knex('quizzes').count('* as count').first();
  const totalQuestions = await knex('quiz_questions').count('* as count').first();
  console.log(`Seeded ${totalQuizzes?.count} quizzes with ${totalQuestions?.count} questions`);
}
