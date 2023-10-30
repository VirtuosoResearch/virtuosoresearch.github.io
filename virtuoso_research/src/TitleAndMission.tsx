import React from 'react';
import './TitleAndMission.css';
import ImageSlideshow from './ImageSlideshow';

const TitleAndMission: React.FC = () => {
    const text = "developing intelligent algorithms to support the society";
    const highlightIndices = [2, 11, 27, 29, 38, 41, 49, 50];

    return (
        <div className="title-and-mission">
            Virtuoso Research Lab focuses on the frontier research of Machine Learning, Algorithms, and Social Data. Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font">{char}</span>
                    ) : char
                ))}.
            <p>
                The team comprises of a diverse team of students and post graduates who are passionate about advancing technology such as the foundations of AI and ML, at the same time hoping to make a tangible impact of using these technology to support the society.
            </p>
            <p>
                We are currently mainly working on two sets of projects.
								<ul>
										<li>On the machine learning side, we have been working on developing multitask learning methods, thinking about transfer, fine-tuning. Recently we have been looking to generative AI such as instruction tuning in language models, and diffusion models.</li>
										<li>On the foundations side (algorithmic and theoretical), we are interested in studying algorithms on matrix and tensor shaped data, thinking about implicit regularization. We have also been working on developing nonvacuous generalization for deep neural networks using Hessian.</li>
								</ul>
            </p>
						<p>
								To validate our solutions, we are particularly interested in validating solutions in social contexts. For instance, recently we've been looking to the prediction of traffic accidents using graph neural networks (by collecting a large-scale dataset of accident records and transport maps). 
            </p>
            
            <ImageSlideshow />
        </div>
    );
};

export default TitleAndMission;
