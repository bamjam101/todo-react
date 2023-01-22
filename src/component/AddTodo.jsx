import React, { useState } from "react";
import { useDispatch, useTodos } from "../context/Context";

const AddTodo = () => {
  // const todos = useTodos();
  // let nextId = todos.length;
  let nextId;
  let savedIndex = parseInt(localStorage.getItem("NEXT_ID"));
  if (savedIndex) {
    nextId = savedIndex + 1;
    localStorage.setItem("NEXT_ID", nextId);
    console.log(nextId);
  } else {
    nextId = 1;
    localStorage.setItem("NEXT_ID", nextId);
  }
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
            id: nextId,
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
