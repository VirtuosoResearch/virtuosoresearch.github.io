// src/TitleAndMission.tsx
import React from 'react';
import './TitleAndMission.css';

const TitleAndMission: React.FC = () => {
    return (
        <div className="title-and-mission">
            <h2>Welcome to the Virtuoso Research Lab</h2>
            <p>
                Our mission is making high-performance computing (HPC) and quantum computing systems better and more accessible.
            </p>
            <p>
                Our lab also focuses on preparing the next generation of students and educators to take advantage of parallel computing systems to solve problems of societal importance.
            </p>
        </div>
    );
};

export default TitleAndMission;
