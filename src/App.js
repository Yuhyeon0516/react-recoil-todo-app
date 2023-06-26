import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState } from "./todoAtoms";
import TodoItem from "./components/TodoItem";

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <div style={{ padding: "20px" }}>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
