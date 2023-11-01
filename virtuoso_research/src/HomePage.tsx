// src/HomePage.tsx
import React from 'react';
import Header from './Header';
import TitleAndMission from './TitleAndMission';
import News from './News';
import './Layout.css';
import Footer from './Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="main-container">
                <div className="title-and-mission">
                    <TitleAndMission />
                </div>
                <div className="content-container">
                    <News />
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;
