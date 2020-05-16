import React from 'react';

const SearchBox = props => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder='Search monsters...'
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;
