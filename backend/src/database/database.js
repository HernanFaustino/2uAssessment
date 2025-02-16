import Sequelize from "sequelize";
import {
  DATABASE_HOST,
  DATABASE_DB,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_DIALECT,
} from '../config/database';

export const sequelize = new Sequelize(
  DATABASE_DB,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: DATABASE_DIALECT,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    ssl: true,
    logging: false,
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        },
    }
  },
);

