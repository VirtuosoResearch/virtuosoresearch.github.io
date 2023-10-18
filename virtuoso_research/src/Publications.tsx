import React, { useState } from 'react';
import Header from './Header';

// Fake publication data
const publications = [
    {
        year: 2023,
        title: "Data Mining Paper 1 (2023)",
        authors: "John Doe, Jane Smith",
        publishingSite: "Journal of Fake Science",
        date: "January 1, 2023",
        topic: "Data Mining",
    },
    {
        year: 2022,
        title: "Data Mining Old Paper (2022)",
        authors: "Marcel Flores, Andrew Kahn, Marc Warrior, Alan Mislove, Aleksandar Kuzmanovic",
        publishingSite: "ACM Transactions on the Web (ACM TWEB) 15(2)",
        date: "April 2021",
        topic: "Data Mining",
    },
    {
        year: 2022,
        title: "Neural Net Applications (2022)",
        authors: "Alice Johnson, Bob Smith",
        publishingSite: "Journal of Fake Science",
        date: "December 15, 2022",
        topic: "Neural Networks",
    },
    {
        year: 2021,
        title: "Algorithmic Computing (2021)",
        authors: "Eva Williams, Frank White",
        publishingSite: "Fake Research International",
        date: "October 7, 2021",
        topic: "Algorithmic Computing",
    },
    {
        year: 2020,
        title: "Neural Networks Old Old (2020)",
        authors: "Grace Adams, Henry Taylor",
        publishingSite: "Outdated Journal of Science",
        date: "July 3, 2020",
        topic: "Neural Networks",
    },
];

const Publications: React.FC = () => {
    const [groupByTopic, setGroupByTopic] = useState(false);

    // Function to toggle between grouping by year and grouping by topic
    const toggleGrouping = () => {
        setGroupByTopic((prevGroupByTopic) => !prevGroupByTopic);
    };

    // Extract unique topics from the publications
    const uniqueTopics = [...new Set(publications.map((pub) => pub.topic))];

    return (
        <div>
            <Header />
            <div>
                <button onClick={toggleGrouping}>
                    {groupByTopic ? 'Group by Year' : 'Group by Topic'}
                </button>
                {groupByTopic ? (
                    // Group by topic
                    uniqueTopics.map((topic) => (
                        <div key={topic}>
                            <h2>{topic}</h2>
                            <ul>
                                {publications
                                    .filter((publication) => publication.topic === topic)
                                    .map((publication, index) => (
                                        <li key={index}>
                                            <h3>{publication.title}</h3>
                                            <p>Authors: {publication.authors}</p>
                                            <p>Publishing Site: {publication.publishingSite}</p>
                                            <p>Date: {publication.date}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    // Group by year
                    <div>
                        {Array.from(new Set(publications.map((pub) => pub.year)).values()).map((year) => (
                            <div key={year}>
                                <h2>{year}</h2>
                                <ul>
                                    {publications
                                        .filter((publication) => publication.year === year)
                                        .map((publication, index) => (
                                            <li key={index}>
                                                <h3>{publication.title}</h3>
                                                <p>Authors: {publication.authors}</p>
                                                <p>Publishing Site: {publication.publishingSite}</p>
                                                <p>Date: {publication.date}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Publications;
