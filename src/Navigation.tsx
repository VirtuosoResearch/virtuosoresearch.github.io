// Navigation.tsx
// <li><Link to="/research" className="nav-link">Blogs</Link></li>
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li><Link to="/" className="nav-link">About</Link></li>
                <li><Link to="/people" className="nav-link">People</Link></li>
                <li className="nav-dropdown">
                    <span className="nav-link">Publications</span>
                    <div className="nav-dropdown-content">
                        <Link to="/publications/year" className="nav-dropdown-link">Group by Year</Link>
                        <Link to="/publications/topic" className="nav-dropdown-link">Group by Topic</Link>
                    </div>
                </li>
                <li><Link to="/resources" className="nav-link">Resources</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
