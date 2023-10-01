// src/Header.tsx
import React from 'react';
import Navigation from './Navigation';
import './App.css'; // Import the CSS file

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Virtuoso Research</h1>
            <Navigation />
        </header>
    );
};

export default Header;
