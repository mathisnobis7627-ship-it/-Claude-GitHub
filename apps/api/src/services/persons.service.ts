import db from '../config/database';
import type { Person, PersonCategory, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class PersonsService {
  async getAll(query: PaginationQuery): Promise<PaginatedResponse<Person>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;
    const sort = query.sort || 'last_name';
    const order = query.order || 'asc';

    const [{ count }] = await db('persons').count('* as count');
    const total = Number(count);

    const data = await db('persons')
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

  async getBySlug(slug: string): Promise<Person & { contributions: any[] }> {
    const person = await db('persons').where({ slug }).first();

    if (!person) {
      throw new AppError(`Person not found: ${slug}`, 404);
    }

    const contributions = await db('person_contributions')
      .where({ person_id: person.id })
      .orderBy('year', 'asc');

    return { ...person, contributions };
  }

  async getByCategory(
    category: PersonCategory,
    query: PaginationQuery
  ): Promise<PaginatedResponse<Person>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;

    const [{ count }] = await db('persons')
      .where({ category })
      .count('* as count');
    const total = Number(count);

    const data = await db('persons')
      .where({ category })
      .orderBy('last_name', 'asc')
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

export const personsService = new PersonsService();
