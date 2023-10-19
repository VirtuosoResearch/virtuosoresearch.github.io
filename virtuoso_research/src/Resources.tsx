import React from 'react';
import Header from './Header';
import './Resources.css';

const Resources: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="resources-container">
                <h1>Resources</h1>
                <section className="section">
                    <h3>Code</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Task-Modeling" target="_blank" rel="noopener noreferrer">Task-Modeling</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/boosting-multitask-learning-on-graphs" target="_blank" rel="noopener noreferrer">boosting-multitask-learning-on-graphs</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Regularized-Self-Labeling" target="_blank" rel="noopener noreferrer">Regularized-Self-Labeling</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Robust-Fine-Tuning" target="_blank" rel="noopener noreferrer">Robust Fine Tuning</a>
                        </li>

                        
                    </ul>
                </section>

                <section className="section">
                    <h3>Datasets</h3>
                    <ul>
                        <li>
                            Wildfire Dataset <a href="/datasets/dataset1">[Visit Dataset]</a>
                        </li>
                        <li>
                            Geolocation Dataset <a href="/datasets/dataset2">[Visit Dataset]</a>
                        </li>
                    </ul>
                </section>

                <section className="section">
                    <h3>Articles</h3>
                    <ul>
                        <li>
                            <a href="/articles/article1">Machine Learning and Road Safety</a> - Read our lab member's article on the various applications machine learning has on reducing automobile fatalities.
                        </li>
                        <li>
                            <a href="/articles/article1">Enhancing AI: The Journey to Robust and Generalizable Models</a> - Explore how our lab's research on regularized self-labeling is advancing the field of AI.
                        </li>
                    </ul>
                </section>
            </div>

            <div className="join-us-container">
                <h2>Join Us</h2>
                <p>We are always looking for motivated and curious members to join our lab. If you are interested in joining us, please contact us at:</p>
                <p><strong>Email:</strong> email@northeastern.edu</p>
            </div>
        </div>
    );
};

export default Resources;
