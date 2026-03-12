import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('persons', (table) => {
    table.text('historical_importance');
    table.text('anecdote');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('persons', (table) => {
    table.dropColumn('historical_importance');
    table.dropColumn('anecdote');
  });
}
