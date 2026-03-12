import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const commonConfig: Partial<Knex.Config> = {
  client: 'pg',
  migrations: {
    directory: './src/migrations',
    extension: 'ts',
  },
  seeds: {
    directory: './src/seeds',
    extension: 'ts',
  },
  pool: {
    min: 2,
    max: 10,
  },
};

const config: Record<string, Knex.Config> = {
  development: {
    ...commonConfig,
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || 'atlas_dev',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    },
    debug: true,
  },

  staging: {
    ...commonConfig,
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || 'atlas_staging',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 20,
    },
  },

  production: {
    ...commonConfig,
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || 'atlas_production',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 5,
      max: 30,
    },
  },
};

export default config;
