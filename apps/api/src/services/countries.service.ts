import db from '../config/database';
import type { Country, CountryGeography, CountryHistory, PaginatedResponse, PaginationQuery } from '../types';
import { AppError } from '../types';

export class CountriesService {
  async getAll(query: PaginationQuery): Promise<PaginatedResponse<Country>> {
    const page = query.page || 1;
    const limit = query.limit || 20;
    const offset = (page - 1) * limit;
    const sort = query.sort || 'name';
    const order = query.order || 'asc';

    const [{ count }] = await db('countries').count('* as count');
    const total = Number(count);

    const data = await db('countries')
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

  async getByCode(code: string): Promise<Country> {
    const country = await db('countries')
      .where({ code: code.toUpperCase() })
      .first();

    if (!country) {
      throw new AppError(`Country not found: ${code}`, 404);
    }

    return country;
  }

  async getGeography(code: string): Promise<CountryGeography> {
    const country = await this.getByCode(code);

    const geography = await db('country_geography')
      .where({ country_id: country.id })
      .first();

    if (!geography) {
      throw new AppError(`Geography data not found for country: ${code}`, 404);
    }

    return geography;
  }

  async getHistory(code: string): Promise<CountryHistory[]> {
    const country = await this.getByCode(code);

    const history = await db('country_history')
      .where({ country_id: country.id })
      .orderBy('start_year', 'asc');

    return history;
  }
}

export const countriesService = new CountriesService();
