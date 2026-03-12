import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TYPE question_type AS ENUM (
      'qcm',
      'vrai_faux',
      'texte_libre',
      'association'
    );
  `);

  await knex.schema.createTable('quizzes', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.string('category');
    table.string('subcategory');
    table.specificType('difficulty_level', 'difficulty_level').defaultTo('debutant');
    table
      .uuid('level_id')
      .nullable()
      .references('id')
      .inTable('school_levels')
      .onDelete('SET NULL');
    table.integer('time_limit_seconds');
    table.integer('question_count').defaultTo(0);
    table.string('cover_image_url');
    table.timestamps(true, true);

    table.index('slug');
    table.index('category');
    table.index('difficulty_level');
    table.index('level_id');
  });

  await knex.schema.createTable('quiz_questions', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('quiz_id')
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('CASCADE');
    table.text('question_text').notNullable();
    table.specificType('question_type', 'question_type').notNullable();
    table.string('image_url');
    table.text('explanation');
    table.integer('sort_order').defaultTo(0);
    table.integer('points').defaultTo(1);

    table.index('quiz_id');
    table.index('sort_order');
  });

  await knex.schema.createTable('quiz_options', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('question_id')
      .notNullable()
      .references('id')
      .inTable('quiz_questions')
      .onDelete('CASCADE');
    table.text('option_text').notNullable();
    table.boolean('is_correct').defaultTo(false);
    table.integer('sort_order').defaultTo(0);

    table.index('question_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('quiz_options');
  await knex.schema.dropTableIfExists('quiz_questions');
  await knex.schema.dropTableIfExists('quizzes');
  await knex.raw('DROP TYPE IF EXISTS question_type;');
}
