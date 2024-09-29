import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);

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
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo._id}>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
