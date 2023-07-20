import { FormEvent, useRef } from "react"
import classes from "./NewTodo.module.css"
const NewTodo: React.FC<{onAddText: (text: string) => void}> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = inputRef.current!.value;
        if(enteredText.trim().length === 0) {
            return;
        } else {
            props.onAddText(enteredText)
        }
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo</label>
            <input type="text" id="text" ref={inputRef} required />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo