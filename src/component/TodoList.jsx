import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoChange, onTodoDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li className="todo-item" key={todo.id}>
            <Todo todo={todo} onChange={onTodoChange} onDelete={onTodoDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
