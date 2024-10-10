import React from "react";

function ModalEdit({
  editedTodo,
  setEditedTodo,
  cancelEdit,
  submitEditedTodo,
}) {
  return (
    <div className="modal">
      <div
        className="modal__overlay"
        aria-hidden="true"
        onClick={cancelEdit}
      ></div>
      <div className="modal__background">
        <div className="modal__wrapper">
          <div className="modal__upper">
            <h3 className="modal__title">Edit Todo</h3>
            <div className="modal__item">
              <label htmlFor="title" className="modal__item-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={editedTodo.title}
                onChange={(e) =>
                  setEditedTodo({
                    ...editedTodo,
                    title: e.target.value,
                  })
                }
                className="modal__todo-title"
              />
            </div>
            <div className="modal__item">
              <label htmlFor="completed" className="modal__item-label">
                Completed
              </label>
              <input
                type="checkbox"
                name="completed"
                id="completed"
                checked={editedTodo.completed}
                onChange={(e) =>
                  setEditedTodo({
                    ...editedTodo,
                    completed: e.target.checked,
                  })
                }
                className="modal__todo-completed"
              />
            </div>
          </div>
          <div className="modal__lower">
            <div className="button__group">
              <button
                onClick={cancelEdit}
                className="button button--gradient button--wide button--gray"
              >
                Cancel
              </button>
              <button
                onClick={submitEditedTodo}
                className="button button--gradient button--wide"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEdit;
