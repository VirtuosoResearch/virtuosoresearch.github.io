import React from 'react';
import './TitleAndMission.css';
import ImageSlideshow from './ImageSlideshow';
import VideoSlideshow from './VideoSlideshow';
const TitleAndMission: React.FC = () => {
    const text = "developing intelligent algorithms to support society";
    const highlightIndices = [2, 11, 27, 29, 38, 41, 45, 46];
    const highlightColors = ["red", "blue", "green", "purple"];
    const text2 = "virtuoso";
    const highlightIndices2 = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <div className="title-and-mission">
                Virtuoso Research Lab focuses on the frontier research of machine learning theory and methods, algorithmic foundations, and graphs. Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))} ({text2.split('').map((char, index) => (
                    highlightIndices2.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices2.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}). To achieve this mission, our approach is two-fold:
                <ul>
                    <li> By fostering the next-generation of researchers and engineers who are passionate about technology. </li>
                    <li> By advancing the frontier of knowledge in computer science, focusing on the foundations. </li>
                </ul>
                <p>
                    The team comprises of a diverse team of students and post graduates who are passionate about advancing technology such as the foundations of AI and ML, at the same time hoping to make a tangible impact. We are currently mainly working on two sets of projects:
                    <ul>
                        <li>On the machine learning side, we have been working on developing multitask learning methods, thinking about transfer, fine-tuning. Recently we have been looking to generative AI such as instruction tuning in language models, and diffusion models.</li>
                        <li>On the foundations side (algorithmic and statistical), we are interested in matrix and tensor methods, generalization in neural networks, and privacy. For instance, we have been working on developing nonvacuous generalization bounds for deep neural networks using Hessian.</li>
                    </ul>
                </p>
                <p>
                    To validate our solutions, we are interested in problems and datasets that arise in settings that are relevant to the society, in the hope of making a broader impact in the future. For instance, recently we've looked at a problem of predicting traffic accidents using graph neural networks. We collected a large-scale dataset of traffic accident records and traffic networks.
                </p>

                <ImageSlideshow />

								<p>
										Here are several representative talks from us.
								</p>
                <VideoSlideshow />
            </div>

           
        </div>

    );
};

export default TitleAndMission;
