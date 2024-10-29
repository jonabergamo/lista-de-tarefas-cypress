import Calculator from "./components/calculator";
import TodoApp from "./components/todo";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col md:flex-row  items-start h-screen justify-center p-4 gap-4">
      <TodoApp />
      <Calculator />
    </div>
  );
}

export default App;
