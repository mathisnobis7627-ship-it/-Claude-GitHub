import db from '../config/database';
import type { Article, ArticleCategory, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class ArticlesService {
  async getAll(query: PaginationQuery): Promise<PaginatedResponse<Article>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;
    const sort = query.sort || 'published_at';
    const order = query.order || 'desc';

    const [{ count }] = await db('articles')
      .where({ published: true })
      .count('* as count');
    const total = Number(count);

    const data = await db('articles')
      .select('id', 'slug', 'title', 'excerpt', 'category', 'tags', 'author', 'cover_image_url', 'reading_time_minutes', 'published_at', 'created_at')
      .where({ published: true })
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

  async getBySlug(slug: string): Promise<Article> {
    const article = await db('articles')
      .where({ slug, published: true })
      .first();

    if (!article) {
      throw new AppError(`Article not found: ${slug}`, 404);
    }

    return article;
  }

  async getByCategory(
    category: ArticleCategory,
    query: PaginationQuery
  ): Promise<PaginatedResponse<Article>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;

    const [{ count }] = await db('articles')
      .where({ category, published: true })
      .count('* as count');
    const total = Number(count);

    const data = await db('articles')
      .select('id', 'slug', 'title', 'excerpt', 'category', 'tags', 'author', 'cover_image_url', 'reading_time_minutes', 'published_at', 'created_at')
      .where({ category, published: true })
      .orderBy('published_at', 'desc')
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
}

export const articlesService = new ArticlesService();
