import React from 'react';
import './TitleAndMission.css';
import ImageSlideshow from './ImageSlideshow';
import VideoSlideshow from './VideoSlideshow';
const TitleAndMission: React.FC = () => {
    const text = "developing intelligent algorithms to support society";
    const highlightIndices = [2, 11, 27, 29, 38, 41, 45, 46];
    const highlightColors = ["red", "blue", "green", "purple"];

    return (
        <div>
            <div className="title-and-mission">
                Virtuoso Research Lab focuses on the frontier research of Machine Learning, Algorithms, and Social Data. Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}. To achieve this mission, our approach is two-fold:
                <ul>
                    <li> By educating the next-generation of researchers and engineers who are passionate about technology. </li>
                    <li> By advancing the frontiers of knowledge in computer science, focusing on the foundational aspects. </li>
                </ul>
                <p>
                    The team comprises of a diverse team of students and post graduates who are passionate about advancing technology such as the foundations of AI and ML, at the same time hoping to make a tangible impact. We are currently mainly working on two sets of projects:
                    <ul>
                        <li>On the machine learning side, we have been working on developing multitask learning methods, thinking about transfer, fine-tuning. Recently we have been looking to generative AI such as instruction tuning in language models, and diffusion models.</li>
                        <li>On the foundations side (algorithmic and theoretical), we are interested in studying algorithms on matrix and tensor-shaped data, thinking about implicit regularization, privacy. We have also been working on developing nonvacuous generalization bounds for deep neural networks using Hessian.</li>
                    </ul>
                </p>
                <p>
                    To validate our solutions, we are particularly interested in problems and datasets that arise in social contexts (and relevant to social sciences). For instance, recently we've been looking to a problem around predicting traffic accidents using graph neural networks, by collecting a large-scale dataset of accident records and transportation maps.
                </p>

                <ImageSlideshow />
                <VideoSlideshow />
            </div>

           
        </div>

    );
};

export default TitleAndMission;
