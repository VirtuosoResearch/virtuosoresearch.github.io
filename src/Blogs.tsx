// src/Blogs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TitleAndMission.css';

/* The blog list, shown as a box on the home page. To add a post, see
   CreateBlogPost.md. */
const Blogs: React.FC = () => {
    return (
        <div className="section">
            <h3>Blogs</h3>
            <ul>
                <li>
                    <Link reloadDocument to="/blogs/blog/AlgorithmicReasoningNote">On (Multitask) Algorithmic Reasoning</Link>, Dongyue Li and Hongyang Zhang, April 2026
                </li>
                <li>
                    <Link reloadDocument to="/blogs/blog/MMTraCENote">Learning Multimodal Embeddings for Traffic Accident Prediction and Causal Estimation</Link>, Michael Zhang, December 2025
                </li>
                <li>
                    <Link reloadDocument to="/blogs/blog/EnsembleLoRANote">Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets</Link>, Michael Zhang, August 2025
                </li>
                <li>
                    <Link reloadDocument to="/blogs/blog/NoteJune">AY reflection</Link>, Ryan Zhang, August 2025
                </li>
                <li>
                    <Link reloadDocument to="/blogs/blog/DDPMLearningNote">Denoising Diffusion Probabilistic Models</Link>, Jinhong Yu, December 2023
                </li>
            </ul>
        </div>
    );
};

export default Blogs;
