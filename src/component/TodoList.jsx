import React from "react";
import { useTodos } from "../context/Context";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useTodos();
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li className="todo-item" key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
