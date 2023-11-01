// src/Header.tsx
import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
    return (
        <header className="header">
            <h2 className="header-title">Developing Intelligent Algorithms to Support Society</h2>
            <Navigation />
        </header>
    );
};

export default Header;
