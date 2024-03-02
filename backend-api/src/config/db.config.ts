import dotenv from 'dotenv';

dotenv.config();

const config = {
  HOST: process.env.DB_HOST,
  PORT: parseInt(process.env.DB_PORT),
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  DIALECT: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default config;
