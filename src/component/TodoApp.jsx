import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodosContextProvider from "../context/Context";

const TodoApp = () => {
  return (
    <TodosContextProvider>
      <main className="container">
        <h1>Todos</h1>
        <AddTodo />
        <TodoList />
      </main>
    </TodosContextProvider>
  );
};

export default TodoApp;
