import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './ResearchBlogs.css';

const ResearchBlogs: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="blog-container">
                <h1>Posts:</h1>
                <Link to="/research/blog/healthcare">
                    <h2>AI in Healthcare: Revolutionizing Patient Care with Smart Algorithms</h2>
                </Link>
                <Link to="/research/blog/quantam">
                    <h2>Quantum Computing: The Next Frontier in Information Processing</h2>
                </Link>
            </div>
        </div>
    );
};

export default ResearchBlogs;
