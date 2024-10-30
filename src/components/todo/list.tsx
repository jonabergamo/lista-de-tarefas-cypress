// src/components/TodoList.tsx
import React from "react";
import type { Todo } from ".";

import Item from "./item";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BrokenItem from "./broken-item";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  removeTodo: (index: number) => void;
}

function TodoList({ todos, toggleComplete, removeTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Item
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
        //   <BrokenItem
        //   index={index}
        //   todo={todo}
        //   toggleComplete={toggleComplete}
        //   removeTodo={removeTodo}
        // />
      ))}
    </ul>
  );
}

export default TodoList;
