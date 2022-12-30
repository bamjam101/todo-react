import React from "react";

const Todo = ({ todo, onChange, onDelete }) => {
  return (
    <>
      <input
        className="todo-checkbox-field"
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(event) => {
          onChange({ ...todo, done: event.target.checked });
        }}
      />
      <label htmlFor={`${todo.id}-done`}>{todo.text}</label>
      <span onClick={() => onDelete(todo.id)} className="todo-delete-btn">
        X
      </span>
    </>
  );
};

export default Todo;
