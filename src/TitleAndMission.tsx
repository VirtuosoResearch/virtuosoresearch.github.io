import React from 'react';
import './TitleAndMission.css';
//import Image from 'react-image-resizer';
//                         <li>Generalization of neural networks, matrix completion, and optimization algorithms for reinforcement learning. We have been developing non-vacuous generalization measures for deep neural networks, through a novel technique of neural network Hessians (<a href="https://arxiv.org/abs/2206.02659">ICML'22</a>). By examining second-order derivatives, this also leads to a new sample complexity result for graph neural networks (<a href="http://arxiv.org/abs/2302.04451">AISTATS'23</a>).</li>


const TitleAndMission: React.FC = () => {
    const text = "develop intelligent algorithms to support our society";
    const highlightIndices = [2, 8, 24, 31, 35, 42, 46, 47];
    const highlightColors = ["red", "blue", "green", "purple"];
    const text2 = "virtuoso";
    const highlightIndices2 = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <div className="title-and-mission">
                Virtuoso Research Lab focuses on advancing the research frontier of machine learning, optimization algorithms, language modeling, and neural networks.
                Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))} ({text2.split('').map((char, index) => (
                    highlightIndices2.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices2.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}).
                We envision a future of computing through rigorously designing intelligent heuristics and making it accessible and usable.
                Through our research, we hope to make a tangible impact to intellectual development that will ultimately benefit society.
                <ul>
                    <li> We are commited to pursuing fundamental, open research, hoping to identify new directions and innovations for future work. </li>
                    <li> We are always open to working with researchers and engineers who are passionate about technology, and aspire to connect computer science to our society in a positive way. </li>
                    <li>The team comprises of a diverse team of students and researchers who are passionate about advancing technology, at the same time hoping to make a tangible impact.</li>
                </ul>
            </div>
            <div>
                <p>
                </p>
            </div>            
        </div>
    );
};

export default TitleAndMission;

//                <p><strong>Email:</strong> hongyang90@gmail.com</p>
