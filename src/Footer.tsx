// src/Footer.tsx
//                <p><strong>Contact:</strong></p>
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <p>© 2023 Virtuoso Research Lab</p>
                <p>Credit to: Allen Ye and Jinhong Yu</p>
            </div>
            <div className="footer-column">
                <p>Associated with the Computer Science Department at Northeastern University</p>
                <img src="neu.png" alt="Northeastern University" />
            </div>
            <div className="footer-column">
                <p>177 Huntington Ave, Boston, 22nd floor, Boston, MA 02115</p>
                <p>ho.zhang@northeastern.edu</p>
            </div>
        </footer>
    );
};

export default Footer;
