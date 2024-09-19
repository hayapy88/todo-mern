import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getAllTodo() {
      try {
        const res = await fetch("/api/v1/todo");
        const todo = await res.json();

        setMessage(todo.message);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }
    getAllTodo();
  }, []);
  return (
    <div>
      <h1>MERN ToDo</h1>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
