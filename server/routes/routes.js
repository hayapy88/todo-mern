const express = require("express");

const router = express.Router();

// GET /todo
router.get("/todo", (req, res) => {
  res.status(200).send("GET /api/todo");
});

// POST /todo
router.post("/todo", (req, res) => {
  res.status(201).send("POST /api/todo");
});

// DELETE /todo/:id
router.delete("/todo/:id", (req, res) => {
  res.status(200).send("DELETE /api/todo/:id");
});
// PUT /todo/:id
router.put("/todo/:id", (req, res) => {
  res.status(200).send("PUT /api/todo/:id");
});

module.exports = router;
