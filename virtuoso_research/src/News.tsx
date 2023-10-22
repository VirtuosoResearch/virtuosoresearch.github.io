import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <div className="news">
            <h2>Recent Updates</h2>
            <div className="news-item">
                <div className="news-date">Oct, 2023</div>
                <p>Our group website is launched, welcome!</p>
            </div>
            <div className="news-item">
                <div className="news-date">Sep, 2023</div>
                <p>One paper accepted into NeurIPS'23: Congrats Abhinav, Dongyue, and Haotian! We introduce a dataset of traffic accident labels and validate the efficiency of graph neural networks for predicting accident occurrence.</p>
            </div>
            <div className="news-item">
                <div className="news-date">Sep, 2023</div>
                <p>Welcome to Mahdi, joining Northeastern from University of Toronto, and Kailai, visiting from Xi'an Jiao Tong University!</p>
            </div>
            <div className="news-item">
                <div className="news-date">Aug, 2023</div>
                <p>Dongyue presented a paper at KDD, Long Beach, about a new method for multitask learning on graph-structured data, the main idea being a clustering and then boosting procedure.</p>
            </div>
            <p><a href="/allnews" className="news-link">... see all News</a></p>
        </div>
    );
};

export default News;
