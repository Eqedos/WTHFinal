import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Search({ onUpdateCarbonData }) {
  const [searchEndpoint, setSearchEndpoint] = useState('');

  const handleSearch = (endpoint) => {
    setSearchEndpoint(endpoint);
  };
  
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchEndpoint && <Card siteEndpoint={searchEndpoint} onUpdateCarbonData={onUpdateCarbonData}/>}
    </div>
  );
}

export default Search;
