import db from "../database/db-connection";
const dbTableName = "user_account";

async function getUserAccountByEmail(email) {
  const sql = `SELECT * FROM ${dbTableName} WHERE email = ?`;
  return db.query
}

async function createUserAccount(email, hashedPassword, salt) {
  const sql = `INSERT INTO ${dbTableName} (email, hashed_password, salt) VALUES (?, ?, ?)`;
  return db.query(sql, [email, hashedPassword, salt]);
}

export { getUserAccountByEmail, createUserAccount };