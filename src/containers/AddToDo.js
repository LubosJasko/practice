import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, requestOptionPost, NOTES_API } from '../actions';

const AddTodo = ({ dispatch }) => {
    const [input, setInput] = useState('')
    const [inputPlaceholder, setInputPlaceholder] = useState('Add Todo')

    const handleInput = () => {
        if (!input.trim()) {
            return
        }
        dispatch(addTodo(input))
        setInputPlaceholder('Last todo: ' + input)
        setInput('')
    }

    const onPostTodo = () => {
        addNewTodo();
    }

    const addNewTodo = () => (
        fetch(NOTES_API.POST_NOTE, requestOptionPost({"title": input}))
            .then (response => response.json())
            .then (data => { 
                dispatch(addTodo(data.title));
                setInput('');
            })
        
    )

    return (
        <div>
            <form>
                <input type='text'
                    placeholder={inputPlaceholder}
                    value={input}
                    onChange={e => setInput(e.target.value)} />
                <button type='button' style={{ margin: '4px' }}
                    onClick={() => { handleInput() }}>Add Todo</button>
                <button type='button' style={{ margin: '4px' }}
                    onClick={() => { onPostTodo() }}>Post Add</button>
            </form>
        AddTodo
        </div>
    )
}

export default connect()(AddTodo);