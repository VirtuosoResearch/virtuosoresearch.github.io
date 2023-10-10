// Group.tsx
import React from 'react';
import Header from './Header'; // Import the Header component
import './Group.css';

// Member component
const Member: React.FC<{ name: string, position: string, details: string[], imageSrc: string }> = ({ name, position, details, imageSrc }) => {
    const imageWidth = 80; // Image width

    return (
        <div className="member">
            <div className="member-image">
                <img
                    src={imageSrc}
                    alt={name}
                    width={imageWidth}
                    height="auto"
                />
            </div>
            <div className="member-details">
                <h3>{name}</h3>
                <p>{position}</p>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Group: React.FC = () => {
    const defaultImageSrc = "default.jpg"; // Default image source

    // Data for faculty
    const facultyData = [
        {
            name: "Hongyang Ryan Zhang",
            position: "Assistant Professor of Computer Science",
            details: [
                "Ph.D. in computer science from Stanford",
                "Postdoc at University of Pennsylvania",
                "Etc",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
    ];

    // Data for PhD students and postdocs
    const phdStudentsData = [
        {
            name: "John Smith (PhD)",
            position: "Shared PhD student in the van Nieuwenburg group, working with us",
            details: [
                "Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Richard Davison (PhD)",
            position: "Associate Researcher",
            details: [
                "Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Bob Chang (PhD)",
            position: "Shared PhD student in the van Nieuwenburg group, working with us",
            details: [
                "Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Jessica Li (Masters)",
            position: "Shared PhD student in the van Nieuwenburg group, working with us",
            details: [
                "Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Alex Cao (Undergrad)",
            position: "Shared PhD student in the van Nieuwenburg group, working with us",
            details: [
                "Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
    ];

    // Collaborators data
    const collaboratorsData = [
        "Gijsbert Verdoes",
        "Irene Battisti",
        "Doohee Cho",
        // Add more collaborators as needed
    ];

    return (
        <div>
            <Header />
        
            <div className="group-container">
                

                {/* Students and Postdocs section */}
                <section className="group-section">
                    <h2>Students and Postdocs</h2>
                    <div className="members">
                        {phdStudentsData.map((person, index) => (
                            <Member
                                key={index}
                                name={person.name}
                                position={person.position}
                                details={person.details}
                                imageSrc={person.imageSrc}
                            />
                        ))}
                    </div>
                </section>

                {/* Faculty section */}
                <section className="group-section">
                    <h2>Faculty</h2>
                    <div className="members">
                        {facultyData.map((person, index) => (
                            <Member
                                key={index}
                                name={person.name}
                                position={person.position}
                                details={person.details}
                                imageSrc={person.imageSrc}
                            />
                        ))}
                    </div>
                </section>

                {/* Collaborators section */}
                <section className="group-section">
                    <h2>Collaborators</h2>
                    <div className="members">
                        <ul>
                            {collaboratorsData.map((collaborator, index) => (
                                <li key={index}>{collaborator}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Group;
