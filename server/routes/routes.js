const express = require("express");

const router = express.Router();

// GET /todo
router.get("/", (req, res) => {
  res.status(200).json({ message: "GET /api/todo" });
});

// POST /todo
router.post("/", (req, res) => {
  res.status(201).json({ message: "POST /api/todo" });
});

// DELETE /todo/:id
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "DELETE /api/todo/:id" });
});
// PUT /todo/:id
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "PUT /api/todo/:id" });
});

module.exports = router;
