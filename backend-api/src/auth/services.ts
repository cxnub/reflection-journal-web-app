const db = require("../database/db-connection");
const dbTableName = "user_account";

function getUserAccountByEmail(email) {
  const sql = `SELECT * FROM ${dbTableName} WHERE email = ?`;
  return db.promise().query(sql, [email]);
}

function createUserAccount(email, hashedPassword, salt) {
  const sql = `INSERT INTO ${dbTableName} (email, hashed_password, salt) VALUES (?, ?, ?)`;
  return db.promise().query(sql, [email, hashedPassword, salt]);
}

module.exports = {
    getUserAccountByEmail,
    createUserAccount
};