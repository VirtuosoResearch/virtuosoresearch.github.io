import React from 'react';
import './TitleAndMission.css';

const TitleAndMission: React.FC = () => {
    const text = "DeVeloping Intelligent AlgoRiThms to SUppOrt SOciety";
    const highlightIndices = [2, 11, 27, 29, 38, 41, 45, 46];

    return (
        <div className="title-and-mission">
            <h2>Welcome to the Virtuoso Lab</h2>
            <h4>
                {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font">{char}</span>
                    ) : char
                ))}
            </h4>
            <p>
                At Virtuoso Research, we're a dynamic team of dedicated computer science researchers who are passionate about developing intelligent algorithms that make a tangible impact on society. Our mission is to push the boundaries of high-performance computing (HPC) and quantum computing, striving to make these cutting-edge systems not only better but also more accessible to everyone.
            </p>
            <p>
                Our research spans a wide spectrum of challenges and innovations. We delve into topics that address real-world problems, from enhancing road safety to devising novel approaches in task modeling and boosting multitask learning on graphs. We're committed to pioneering reguralized self-labeling techniques and continually pushing the boundaries of what's possible in the field of computer science. Our ultimate goal is to empower the next generation of students and educators, arming them with the knowledge and expertise to harness the full potential of parallel computing systems and tackle complex societal issues with groundbreaking solutions.
            </p>
        </div>
    );
};

export default TitleAndMission;
