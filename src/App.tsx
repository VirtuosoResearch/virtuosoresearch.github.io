// src/App.tsx
import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import HomePage from './HomePage';
import People from './People';
import ResearchBlogs from './Blogs';
import PublicationsByYear from './PublicationsByYear';
import PublicationsByTopic from './PublicationsByTopic';
import AllNews from './AllNews';
import Resources from './Resources';
import MTLAndFinetuning from './MTLAndFinetuning';
import DDPMLearningNote from './blogs/DDPMLearningNote';
import './App.css'

const App: React.FC = () => {

  return (
    <HashRouter basename={process.env.PUBLIC_URL} >
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/blogs" element={<ResearchBlogs />} />
        <Route path="/publications" element={<PublicationsByYear />} />
        <Route path="/publications/year" element={<PublicationsByYear />} />
        <Route path="/publications/topic" element={<PublicationsByTopic />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mtlandfinetuning" element={<MTLAndFinetuning />} />
        <Route path="/blogs/blog/DDPMLearningNote" element={<DDPMLearningNote />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
