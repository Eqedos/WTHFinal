import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WebsiteComparisonGraph = ({ websites }) => {
  const parameters = [
    "bytes",
    "cleanerThan",
    "statistics.energy",
    "statistics.co2.grid.grams",
    "statistics.co2.grid.litres",
    "statistics.co2.renewable.grams",
    "statistics.co2.renewable.litres",
    "statistics.adjustedBytes"
  ];

  const parameterLabels = {
    bytes: "Bytes",
    cleanerThan: "Cleaner Than",
    "statistics.energy": "Energy",
    "statistics.co2.grid.grams": "CO2 Grid Grams",
    "statistics.co2.grid.litres": "CO2 Grid Litres",
    "statistics.co2.renewable.grams": "CO2 Renewable Grams",
    "statistics.co2.renewable.litres": "CO2 Renewable Litres",
    "statistics.adjustedBytes": "Adjusted Bytes"
  };

  const colors = ["#00C853", "#FF5722", "#2979FF", "#FFC107", "#FF9800", "#9C27B0", "#607D8B", "#3F51B5"];

  return (
    <div className="bar-charts-container">
      {parameters.reduce((rows, param, index) => {
        if (index % 2 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(param);
        return rows;
      }, []).map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((param, index) => (
            <div key={index} className="bar-chart">
              <h3>{parameterLabels[param]}</h3>
              <BarChart width={400} height={300} data={websites}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="url" angle={-45} textAnchor="end" interval={0} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={param} fill={colors[(rowIndex * row.length + index) % colors.length]} />
              </BarChart>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WebsiteComparisonGraph;
