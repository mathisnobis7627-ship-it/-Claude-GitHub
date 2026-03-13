import db from '../config/database';
import type {
  SearchQuery,
  SearchResult,
  SearchSuggestion,
  SearchEntityType,
  PaginatedResponse,
} from '../types';

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Build a PostgreSQL prefix-match tsquery from user input */
function toTsQuery(raw: string): string {
  const tokens = raw
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 0)
    .map((t) => t.replace(/[^a-zA-ZÀ-ÿ0-9]/g, ''));

  if (tokens.length === 0) return '';
  // Each token gets prefix matching (:*) and they are ANDed together
  return tokens.map((t) => `${t}:*`).join(' & ');
}

/** ILIKE pattern for simple prefix/contains matching (fallback) */
function ilike(term: string): string {
  return `%${term.toLowerCase().replace(/[%_]/g, '')}%`;
}

// ── Service ──────────────────────────────────────────────────────────────────

export class SearchService {
  /**
   * Full search with filters and pagination.
   */
  async search(query: SearchQuery): Promise<PaginatedResponse<SearchResult>> {
    const {
      q,
      type = 'all',
      category,
      country,
      period,
      era,
      personality,
      page = 1,
      limit = 20,
    } = query;
    const offset = (page - 1) * limit;
    const searchTerm = ilike(q);
    const tsq = toTsQuery(q);

    const results: SearchResult[] = [];

    // ── Countries ─────────────────────────────────────────────────────────
    if (type === 'all' || type === 'countries') {
      let qb = db('countries')
        .where(function () {
          this.whereRaw('LOWER(name) LIKE ?', [searchTerm])
            .orWhereRaw('LOWER(official_name) LIKE ?', [searchTerm])
            .orWhereRaw('LOWER(capital) LIKE ?', [searchTerm]);
        });

      if (country) {
        qb = qb.andWhere(function () {
          this.where('code_iso2', country.toUpperCase())
            .orWhere('code_iso3', country.toUpperCase());
        });
      }

      const rows = await qb
        .select('id', 'name', 'official_name', 'code_iso2', 'code_iso3', 'capital', 'continent', 'flag_url')
        .limit(limit);

      results.push(
        ...rows.map((c) => ({
          type: 'country' as const,
          id: c.id,
          title: c.name,
          excerpt: [c.capital, c.continent].filter(Boolean).join(' — '),
          slug: c.code_iso3?.toLowerCase() ?? c.code_iso2?.toLowerCase(),
          url: `/pays/${(c.code_iso3 ?? c.code_iso2).toLowerCase()}`,
          image: c.flag_url ?? undefined,
          relevance: c.name.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
          meta: { continent: c.continent, capital: c.capital },
        })),
      );
    }

    // ── Persons (personalities) ───────────────────────────────────────────
    if (type === 'all' || type === 'persons') {
      let qb = db('persons').where(function () {
        this.whereRaw('LOWER(first_name) LIKE ?', [searchTerm])
          .orWhereRaw('LOWER(last_name) LIKE ?', [searchTerm])
          .orWhereRaw("LOWER(first_name || ' ' || last_name) LIKE ?", [searchTerm]);
      });

      if (category) {
        qb = qb.andWhere({ category });
      }
      if (personality) {
        qb = qb.andWhereRaw("LOWER(first_name || ' ' || last_name) LIKE ?", [ilike(personality)]);
      }
      if (era) {
        qb = qb.andWhere({ era });
      }

      const rows = await qb
        .select('id', 'slug', 'first_name', 'last_name', 'category', 'nationality', 'era', 'portrait_url', 'birth_date', 'death_date')
        .limit(limit);

      results.push(
        ...rows.map((p) => {
          const fullName = `${p.first_name} ${p.last_name}`;
          return {
            type: 'person' as const,
            id: p.id,
            title: fullName,
            excerpt: [p.category, p.nationality, p.era].filter(Boolean).join(' — '),
            slug: p.slug,
            url: `/personnalites/${p.slug}`,
            image: p.portrait_url ?? undefined,
            relevance: fullName.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
            meta: {
              category: p.category,
              nationality: p.nationality,
              era: p.era,
              birth_date: p.birth_date,
              death_date: p.death_date,
            },
          };
        }),
      );
    }

    // ── Articles ──────────────────────────────────────────────────────────
    if (type === 'all' || type === 'articles') {
      let qb = db('articles')
        .where({ published: true })
        .andWhere(function () {
          this.whereRaw('LOWER(title) LIKE ?', [searchTerm])
            .orWhereRaw('LOWER(summary) LIKE ?', [searchTerm]);
        });

      if (category) {
        qb = qb.andWhere({ category });
      }

      const rows = await qb
        .select('id', 'slug', 'title', 'summary', 'category', 'cover_image_url', 'difficulty_level')
        .limit(limit);

      results.push(
        ...rows.map((a) => ({
          type: 'article' as const,
          id: a.id,
          title: a.title,
          excerpt: a.summary ?? '',
          slug: a.slug,
          url: `/encyclopedie/${a.slug}`,
          image: a.cover_image_url ?? undefined,
          relevance: a.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
          meta: { category: a.category, difficulty: a.difficulty_level },
        })),
      );
    }

    // ── Timeline events ──────────────────────────────────────────────────
    if (type === 'all' || type === 'events') {
      let qb = db('timeline_events as te')
        .join('historical_periods as hp', 'te.period_id', 'hp.id')
        .where(function () {
          this.whereRaw('LOWER(te.title) LIKE ?', [searchTerm])
            .orWhereRaw('LOWER(te.description) LIKE ?', [searchTerm]);
        });

      if (period) {
        qb = qb.andWhereRaw('LOWER(hp.name) LIKE ?', [ilike(period)]);
      }
      if (era) {
        qb = qb.andWhere('hp.era', era);
      }

      const rows = await qb
        .select(
          'te.id',
          'te.title',
          'te.description',
          'te.year',
          'te.date_display',
          'te.image_url',
          'hp.name as period_name',
          'hp.era',
        )
        .limit(limit);

      results.push(
        ...rows.map((e) => ({
          type: 'event' as const,
          id: e.id,
          title: e.title,
          excerpt: [e.date_display ?? e.year, e.period_name, e.description?.substring(0, 120)]
            .filter(Boolean)
            .join(' — '),
          url: `/chronologie#event-${e.id}`,
          image: e.image_url ?? undefined,
          relevance: e.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
          meta: { year: e.year, era: e.era, period: e.period_name },
        })),
      );
    }

    // ── Lessons ───────────────────────────────────────────────────────────
    if (type === 'all' || type === 'lessons') {
      let qb = db('curriculum_lessons as cl')
        .join('curriculum_chapters as cc', 'cl.chapter_id', 'cc.id')
        .where(function () {
          this.whereRaw('LOWER(cl.title) LIKE ?', [searchTerm])
            .orWhereRaw('LOWER(cl.summary) LIKE ?', [searchTerm]);
        });

      const rows = await qb
        .select('cl.id', 'cl.title', 'cl.summary', 'cc.title as chapter_title', 'cc.slug as chapter_slug')
        .limit(limit);

      results.push(
        ...rows.map((l) => ({
          type: 'lesson' as const,
          id: l.id,
          title: l.title,
          excerpt: [l.chapter_title, l.summary?.substring(0, 120)].filter(Boolean).join(' — '),
          url: `/programme/${l.chapter_slug}`,
          relevance: l.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
          meta: { chapter: l.chapter_title },
        })),
      );
    }

    // ── Quizzes ───────────────────────────────────────────────────────────
    if (type === 'all' || type === 'quizzes') {
      let qb = db('quizzes').where(function () {
        this.whereRaw('LOWER(title) LIKE ?', [searchTerm])
          .orWhereRaw('LOWER(description) LIKE ?', [searchTerm]);
      });

      if (category) {
        qb = qb.andWhere({ category });
      }

      const rows = await qb
        .select('id', 'title', 'slug', 'description', 'category', 'difficulty_level', 'cover_image_url')
        .limit(limit);

      results.push(
        ...rows.map((qz) => ({
          type: 'quiz' as const,
          id: qz.id,
          title: qz.title,
          excerpt: qz.description ?? '',
          slug: qz.slug,
          url: `/quiz/${qz.slug ?? qz.id}`,
          image: qz.cover_image_url ?? undefined,
          relevance: qz.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
          meta: { category: qz.category, difficulty: qz.difficulty_level },
        })),
      );
    }

    // ── Videos ────────────────────────────────────────────────────────────
    if (type === 'all' || type === 'videos') {
      let qb = db('videos').where(function () {
        this.whereRaw('LOWER(title) LIKE ?', [searchTerm])
          .orWhereRaw('LOWER(description) LIKE ?', [searchTerm]);
      });

      if (category) {
        qb = qb.andWhere({ category });
      }

      const rows = await qb
        .select('id', 'title', 'slug', 'description', 'category', 'thumbnail_url')
        .limit(limit);

      results.push(
        ...rows.map((v) => ({
          type: 'video' as const,
          id: v.id,
          title: v.title,
          excerpt: v.description?.substring(0, 120) ?? '',
          slug: v.slug,
          url: `/videos/${v.slug ?? v.id}`,
          image: v.thumbnail_url ?? undefined,
          relevance: v.title.toLowerCase().startsWith(q.toLowerCase()) ? 1 : 0.5,
          meta: { category: v.category },
        })),
      );
    }

    // Sort by relevance (prefix matches first), then alphabetically
    results.sort((a, b) => b.relevance - a.relevance || a.title.localeCompare(b.title, 'fr'));

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

  /**
   * Fast suggestions endpoint — lightweight query for autocomplete.
   * Searches across countries, persons, articles, events, quizzes, videos
   * with prefix matching and returns a flat list sorted by relevance.
   */
  async suggest(q: string, maxResults = 6): Promise<SearchSuggestion[]> {
    const prefix = ilike(q);
    const startsWithBonus = q.toLowerCase();

    // Run all queries in parallel for speed
    const [countries, persons, articles, events, quizzes, videos] = await Promise.all([
      db('countries')
        .where(function () {
          this.whereRaw('LOWER(name) LIKE ?', [prefix])
            .orWhereRaw('LOWER(capital) LIKE ?', [prefix]);
        })
        .select('id', 'name', 'code_iso3', 'code_iso2', 'flag_url')
        .limit(3),

      db('persons')
        .where(function () {
          this.whereRaw('LOWER(first_name) LIKE ?', [prefix])
            .orWhereRaw('LOWER(last_name) LIKE ?', [prefix])
            .orWhereRaw("LOWER(first_name || ' ' || last_name) LIKE ?", [prefix]);
        })
        .select('id', 'slug', 'first_name', 'last_name', 'portrait_url')
        .limit(3),

      db('articles')
        .where({ published: true })
        .andWhere(function () {
          this.whereRaw('LOWER(title) LIKE ?', [prefix]);
        })
        .select('id', 'slug', 'title', 'cover_image_url')
        .limit(3),

      db('timeline_events')
        .whereRaw('LOWER(title) LIKE ?', [prefix])
        .select('id', 'title', 'image_url')
        .limit(2),

      db('quizzes')
        .whereRaw('LOWER(title) LIKE ?', [prefix])
        .select('id', 'slug', 'title', 'cover_image_url')
        .limit(2),

      db('videos')
        .whereRaw('LOWER(title) LIKE ?', [prefix])
        .select('id', 'slug', 'title', 'thumbnail_url')
        .limit(2),
    ]);

    const suggestions: (SearchSuggestion & { _score: number })[] = [];

    for (const c of countries) {
      const code = (c.code_iso3 ?? c.code_iso2).toLowerCase();
      suggestions.push({
        type: 'country',
        id: c.id,
        title: c.name,
        slug: code,
        url: `/pays/${code}`,
        image: c.flag_url ?? undefined,
        _score: c.name.toLowerCase().startsWith(startsWithBonus) ? 1 : 0.5,
      });
    }

    for (const p of persons) {
      const fullName = `${p.first_name} ${p.last_name}`;
      suggestions.push({
        type: 'person',
        id: p.id,
        title: fullName,
        slug: p.slug,
        url: `/personnalites/${p.slug}`,
        image: p.portrait_url ?? undefined,
        _score: fullName.toLowerCase().startsWith(startsWithBonus) ? 1 : 0.5,
      });
    }

    for (const a of articles) {
      suggestions.push({
        type: 'article',
        id: a.id,
        title: a.title,
        slug: a.slug,
        url: `/encyclopedie/${a.slug}`,
        image: a.cover_image_url ?? undefined,
        _score: a.title.toLowerCase().startsWith(startsWithBonus) ? 1 : 0.5,
      });
    }

    for (const e of events) {
      suggestions.push({
        type: 'event',
        id: e.id,
        title: e.title,
        url: `/chronologie#event-${e.id}`,
        image: e.image_url ?? undefined,
        _score: e.title.toLowerCase().startsWith(startsWithBonus) ? 1 : 0.5,
      });
    }

    for (const qz of quizzes) {
      suggestions.push({
        type: 'quiz',
        id: qz.id,
        title: qz.title,
        slug: qz.slug,
        url: `/quiz/${qz.slug ?? qz.id}`,
        image: qz.cover_image_url ?? undefined,
        _score: qz.title.toLowerCase().startsWith(startsWithBonus) ? 1 : 0.5,
      });
    }

    for (const v of videos) {
      suggestions.push({
        type: 'video',
        id: v.id,
        title: v.title,
        slug: v.slug,
        url: `/videos/${v.slug ?? v.id}`,
        image: v.thumbnail_url ?? undefined,
        _score: v.title.toLowerCase().startsWith(startsWithBonus) ? 1 : 0.5,
      });
    }

    // Sort by score desc, then alphabetically
    suggestions.sort((a, b) => b._score - a._score || a.title.localeCompare(b.title, 'fr'));

    // Strip internal _score before returning
    return suggestions.slice(0, maxResults).map(({ _score, ...rest }) => rest);
  }

  /**
   * Get available filter values for the search UI (eras, categories, etc.)
   */
  async getFilters(): Promise<{
    eras: { value: string; label: string }[];
    categories: string[];
    continents: string[];
  }> {
    const [eras, categories, continents] = await Promise.all([
      db('historical_periods')
        .distinct('era')
        .select('era')
        .whereNotNull('era')
        .then((rows) =>
          rows.map((r) => ({
            value: r.era,
            label: eraLabels[r.era] ?? r.era,
          })),
        ),
      db('articles')
        .distinct('category')
        .select('category')
        .whereNotNull('category')
        .then((rows) => rows.map((r) => r.category)),
      db('countries')
        .distinct('continent')
        .select('continent')
        .whereNotNull('continent')
        .then((rows) => rows.map((r) => r.continent)),
    ]);

    return { eras, categories, continents };
  }
}

const eraLabels: Record<string, string> = {
  prehistoire: 'Préhistoire',
  antiquite: 'Antiquité',
  moyen_age: 'Moyen Âge',
  renaissance: 'Renaissance',
  temps_modernes: 'Temps modernes',
  epoque_contemporaine: 'Époque contemporaine',
};

export const searchService = new SearchService();
