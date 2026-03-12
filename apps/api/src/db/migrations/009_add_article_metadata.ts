import type { Knex } from 'knex';

/**
 * Adds a JSONB `metadata` column to articles for storing rich pedagogical content:
 * - definitions: key terms with simple definitions
 * - schema_pedagogique: visual learning aids (comparisons, tables, timelines)
 * - faits_importants: key facts to remember
 * - chronologie: ordered dates with events
 * - anecdote: engaging story to capture attention
 * - videos_educatives: links to reliable educational videos
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('articles', (table) => {
    table.jsonb('metadata').defaultTo('{}');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('articles', (table) => {
    table.dropColumn('metadata');
  });
}
