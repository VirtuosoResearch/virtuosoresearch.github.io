import React from 'react';
import Header from './Header';
import ImageSlideshow from './ImageSlideshow';
import VideoSlideshow from './VideoSlideshow';
import './Resources.css';

const Resources: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="resources-container">
                <section className="section">
                    <h3>Multitask learning</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Task-Modeling" target="_blank" rel="noopener noreferrer">Modeling task relationships using surrogate models</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/boosting-multitask-learning-on-graphs" target="_blank" rel="noopener noreferrer">Multitask learning on graph-structured data</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/ScalableMTL" target="_blank" rel="noopener noreferrer">Scaling up multitask learning using a linearization technique</a>
                        </li>
                    </ul>
                    <h3>Fine-tuning</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/EnsembleLoRA" target="_blank" rel="noopener noreferrer">EnsembleLoRA</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Scalable-finetuning" target="_blank" rel="noopener noreferrer">GradEx</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/noise-stability-optimization" target="_blank" rel="noopener noreferrer">Noise stability optimization</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Regularized-Self-Labeling" target="_blank" rel="noopener noreferrer">Regularization methods for fine-tuning</a>
                        </li>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Robust-Fine-Tuning" target="_blank" rel="noopener noreferrer">Measuring generalization using Hessian</a>
                        </li>                        
                    </ul>
				    <h3>Graph neural networks</h3>
										<ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Generalization-in-graph-neural-networks" target="_blank" rel="noopener noreferrer">Measuring generalization</a>
                        </li>
										</ul>
					<h3>Data augmentation</h3>
										<ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Tree-data-augmentation" target="_blank" rel="noopener noreferrer">A simple, tree-structured data augmentation scheme</a>
                        </li>
										</ul>
                    <h3>Pointers</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/VirtuosoResearch/Multitask-Learning-and-Fine-Tuning" target="_blank" rel="noopener noreferrer">Recent papers and projects on multitask learning, fine-tuning, and applications</a>
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


                <section className="section">
                    <h3>Talks</h3>
                    <p>Here are some of our talk slides</p>
                    <ul>
                        <li>
                            <a href="/talks/EnsembleLoRA_v2.pdf" target="_blank" rel="noopener noreferrer">Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets</a>
                        </li>    
                        <li>
                            <a href="/talks/grokking.pdf" target="_blank" rel="noopener noreferrer">Label-Invariant Hessian Regularization Mitigates Grokking in Mathematical Reasoning</a>
                        </li>                      
                        <li>
                            <a href="/talks/ICL.pdf" target="_blank" rel="noopener noreferrer">Scaling Language Model Inference via Gradient Estimation</a>
                        </li>                          
                        <li>
                            <a href="/talks/GradSel.pdf" target="_blank" rel="noopener noreferrer">Linear-Time Demonstration Selection for In-Context Learning via Gradient Estimation</a>
                        </li>                      
                    </ul>
                </section>

                <section className="section">
                    <h3>Course materials</h3>
                    <ul>
                        <li>
                            <a href="/CS4100.html" target="_blank" rel="noopener noreferrer">CS4100 Artificial Intelligence (Fall 2025) </a>
                        </li>
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

                <section className="section">
                    <h3>Presentation materials and group photos</h3>
                    Here are some of our conference posters and group photos.
                    <ImageSlideshow/>
					<p> Here are several recorded talks. </p>
                    <VideoSlideshow/>
					<p> We are always looking for pointers and collaborators. Feel free to shoot us an email if you have any feedback! </p>
                </section>
            </div>
        </div>
    );
};

export default Resources;
