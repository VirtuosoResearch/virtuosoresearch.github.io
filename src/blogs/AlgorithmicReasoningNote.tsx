import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Markdown from './AlgorithmicReasoningNote.md'; //replace name here
import Header from '../Header';
import './Blog.css'

const AlgorithmicReasoningNote: React.FC = () => { //replace name here
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(Markdown)
            .then((response) => response.text())
            .then((data) => setMarkdown(data));
    }, []);
    
    const mdfile = <ReactMarkdown children={markdown} />
    return (
        <div>
            <Header />
            <div className="blog-content">
                <ReactMarkdown children={markdown} />
            </div>
        </div>
    );
};

export default AlgorithmicReasoningNote; 