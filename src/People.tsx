
import React from 'react';
import Header from './Header';
import './People.css';
import Footer from './Footer';

// Member component
//        {
//            name: "Jinhong Yu",
//            position: "Master's Student Researcher (2023)",
//            details: [
//                "M.S. in AI, Northeastern University, 2023",
//								"B.E. in Mechanical Engineering, South China Agriculture University, 2017"
//            ],
//            imageSrc: "portraits/jinhong.jpeg", // Replace with actual image path
//            link: "/"
//        },
//       {
//            name: "Aidan McKnight",
//            position: "Master's Student Researcher (2023)",
//            details: [
//								"M.S. in CS, Northeastern University, 2023",
//                "B.S. in Engineering Physics, Rose-Hulman Institute of Technology, 2021",
//            ],
//            imageSrc: "default.jpg", // Replace with actual image path
//            link: "/"
//        },


const Member: React.FC<{ name: string, position: string, details: string[], imageSrc: string, link: string}> = ({ name, position, details, imageSrc, link }) => {
    const imageWidth = 80; // Image width
    // var joinPath = require('path.join');
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
                <h3><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3> 
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
//                "Ph.D. in computer science from Stanford",
//                "Postdoc at University of Pennsylvania",
//                "Etc",
            ],
            imageSrc: "portraits/hongyang.png", // Replace with actual image path
            link: "https://www.hongyangzhang.com/"
        },
    ];

    // Data for students and postdocs
    const phdStudentsData = [
        {
            name: "Dongyue (Oliver) Li",
            position: "Ph.D. Student (2021)",
            details: [
                "B.E. in CS, Shanghai Jiao Tong University",
            ],
            imageSrc: "portraits/dongyue.jpg", // Replace with actual image path
            link: "https://lidongyue12138.github.io/"
        },
        {
            name: "Mahdi Haghifam",
            position: "Khoury Postdoctral Fellow (2023)",
            details: [
                "Ph.D. from University of Toronto",
								"Jointly mentored by Prof. Jonathan Ullman"
            ],
            imageSrc: "portraits/Mahdi_Haghifam.jpg", // Replace with actual image path
            link: "https://mhaghifam.github.io/mahdihaghifam/"
        },
         {
            name: "Haotian Ju",
            position: "Ph.D. (starting fall 2024)",
            details: [
								"Research Assistant, Northeastern University, 2022",
                "M.S. in Data Analytics Engineering, Northeastern University, 2021",
								"B.S. in Applied Mathematics, Tsinghua University, 2017"
            ],
            imageSrc: "portraits/haotian.png", // Replace with actual image path
            link: "http://www.haotianju.com/"
        },
        {
            name: "Abhinav Nippani",
            position: "Master's Student (2023)",
            details: [
                "Bachelor in Electrial and Electronics Engineering, BITS Pilani, Hyderabad",
            ],
            imageSrc: "portraits/Abhinav_Nippani.jpeg", // Replace with actual image path
            link: "/"
        },
       {
            name: "Kailai Chen",
            position: "Visiting Undergraduate Researcher (2023)",
            details: [
                "B.S. in Maths and Statistics, Xi'an Jiao Tong University, expected in 2024",
            ],
            imageSrc: "portraits/kailai.jpg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Allen Ye",
            position: "Undergraduate Researcher (2023)",
            details: [
                "B.S. in CS, Northeastern University",
            ],
            imageSrc: "portraits/allen.png", // Replace with actual image path
            link: "https://www.linkedin.com/in/allenye66/"
        },
        {
            name: "Debankita Basu",
            position: "Master's Student Researcher (2023)",
            details: [
                "B.S. in CS, UMass Amherst",
            ],
            imageSrc: "portraits/Debankita_Basu.jpeg", // Replace with actual image path
            link: "/"
        },
     ];

    // Collaborators data
    const collaboratorsData = [
        {
            name: "Tina Eliassi-Rad",
            describtion: "Northeastern",
            link: "https://eliassi.org/"
        },
        {
            name: "Haris Koutsopoulos",
            describtion: "Northeastern",
            link: "https://coe.northeastern.edu/people/koutsopoulos-haris/"
        },
        {
            name: "Huy Nguyen",
            describtion: "Northeastern",
            link: "https://www.ccs.neu.edu/home/hlnguyen/"
        },
        {
            name: "Predrag Radivojac ",
            describtion: "Northeastern",
            link: "https://www.khoury.northeastern.edu/home/radivojac/"
        },
        {
            name: "Aneesh Sharma",
            describtion: "Google",
            link: "/"
        },
        {
            name: "Weijie Su",
            describtion: "University of Pennsylvania",
            link: "http://stat.wharton.upenn.edu/~suw/"
        },
        {
            name: "Fan Yang",
            describtion: "Tsinghua",
            link: "https://yangf75.github.io/"
        },
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
                                link={person.link}
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
                                link={person.link}
                            />
                        ))}
                    </div>
                </section>

                <section className="group-section collaborators">
                    <h2>Research Collaborators</h2>
										<p>
											We enjoy working with researchers with different background from us. To acknowledge their contributions, we are listing them below (any omission from this list is due to our own mistake): 
										</p>
                    <div className="members">
                        <ul>
                            {collaboratorsData.map((collaborator, index) => (
                                <li key={index}>
                                    <a href={collaborator.link}>{collaborator.name}</a>  ({collaborator.describtion})
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>
            <Footer/>
        </div>
    );
};

export default Group;
