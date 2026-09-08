import React from 'react';
import './TitleAndMission.css';

/* Its own component so the home page decides where it sits in the column. It
   used to be the last block inside TitleAndMission, which pinned it above
   anything the page added afterwards. */
const Contact: React.FC = () => {
    return (
        <div className="section">
            <h3>Contact</h3>
            <p>We are always looking for students to join our research projects. If you have ideas, we would love to chat. You may take a look at our recent papers and projects first. The ideal student should to be self-motivated, and have a strong background in mathematics or in programming.</p>
        </div>
    );
};

export default Contact;
