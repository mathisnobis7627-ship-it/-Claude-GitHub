import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TYPE person_category AS ENUM (
      'philosopher',
      'scientist',
      'artist',
      'writer',
      'musician',
      'politician',
      'explorer',
      'inventor'
    );
  `);

  await knex.schema.createTable('persons', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('slug').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('full_name').notNullable();
    table.string('birth_date');
    table.string('death_date');
    table.string('birth_place');
    table.string('death_place');
    table.string('nationality');
    table.specificType('category', 'person_category').notNullable();
    table.string('subcategory');
    table.string('portrait_url');
    table.text('summary');
    table.text('biography_text');
    table.jsonb('notable_works').defaultTo('[]');
    table.jsonb('quotes').defaultTo('[]');
    table.string('era');
    table.timestamps(true, true);

    table.index('slug');
    table.index('category');
    table.index('nationality');
    table.index('era');
  });

  await knex.schema.createTable('person_contributions', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('person_id')
      .notNullable()
      .references('id')
      .inTable('persons')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('description');
    table.integer('year');
    table.string('domain');

    table.index('person_id');
    table.index('domain');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('person_contributions');
  await knex.schema.dropTableIfExists('persons');
  await knex.raw('DROP TYPE IF EXISTS person_category;');
}
