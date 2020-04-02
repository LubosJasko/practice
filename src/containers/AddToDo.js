import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


const AddTodo = ({ dispatch }) => {
    // let input;

    const [input, setInput] = useState('Add todo')

    const handleInput = () => {
        setInput('')
    }

    return (
        <div>
            <form
                onSubmit={
                    e => {
                        e.preventDefault();

                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addTodo(input.value));
                        handleInput();
                    }
                }>
                <input type='text' ref={el => (setInput(el))} />
                <button type='submit'> Add Todo</button>
            </form>
        AddTodo
        </div>
    )
}

export default connect()(AddTodo);