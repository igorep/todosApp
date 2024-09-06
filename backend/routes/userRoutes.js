const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { poolUsers } = require("../db");

router.get("/:userId", (req, res) => {
  console.log("get user by id invoked!");
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.json(users);
});

router.get("/", async (req, res) => {
  try {
    const response = await poolUsers.query("SELECT * FROM users");
    res.json(response.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/createUser", async (req, res) => {
  try {
    const user = req.body;
    let id = uuidv4();
    const query = `
  INSERT INTO users (user_id, user_name, user_lastname, gender, active, email)
  VALUES ('${id}', '${user.first_name}', '${user.last_name}', '${
      user.gender
    }', ${true}, '${user.email}');
`;
    // await poolUsers.query("");
    const resault = await poolUsers.query(query);
    const createdUser = {
      user_id: id,
      user_name: user.first_name,
      user_lastname: user.last_name,
      gender: user.gender,
      active: true,
      email: user.email,
    };
    res.json(createdUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/updateUser", (req, res) => {
  console.log("updateUser invoked!");
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.json(users);
});

router.delete("/delete", async (req, res) => {
  const { users } = req.body;
  if (!Array.isArray(users) || users.length === 0) {
    return res.status(400).json({ error: "Invalid user IDs" });
  }

  try {
    const query = "DELETE FROM users WHERE user_id = ANY($1)";
    await poolUsers.query(query, [users]);
    debugger;
    res.status(200).json({ message: "Users deleted successfully" });
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
