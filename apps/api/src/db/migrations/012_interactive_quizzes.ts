import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Add new question types: carte_a_completer, chronologie
  await knex.raw(`
    ALTER TYPE question_type ADD VALUE IF NOT EXISTS 'carte_a_completer';
  `);
  await knex.raw(`
    ALTER TYPE question_type ADD VALUE IF NOT EXISTS 'chronologie';
  `);

  // Add difficulty_level and chapter_id to quiz_questions for per-question difficulty
  await knex.schema.alterTable('quiz_questions', (table) => {
    table.specificType('difficulty_level', 'difficulty_level').defaultTo('debutant');
    table
      .uuid('chapter_id')
      .nullable()
      .references('id')
      .inTable('curriculum_chapters')
      .onDelete('SET NULL');
    // For carte_a_completer: JSON data with map zones and labels
    table.jsonb('map_data').nullable();
    // For chronologie: JSON data with events to order
    table.jsonb('chronology_data').nullable();
    table.index('difficulty_level');
    table.index('chapter_id');
  });

  // Add chapter_id to quizzes for chapter-level quiz generation
  await knex.schema.alterTable('quizzes', (table) => {
    table
      .uuid('chapter_id')
      .nullable()
      .references('id')
      .inTable('curriculum_chapters')
      .onDelete('SET NULL');
    table.index('chapter_id');
  });

  // User progression tables
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('username').notNullable().unique();
    table.string('display_name').notNullable();
    table.string('email').unique();
    table.string('avatar_url');
    table
      .uuid('level_id')
      .nullable()
      .references('id')
      .inTable('school_levels')
      .onDelete('SET NULL');
    table.timestamps(true, true);

    table.index('username');
  });

  await knex.schema.createTable('user_quiz_attempts', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .uuid('quiz_id')
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('CASCADE');
    table.integer('score').notNullable().defaultTo(0);
    table.integer('max_score').notNullable().defaultTo(0);
    table.float('percentage').notNullable().defaultTo(0);
    table.integer('correct_answers').notNullable().defaultTo(0);
    table.integer('total_questions').notNullable().defaultTo(0);
    table.integer('time_spent_seconds').nullable();
    table.jsonb('answers_detail').defaultTo('[]');
    table.timestamp('completed_at').defaultTo(knex.fn.now());
    table.timestamps(true, true);

    table.index('user_id');
    table.index('quiz_id');
    table.index(['user_id', 'quiz_id']);
  });

  await knex.schema.createTable('user_chapter_progress', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .uuid('chapter_id')
      .notNullable()
      .references('id')
      .inTable('curriculum_chapters')
      .onDelete('CASCADE');
    // Best scores per difficulty
    table.float('best_score_easy').defaultTo(0);
    table.float('best_score_medium').defaultTo(0);
    table.float('best_score_hard').defaultTo(0);
    // Number of attempts per difficulty
    table.integer('attempts_easy').defaultTo(0);
    table.integer('attempts_medium').defaultTo(0);
    table.integer('attempts_hard').defaultTo(0);
    // Mastery: 0-100 computed from all three difficulty scores
    table.float('mastery_percentage').defaultTo(0);
    table.timestamp('last_attempt_at').nullable();
    table.timestamps(true, true);

    table.unique(['user_id', 'chapter_id']);
    table.index('user_id');
    table.index('chapter_id');
    table.index('mastery_percentage');
  });

  await knex.schema.createTable('user_level_stats', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .uuid('level_id')
      .notNullable()
      .references('id')
      .inTable('school_levels')
      .onDelete('CASCADE');
    table.integer('total_quizzes_completed').defaultTo(0);
    table.integer('total_questions_answered').defaultTo(0);
    table.integer('total_correct_answers').defaultTo(0);
    table.float('average_score').defaultTo(0);
    table.integer('current_streak').defaultTo(0);
    table.integer('best_streak').defaultTo(0);
    table.float('overall_mastery').defaultTo(0);
    table.timestamps(true, true);

    table.unique(['user_id', 'level_id']);
    table.index('user_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('user_level_stats');
  await knex.schema.dropTableIfExists('user_chapter_progress');
  await knex.schema.dropTableIfExists('user_quiz_attempts');
  await knex.schema.dropTableIfExists('users');

  await knex.schema.alterTable('quizzes', (table) => {
    table.dropIndex('chapter_id');
    table.dropColumn('chapter_id');
  });

  await knex.schema.alterTable('quiz_questions', (table) => {
    table.dropIndex('difficulty_level');
    table.dropIndex('chapter_id');
    table.dropColumn('difficulty_level');
    table.dropColumn('chapter_id');
    table.dropColumn('map_data');
    table.dropColumn('chronology_data');
  });
}
