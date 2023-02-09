import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput("")
        }
    }, [setInput, editTodo]);

    const  onInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleOnKeyPress = e => {
        if(e.key === 'Enter') {
            onInputChange();
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };

    return (
        <form 
            onSubmit={onFormSubmit}
            className="form"
        >
            <input 
                type="text"
                placeholder="할일을 입력하세요."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
                onKeyPress={handleOnKeyPress}
            />
            <button 
                className="button-add"
                type="submit">
                    {editTodo ? "수정" : "추가"}
            </button>
        </form>
    )
}

export default Form;