import React from "react";

const todosReducer = (todos, action) => {
  const { type } = action;
  switch (type) {
    case "add":
      const { id, text } = action;
      return [...todos, { id, text, done: false }];
    case "change":
      const updatedTodo = action.todo;
      return todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      });
    case "remove":
      const todoId = action.id;
      return todos.filter((todo) => todo.id !== todoId);
  }
};

export default todosReducer;
