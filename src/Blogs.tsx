import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './ResearchBlogs.css';

const ResearchBlogs: React.FC = () => {
    return (
        <div>
        <Header />
            <div className="blog-container">
                {/* <h1>Posts:</h1>
                <Link reloadDocument to="/blogs/blog/healthcare">
                    <h2>AI in Healthcare: Revolutionizing Patient Care with Smart Algorithms</h2>
                </Link>
                <p>John Doe, 2023</p> */}
                <Link reloadDocument to="/blogs/blog/AlgorithmicReasoningNote">
                    <h2>Learning Hierarchical Networks for Algorithmic Reasoning</h2>
                </Link>
                <p>Dongyue Li and Hongyang Zhang, Apr 2026</p>
                <Link reloadDocument to="/blogs/blog/MMTraCENote">
                    <h2>Learning Multimodal Embeddings for Traffic Accident Prediction and Causal Estimation</h2>
                </Link>
                <p>Michael Zhang, Dec 2025</p>
                <Link reloadDocument to="/blogs/blog/EnsembleLoRANote">
                    <h2>Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets</h2>
                </Link>
                <p>Michael Zhang, August 2025</p>
                <Link reloadDocument to="/blogs/blog/NoteJune">
                    <h2>AY reflection</h2>
                </Link>
                <p>Ryan Zhang, August 2025</p>
                <Link reloadDocument to="/blogs/blog/DDPMLearningNote">
                    <h2>Denoising Diffusion Probabilistic Models</h2>
                </Link>
                <p>Jinhong Yu, December 2023</p>
            </div>
        </div>
    );
};

export default ResearchBlogs;
