import db from '../config/database';
import type { Article, ArticleCategory, ArticleSection, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class ArticlesService {
  async getAll(query: PaginationQuery & { category?: string }): Promise<PaginatedResponse<Article>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;
    const sort = query.sort || 'created_at';
    const order = query.order || 'desc';

    let countQuery = db('articles').where({ published: true });
    let baseQuery = db('articles').where({ published: true });

    if (query.category) {
      countQuery = countQuery.andWhere({ category: query.category });
      baseQuery = baseQuery.andWhere({ category: query.category });
    }

    const [{ count }] = await countQuery.count('* as count');
    const total = Number(count);

    const data = await baseQuery
      .select('id', 'slug', 'title', 'summary', 'category', 'subcategory', 'tags', 'author', 'cover_image_url', 'reading_time_minutes', 'difficulty_level', 'created_at')
      .orderBy(sort, order)
      .limit(limit)
      .offset(offset);

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getBySlug(slug: string): Promise<Article & { sections: ArticleSection[] }> {
    const article = await db('articles')
      .where({ slug, published: true })
      .first();

    if (!article) {
      throw new AppError(`Article not found: ${slug}`, 404);
    }

    const sections = await db('article_sections')
      .where({ article_id: article.id })
      .orderBy('sort_order', 'asc');

    return { ...article, sections };
  }

  async getByCategory(
    category: ArticleCategory,
    query: PaginationQuery
  ): Promise<PaginatedResponse<Article>> {
    return this.getAll({ ...query, category });
  }
}

export const articlesService = new ArticlesService();
