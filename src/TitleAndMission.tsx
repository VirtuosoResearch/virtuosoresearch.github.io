import React from 'react';
import './TitleAndMission.css';
import ImageSlideshow from './ImageSlideshow';
import VideoSlideshow from './VideoSlideshow';
//import Image from 'react-image-resizer';

const TitleAndMission: React.FC = () => {
    const text = "develop intelligent algorithms to support our society";
    const highlightIndices = [2, 8, 24, 31, 35, 42, 46, 47];
    const highlightColors = ["red", "blue", "green", "purple"];
    const text2 = "virtuoso";
    const highlightIndices2 = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <div className="title-and-mission">
                Virtuoso Research Lab focuses on advancing the research frontier of machine learning, design and analysis of algorithms, data, and networks. Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))} ({text2.split('').map((char, index) => (
                    highlightIndices2.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices2.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}). We believe that intelligent heuristic are the future of computing, and we hope to make an impact through our research.
                <ul>
                    <li> We are commited to pursuing fundamental, open research, hoping to spark new directions and innovations for future work. </li>
                    <li> We are always open to working with researchers and engineers who are passionate about technology, and aspire to connect computer science to our society in a positive way. </li>
                </ul>
                <p>
                    The team comprises of a diverse team of students and researchers who are passionate about advancing technology, at the same time hoping to make a tangible impact. We are currently mainly working on two sets of projects:
                    <ul>
                        <li>On the theoretical / algorithmic side, we have been working on matrix and tensor methods, generalization of neural networks, and optimization. We have been developing non-vacuous generalization measures for deep neural networks, though a novel technique of Hessian, which we developed in an ICML'22 paper. We are actively working on advancing the efficiency of using large neural networks.</li>
                        <li>On the machine learning side, we have been working on developing neural networks for simultaneously optimizing multiple task objectives. This classical problem is relevant again today thanks to developments in language models, federated learning, etc. We have also been exploring new, emerging directions, for instance scalable fine-tuning, algorithmic reasoning of transformer networks, multimodal learning, robustness of diffusion models. We have also been trying out different sorts of applications, one recent example being road safety in transportation.</li>
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
            
            <div>
                <p>
                    <b>Acknowlegement:</b> Our research has received generous support from the following organizations:
                </p>
                <img
                    src="images/Northeastern.png"
                    alt="Northeastern"
                    className='funding'
                />
                <img
                    src="images/NSF_Official_logo_Med_Res_sq.png"
                    alt="NSF"
                    className="funding"
                />
                <img
                    src="images/JPMC.png"
                    alt="JPMC"
                    className="funding"
                />
            </div>
        </div>

    );
};

export default TitleAndMission;
