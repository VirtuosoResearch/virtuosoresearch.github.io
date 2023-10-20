
import React from 'react';
import Header from './Header';
import './People.css';

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

    // Data for students and postdocs
    const phdStudentsData = [
        {
            name: "Dongyue (Oliver) Li",
            position: "Ph.D. Student (2021-)",
            details: [
                "B.E. at Shanghai Jiao Tong University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Mahdi Haghifam",
            position: "Khoury Postdoctral Fellow (2023-)",
            details: [
                "Ph.D. from University of Toronto",
								"Jointly mentored by Prof. Jonathan Ullman"
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Haotian Ju",
            position: "Ph.D. Student (2024, expected)",
            details: [
                "M.S. in Data Analytics Engineering",
								"B.S. in Applied Mathematics, Tsinghua University"
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Abhinav Nippani",
            position: "Master's Student (2023-)",
            details: [
                "Bachelor in Electrial and Electronics Engineering, BITS Pilani, Hyderabad",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Jinhong Yu",
            position: "Master's Student",
            details: [
                "M.S. in AI, Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Allen Ye",
            position: "Undergraduate Researcher",
            details: [
                "B.S. in CS, Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
        {
            name: "Debankita Basu",
            position: "Master's Student Researcher",
            details: [
                "B.S. in CS, Northeastern University",
            ],
            imageSrc: defaultImageSrc, // Replace with actual image path
        },
    ];

    // Collaborators data
    const collaboratorsData = [
        "Gijsbert Verdoes",
        "Irene Battisti",
        "Doohee Cho",
        "Bob Smith",
        "Draga Padmini",
        "Alice Johnson",
        "Franklin White",
        "Emily Davis",
        "George Wilson",
        "Hannah Brown",
        "Isabella Lee",
        "Jack Miller",
        "Katherine Hall",
        "Liam Adams",
        "Olivia Harris",
        "Mason Clark",
        "Sophia Martin",
        "William Turner",
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

                <section className="group-section collaborators">
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
