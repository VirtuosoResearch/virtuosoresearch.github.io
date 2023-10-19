// src/HomePage.tsx
import React from 'react';
import Header from './Header';
import TitleAndMission from './TitleAndMission';
import HomePageImage from './HomePageImage';
import News from './News';
import './Layout.css';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="main-container">
                <div className="title-and-mission">
                    <TitleAndMission />
                    <HomePageImage />
                </div>
                <div className="news">
                    <News />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
