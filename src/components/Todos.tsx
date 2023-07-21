import React, {useContext} from 'react'
import TodoList from './TodoList'
import { TodoContext } from '../store/todosContext'
import { List } from '@chakra-ui/react'

const Todos:React.FC= (props) => {
  const todoCtx = useContext(TodoContext)
  return (
    <List fontWeight="semibold" borderRadius="5px" boxShadow="2px 2px 5px rgb(195, 196, 184)" border="1px solid rgb(195, 196, 184)" margin="1rem" padding="0.6rem">
        {
          todoCtx.items.map(item => 
          <TodoList 
          key={item.id} 
          text={item.text} 
          onRemove={todoCtx.removeTodo.bind(null, item.id)}
          />)
         }
  </List>
  )
}

export default Todos