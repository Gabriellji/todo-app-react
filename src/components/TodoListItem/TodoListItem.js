import React, { Component } from 'react';
import './TodoListItem.css'

const TodoListItem = (props) => {
  const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = props;
  let classNames = "todo-list-item";

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important'
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}>
        {label}
      </span>

      <button
        onClick={onToggleImportant}
        type="button"
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button
        onClick={onDeleted}
        type="button"
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  )
}

export default TodoListItem;