// src/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TitleAndMission.css';

/* Its own component so the home page decides where it sits in the column. It
   used to be part of TitleAndMission, which pinned it right under the intro. */
const Projects: React.FC = () => {
    return (
        <div className="section">
            <h3>Projects</h3>
            <p>
                Links to some of our ongoing projects with further description
                <ul>
                    <li> <Link to="/mtlandfinetuning" className="news-link">Multitask learning and fine-tuning: Measurements and algorithms for representational transfer</Link></li>
                        <ul>
                            <li>Developing neural networks for simultaneously optimizing multiple tasks, with applications to supervised fine-tuning and inference on language models (<a href="https://arxiv.org/abs/2409.19458">EMNLP'24</a>), community detection (<a href="https://arxiv.org/abs/2409.06091">KDD'23</a>), and transportation (<a href="https://arxiv.org/abs/2311.00164">NeurIPS'23</a>).</li>
                        </ul>
                    <li> Measurement, reasoning, and learning beyond gradients
                        <ul>
                            <li> Highlighted papers: <a href="https://arxiv.org/abs/2206.02659">ICML'22</a>, <a href="http://arxiv.org/abs/2302.04451">AISTATS'23</a>, <a href="https://arxiv.org/abs/2306.08553">TMLR'24</a>, <a href="https://arxiv.org/abs/2010.11750">JMLR'25</a>, <a href="https://arxiv.org/abs/2512.01113">KDD'26</a>, <a href="https://arxiv.org/abs/2602.03783">ICLR'26</a> </li>
                            <li> <a href="https://github.com/VirtuosoResearch/nnhessian">nnhessian</a>: a library for computing spectral statistics of neural network Hessians </li>
                        </ul>
                    </li>
                    <li> <a href="https://github.com/VirtuosoResearch/ML4RoadSafety">Data analytics for aiding road safety with graph neural networks</a> </li>
                </ul>
            </p>
        </div>
    );
};

export default Projects;
