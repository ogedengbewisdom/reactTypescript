
import { ListItem } from '@chakra-ui/react';
const TodoList:React.FC<{text: string; onRemove: () => void}> = (props) => {
  return (
    <ListItem fontWeight="semibold" borderRadius="5px" boxShadow="2px 2px 5px rgb(195, 196, 184)" border="1px solid rgb(195, 196, 184)" margin="1rem" padding="0.6rem" onClick={props.onRemove}>{props.text}</ListItem>
  )
}

export default TodoList