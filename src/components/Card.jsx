import React, { useState, useEffect } from 'react';
import '../styles/CardStyles.css';


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

  const renderDataCard = (title, value) => (
    <div className="data-card">
      <h3 className="data-header">{title}</h3>
      <p className="data-content">{value}</p>
      <button style={buttonStyle}>More Info</button>
    </div>
  );
  const buttonStyle = {
    backgroundColor: '#191414',
    color: 'white',
    padding: '5px 8px',  
    fontSize: '0.8em',  
    border: 'none',
    cursor: 'pointer'
  };
  

  return (
    <div className="card">
      {carbonData ? (
        <>
          {renderDataCard("URL", carbonData.url)}
          {renderDataCard("Green Hosting", carbonData.green ? 'Yes' : 'No')}
          {renderDataCard("Bytes Transferred", carbonData.bytes)}
          {renderDataCard("Cleaner Than", carbonData.cleanerThan)}
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '16px',
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '200px',
  display: 'inline-block'  
};

export default Card;
