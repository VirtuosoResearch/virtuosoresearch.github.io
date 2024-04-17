import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <div className="news">
            <h2>Recent Updates</h2>
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
                <p> We are working on organizing a session at INFORMS, about "Multitask and federated learning: Challenges of optimization under heterogeneity" (along with Tianbao Yang from TAMU) </p>
            </div>
            <div className="news-item">
                <div className="news-date">Jan, 2024</div>
                <p>Hongyang is excited to serve as a meta-reviewer of ICML 2024!</p>
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
            <div className="news-item">
                <div className="news-date">Oct, 2023</div>
                <p>Our group website is launched!</p>
            </div>
            <div className="news-item">
                <div className="news-date">Sep, 2023</div>
                <p>One paper accepted into NeurIPS'23 (Datasets and Benchmarks track): Congrats Abhinav, Dongyue, and Haotian! We introduce a dataset of traffic accident labels and validate the efficiency of graph neural networks for predicting accident occurrence.</p>
            </div>
            <div className="news-item">
                <div className="news-date">Sep, 2023</div>
                <p>Welcome to Dr. Mahdi Haghifam, joining Northeastern from University of Toronto, and Kailai Chen, visiting from Xi'an Jiao Tong University!</p>
            </div>
            <div className="news-item">
                <div className="news-date">Aug, 2023</div>
                <p>Dongyue presented a paper at KDD, Long Beach, about a new method for multitask learning on graph-structured data, the main idea being a clustering and boosting procedure.</p>
            </div>
            <p><a href="/allnews" className="news-link">... see all News</a></p>
        </div>
    );
};

export default News;
