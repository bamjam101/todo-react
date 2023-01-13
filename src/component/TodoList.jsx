import React, { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "./TodoApp";

const TodoList = () => {
  const todos = useContext(TodosContext);
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
