require("dotenv").config();

const { Pool } = require("pg");
const poolTodos = new Pool({
  user: process.env.USER,
  host: process.env.WINDOWS_HOST,
  database: process.env.DB_TODOS,
  password: process.env.PASS,
  port: 5432,
});

const poolUsers = new Pool({
  user: process.env.USER,
  host: process.env.WINDOWS_HOST,
  database: process.env.DB_USERS,
  password: process.env.PASS,
  port: 5432,
});

module.exports = {
  poolUsers,
  poolTodos,
};
