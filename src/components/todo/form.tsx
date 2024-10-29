// src/components/TodoForm.tsx
import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        data-cy="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa..."
        className="border p-2 flex-1 rounded-l"
      />
      <button
        data-cy="add-todo"
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;
