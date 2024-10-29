// src/components/TodoList.tsx
import React from "react";
import type { Todo } from ".";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  removeTodo: (index: number) => void;
}

function TodoList({ todos, toggleComplete, removeTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="flex items-center justify-center gap-2 ">
          <button
            onClick={() => toggleComplete(index)}
            className="flex items-center justify-between  p-2 bg-muted  rounded w-full"
          >
            <span
              data-cy="todo-item"
              className={`flex-1 cursor-pointer ${
                todo.completed ? "line-through text-muted-foreground" : ""
              }`}
            >
              {todo.text}
            </span>
          </button>
          <Button
            size="icon"
            variant="destructive"
            data-cy="remove-todo"
            onClick={() => removeTodo(index)}
          >
            <Trash />
          </Button>
        </li>

        // <button
        //   key={index}
        //   onClick={() => toggleComplete(index)}
        //   className="w-full"
        // >
        //   <li className="flex items-center justify-between mb-2 p-2 bg-muted w-full  rounded">
        //     <span
        //       data-cy="todo-item"
        //       className={`flex-1 cursor-pointer ${
        //         todo.completed ? "line-through text-muted-foreground" : ""
        //       }`}
        //     >
        //       {todo.text}
        //     </span>
        //     <button
        //       data-cy="remove-todo"
        //       onClick={() => removeTodo(index)}
        //       className="text-red-500"
        //     >
        //       Remover
        //     </button>
        //   </li>
        // </button>
      ))}
    </ul>
  );
}

export default TodoList;
