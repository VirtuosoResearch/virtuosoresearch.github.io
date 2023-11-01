import React from 'react';
import Header from './Header';
import './Resources.css';

const Resources: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="resources-container">
                <section className="section">
                    <h3>Code</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Generalization-in-graph-neural-networks" target="_blank" rel="noopener noreferrer">Measuring generalization properties of graph neural networks</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Task-Modeling" target="_blank" rel="noopener noreferrer">Modeling task relationships with surrogate modeling</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/boosting-multitask-learning-on-graphs" target="_blank" rel="noopener noreferrer">A boosting procedure for multitask learning on graph-structured data</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Regularized-Self-Labeling" target="_blank" rel="noopener noreferrer">A regularized self-labeling approach to improve the robustness of fine-tuned models</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Robust-Fine-Tuning" target="_blank" rel="noopener noreferrer">Measuring generalization properties of fine-tuning using Hessian</a>
                        </li>

                        
                    </ul>
                </section>

                <section className="section">
                    <h3>Datasets</h3>
                    <ul>
                        <li>
                            A dataset for traffic accident analysis in US states: <a href="https://github.com/VirtuosoResearch/ML4RoadSafety">ML4RoadSafety</a>
                        </li>
                        {/*<li>
                            Geolocation Dataset <a href="/datasets/dataset2">[Visit Dataset]</a>
                        </li>*/}
                    </ul>
                </section>

                {/*<section className="section">
                    <h3>Articles</h3>
                    <ul>
                        <li>
                            <a href="/articles/article1">Machine Learning and Road Safety</a> - Read our lab member's article on the various applications machine learning has on reducing automobile fatalities.
                        </li>
                        <li>
                            <a href="/articles/article1">Enhancing AI: The Journey to Robust and Generalizable Models</a> - Explore how our lab's research on regularized self-labeling is advancing the field of AI.
                        </li>
                    </ul>
                </section>*/}
                <div className="section">
                    <h2>Contact</h2>
                    <p>We are always looking for students to join us. If you have ideas, we would love to chat. You can take a look at our recent papers and projects. The ideal student needs to be self-motivated, and have a strong background in algorithms and/or programming.</p>
                    <p><strong>Email:</strong> ho.zhang@northeastern.edu</p>
                </div>
            </div>
        </div>
    );
};

export default Resources;
