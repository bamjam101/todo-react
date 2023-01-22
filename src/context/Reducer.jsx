const TodosReducer = (todos, action) => {
  const { type } = action;
  const savedTodos = JSON.parse(localStorage.getItem("TODOS"));

  switch (type) {
    case "add":
      const { id, text } = action;
      const updatedTodos = [...todos, { id, text, done: false }];
      localStorage.setItem("TODOS", JSON.stringify(updatedTodos));
      return updatedTodos;
    case "change":
      const updatedTodo = action.todo;
      return todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          let todos = [];
          savedTodos.map((savedTodo) => {
            if (savedTodo.id == updatedTodo.id) {
              todos.push(updatedTodo);
            } else {
              todos.push(savedTodo);
            }
          });
          localStorage.setItem("TODOS", JSON.stringify(todos));
          return updatedTodo;
        } else {
          return todo;
        }
      });
    case "remove":
      const todoId = action.id;
      let retain = [];
      savedTodos.map((savedTodo) => {
        if (savedTodo.id != todoId) {
          retain.push(savedTodo);
        }
      });
      localStorage.setItem("TODOS", JSON.stringify(retain));
      return todos.filter((todo) => todo.id !== todoId);
  }
};

export default TodosReducer;
