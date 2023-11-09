import React from 'react';
import Header from './Header';
import './Publications.css';
import Footer from './Footer';
import publications from './publicationsData';

const PublicationsByYear: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="publications-container">
                <div className="publications-list">

                    <div>
                        {Array.from(new Set(publications.map((pub) => pub.year)).values()).map((year) => (
                            <div key={year}>
                                <h2>{year}</h2>
                                <ul>
                                    {publications
                                        .filter((publication) => publication.year === year)
                                        .map((publication, index) => (
                                            <li key={index}>
                                                <h3><a href={publication.link}>{publication.title}</a></h3>
                                                <p><i>{publication.authors}</i></p>
                                                <p>{publication.publishingSite} ({publication.date})</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PublicationsByYear;




