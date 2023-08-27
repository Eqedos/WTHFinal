import React from 'react';
import WebsiteComparisonGraph from '../components/WebsiteComparisonGraph';

const websites = [
  {
    "url": "https://www.wholegraindigital.com/",
    "green": true,
    "bytes": 443854,
    "cleanerThan": 0.83,
    "statistics": {
      "adjustedBytes": 335109.77,
      "energy": 0.0005633320052642376,
      "co2": {
        "grid": {
          "grams": 0.26758270250051286,
          "litres": 0.14882949913078525
        },
        "renewable": {
          "grams": 0.24250694721722435,
          "litres": 0.13488236404222018
        }
      }
    }
  },
  
];

const WebsiteGraph = ({ data }) => {
    const allWebsites = data ? [data, ...websites] : websites;
    console.log("All Websites Data:", allWebsites);
    return (
      <div>
        <h2>Website Comparison Graph</h2>
        <WebsiteComparisonGraph websites={allWebsites} />
      </div>
    );
  };

export default WebsiteGraph;
