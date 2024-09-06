const { Pool } = require("pg");
const poolTodos = new Pool({
  user: "igorep",
  host: process.env.WINDOWS_HOST,
  database: "todosDB",
  password: "wkqaqw5EP!",
  port: 5432,
});

const poolUsers = new Pool({
  user: "igorep",
  host: process.env.WINDOWS_HOST,
  database: "usersDB",
  password: "wkqaqw5EP!",
  port: 5432,
});

module.exports = {
  poolUsers,
  poolTodos,
};
