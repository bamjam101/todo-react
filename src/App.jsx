import "./App.css";
import TodoApp from "./component/TodoApp";

function App() {
  const initialTodos = [
    { id: 1, text: "Learn Javascript", done: true },
    { id: 2, text: "Learn Tailwind", done: false },
    { id: 3, text: "Learn React", done: false },
  ];
  return (
    <div className="App">
      <TodoApp todos={initialTodos} />
    </div>
  );
}

export default App;
