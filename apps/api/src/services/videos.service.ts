import db from '../config/database';
import type { Video, VideoChapter, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class VideosService {
  async getAll(query: PaginationQuery & { category?: string }): Promise<PaginatedResponse<Video>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;
    const sort = query.sort || 'created_at';
    const order = query.order || 'desc';

    let countQuery = db('videos');
    let baseQuery = db('videos');

    if (query.category) {
      countQuery = countQuery.where({ category: query.category });
      baseQuery = baseQuery.where({ category: query.category });
    }

    const [{ count }] = await countQuery.count('* as count');
    const total = Number(count);

    const data = await baseQuery
      .select('*')
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

  async getById(id: string): Promise<Video & { chapters: VideoChapter[] }> {
    const video = await db('videos').where({ id }).first();

    if (!video) {
      throw new AppError(`Video not found: ${id}`, 404);
    }

    const chapters = await db('video_chapters')
      .where({ video_id: id })
      .orderBy('sort_order', 'asc');

    return { ...video, chapters };
  }
}

export const videosService = new VideosService();
