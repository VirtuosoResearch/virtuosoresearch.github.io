import React from 'react';
import Header from './Header';
import './Resources.css';

const Resources: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="resources-container">
                <section className="section">
                    <h1>Multitask learning algorithms</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Task-Modeling" target="_blank" rel="noopener noreferrer">Modeling task relationships using surrogate models</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/boosting-multitask-learning-on-graphs" target="_blank" rel="noopener noreferrer">Multitask learning on graph-structured data</a>
                        </li>
                    </ul>
                    <h1>Fine-tuning algorithms</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/noise-stability-optimization" target="_blank" rel="noopener noreferrer">Noise stability optimization</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Generalization-in-graph-neural-networks" target="_blank" rel="noopener noreferrer">Graph neural networks</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Regularized-Self-Labeling" target="_blank" rel="noopener noreferrer">Regularization methods for fine-tuning</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Robust-Fine-Tuning" target="_blank" rel="noopener noreferrer">Measuring generalization using Hessian</a>
                        </li>                        
                    </ul>
                    <h1>References and State-of-the-arts</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Multitask-Learning-and-Fine-Tuning" target="_blank" rel="noopener noreferrer">Recent papers and projects on multitask learning, fine-tuning, and applications in language models</a>
                        </li>
                    </ul>
                </section>

                <section className="section">
                    <h3>Datasets</h3>
                    <ul>
                        <li>
                            A dataset for traffic accident analysis in the US: <a href="https://github.com/VirtuosoResearch/ML4RoadSafety">ML4RoadSafety</a>
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
                    <p>We are always looking for students to join us. If you have ideas, we would love to chat. You can take a look at our recent papers and projects. The ideal student needs to be self-motivated, and have a strong background in mathematics, algorithms, or programming.</p>
                    <p><strong>Email:</strong> ho.zhang@northeastern.edu</p>
                </div>
            </div>
        </div>
    );
};

export default Resources;
