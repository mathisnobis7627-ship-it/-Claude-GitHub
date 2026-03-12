import db from '../config/database';
import type { Video, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class VideosService {
  async getAll(query: PaginationQuery): Promise<PaginatedResponse<Video>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;
    const sort = query.sort || 'created_at';
    const order = query.order || 'desc';

    const [{ count }] = await db('videos').count('* as count');
    const total = Number(count);

    const data = await db('videos')
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

  async getById(id: number): Promise<Video> {
    const video = await db('videos').where({ id }).first();

    if (!video) {
      throw new AppError(`Video not found: ${id}`, 404);
    }

    return video;
  }

  async getByTopic(
    topic: string,
    query: PaginationQuery
  ): Promise<PaginatedResponse<Video>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;

    const [{ count }] = await db('videos')
      .where({ topic })
      .count('* as count');
    const total = Number(count);

    const data = await db('videos')
      .where({ topic })
      .orderBy('created_at', 'desc')
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

export const videosService = new VideosService();
