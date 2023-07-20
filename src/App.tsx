import { Fragment, useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo"
import NewTodo from "./components/NewTodo";


function App() {
  // const TODOS = [
  //   new Todo("LEARN REACT"),
  //   new Todo("LEARN TYPESCRIPT")
  // ] 
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text)
    setTodos(prev => prev.concat(newTodo))
  }
  return (
    <Fragment>
      <NewTodo onAddText={addTodoHandler} />
      <Todos items={todos}/>
    </Fragment>
  );
}

export default App;
