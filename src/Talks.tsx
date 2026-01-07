import React, { useState } from 'react';
import Header from './Header';
import './ResearchBlogs.css';

const Talks: React.FC = () => {
    const [showAbstract, setShowAbstract] = useState(false);

    const toggleAbstract = () => {
        setShowAbstract(!showAbstract);
    };

    return (
        <div>
        <Header />
            <div className="blog-container">
                <div style={{ marginBottom: '30px' }}>
                    <h2 
                        onClick={toggleAbstract}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Theoretical Foundations of Outcome-Based Reinforcement Learning
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Wednesday, Dec 17 @ 1-2 p.m. (lunch at 12:30pm)</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Zeyu Jia</p>
                    <p style={{ margin: '5px 0' }}><strong>Biography:</strong> Zeyu Jia is a final-year PhD student in the Department of Electrical Engineering and Computer Science at MIT, where he is affiliated with the Laboratory for Information and Decision Systems (LIDS). Prior to joining MIT, he received his bachelor's degree from the School of Mathematical Sciences at Peking University. His research interests include machine learning theory, with a focus on reinforcement learning theory, statistics, and information theory.</p>
                    {showAbstract && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> Reinforcement learning for complex reasoning tasks faces a fundamental question: should we provide detailed feedback at each step (process supervision) or only evaluate final outcomes (outcome supervision)? Conventional wisdom suggests that learning with outcome-based feedback is more challenging due to trajectory-level coverage issues, leading to significant investment in collecting fine-grained process supervision data.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>This talk presents two complementary perspectives on this question. First, we examine the offline setting, where a novel Change of Trajectory Measure Lemma reveals that outcome-based reinforcement learning is statistically no more difficult than per-step-based reinforcement learning under standard coverage assumptions. This suggests that observed performance gaps stem from algorithmic limitations rather than fundamental statistical barriers.</p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>Second, we explore the online learning setting, presenting provably sample-efficient algorithms that achieve strong guarantees using only outcome-based feedback. However, we also identify fundamental separations: certain MDPs exhibit exponential gaps between outcome-based and step-level feedback, revealing precisely when and why process supervision truly matters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Talks;
