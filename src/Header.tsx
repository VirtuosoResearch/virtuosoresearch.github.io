// src/Header.tsx
import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src="/Vlab.png" alt="Logo" className="header-logo" />
                <h2 className="header-title">VirtuosoResearch</h2>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
