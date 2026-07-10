// src/App.tsx
import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import People from './People';
import ResearchBlogs from './Blogs';
import Talks from './Talks';
import PublicationsByYear from './PublicationsByYear';
import PublicationsByTopic from './PublicationsByTopic';
import AllNews from './AllNews';
import Resources from './Resources';
import Outreach from './Outreach';
import MTLAndFinetuning from './MTLAndFinetuning';
import DDPMLearningNote from './blogs/DDPMLearningNote';
import EnsembleLoRANote from './blogs/EnsembleLoRANote';
import AlgorithmicReasoningNote from './blogs/AlgorithmicReasoningNote';
import NoteJune from './blogs/NoteJune';
import MMTraCENote from './blogs/MMTraCENote'
import './App.css'

const App: React.FC = () => {

  return (
    <HashRouter basename={process.env.PUBLIC_URL} >
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/people" element={<People />} />
        <Route path="/blogs" element={<ResearchBlogs />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/publications" element={<PublicationsByYear />} />
        <Route path="/publications/year" element={<PublicationsByYear />} />
        <Route path="/publications/topic" element={<PublicationsByTopic />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mtlandfinetuning" element={<MTLAndFinetuning />} />
        <Route path="/blogs/blog/DDPMLearningNote" element={<DDPMLearningNote />} />
        <Route path="/blogs/blog/EnsembleLoRANote" element={<EnsembleLoRANote />} />
        <Route path="/blogs/blog/AlgorithmicReasoningNote" element={<AlgorithmicReasoningNote />} />
        <Route path="/blogs/blog/NoteJune" element={<NoteJune />} />
        <Route path="/blogs/blog/MMTraCENote" element={<MMTraCENote />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
