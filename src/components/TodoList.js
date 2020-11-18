import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Cofee"/></li>
            <li><TodoListItem 
            important
            label="Bild React App"/></li>
        </ul>
    )
}

export default TodoList;