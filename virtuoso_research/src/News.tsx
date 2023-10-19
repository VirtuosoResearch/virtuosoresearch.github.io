import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <div className="news">
            <h2>Recent Updates</h2>
            <div className="news-item">
                <div className="news-date">April, 2023</div>
                <p>Dr. Tirthak Patel successfully defended his Ph.D. thesis and graduated with his Ph.D.! He’ll be soon on his way to his faculty position at Rice University.</p>
            </div>
            <div className="news-item">
                <div className="news-date">March, 2023</div>
                <p>William Cutler presented SliQ at a poster session for MathWorks Day @ Northeastern</p>
            </div>
            <div className="news-item">
                <div className="news-date">February, 2023</div>
                <p>Daniel Silver presented his poster on Quantum Image Similarity Networks (SliQ) at AAAI-23, coauthored with fTirthak Patel, Aditya Ranjan, Harshitta Gandhi, and William Cutler</p>
            </div>
            <p><a href="/allnews" className="news-link">... see all News</a></p>
        </div>
    );
};

export default News;
