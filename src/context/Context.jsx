import React, { createContext, useContext, useReducer, useState } from "react";
import TodosReducer from "./Reducer";

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

const TodosContextProvider = ({ children }) => {
  const [initialTodos, setInitialTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("TODOS"));
    return savedTodos || [];
  });
  const [todos, dispatch] = useReducer(TodosReducer, initialTodos);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
export const useDispatch = () => useContext(TodosDispatchContext);

export default TodosContextProvider;
