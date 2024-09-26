const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  postTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

router.get("/", getAllTodos);
router.post("/", postTodo);
router.get("/:id", getOneTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
