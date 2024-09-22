const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  postTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todos");

router.get("/", getAllTodos);
router.post("/", postTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
