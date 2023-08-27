import React, { useState, useEffect } from 'react';
import '../styles/CardStyles.css';
import { Link } from 'react-router-dom';

function Card({ siteEndpoint, onUpdateCarbonData }) {
  const [carbonData, setCarbonData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/api/websitecarbon?url=';
    const fullUrl = `${apiUrl}${siteEndpoint}`;

    fetch(fullUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Retrieved JSON data:', data);
        setCarbonData(data);
        
        // Call the onUpdateCarbonData function with the new data
        if (onUpdateCarbonData) {
          onUpdateCarbonData(data);
      }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [siteEndpoint, onUpdateCarbonData]);

  const renderDataCard = (title, value) => (
    <div className="data-card">
      <h3 className="data-header">{title}</h3>
      <p className="data-content">{value}</p>
    </div>
  );

  const buttonStyle = {
    backgroundColor: '#191414',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    margin: '30px 0'
  };

  return (
    <div className="card">
      {carbonData ? (
        <>
          {renderDataCard("URL", carbonData.url)}
          {renderDataCard("Green Hosting", carbonData.green ? 'Yes' : 'No')}
          {renderDataCard("Bytes Transferred", carbonData.bytes)}
          {renderDataCard("Cleaner Than", carbonData.cleanerThan)}
          {renderDataCard("Energy", carbonData.statistics.energy)}
          {renderDataCard("c02 grid grams", carbonData.statistics.co2.grid.grams)}
          {renderDataCard("c02 grid litres", carbonData.statistics.co2.grid.litres)}
          {renderDataCard("c02 renewable grams", carbonData.statistics.co2.renewable.grams)}
          {renderDataCard("c02 renewable litres", carbonData.statistics.co2.renewable.litres)}
          {renderDataCard("adjusted bytes", carbonData.statistics.adjustedBytes)}

        </>
      ) : (
        <p>Loading data...</p>
      )}
      <Link to="/websitegraph">
        <button style={buttonStyle}>More Info</button>
      </Link>
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
