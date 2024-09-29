const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    res.status(200).json({
      status: "success",
      message: "All ToDos are retrieved successfully",
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to get all ToDos",
      error: error.message,
    });
  }
};
const createTodo = async (req, res) => {
  try {
    const createTodo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      message: "A ToDo was created successfully",
      todos: createTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to create ToDo",
      error: error.message,
    });
  }
};
const getOneTodo = async (req, res) => {
  try {
    const retrievedOneTodo = await Todo.findOne({ _id: req.params.id });

    if (!retrievedOneTodo) {
      return res.status(404).json({
        status: "failed",
        message: `_id: ${req.params.id} is not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "A ToDo was successfully retrieved",
      todos: retrievedOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to get a ToDo",
      error: error.message,
    });
  }
};
const updateTodo = async (req, res) => {
  try {
    const retrievedOneTodo = await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!retrievedOneTodo) {
      return res.status(404).json({
        status: "failed",
        message: `_id: ${req.params.id} is not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "A ToDo was successfully updated",
      todos: retrievedOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to update a ToDo",
      error: error.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const retrievedOneTodo = await Todo.findOneAndDelete({
      _id: req.params.id,
    });

    if (!retrievedOneTodo) {
      return res.status(404).json({
        status: "failed",
        message: `_id: ${req.params.id} is not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "A ToDo was successfully deleted",
      todos: retrievedOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to delete a ToDo",
      error: error.message,
    });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
};
