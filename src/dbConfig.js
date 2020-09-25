// erxternal database settings+credentials
// those are stored in codesandbox.io server secrets settings
// if you fork this repo you have to add your own elephant sql access data

const { Pool } = require("pg");

const dbConnection = new Pool({
  // store those values as server secrets (env) on codesandboxie
  // see: https://codesandbox.io/docs/secrets

  user: process.env.ELEPHANT_SQL_USER,
  password: process.env.ELEPHANT_SQL_PW,
  host: process.env.ELEPHANT_SQL_HOST,
  database: process.env.ELEPHANT_SQL_DB,
  port: Number(process.env.ELEPHANT_SQL_DB)
});

module.exports = dbConnection;
