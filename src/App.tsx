
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todosContext";
import { Container } from "@chakra-ui/react";


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
      <Container mt="2rem" width="60%" bg={"rgb(247, 248, 217)"} border={"1px solid rgb(195, 196, 184)"} borderRadius={"5px"} boxShadow={"2px 2px 5px rgb(151, 152, 146)"}>
      <NewTodo />
      <Todos />
      </Container>
    </TodosContextProvider>
  );
}

export default App;
