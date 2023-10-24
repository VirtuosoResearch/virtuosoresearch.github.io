import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import healthcareMarkdown from './Healthcare.md';
import Header from '../Header';
import './Blog.css'

const HealthcareBlog: React.FC = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        // Load the Markdown content from the file
        fetch(healthcareMarkdown)
            .then((response) => response.text())
            .then((data) => setMarkdown(data));
    }, []);

    return (
        <div>
            <Header />
            <div className="blog-content">
                <ReactMarkdown children={markdown} />
            </div>
        </div>
    );
};

export default HealthcareBlog;
