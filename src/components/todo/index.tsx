// src/components/TodoApp.tsx
import React, { useState } from "react";
import TodoForm from "./form";
import TodoList from "./list";
import { Card, CardHeader, CardTitle } from "../ui/card";

export interface Todo {
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Card className="w-full mx-auto p-4 h-full">
      <CardHeader className="text-2xl font-bold mb-4 text-center">
        <CardTitle>Lista de Tarefas</CardTitle>
      </CardHeader>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </Card>
  );
}

export default TodoApp;
