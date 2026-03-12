import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TYPE article_category AS ENUM (
      'geography',
      'history',
      'geology',
      'science',
      'culture',
      'war',
      'politics'
    );
  `);

  await knex.raw(`
    CREATE TYPE difficulty_level AS ENUM (
      'debutant',
      'intermediaire',
      'avance'
    );
  `);

  await knex.schema.createTable('articles', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('slug').notNullable().unique();
    table.string('title').notNullable();
    table.string('subtitle');
    table.text('content');
    table.text('summary');
    table.specificType('category', 'article_category').notNullable();
    table.string('subcategory');
    table.string('cover_image_url');
    table.string('author');
    table.integer('reading_time_minutes');
    table.specificType('difficulty_level', 'difficulty_level').defaultTo('debutant');
    table.jsonb('tags').defaultTo('[]');
    table.boolean('published').defaultTo(false);
    table.timestamps(true, true);

    table.index('slug');
    table.index('category');
    table.index('published');
    table.index('difficulty_level');
  });

  await knex.schema.createTable('article_sections', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('article_id')
      .notNullable()
      .references('id')
      .inTable('articles')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('content');
    table.integer('sort_order').defaultTo(0);
    table.string('image_url');

    table.index('article_id');
    table.index('sort_order');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('article_sections');
  await knex.schema.dropTableIfExists('articles');
  await knex.raw('DROP TYPE IF EXISTS difficulty_level;');
  await knex.raw('DROP TYPE IF EXISTS article_category;');
}
