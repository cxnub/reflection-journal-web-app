const CONFIG = require("../config.json");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: CONFIG.host,
  port: CONFIG.port,
  user: CONFIG.user,
  password: CONFIG.password,
  database: CONFIG.database,
});

// Test Connection
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected To DB");
});

module.exports = connection;
