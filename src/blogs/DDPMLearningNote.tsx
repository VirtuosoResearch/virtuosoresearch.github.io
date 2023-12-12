import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Markdown from './DDPMLearningNote.md';
import Header from '../Header';
import './Blog.css'

const DDPMLearningNote: React.FC = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(Markdown)
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

export default DDPMLearningNote;
