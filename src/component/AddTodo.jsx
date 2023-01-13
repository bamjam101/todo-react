import React, { useContext, useState } from "react";
import { TodosContext, TodosDispatchContext } from "./TodoApp";

// let nextId = 4;

const AddTodo = () => {
  const todos = useContext(TodosContext);
  let nextId = todos.length + 1;
  const dispatch = useContext(TodosDispatchContext);
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
