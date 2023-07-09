import React from 'react';

const SearchBar = ({ handleSearch, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleSearch} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
