import { useEffect, useState } from "react";
import axios from "axios";
import "../src/assets/scss/style.scss";

function App() {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo() {
    console.log("Create todo");
  }

  useEffect(() => {
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
    fetchTodos();
  }, []);
  return (
    <div className="page">
      <div className="header">
        <h1 className="header__title">MERN ToDo App</h1>
      </div>
      <div className="content">
        <div className="create">
          <form className="create__form">
            <input type="text" className="create__input" />
            <button
              type="submit"
              className="create__button"
              onClick={createTodo}
            >
              Create
            </button>
          </form>
        </div>

        <div className="tasklist">
          {todos.map((todo) => {
            return (
              <div key={todo._id} className="tasklist__item">
                <input type="checkbox" className="tasklist__checkbox" />
                <p className="tasklist__name">{todo.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
