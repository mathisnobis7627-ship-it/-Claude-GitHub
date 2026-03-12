import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TYPE school_cycle AS ENUM (
      'cycle3',
      'cycle4',
      'lycee'
    );
  `);

  await knex.schema.createTable('school_levels', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable().unique();
    table.string('slug').notNullable().unique();
    table.specificType('cycle', 'school_cycle').notNullable();
    table.integer('sort_order').defaultTo(0);

    table.index('slug');
    table.index('cycle');
    table.index('sort_order');
  });

  await knex.schema.createTable('subjects', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable().unique();
    table.string('slug').notNullable().unique();
    table.string('icon');

    table.index('slug');
  });

  await knex.schema.createTable('curriculum_chapters', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('level_id')
      .notNullable()
      .references('id')
      .inTable('school_levels')
      .onDelete('CASCADE');
    table
      .uuid('subject_id')
      .notNullable()
      .references('id')
      .inTable('subjects')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.jsonb('objectives').defaultTo('[]');
    table.jsonb('key_concepts').defaultTo('[]');
    table.integer('sort_order').defaultTo(0);

    table.index('level_id');
    table.index('subject_id');
    table.index('slug');
    table.index('sort_order');
  });

  await knex.schema.createTable('curriculum_lessons', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('chapter_id')
      .notNullable()
      .references('id')
      .inTable('curriculum_chapters')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('content');
    table.text('summary');
    table.jsonb('key_dates').defaultTo('[]');
    table.jsonb('key_figures').defaultTo('[]');
    table.jsonb('vocabulary').defaultTo('[]');
    table.integer('sort_order').defaultTo(0);

    table.index('chapter_id');
    table.index('sort_order');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('curriculum_lessons');
  await knex.schema.dropTableIfExists('curriculum_chapters');
  await knex.schema.dropTableIfExists('subjects');
  await knex.schema.dropTableIfExists('school_levels');
  await knex.raw('DROP TYPE IF EXISTS school_cycle;');
}
