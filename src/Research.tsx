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
                <Link reloadDocument to="/research/blog/healthcare">
                    <h2>AI in Healthcare: Revolutionizing Patient Care with Smart Algorithms</h2>
                </Link>
                <p>John Doe, 2023</p>
                <Link reloadDocument to="/research/blog/quantum">
                    <h2>Quantum Computing: The Next Frontier in Information Processing</h2>
                </Link>
                <p>Jane Smith, 2023</p> */}
                <Link reloadDocument to="/research/blog/DDPMLearningNote">
                    <h2>Learning Note : Denoise Diffusion Probabilistic Model</h2>
                </Link>
                <p>Jinhong Yu, 2023</p>
            </div>
        </div>
    );
};

export default ResearchBlogs;
