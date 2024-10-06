const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    res.status(200).json({
      status: "success",
      message: "All Todos are retrieved successfully",
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to get all Todos",
      error: error.message,
    });
  }
};
const createTodo = async (req, res) => {
  try {
    const createTodo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      message: "A Todo was created successfully",
      todos: createTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to create Todo",
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
      message: "A Todo was successfully retrieved",
      todos: retrievedOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to get a Todo",
      error: error.message,
    });
  }
};
const updateTodo = async (req, res) => {
  try {
    const updatedOneTodo = await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!updatedOneTodo) {
      return res.status(404).json({
        status: "failed",
        message: `_id: ${req.params.id} is not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "A Todo was successfully updated",
      todos: updatedOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to update a Todo",
      error: error.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const deletedOneTodo = await Todo.findOneAndDelete({
      _id: req.params.id,
    });

    if (!deletedOneTodo) {
      return res.status(404).json({
        status: "failed",
        message: `_id: ${req.params.id} is not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "A Todo was successfully deleted",
      todos: deletedOneTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Failed to delete a Todo",
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
