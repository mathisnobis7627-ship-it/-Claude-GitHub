import knex from 'knex';
import knexConfig from '../../knexfile';
import { config } from './index';

const environment = config.NODE_ENV;
const connectionConfig = knexConfig[environment];

if (!connectionConfig) {
  throw new Error(`No database configuration found for environment: ${environment}`);
}

const db = knex(connectionConfig);

export default db;
