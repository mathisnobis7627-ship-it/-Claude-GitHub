import db from '../config/database';
import type { HistoricalEvent, HistoricalPeriod, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class TimelineService {
  async getAll(query: PaginationQuery & { era?: string; period_id?: string }): Promise<{
    periods: HistoricalPeriod[];
    events: PaginatedResponse<HistoricalEvent>;
  }> {
    const page = query.page || 1;
    const limit = query.limit || 50;
    const offset = (page - 1) * limit;

    // Get periods
    const periods = await db('historical_periods')
      .select('*')
      .orderBy('year_start', 'asc');

    // Get events with optional filters
    let baseQuery = db('historical_events');
    let countQuery = db('historical_events');

    if (query.era) {
      const periodIds = await db('historical_periods')
        .where({ era: query.era })
        .select('id');
      const ids = periodIds.map((p: { id: string }) => p.id);
      baseQuery = baseQuery.whereIn('period_id', ids);
      countQuery = countQuery.whereIn('period_id', ids);
    }

    if (query.period_id) {
      baseQuery = baseQuery.where({ period_id: query.period_id });
      countQuery = countQuery.where({ period_id: query.period_id });
    }

    const [{ count }] = await countQuery.count('* as count');
    const total = Number(count);

    const data = await baseQuery
      .select('*')
      .orderBy('year', 'asc')
      .limit(limit)
      .offset(offset);

    return {
      periods,
      events: {
        data,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    };
  }

  async getPeriods(): Promise<HistoricalPeriod[]> {
    return db('historical_periods')
      .select('*')
      .orderBy('year_start', 'asc');
  }

  async getEventById(id: string): Promise<HistoricalEvent> {
    const event = await db('historical_events').where({ id }).first();

    if (!event) {
      throw new AppError(`Timeline event not found: ${id}`, 404);
    }

    return event;
  }
}

export const timelineService = new TimelineService();
