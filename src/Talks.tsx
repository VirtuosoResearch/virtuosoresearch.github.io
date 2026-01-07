import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './ResearchBlogs.css';

const Talks: React.FC = () => {
    return (
        <div>
        <Header />
            <div className="blog-container">
                {/* Add your talk entries here following the same format as Blogs */}
                {/* Example:
                <Link reloadDocument to="/talks/talk/ExampleTalk">
                    <h2>Example Talk Title</h2>
                </Link>
                <p>Speaker Name, Date</p>
                */}
            </div>
        </div>
    );
};

export default Talks;
