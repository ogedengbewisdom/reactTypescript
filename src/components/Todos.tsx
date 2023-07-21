import React, {useContext} from 'react'
import TodoList from './TodoList'
import classes from "./Todos.module.css"
import { TodoContext } from '../store/todosContext'

const Todos:React.FC= (props) => {
  const todoCtx = useContext(TodoContext)
  return (
    <ul className={classes.todos}>
        {
          todoCtx.items.map(item => 
          <TodoList 
          key={item.id} 
          text={item.text} 
          onRemove={todoCtx.removeTodo.bind(null, item.id)}
          />)
         }
  </ul>
  )
}

export default Todos