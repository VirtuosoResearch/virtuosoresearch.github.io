// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import People from './People';
import ResearchBlogs from './Research';
import Publications from './Publications';
import AllNews from './AllNews';
import Resources from './Resources';

import HealthcareBlog from './blogs/Healthcare';
import QuantamBlog from './blogs/Quantam';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/research" element={<ResearchBlogs />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/resources" element={<Resources />} />



        <Route path="/research/blog/healthcare" element={<HealthcareBlog />} />
        <Route path="/research/blog/quantam" element={<QuantamBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
