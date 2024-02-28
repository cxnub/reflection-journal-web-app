const config = {
  HOST: "localhost",
  PORT: 3306,
  USER: "root",
  PASSWORD: "password",
  DB: "reflection-journal",
  DIALECT: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default config;
module.exports = config;