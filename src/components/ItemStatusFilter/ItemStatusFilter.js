import React, { Component } from 'react';

import './ItemStatusFilter.css';
class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn btn-info' : 'btn btn-outline-secondary';
      return (
        <button
        onClick={() => onFilterChange(name)}
          key={name}
          type="button"
          className={clazz}>{label}</button>
      )
    });

    return (
      <div className="btn-group">
        {
          buttons
        }
      </div>
    );
  }
};

export default ItemStatusFilter;