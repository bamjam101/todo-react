import React, { useContext } from "react";
import { TodosDispatchContext } from "./TodoApp";

const Todo = ({ todo }) => {
  const dispatch = useContext(TodosDispatchContext);
  return (
    <>
      <input
        className="todo-checkbox-field"
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(event) => {
          dispatch({
            type: "change",
            todo: { ...todo, done: event.target.checked },
          });
        }}
      />
      <label htmlFor={`${todo.id}-done`}>{todo.text}</label>
      <span
        onClick={() => {
          dispatch({
            type: "remove",
            id: todo.id,
          });
        }}
        className="todo-delete-btn"
      >
        X
      </span>
    </>
  );
};

export default Todo;
