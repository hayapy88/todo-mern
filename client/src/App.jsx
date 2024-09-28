import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("/api/v1/todo");
        const todos = await res.json();

        setMessage(todos.message);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }
    fetchTodos();
  }, []);
  return (
    <div className="text-center">
      <h1>MERN ToDo App</h1>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
