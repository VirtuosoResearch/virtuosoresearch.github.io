// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import Group from './Group'; // Import the Group component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<Group />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
