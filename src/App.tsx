
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todosContext";


function App() {
  // const TODOS = [
  //   new Todo("LEARN REACT"),
  //   new Todo("LEARN TYPESCRIPT")
  // ] 
  // const [todos, setTodos] = useState<Todo[]>([])

  // const addTodoHandler = (text: string) => {
  //   const newTodo = new Todo(text)
  //   setTodos(prev => [...prev, newTodo])
  // }
  // const removeHandler = (id: string) => {
  //   setTodos(prev => prev.filter(item => item.id !== id))
  // }
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
