import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const ResearchBlogs: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="blog-container">
                <h1>Blog Posts</h1>
                <Link to="/blog/embroid">
                    <h2>Embroid: Correcting and Improving LLM Predictions Without Labels</h2>
                </Link>
                <Link to="/blog/simple-ai-system">
                    <h2>A Paradigm Shift in ML Validation: Evaluating Workflows, Not Tasks</h2>
                </Link>
            </div>
        </div>
    );
};

export default ResearchBlogs;
