import React from 'react';

import TodoListItem from '../TodoListItem';
import '../TodoListItem/TodoListItem.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, search }) => {
  const filteredItems = todos.filter(item => item.label.toLowerCase().includes(search.toLowerCase()))
  .map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
        {...itemProps }
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  console.log(filteredItems)
 
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
        {...itemProps }
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { search ? filteredItems : elements }
    </ul>
  );
};

export default TodoList;