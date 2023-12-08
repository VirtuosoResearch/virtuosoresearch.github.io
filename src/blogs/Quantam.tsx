import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import quantamMarkdown from './Quantam.md';
import Header from '../Header';

const HealthcareBlog: React.FC = () => {
    const [markdown, setMarkdown] = useState('');

    // useEffect(() => {
    //     fetch(quantamMarkdown)
    //         .then((response) => response.text())
    //         .then((data) => setMarkdown(data));
    // }, []);
    useEffect(() => {
        // Fetch markdown content
        fetch(quantamMarkdown)
            .then((response) => response.text())
            .then((data) => setMarkdown(data));

        // Load MathJax script
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement('script');
        script2.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
        script2.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script when the component unmounts
            document.body.removeChild(script);
        };
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