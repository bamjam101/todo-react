import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(text) {
    let nextId = 4;
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleTodoChange(updatedTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleTodoDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }
  return (
    <main className="container">
      <h1>Todos</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onTodoChange={handleTodoChange}
        onTodoDelete={handleTodoDelete}
      />
    </main>
  );
};

export default TodoApp;
