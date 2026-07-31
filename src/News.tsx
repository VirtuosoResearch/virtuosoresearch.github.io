import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

const News: React.FC = () => {

    const latestNewsItems = [
        {
            date: "Jun, 2025",
            content: ""
        },
    ];

    return (
        <div className="news">
            <h2>Recent Updates</h2>

		<div className="news-item">
			<div className="news-date">Jul, 2026</div>
			<p> New papers out: <ul>
				<li><a href="https://arxiv.org/abs/2602.03783">Kernel surrogate models for task attribution</a>,</li>
				<li><a href="https://arxiv.org/abs/2605.17471">Accelerating quantization-aware training</a>, and</li>
				<li><a href="https://openreview.net/forum?id=kQc2GfNWFm">Matrix completion from ultra-sparse samples</a>.</li>
			</ul>
			</p>
		</div>

		<div className="news-item">
			<div className="news-date">Nov, 2025</div>
			<p> New papers out: <ul>
				<li><a href="https://arxiv.org/abs/2512.01113">Understanding algorithmic reasoning</a>,</li>
				<li><a href="https://arxiv.org/abs/2512.02920">A satellite imaging dataset</a>, and</li>
				<li><a href="https://arxiv.org/abs/2511.12779">An algorithm for multi-objective RL</a>.</li>
			</ul>
			</p>
		</div>

		<div className="news-item">
			<div className="news-date">Oct, 2025</div>
			<p> Presenting our recent work on <a href="./talks/grokking.pdf">a Hessian perspective of grokking</a>, and <a href="./talks/ICL.pdf">in-context learning</a> at INFORMS 2025 </p>
		</div>
		
		<div className="news-item">
			<div className="news-date">Jun, 2025</div>
			<p> Excited that our project on <a href="https://arxiv.org/abs/2010.11750">transfer learning random matrices</a> is accepted to JMLR! Thanks to the reviewers and editors for great feedback! </p>
		</div>
	
		<div className="news-item">
			<div className="news-date">May, 2025</div>
			<p> A new paper out on <a href="https://arxiv.org/abs/2505.21930">an efficient ensemble method for fine-tuning language models</a>! </p>
		</div>

            <p> <Link to="/allnews" className="news-link">See old news</Link> </p>
        </div>
    );
};

export default News;
