import React from "react";

const Create = ({ newTodoTitle, setNewTodoTitle, handleCreateTodo }) => {
  return (
    <div className="create">
      <form className="create__form" onSubmit={handleCreateTodo}>
        <input
          type="text"
          id="createInput"
          className="create__input"
          placeholder="Create a New Todo..."
          value={newTodoTitle}
          onChange={(e) => {
            setNewTodoTitle(e.target.value);
          }}
        />
        <button
          type="submit"
          className="create__button button button--gradient"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
