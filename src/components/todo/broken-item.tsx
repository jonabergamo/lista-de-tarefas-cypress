export default function BrokenItem({
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
    <button
      key={index}
      onClick={() => toggleComplete(index)}
      className="w-full"
    >
      <li className="flex items-center justify-between mb-2 p-2 bg-muted w-full  rounded">
        <span
          data-cy="todo-item"
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-muted-foreground" : ""
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
    </button>
  );
}
