// src/HomePage.tsx
import React from 'react';
import Header from './Header';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                {/* Your content for the front page goes here */}
                <p>Welcome to Virtuoso Research!</p>
                {/* Add more content as needed */}
            </main>
        </div>
    );
};

export default HomePage;
