import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskList = ({
  isLoading,
  todos,
  handleCompletedToggle,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  const remainingTasks = todos
    ? todos.filter((todo) => !todo.completed).length
    : 0;
  return (
    <div className="tasklist">
      {isLoading || todos === null ? (
        <p>Loading...</p>
      ) : todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo._id} className="tasklist__item">
            <div className="tasklist__left">
              <input
                type="checkbox"
                className="tasklist__checkbox"
                checked={todo.completed}
                onChange={() => {
                  handleCompletedToggle(todo);
                }}
              />
              <p
                className={`tasklist__title ${
                  todo.completed ? "tasklist__title--completed" : ""
                }`}
              >
                {todo.title}
              </p>
            </div>
            <div className="tasklist__right">
              <button
                id={`editTaskButton-${todo._id}`}
                className="tasklist__action tasklist__action--edit"
                onClick={() => handleEditTodo(todo)}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  size="lg"
                  className="tasklist__action-icon tasklist__action-icon--edit"
                />
              </button>
              <button
                className="tasklist__action tasklist__action--delete"
                onClick={() => handleDeleteTodo(todo)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  size="lg"
                  className="tasklist__action-icon tasklist__action-icon--delete"
                />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="tasklist__empty">No tasks yet 😌</p>
      )}
      {!isLoading && todos && todos.length > 0 && (
        <div className="tasklist__remaining">
          <p className="tasklist__remaining-text">
            {remainingTasks === 0
              ? "Congrats! All tasks completed! 🎉"
              : `${remainingTasks} task${remainingTasks === 1 ? " " : "s "}
                remaining 📝`}
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
