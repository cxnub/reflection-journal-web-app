import connect from "../database/db-connection";
import userAccount from "../models/user-account";
const dbTableName = "user_account";

async function getUserAccountByEmail(email: string) {
  const conn = await connect();
  const sql = `SELECT * FROM ${dbTableName} WHERE email = ?`;
  return await conn.query(sql, [email]);
}

async function createUserAccount(email, hashedPassword, salt) {
  const conn = await connect();
  const sql = `INSERT INTO ${dbTableName} (email, hashed_password, salt) VALUES (?, ?, ?)`;
  return await conn.query(sql, [email, hashedPassword, salt]);
}

export { getUserAccountByEmail, createUserAccount };