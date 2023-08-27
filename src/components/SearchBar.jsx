import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [siteEndpoint, setSiteEndpoint] = useState('');

  const handleSearch = () => {
    onSearch(siteEndpoint);
  };
  
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter Website URL"
        value={siteEndpoint}
        onChange={(e) => setSiteEndpoint(e.target.value)}
      />
      <button onClick={handleSearch} style={{ backgroundColor: '#191414', color: 'white' }} >Search</button>
    </div>
  );
}

export default SearchBar;