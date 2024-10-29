// src/components/TodoList.tsx
import React from "react";
import type { Todo } from ".";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  removeTodo: (index: number) => void;
}

function TodoList({ todos, toggleComplete, removeTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded"
        >
          <span
            data-cy="todo-item"
            onClick={() => toggleComplete(index)}
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
          <button
            data-cy="remove-todo"
            onClick={() => removeTodo(index)}
            className="text-red-500"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
