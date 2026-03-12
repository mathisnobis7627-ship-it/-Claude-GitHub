import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('search_index').del();

  // Index countries
  const countries = await knex('countries').select('id', 'name', 'capital', 'region', 'continent', 'political_summary', 'government_type');
  const countryEntries = countries.map((c: any) => {
    let preview = `${c.name} — Capitale : ${c.capital}. Région : ${c.region}. Continent : ${c.continent}.`;
    if (c.government_type) preview += ` Régime : ${c.government_type}.`;
    if (c.political_summary) preview += ` ${c.political_summary}`;
    return {
      entity_type: 'country',
      entity_id: c.id,
      title: c.name,
      content_preview: preview,
      category: 'geographie',
      tags: JSON.stringify([c.region, c.continent]),
    };
  });

  // Index persons
  const persons = await knex('persons').select('id', 'full_name', 'category', 'summary', 'nationality');
  const personEntries = persons.map((p: any) => ({
    entity_type: 'person',
    entity_id: p.id,
    title: p.full_name,
    content_preview: p.summary,
    category: p.category,
    tags: JSON.stringify([p.nationality, p.category]),
  }));

  // Index articles
  const articles = await knex('articles').select('id', 'title', 'summary', 'category', 'tags').where('published', true);
  const articleEntries = articles.map((a: any) => ({
    entity_type: 'article',
    entity_id: a.id,
    title: a.title,
    content_preview: a.summary,
    category: a.category,
    tags: a.tags,
  }));

  // Index events
  const events = await knex('historical_events').select('id', 'title', 'description', 'category');
  const eventEntries = events.map((e: any) => ({
    entity_type: 'event',
    entity_id: e.id,
    title: e.title,
    content_preview: e.description,
    category: e.category,
    tags: JSON.stringify([e.category]),
  }));

  // Index quizzes
  const quizzes = await knex('quizzes').select('id', 'title', 'description', 'category');
  const quizEntries = quizzes.map((q: any) => ({
    entity_type: 'quiz',
    entity_id: q.id,
    title: q.title,
    content_preview: q.description,
    category: q.category,
    tags: JSON.stringify([q.category]),
  }));

  // Index videos
  const videos = await knex('videos').select('id', 'title', 'description', 'category', 'tags');
  const videoEntries = videos.map((v: any) => ({
    entity_type: 'video',
    entity_id: v.id,
    title: v.title,
    content_preview: v.description,
    category: v.category,
    tags: v.tags,
  }));

  // Insert all entries (the trigger will auto-populate search_vector)
  const allEntries = [
    ...countryEntries,
    ...personEntries,
    ...articleEntries,
    ...eventEntries,
    ...quizEntries,
    ...videoEntries,
  ];

  if (allEntries.length > 0) {
    await knex('search_index').insert(allEntries);
  }
}
