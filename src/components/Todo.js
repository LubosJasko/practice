import React from 'react';

const Todo = ({ onClick, onDoubleClick, completed, text }) => (
    <li
    onClick={onClick}
    onDoubleClick = {onDoubleClick}
    style={{textDecoration: completed ? 'line-through': 'none'}}>
        {text}
    </li>
);

export default Todo;