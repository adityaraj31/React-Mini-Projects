import { useState } from 'react';
import "../Styles.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => {
            todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10),
            })
        })

        setInput('')
    }

    return (
        <div className='container'>
            
            <input
                type='text'
                placeholder='New Todo'
                value={input}
                onChange={(e) => {setInput(e.target.value)}}
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({text, id}) => {
                    <li className='todo' key={id}>
                        <span>{text}</span>
                        <button className='close' onClick={() => removeTodo(id)}>x</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Todo;