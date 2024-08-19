import React from 'react';
import './AllNews.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AllNews: React.FC = () => {
    const newsItems = [
				{
						date: "Oct, 2023",
						content: "Our group website is launched!"
				},
        {
            date: "Sep, 2023",
            content: "One paper accepted into NeurIPS'23: Congrats Abhinav, Dongyue, and Haotian! We introduce a dataset of traffic accident labels and validate the efficiency of graph neural networks for predicting accident occurrence.",
        },
        {
            date: "Sep, 2023",
            content: "Welcome to Mahdi, joining Northeastern from University of Toronto, and Kailai, visiting from Xi'an Jiao Tong University!",
        },
        {
            date: "Aug, 2023",
            content: "Dongyue presented a paper at KDD, Long Beach, about a new method for multitask learning on graph-structured data, the main idea being a clustering and then boosting procedure.",
        },
    ];

    return (
        <div>
            <Header/>
            <div className="allnews-container">
								<div>
                <h2 className="centered-title">All News and Updates</h2>
								</div>

                <div className="news-list">

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
									<div className="news-item">
										<div className="news-date">Apr, 2024</div>
										<p> We are glad that there'll be two students joining as CS PhD in the upcoming fall </p>
            </div>
									<div className="news-item">
									<div className="news-date">Mar, 2024</div>
										<p> A <a href="https://www.hongyangzhang.com/mtl_slides.pdf">talk slide</a> that summarizes our work on developing multitask neural networks over the past few years! </p>
									</div>
									<div className="news-item">
										<div className="news-date">Feb, 2024</div>
										<p> We are working on organizing a session at INFORMS 2024, about "Multitask and federated learning: Challenges of optimization under heterogeneity" (along with Prof. T. Yang from TAMU) </p>
									</div>
									<div className="news-item">
										<div className="news-date">Jan, 2024</div>
										<p> We are excited to serve as meta-reviewer and reviewers of ICML 2024! </p>
									</div>
									<div className="news-item">
										<div className="news-date">Dec, 2023</div>
										<p>Our paper on the traffic accident analysis using graph neural networks is now on <a href="https://arxiv.org/abs/2311.00164">arxiv!</a>
 </p>
									</div>
									<div className="news-item">
										<div className="news-date">Nov, 2023</div>
										<p>We will present a research progress about designing clustering methods for instruction fine-tuning at NeurIPS Workshop on instruction tuning and instruction following.</p>
									</div>

                    {newsItems.map((item, index) => (
                        <div className="news-item" key={index}>
                            <p className="news-date">{item.date}</p>
                            <p className="news-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
						<Footer/>
        </div>
        
    );
};

export default AllNews;
