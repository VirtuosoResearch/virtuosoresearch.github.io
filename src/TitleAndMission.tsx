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
                Virtuoso Research Lab focuses on advancing the research frontier of machine learning algorithms, learning theory, algorithmic foundations, and graph-structured data. The lab has an ambitious aim to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))} ({text2.split('').map((char, index) => (
                    highlightIndices2.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices2.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}). Towards achieving this, we strive to work on cutting-edge research, while ensuring their dissemination.
                <ul>
                    <li> By fostering the next-generation of researchers and engineers who are passionate about technology, we hope to contribute positively to the society. </li>
                    <li> By focusing on producing high-quality and fundamental research, we hope to spark new directions and ideas towards the next wave of innovations. </li>
                </ul>
                <p>
                    The team comprises of a diverse team of students and researchers who are passionate about advancing technology, at the same time hoping to make a tangible impact. We are currently mainly working on two sets of projects:
                    <ul>
                        <li>On the algorithmic foundations side, we are interested in matrix and tensor methods, generalization in neural networks, and optimization. For instance, we have been working on developing nonvacuous generalization bounds for deep neural networks using Hessian.</li>
                        <li>On the robust intelligence side, we have been working on developing multitask neural networks. Recently we have been studying the fundamentals of transformer networks such as their reasoning capabilities. To validate our solutions, we are interested in problems and datasets that can contribute positively to our society. For instance, recently we made some progress by looking at a problem of predicting traffic accidents using graph neural networks. We collected a large-scale dataset of traffic accident records and traffic networks.</li>
                    </ul>
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
