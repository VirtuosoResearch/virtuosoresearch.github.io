import React from 'react';
import './AllNews.css';
import Header from './Header';

const AllNews: React.FC = () => {
    const newsItems = [
        {
            date: "Sep 26, 2023",
            content: "Dr. Maria Garcia awarded a prestigious fellowship to advance research in quantum computing.",
        },
        {
            date: "April 5, 2023",
            content: "Our lab collaborates with leading tech companies to develop state-of-the-art machine learning algorithms.",
        },
        {
            date: "March 1, 2023",
            content: "Prof. Hongyang R Zhang delivers keynote speech at the International Symposium on Advanced Computing.",
        },
        {
            date: "January 25, 2023",
            content: "Our research on quantum cryptography featured in top scientific journals.",
        },
        {
            date: "December 10, 2022",
            content: "Virtuoso Research hosts a successful workshop on AI ethics and responsible technology.",
        },
        {
            date: "October 15, 2022",
            content: "New partnerships established to enhance research in artificial intelligence and quantum computing.",
        },
        {
            date: "September 3, 2022",
            content: "Recent breakthrough in quantum algorithms achieved by our research team.",
        },
        {
            date: "July 12, 2022",
            content: "Virtuoso Research joins an international initiative for advancing quantum technologies.",
        },
        {
            date: "June 1, 2022",
            content: "Our lab's work on quantum machine learning recognized with a prestigious award.",
        },
        {
            date: "April 20, 2022",
            content: "Virtuoso Research welcomes a group of talented undergraduate researchers for summer internships.",
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
