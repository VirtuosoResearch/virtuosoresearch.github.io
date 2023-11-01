// src/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav>
        <ul className="nav-list">
                <li><Link to="/" className="nav-link">About</Link></li>
                <li><Link to="/people" className="nav-link">People</Link></li>
                <li><Link to="/research" className="nav-link">Blogs</Link></li>
                <li><Link to="/publications" className="nav-link">Publications</Link></li>
                <li><Link to="/resources" className="nav-link">Resources</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
