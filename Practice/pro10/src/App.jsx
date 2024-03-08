// don't remove the export keyword here!
import Todo from "./Todo.jsx";
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      {DUMMY_TODOS.map((todo) => (
        <Todo content={todo} />
      ))}
    </div>
  );
}
