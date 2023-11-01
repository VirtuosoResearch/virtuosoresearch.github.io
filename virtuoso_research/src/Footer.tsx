// src/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <p>© 2023 Virtuoso Lab</p>
                <p>Allen Ye and Jinhong Yu</p>
            </div>
            <div className="footer-column">
                <p>Associated with Northeastern University</p>
                <img src="neu.png" alt="Northeastern University" />
            </div>
            <div className="footer-column">
                <p><strong>Contact:</strong></p>
                <p>177 Huntington Ave, Boston, MA 02115</p>
                <p>ho.zhang@northeastern.edu</p>
            </div>
        </footer>
    );
};

export default Footer;
