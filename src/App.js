import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { filteredTodoListState } from "./todoAtoms";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(filteredTodoList);
  return (
    <div style={{ padding: "20px" }}>
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
