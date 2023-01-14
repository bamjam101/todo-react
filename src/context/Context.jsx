import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import TodosReducer from "./Reducer";

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

const TodosContextProvider = ({ children }) => {
  const [initialTodos, setInitialTodos] = useState([]);
  const [todos, dispatch] = useReducer(TodosReducer, initialTodos);

  useEffect(() => {
    const savedTodos = localStorage.getItem("TODOS");
    if (savedTodos) {
      setInitialTodos(savedTodos);
    }
  }, []);
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
