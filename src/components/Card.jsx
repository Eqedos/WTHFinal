// Card.js
import React, { useState, useEffect } from 'react';

function Card({ siteEndpoint }) {
  const [carbonData, setCarbonData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/api/websitecarbon?url=';
    const fullUrl = `${apiUrl}${siteEndpoint}`;

    fetch(fullUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Retrieved JSON data:', data); 
        setCarbonData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [siteEndpoint]);

  return (
    <div className="card">
      <h2>Website Carbon Data</h2>
      {carbonData ? (
        <>
          <p><strong>URL:</strong> {carbonData.url}</p>
          <p><strong>Green Hosting:</strong> {carbonData.green ? 'Yes' : 'No'}</p>
          <p><strong>Bytes Transferred:</strong> {carbonData.bytes}</p>
          <p><strong>Cleaner Than:</strong> {carbonData.cleanerThan}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Card;
