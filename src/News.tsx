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
			<div className="news-date">Jun, 2025</div>
			<p> Excited that our project on <a href="https://arxiv.org/abs/2010.11750">transfer learning random matrices</a> is accepted to JMLR! Thanks to the reviewers and editors for great feedback! </p>
		</div>
	
		<div className="news-item">
			<div className="news-date">May, 2025</div>
			<p> A new paper out on <a href="https://arxiv.org/abs/2505.21930">an efficient ensemble method for fine-tuning language models</a>! </p>
		</div>
		
		<div className="news-item">
			<div className="news-date">Apr, 2025</div>
			<p> Welcome Minxuan Duan (joining from U-Chicago) to our lab as a PhD student in the fall! </p>
		</div>
	        <div className="news-item">
		        <div className="news-date">Oct, 2024</div>
			<p> We're looking for one or two Ph.D. students to join our lab in the upcoming season. If you are interested, please mention my name in your <a href="https://www.khoury.northeastern.edu/apply/phd-apply/">CS PhD application as potential advisor</a>. You can also send me an email about your application (I may not have the capacity to respond to every email request). Students coming from underrepresented demographics may be eligible for a one-year departmental PhD fellowship. </p>
		</div>
	        <div className="news-item">
		        <div className="news-date">Sep, 2024</div>
			<p> New paper at EMNLP on a scalable finetuning approach tested on a wide range of language models, as well as a <a href="http://arxiv.org/abs/2306.08553">two-point gradient estimate</a> for finding flat solutions in loss surfaces at TMLR </p>
		</div>

            <p> <Link to="/allnews" className="news-link">See all news</Link> </p>
        </div>
    );
};

export default News;
