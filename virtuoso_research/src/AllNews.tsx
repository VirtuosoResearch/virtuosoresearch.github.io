import React from 'react';
import './AllNews.css';
import Header from './Header';

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
                <h2 className="centered-title">All News and Updates</h2>
                <div className="news-list">
                    {newsItems.map((item, index) => (
                        <div className="news-item" key={index}>
                            <p className="news-date">{item.date}</p>
                            <p className="news-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default AllNews;
