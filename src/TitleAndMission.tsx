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
                Virtuoso Research Lab focuses on advancing the research frontier of machine learning, learning theory, design and analysis of algorithms, social and information networks. Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))} ({text2.split('').map((char, index) => (
                    highlightIndices2.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices2.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}). We believe that intelligent heuristic are the future of computing, and we hope to make tangible impact on the society through innovation.
                <ul>
                    <li> We are commited to pursuing fundamental research, hoping to spark new directions and ideas towards the next wave of innovation. </li>
                    <li> We are always looking for researchers (and engineers) who are passionate about technology, by connecting that to our society in a positive way. </li>
                </ul>
                <p>
                    The team comprises of a diverse team of students and researchers who are passionate about advancing technology, at the same time hoping to make a tangible impact. We are currently mainly working on two sets of projects:
                    <ul>
                        <li>On the theoretical / algorithmic side, we have been working on matrix and tensor methods, generalization of neural networks, and optimization. We have been developing non-vacuous generalization measures for deep neural networks, though a novel technique of Hessian, which we developed in an ICML'22 paper.</li>
                        <li>On the machine learning side, we have been working on developing neural networks for simultaneously optimizing multiple task objectives. This classical problem is relevant again today thanks to developments in LLMs, federated learning, etc. We have also been exploring new, emerging directions, for instance the reasoning ability of transformers, exploring new applications of diffusion models. We have also been trying out different sorts of applications, one recent example being road safety.</li>
                    </ul>
										Here are conference posters from our prior presentations.
                </p>

                <ImageSlideshow />

								<p>
										Here are several recorded talks.
								</p>

                <VideoSlideshow />

								<p>
										We are always looking for pointers and collaborators. Feel free to shoot us an email if you have any feedback!
								</p>
            </div>

           
        </div>

    );
};

export default TitleAndMission;
