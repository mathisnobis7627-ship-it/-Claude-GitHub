import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('countries', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    table.string('official_name');
    table.string('code_iso2', 2).notNullable().unique();
    table.string('code_iso3', 3).notNullable().unique();
    table.string('capital');
    table.string('region');
    table.string('subregion');
    table.string('continent');
    table.bigInteger('population').defaultTo(0);
    table.decimal('area_km2', 14, 2);
    table.jsonb('languages').defaultTo('{}');
    table.jsonb('currencies').defaultTo('{}');
    table.string('flag_url');
    table.string('coat_of_arms_url');
    table.string('map_url');
    table.decimal('latitude', 10, 7);
    table.decimal('longitude', 10, 7);
    table.jsonb('borders').defaultTo('[]');
    table.jsonb('timezones').defaultTo('[]');
    table.timestamps(true, true);

    table.index('name');
    table.index('region');
    table.index('subregion');
    table.index('continent');
  });

  await knex.schema.createTable('country_geography', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('country_id')
      .notNullable()
      .references('id')
      .inTable('countries')
      .onDelete('CASCADE');
    table.string('climate');
    table.string('terrain');
    table.jsonb('natural_resources').defaultTo('[]');
    table.jsonb('land_use').defaultTo('{}');
    table.string('elevation_highest');
    table.string('elevation_lowest');
    table.decimal('coastline_km', 10, 2);
    table.text('description_text');

    table.index('country_id');
  });

  await knex.schema.createTable('country_history', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('country_id')
      .notNullable()
      .references('id')
      .inTable('countries')
      .onDelete('CASCADE');
    table.string('period').notNullable();
    table.string('title').notNullable();
    table.text('content');
    table.integer('year_start');
    table.integer('year_end');
    table.integer('sort_order').defaultTo(0);

    table.index('country_id');
    table.index('sort_order');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('country_history');
  await knex.schema.dropTableIfExists('country_geography');
  await knex.schema.dropTableIfExists('countries');
}
