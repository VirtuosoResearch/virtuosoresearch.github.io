import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './ResearchBlogs.css';

const ResearchBlogs: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="blog-container">
                <h1>More to come soon!</h1>
                <Link to="/research/blog/">
                    <h2></h2>
                </Link>
                <p></p>
                <Link to="/research/blog/">
                    <h2></h2>
                </Link>
                <p></p>
            </div>
        </div>
    );
};

export default ResearchBlogs;
