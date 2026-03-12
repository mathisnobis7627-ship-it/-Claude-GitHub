import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('videos', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.string('youtube_id').notNullable();
    table.integer('duration_seconds');
    table.string('thumbnail_url');
    table.string('category');
    table.string('subcategory');
    table.specificType('difficulty_level', 'difficulty_level').defaultTo('debutant');
    table
      .uuid('level_id')
      .nullable()
      .references('id')
      .inTable('school_levels')
      .onDelete('SET NULL');
    table.jsonb('tags').defaultTo('[]');
    table.text('transcript');
    table.timestamps(true, true);

    table.index('slug');
    table.index('youtube_id');
    table.index('category');
    table.index('difficulty_level');
    table.index('level_id');
  });

  await knex.schema.createTable('video_chapters', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('video_id')
      .notNullable()
      .references('id')
      .inTable('videos')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.integer('start_seconds').notNullable();
    table.integer('end_seconds');
    table.integer('sort_order').defaultTo(0);

    table.index('video_id');
    table.index('sort_order');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('video_chapters');
  await knex.schema.dropTableIfExists('videos');
}
