// src/Header.tsx
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Virtuoso Research</h1>
            <Navigation />
        </header>
    );
};

export default Header;
