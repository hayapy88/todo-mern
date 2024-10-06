import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskList = ({
  todos,
  handleCompletedToggle,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="tasklist">
      {todos.map((todo) => {
        return (
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
              <p className="tasklist__title">{todo.title}</p>
            </div>
            <div className="tasklist__right">
              <button
                id={`editTaskButton-${todo._id}`}
                className="tasklist__action tasklist__action--edit"
                onClick={() => handleEditTodo(todo)}
              >
                <FontAwesomeIcon icon={faEdit} size="lg" />
              </button>
              <button
                className="tasklist__action tasklist__action--delete"
                onClick={() => handleDeleteTodo(todo)}
              >
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
