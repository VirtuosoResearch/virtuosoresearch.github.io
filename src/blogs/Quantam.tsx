import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import quantamMarkdown from './Quantam.md';
import Header from '../Header';

const HealthcareBlog: React.FC = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(quantamMarkdown)
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
