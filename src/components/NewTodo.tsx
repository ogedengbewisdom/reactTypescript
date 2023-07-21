import React, { FormEvent, useContext, useRef } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react';
import { TodoContext } from '../store/todosContext';


const NewTodo:React.FC = (props) => {
    const todoCtx = useContext(TodoContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
    const enteredTodos = inputRef.current!.value;
    if (enteredTodos.trim().length === 0) {
        return
    } else {
        todoCtx.addTodo(enteredTodos)
    }
    }
  return (
    <form onSubmit={submitHandler}>
        <FormControl mt="1rem" mb="0.8rem">
            <FormLabel fontSize={"1.5rem"}>Enter Todo</FormLabel>
            <Input type='text'padding="1.4rem" boxShadow={"2px 2px 10px rgb(151, 152, 146)"} border={"1px solid rgb(195, 196, 184)"}  borderRadius={"5px"} ref={inputRef} />
        </FormControl>
        <Button type='submit' boxShadow={"2px 2px 10px rgb(151, 152, 146)"}>Add Todo</Button>
    </form>
  )
}

export default NewTodo