import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ChatBot from './pages/chatbot';
import LandingPage from './pages/LandingPage';
import Graphs from './pages/Graphs';
import Search from './pages/Search';
import WebsiteGraph from './pages/WebsiteGraph';

function App() {
  const [carbonData, setCarbonData] = useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/graph" element={<Graphs />} />
          <Route path="/search" element={<Search onUpdateCarbonData={setCarbonData} />} />
          <Route path="/websitegraph" element={<WebsiteGraph data={carbonData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
