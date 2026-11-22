// src/HomePage.tsx
import React from 'react';
import Header from './Header';
import TitleAndMission from './TitleAndMission';
import News from './News';
import Blogs from './Blogs';
import Highlights from './Highlights';
import Projects from './Projects';
import Contact from './Contact';
import './Layout.css';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="main-container">
                <div className="title-and-mission">
                    <TitleAndMission />
                    {/* Boxes in alphabetical order, with Contact kept last. */}
                    <Blogs />
                    <Highlights />
                    <Projects />
                    <Contact />
                </div>
                <div className="content-container">
                    <News />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
