// src/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li><Link to="/" className="nav-link">About</Link></li>
                <li><Link to="/group" className="nav-link">Group</Link></li>
                <li><Link to="/research" className="nav-link">Research</Link></li>
                <li><Link to="/publications" className="nav-link">Publications</Link></li>
                <li><Link to="/outreach" className="nav-link">Outreach</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
