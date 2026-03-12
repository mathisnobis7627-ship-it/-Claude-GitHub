import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TYPE search_entity_type AS ENUM (
      'country',
      'person',
      'article',
      'event',
      'lesson',
      'quiz',
      'video'
    );
  `);

  await knex.schema.createTable('search_index', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.specificType('entity_type', 'search_entity_type').notNullable();
    table.uuid('entity_id').notNullable();
    table.string('title').notNullable();
    table.text('content_preview');
    table.specificType('search_vector', 'tsvector');
    table.string('category');
    table.jsonb('tags').defaultTo('[]');
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.index('entity_type');
    table.index('entity_id');
    table.index('category');
    table.unique(['entity_type', 'entity_id']);
  });

  // Create GIN index on the tsvector column for full-text search
  await knex.raw(`
    CREATE INDEX idx_search_index_search_vector
    ON search_index
    USING GIN (search_vector);
  `);

  // Create trigger function to auto-update search_vector from title + content_preview
  await knex.raw(`
    CREATE OR REPLACE FUNCTION search_index_update_vector()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.search_vector :=
        setweight(to_tsvector('french', COALESCE(NEW.title, '')), 'A') ||
        setweight(to_tsvector('french', COALESCE(NEW.content_preview, '')), 'B');
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `);

  await knex.raw(`
    CREATE TRIGGER trg_search_index_update_vector
    BEFORE INSERT OR UPDATE ON search_index
    FOR EACH ROW
    EXECUTE FUNCTION search_index_update_vector();
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP TRIGGER IF EXISTS trg_search_index_update_vector ON search_index;');
  await knex.raw('DROP FUNCTION IF EXISTS search_index_update_vector();');
  await knex.schema.dropTableIfExists('search_index');
  await knex.raw('DROP TYPE IF EXISTS search_entity_type;');
}
