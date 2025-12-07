
import React from 'react';
import Header from './Header';
import './Publications.css';
import Footer from './Footer';
import publications from './publicationsData';

const PublicationsByTopic: React.FC = () => {
    
    //order the unique topics from the publications
    const topicOrder = [
        'Contrastive Learning',
		'Data Augmentation',
		'Fine-Tuning',        
		'Hessian and Regularization',
        'LLM Inference and Reasoning',
        'Machine Learning Theory',
        'Mobility Networks',
		'Multitask Learning',
        'Road Safety',
        'Reinforcement Learning',
		'Robustness',
        'Sample Complexities',
		'Transfer Learning',
        'Transportation Networks',
        'Nonconvex Optimization'
    ];
    //get the unique topics from the publications and sort them based on the predefined order
    const uniqueTopics = [...new Set(publications.map((pub) => pub.topic))]
        .filter((topic) => topicOrder.includes(topic))
        .sort((a, b) => topicOrder.indexOf(a) - topicOrder.indexOf(b));

    return (
        <div>
            <Header />
            <div className="publications-container">
                <div className="publications-list">
                    {/* Group by topic */}
                    {uniqueTopics.map((topic) => (
                        <div key={topic}>
                            <h2>{topic}</h2>
                            <ul>
                                {publications
                                    .filter((publication) => publication.topic === topic)
                                    .map((publication, index) => (
                                        <li key={index}>
                                            <h3><a href={publication.link}>{publication.title}</a></h3>
                                            <p><i>{publication.authors}</i></p>
                                            <p>{publication.publishingSite} ({publication.date})</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PublicationsByTopic;
