import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [siteEndpoint, setSiteEndpoint] = useState('');

  const handleSearch = () => {
    onSearch(siteEndpoint);
  };
  
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter site endpoint"
        value={siteEndpoint}
        onChange={(e) => setSiteEndpoint(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;