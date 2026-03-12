import db from '../config/database';
import type { SearchQuery, SearchResult, PaginatedResponse } from '../types';

export class SearchService {
  async search(query: SearchQuery): Promise<PaginatedResponse<SearchResult>> {
    const { q, type = 'all', category, page = 1, limit = 20 } = query;
    const offset = (page - 1) * limit;
    const searchTerm = `%${q.toLowerCase()}%`;

    const results: SearchResult[] = [];

    if (type === 'all' || type === 'countries') {
      const countries = await db('countries')
        .whereRaw('LOWER(name) LIKE ?', [searchTerm])
        .orWhereRaw('LOWER(official_name) LIKE ?', [searchTerm])
        .orWhereRaw('LOWER(capital) LIKE ?', [searchTerm])
        .select('id', 'name', 'code', 'continent')
        .limit(limit);

      results.push(
        ...countries.map((c) => ({
          type: 'country' as const,
          id: c.id,
          title: c.name,
          excerpt: `${c.continent} - ${c.code}`,
          slug: c.code.toLowerCase(),
          url: `/api/v1/countries/${c.code}`,
          relevance: c.name.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
        }))
      );
    }

    if (type === 'all' || type === 'persons') {
      let personsQuery = db('persons')
        .whereRaw('LOWER(first_name) LIKE ?', [searchTerm])
        .orWhereRaw('LOWER(last_name) LIKE ?', [searchTerm])
        .orWhereRaw("LOWER(first_name || ' ' || last_name) LIKE ?", [searchTerm]);

      if (category) {
        personsQuery = personsQuery.andWhere({ category });
      }

      const persons = await personsQuery
        .select('id', 'slug', 'first_name', 'last_name', 'category', 'nationality')
        .limit(limit);

      results.push(
        ...persons.map((p) => ({
          type: 'person' as const,
          id: p.id,
          title: `${p.first_name} ${p.last_name}`,
          excerpt: `${p.category} - ${p.nationality}`,
          slug: p.slug,
          url: `/api/v1/persons/${p.slug}`,
          relevance: `${p.first_name} ${p.last_name}`.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
        }))
      );
    }

    if (type === 'all' || type === 'articles') {
      let articlesQuery = db('articles')
        .where({ published: true })
        .andWhere(function () {
          this.whereRaw('LOWER(title) LIKE ?', [searchTerm])
            .orWhereRaw('LOWER(excerpt) LIKE ?', [searchTerm]);
        });

      if (category) {
        articlesQuery = articlesQuery.andWhere({ category });
      }

      const articles = await articlesQuery
        .select('id', 'slug', 'title', 'excerpt', 'category')
        .limit(limit);

      results.push(
        ...articles.map((a) => ({
          type: 'article' as const,
          id: a.id,
          title: a.title,
          excerpt: a.excerpt,
          slug: a.slug,
          url: `/api/v1/articles/${a.slug}`,
          relevance: a.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
        }))
      );
    }

    if (type === 'all' || type === 'events') {
      const events = await db('timeline_events')
        .whereRaw('LOWER(title) LIKE ?', [searchTerm])
        .orWhereRaw('LOWER(description) LIKE ?', [searchTerm])
        .select('id', 'title', 'description', 'year', 'era')
        .limit(limit);

      results.push(
        ...events.map((e) => ({
          type: 'event' as const,
          id: e.id,
          title: e.title,
          excerpt: `${e.year} ${e.era} - ${e.description.substring(0, 100)}`,
          url: `/api/v1/timeline/events/${e.id}`,
          relevance: e.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
        }))
      );
    }

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);

    const total = results.length;
    const paginatedResults = results.slice(offset, offset + limit);

    return {
      data: paginatedResults,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}

export const searchService = new SearchService();
