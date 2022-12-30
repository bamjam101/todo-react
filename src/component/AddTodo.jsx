import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  return (
    <div className="new-todo-field">
      <input
        className="todo-input-field"
        type="text"
        name="newTodo"
        id="newTodo"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        className="add-todo-btn"
        onClick={() => {
          onAddTodo(text);
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
