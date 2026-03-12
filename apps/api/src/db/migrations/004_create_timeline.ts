import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TYPE historical_era AS ENUM (
      'prehistoire',
      'antiquite',
      'moyen_age',
      'renaissance',
      'temps_modernes',
      'epoque_contemporaine'
    );
  `);

  await knex.schema.createTable('historical_periods', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.integer('year_start');
    table.integer('year_end');
    table.specificType('era', 'historical_era').notNullable();
    table.string('color_hex', 7);

    table.index('slug');
    table.index('era');
  });

  await knex.schema.createTable('historical_events', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('period_id')
      .notNullable()
      .references('id')
      .inTable('historical_periods')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.text('detailed_content');
    table.string('date_display');
    table.integer('year');
    table.integer('month');
    table.integer('day');
    table.string('location');
    table.decimal('latitude', 10, 7);
    table.decimal('longitude', 10, 7);
    table.integer('importance').defaultTo(1).checkBetween([1, 5]);
    table.string('category');
    table.string('image_url');
    table.timestamps(true, true);

    table.index('slug');
    table.index('period_id');
    table.index('year');
    table.index('importance');
    table.index('category');
  });

  await knex.schema.createTable('wars', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.text('detailed_content');
    table.integer('year_start');
    table.integer('year_end');
    table.string('location');
    table.jsonb('belligerents').defaultTo('{}');
    table.string('casualties_estimate');
    table.text('outcome');
    table.text('consequences');
    table.jsonb('related_event_ids').defaultTo('[]');

    table.index('slug');
    table.index('year_start');
    table.index('year_end');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('wars');
  await knex.schema.dropTableIfExists('historical_events');
  await knex.schema.dropTableIfExists('historical_periods');
  await knex.raw('DROP TYPE IF EXISTS historical_era;');
}
