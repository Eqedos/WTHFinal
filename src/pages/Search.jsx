// Search.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Search() {
  const [searchEndpoint, setSearchEndpoint] = useState('');

  const handleSearch = (endpoint) => {
    setSearchEndpoint(endpoint);
  };
  
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchEndpoint && <Card siteEndpoint={searchEndpoint} />}
    </div>
  );
}

export default Search;
