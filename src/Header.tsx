// src/Header.tsx
import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
    return (
        <header className="header">
            <h2 className="header-title">VirtuosoResearch</h2>
            <Navigation />
        </header>
    );
};

export default Header;
