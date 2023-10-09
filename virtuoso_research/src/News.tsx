// src/News.tsx
import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <div className="news">
            <h2>News</h2>
            <div className="news-item">
                <p>April, 2023</p>
                <p>Dr. Tirthak Patel successfully defended his Ph.D. thesis and graduated with his Ph.D.! He’ll be soon on his way to his faculty position at Rice University.</p>
            </div>
            <div className="news-item">
                <p>March 1, 2023</p>
                <p>William Cutler presented SliQ at a poster session for MathWorks Day @ Northeastern</p>
            </div>
            <div className="news-item">
                <p>February 12, 2023</p>
                <p>Daniel Silver presented his poster on Quantum Image Similarity Networks (SliQ) at AAAI-23, coauthored with Tirthak Patel, Aditya Ranjan, Harshitta Gandhi, and William Cutler</p>
            </div>
            <p><a href="#" className="news-link">... see all News</a></p>
        </div>
    );
};

export default News;
