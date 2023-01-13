import React, { createContext, useEffect, useReducer, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import todosReducer from "./todosReducer";

// const initialTodos = [
//   { id: 1, text: "Learn Javascript", done: true },
//   { id: 2, text: "Learn Tailwind", done: false },
//   { id: 3, text: "Learn React", done: false },
// ];

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

const TodoApp = () => {
  const [initialTodos, setInitialTodos] = useState([]);
  useEffect(() => {
    const savedTodos = localStorage.getItem("TODOS");
    if (savedTodos) {
      setInitialTodos(savedTodos);
    }
  }, []);
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        <main className="container">
          <h1>Todos</h1>
          <AddTodo />
          <TodoList />
        </main>
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default TodoApp;
