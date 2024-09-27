const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getOneTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
