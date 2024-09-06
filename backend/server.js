const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
const corsOptions = require("./cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

const users = {},
  todos = {};

app.use(bodyParser.json());
app.use(cors(corsOptions));

// main routes
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
