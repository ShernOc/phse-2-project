import React from 'react';

const Search = ({ searchKey, setSearchKey, clearSearch }) => {
const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };
}

return(

  <div className='searchBar'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search for blog '
        value={searchKey}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);
export default Search;
