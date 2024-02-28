import dbConfig from '../config/db.config';
import {createPool, Pool} from 'mysql2/promise';

var globalPool: Pool | undefined = undefined;

async function connect(): Promise <Pool> {

  // If the pool was already created, return it instead of creating a new one.
  if(typeof globalPool !== 'undefined') {
    return globalPool;
  }

  // If we have gotten this far, the pool doesn't exist, so lets create one.
  globalPool = await createPool({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  return globalPool;
}

export default connect;
