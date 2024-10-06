import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../src/assets/scss/style.scss";
import Header from "./components/Header";
import Create from "./components/Create";
import TaskList from "./components/TaskList";
import EditTodoModal from "./components/EditTodoModal";

function App() {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editedTodo, setEditedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all todos
  async function fetchTodos() {
    try {
      const response = await axios.get("/api/v1/todo");
      const todos = response.data;
      console.log(todos);

      setMessage(todos.message);
      setTodos(todos.todos);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  // Create a new todo
  async function handleCreateTodo(e) {
    e.preventDefault();
    if (!newTodoTitle) {
      return;
    }

    try {
      const response = await axios.post("/api/v1/todo", {
        title: newTodoTitle,
      });
      console.log(response.data);
      setNewTodoTitle("");
      fetchTodos();
    } catch (error) {
      console.log("Error creating todo: ", error);
    }
  }

  // Toggle completed status
  async function handleCompletedToggle(todo) {
    try {
      const response = await axios.put(`/api/v1/todo/${todo._id}`, {
        completed: !todo.completed,
      });
      console.log(response.data);
      fetchTodos();
    } catch (error) {
      console.log("Error updating completed: ", error);
    }
  }

  // Edit a todo
  async function handleEditTodo(todo) {
    console.log("Editing todo: ", todo);
    setEditedTodo({
      _id: todo._id,
      title: todo.title,
      completed: todo.completed,
    });
    setIsModalOpen(true);
  }
  useEffect(() => {
    console.log("Edited todo: ", editedTodo);
  }, [editedTodo]);

  function cancelEdit() {
    setEditedTodo({});
    setIsModalOpen(false);
  }

  async function submitEditedTodo(todo) {
    try {
      if (
        editedTodo._id === todo._id &&
        editedTodo.title === todo.title &&
        editedTodo.completed === todo.completed
      ) {
        return;
      }
      const response = await axios.put(
        `/api/v1/todo/${editedTodo._id}`,
        editedTodo
      );
      console.log(response.data);
      cancelEdit();
      fetchTodos();
    } catch (error) {
      console.log("Error updating todo: ", error);
    }
  }

  // Delete a todo
  async function handleDeleteTodo(todo) {
    try {
      const response = await axios.delete(`/api/v1/todo/${todo._id}`);
      console.log(response.data);
      fetchTodos();
    } catch (error) {
      console.log("Error deleting todo: ", error);
    }
  }

  // Fetch all todos on initial render
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="content">
        <Create
          newTodoTitle={newTodoTitle}
          setNewTodoTitle={setNewTodoTitle}
          handleCreateTodo={handleCreateTodo}
        />
        <TaskList
          todos={todos}
          handleCompletedToggle={handleCompletedToggle}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>

      {isModalOpen && editedTodo && (
        <EditTodoModal
          todos={todos}
          setIsModalOpen={setIsModalOpen}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          cancelEdit={cancelEdit}
          submitEditedTodo={submitEditedTodo}
        />
      )}
    </div>
  );
}

export default App;
