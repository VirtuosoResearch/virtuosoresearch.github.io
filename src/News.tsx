import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
    return (
        <div className="news">

            <h2>Recent Updates</h2>
			<div className="news-item">
				<div className="news-date">Apr, 2025</div>
				<p> Welcome Minxuan Duan to our lab! </p>
			</div>
	        <div className="news-item">
		        <div className="news-date">Oct, 2024</div>
				<p> We're looking for one or two Ph.D. students to join our lab in the upcoming season. If you are interested, please mention my name in your <a href="https://www.khoury.northeastern.edu/apply/phd-apply/">CS PhD application as potential advisor</a>. You can also send me an email about your application (I may not have the capacity to respond to every email request). Students coming from underrepresented demographics may be eligible for a one-year departmental PhD fellowship. </p>
		</div>
	        <div className="news-item">
		        <div className="news-date">Sep, 2024</div>
				<p> New paper at EMNLP on a scalable finetuning approach tested on a wide range of language models, as well as a <a href="http://arxiv.org/abs/2306.08553">two-point gradient estimate</a> for finding flat solutions in loss surfaces at TMLR </p>
		</div>
		<div className="news-item">
		        <div className="news-date">Aug, 2024</div>
				<p> <a href="https://dl.acm.org/doi/abs/10.1145/3637528.3671835">New paper</a> on a linearization technique for scaling up multitask learning (appeared in KDD24) </p>
		</div>
	          <div className="news-item">
		        <div className="news-date">Aug, 2024</div>
				<p> Serve as a Senior PC of AAAI'25 and a reviewer of ACL Rolling Review </p>
			</div>
            	<div className="news-item">
                	<div className="news-date">Aug, 2024</div>
                	<p> A new paper on <a href="https://openreview.net/forum?id=lmgf03HeqV">designing tree-structured data augmentation schemes</a> (appeared in TMLR24)! </p>
            	</div>

            <div className="news-item">
                <div className="news-date">Jul, 2024</div>
                <p> Congratulations to Dongyue Li on receiving JP Morgan Chase PhD fellowship! </p>
            </div>
            <div className="news-item">
                <div className="news-date">Jun, 2024</div>
                <p> Gave a talk at MSOM'24 within the session on "Advances in machine learning techniques." Slides <a href="https://www.hongyangzhang.com/mtl_slides_short.pdf">here</a> </p>
            </div>
            <div className="news-item">
                <div className="news-date">Apr, 2024</div>
                <p> We are looking for undergraduate students to join our team as part of Northeastern's coop program </p>
            </div>
            <p> <Link to="/allnews" className="news-link">See all news</Link> </p>
        </div>
    );
};

export default News;
