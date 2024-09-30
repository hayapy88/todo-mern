import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="text-center">
      <h1>MERN ToDo App</h1>
      <input type="text" className="border" />
      <button type="submit" className="border" onClick={createTodo}>
        Create
      </button>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo._id}>
              <input
                type="checkbox"
                className="relative before:content-[''] before:absolute before:-left-7 before:-top-4 before:w-6 before:h-6 before:rounded-full before:border before:border-gray-900 before:bg-white before:cursor-pointer before:checked:bg-blue-500 before:checked:border-transparent before:checked:border-0 before:checked:text-white after:checked:absolute after:checked:-left-6 after:checked:-top-2 after:checked:w-4 after:checked:h-2 after:checked:border-l-2 after:checked:border-b-2 after:checked:border-white after:checked:-rotate-45"
              />
              {todo.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
