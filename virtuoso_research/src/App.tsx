// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import People from './People';
import ResearchBlogs from './Research';
import Publications from './Publications';
import AllNews from './AllNews';
import Resources from './Resources';
import EmbroidBlog from './blogs/Embroid';

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



        <Route path="/blog/embroid" element={<EmbroidBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
