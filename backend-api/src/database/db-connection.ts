import mysql2 from 'mysql2/promise';
import dbConfig from '../config/db.config';

const pool = mysql2.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// test the connection
pool.query('SELECT 1 + 1 AS solution', (error, results, _fields) => {
  if (error) {
    console.error("Error connecting to MySQL: " + error.stack);
    return;
  }
  console.log("Connected to MySQL as id " + results[0].solution);
});

export default pool;