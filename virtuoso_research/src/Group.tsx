// Group.tsx
import React from 'react';
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

    // Data for staff
    const staffData = [
        {
            name: "Milan P Allan",
            position: "Associate professor, started Jan 2015",
            details: [
                "Master ETHZ, Diplomarbeit with J Osterwalder, University of Zurich",
                "PhD St Andrews (while at Cornell University) with Felix Baumberger and JC Davis",
                "Postdoc Cornell",
                "ETH fellow at ETHZ with Andreas Wallraff",
                "Bryan R. Coles Prize 2017",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Jianfeng (Jacky) Ge",
            position: "Postdoc, started Oct 2019",
            details: [
                "Postdoc with Jenny Hoffman, Harvard University",
                "PhD with Jinfeng Jia, Shanghai Jiao Tong University",
                "B.S. East China University of Science and Technology",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        // Add more staff members as needed
    ];

    // Data for PhD students
    const phdStudentsData = [
        {
            name: "Ilse Kuijf",
            position: "Shared PhD student in the van Nieuwenburg group, working with us",
            details: [
                "Master Leiden University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Allen Ye",
            position: "Associate Researcher",
            details: [
                "Master Leiden University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        // Add more PhD students as needed
    ];

    // Data for master students
    const masterStudentsData = [
        {
            name: "David Dylan",
            position: "Masters, started Nov 2022",
            details: [
                "B.S Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        // Add more master students as needed
    ];

    // Data for alumni
    const alumniData = [
        {
            name: "Gijsbert Verdoes",
            position: "In the Allan Lab 2015 - 2018, now Project manager at the FMD",
            details: [
                "Role: Fine mechanical engineer associated with the FMD working in our group",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Irene Battisti",
            position: "In the Allan Lab Jan 2015 to June 2019, now R&D scientist at Nearfield Instruments",
            details: [
                "Role: PhD student",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Doohee Cho",
            position: "In the Allan Lab May 2017 to June 2019, now assistant professor at Yonsei University",
            details: [
                "Role: Postdoc",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        // Add more alumni as needed
    ];

    return (
        <div className="group-container">
            {/* Staff section */}
            <section className="group-section">
                <h2>Staff</h2>
                <div className="members">
                    {staffData.map((person, index) => (
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

            {/* PhD Students section */}
            <section className="group-section">
                <h2>PhD Students</h2>
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

            {/* Master Students section */}
            <section className="group-section">
                <h2>Master Students</h2>
                <div className="members">
                    {masterStudentsData.map((person, index) => (
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

            {/* Alumni section */}
            <section className="group-section">
                <h2>Alumni</h2>
                <div className="members">
                    {alumniData.map((person, index) => (
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
        </div>
    );
};

export default Group;
