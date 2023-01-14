import React, { useState } from "react";
import { useDispatch, useTodos } from "../context/Context";

const AddTodo = () => {
  const todos = useTodos();
  let nextId = todos.length + 1;
  const dispatch = useDispatch();
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
          dispatch({
            type: "add",
            id: nextId++,
            text,
          });
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
