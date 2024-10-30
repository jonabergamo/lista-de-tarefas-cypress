import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export default function Item({
  index,
  toggleComplete,
  removeTodo,
  todo,
}: {
  index: number;
  toggleComplete: (index: number) => void;
  removeTodo: (index: number) => void;
  todo: { text: string; completed: boolean };
}) {
  return (
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
  );
}
