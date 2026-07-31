// src/Footer.tsx
//                <p><strong>Contact:</strong></p>
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <p>Northeastern University</p>
                <p>Khoury College of Computer Sciences</p>
            </div>
            <div className="footer-column">
                <p>Address: 216 Mass Ave, Floor #3, Boston, MA 02115</p>
                <p>Email: ho.zhang@northeastern.edu</p>
            </div>
            <div className="footer-column">
                <p>Funding agency acknowledgement</p>
                <p>National Science Foundation, JP Morgan Chase</p>
            </div>            
        </footer>
    );
};

export default Footer;
