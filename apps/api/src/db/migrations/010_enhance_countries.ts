import type { Knex } from 'knex';

/**
 * Enrichit la table countries avec des données politiques et économiques,
 * et crée les tables de jonction country_events et country_quizzes
 * pour lier les pays aux événements historiques et aux quiz.
 */
export async function up(knex: Knex): Promise<void> {
  // Ajouter colonnes politiques et économiques à countries
  await knex.schema.alterTable('countries', (table) => {
    table.string('government_type');
    table.text('political_summary');
    table.bigInteger('gdp_usd');
    table.decimal('hdi', 4, 3);
    table.jsonb('metadata').defaultTo('{}');
  });

  // Table de jonction pays ↔ événements historiques
  await knex.schema.createTable('country_events', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('country_id')
      .notNullable()
      .references('id')
      .inTable('countries')
      .onDelete('CASCADE');
    table
      .uuid('event_id')
      .notNullable()
      .references('id')
      .inTable('historical_events')
      .onDelete('CASCADE');
    table.string('relevance');

    table.unique(['country_id', 'event_id']);
    table.index('country_id');
    table.index('event_id');
  });

  // Table de jonction pays ↔ quiz
  await knex.schema.createTable('country_quizzes', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table
      .uuid('country_id')
      .notNullable()
      .references('id')
      .inTable('countries')
      .onDelete('CASCADE');
    table
      .uuid('quiz_id')
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('CASCADE');

    table.unique(['country_id', 'quiz_id']);
    table.index('country_id');
    table.index('quiz_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('country_quizzes');
  await knex.schema.dropTableIfExists('country_events');

  await knex.schema.alterTable('countries', (table) => {
    table.dropColumn('metadata');
    table.dropColumn('hdi');
    table.dropColumn('gdp_usd');
    table.dropColumn('political_summary');
    table.dropColumn('government_type');
  });
}
