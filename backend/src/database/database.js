import Sequelize from "sequelize";
import {
  DATABASE_HOST,
  DATABASE_DB,
  DATABASE_USER,
  DATABASE_PASSWORD,
} from '../config/database';

export const sequelize = new Sequelize(
  DATABASE_DB,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
);