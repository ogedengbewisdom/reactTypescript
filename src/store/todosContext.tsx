import React, {useState} from "react"
import Todo from "../models/todo";

export const TodoContext = React.createContext<{
    items: Todo[]; 
    addTodo: (text: string) => void; 
    removeTodo: (id: string) => void
}>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos(prev => [...prev, newTodo])
    }

    const removeTodoHandler = (id: string) => {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    const contextValue:{items: Todo[]; addTodo: (text: string) => void; removeTodo: (id: string) => void} = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
    return(
    <TodoContext.Provider value={contextValue}>
        {props.children}
    </TodoContext.Provider>
    )
}

export default TodosContextProvider
