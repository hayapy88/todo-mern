import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../src/assets/scss/style.scss";

function App() {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

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

  async function createTodo(e) {
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

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="page">
      <div className="header">
        <h1 className="header__title">MERN ToDo App</h1>
      </div>
      <div className="content">
        <div className="create">
          <form className="create__form" onSubmit={createTodo}>
            <input
              type="text"
              id="createInput"
              className="create__input"
              placeholder="Create a New ToDo..."
              value={newTodoTitle}
              onChange={(e) => {
                setNewTodoTitle(e.target.value);
              }}
            />
            <button type="submit" className="create__button">
              Create
            </button>
          </form>
        </div>

        <div className="tasklist">
          {todos.map((todo) => {
            return (
              <div key={todo._id} className="tasklist__item">
                <div className="tasklist__left">
                  <input
                    type="checkbox"
                    className="tasklist__checkbox"
                    checked={todo.completed}
                  />
                  <p className="tasklist__name">{todo.title}</p>
                </div>
                <div className="tasklist__right">
                  <button className="tasklist__action">
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                  </button>
                  <button className="tasklist__action">
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
