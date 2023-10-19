// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import People from './People';
import Research from './Research';
import Publications from './Publications';
import AllNews from './AllNews';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/allnews" element={<AllNews />} />
      </Routes>
    </Router>
  );
};

export default App;
