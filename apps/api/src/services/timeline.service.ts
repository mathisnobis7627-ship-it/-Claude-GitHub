import db from '../config/database';
import type { TimelineEvent, TimelinePeriod, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class TimelineService {
  async getEvents(query: PaginationQuery & { era?: string; category?: string }): Promise<PaginatedResponse<TimelineEvent>> {
    const page = query.page || 1;
    const limit = query.limit || 50;
    const offset = (page - 1) * limit;

    let baseQuery = db('timeline_events');
    let countQuery = db('timeline_events');

    if (query.era) {
      baseQuery = baseQuery.where({ era: query.era });
      countQuery = countQuery.where({ era: query.era });
    }

    if (query.category) {
      baseQuery = baseQuery.where({ category: query.category });
      countQuery = countQuery.where({ category: query.category });
    }

    const [{ count }] = await countQuery.count('* as count');
    const total = Number(count);

    const data = await baseQuery
      .select('*')
      .orderBy('year', 'asc')
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

  async getPeriods(): Promise<TimelinePeriod[]> {
    const periods = await db('timeline_periods')
      .select('*')
      .orderBy('start_year', 'asc');

    return periods;
  }

  async getEventById(id: number): Promise<TimelineEvent> {
    const event = await db('timeline_events').where({ id }).first();

    if (!event) {
      throw new AppError(`Timeline event not found: ${id}`, 404);
    }

    return event;
  }
}

export const timelineService = new TimelineService();
