const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { todosPool } = require("../db");

router.get("/:todoId", (req, res) => {
  const users = [
    { id: 1, text: "buy eggs", done: false },
    { id: 2, text: "buy milk", done: false },
  ];
  res.json(users);
});

router.post("/createTodo", (req, res) => {
  const users = [
    { id: 1, text: "buy eggs", done: false },
    { id: 2, text: "buy milk", done: false },
  ];
  res.json(users);
});

router.put("/updateTodo", (req, res) => {
  const users = [
    { id: 1, text: "buy eggs", done: false },
    { id: 2, text: "buy milk", done: false },
  ];
  res.json(users);
});

router.delete("/delete/todoId", (req, res) => {
  const users = [
    { id: 1, text: "buy eggs", done: false },
    { id: 2, text: "buy milk", done: false },
  ];
  res.json(users);
});

router.get("/", (req, res) => {
  const users = [
    { id: 1, text: "buy eggs", done: false },
    { id: 2, text: "buy milk", done: false },
  ];
  res.json(users);
});

module.exports = router;
