import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({ onChange, search }) => {
  return (
    <input type="text"
      value={search}
      onChange={onChange}
      className="form-control search-input"
      placeholder="type to search" />
  );
};

export default SearchPanel;