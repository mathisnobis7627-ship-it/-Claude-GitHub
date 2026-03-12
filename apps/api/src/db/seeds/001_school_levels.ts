import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('school_levels').del();

  await knex('school_levels').insert([
    {
      name: '6ème',
      slug: '6eme',
      cycle: 'cycle3',
      sort_order: 1,
    },
    {
      name: '5ème',
      slug: '5eme',
      cycle: 'cycle4',
      sort_order: 2,
    },
    {
      name: '4ème',
      slug: '4eme',
      cycle: 'cycle4',
      sort_order: 3,
    },
    {
      name: '3ème',
      slug: '3eme',
      cycle: 'cycle4',
      sort_order: 4,
    },
    {
      name: 'Seconde',
      slug: 'seconde',
      cycle: 'lycee',
      sort_order: 5,
    },
    {
      name: 'Première',
      slug: 'premiere',
      cycle: 'lycee',
      sort_order: 6,
    },
    {
      name: 'Terminale',
      slug: 'terminale',
      cycle: 'lycee',
      sort_order: 7,
    },
  ]);
}
