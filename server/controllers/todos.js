const getAllTodos = (req, res) => {
  res.status(200).json({ message: "GET /api/todo" });
};
const postTodo = (req, res) => {
  res.status(201).json({ message: "POST /api/todo" });
};
const deleteTodo = (req, res) => {
  res.status(200).json({ message: "DELETE /api/todo/:id" });
};
const updateTodo = (req, res) => {
  res.status(200).json({ message: "PUT /api/todo/:id" });
};

module.exports = {
  getAllTodos,
  postTodo,
  deleteTodo,
  updateTodo,
};
