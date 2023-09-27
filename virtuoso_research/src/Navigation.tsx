// src/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/group">Group</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/open-source-artifacts">Open-Source Artifacts</Link></li>
                <li><Link to="/outreach">Outreach</Link></li>
                <li><Link to="/curious-quantum">Curious (Quantum Computing)</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
