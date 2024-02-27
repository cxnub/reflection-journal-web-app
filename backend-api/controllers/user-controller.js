const db = require("../routes/db-connection");
const dbTableName = "user_profile";

/**
 * Get all users
 */
exports.getAllUsers = async (_req, res) => {
  const sql = `SELECT * FROM ${dbTableName}`;
  try {
    const results = await db.promise().query(sql);
    res.status(200).json(results[0]);
  } catch (error) {
    console.error("Error executing MySQL query: " + error.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
