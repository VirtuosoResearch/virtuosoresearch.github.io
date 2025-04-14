
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
            name: "Minxuan Duan",
            position: "Ph.D.",
            details: [
                "B.S., Peking University",
                "M.S., University of Chicago"
            ],
            imageSrc: "default.jpg", // Replace with actual image path
            link: "https://scholar.google.com/citations?user=a-3k2XkAAAAJ&hl=en"
        },
        {
            name: "Dongyue Li",
            position: "Ph.D.",
            details: [
                "B.Eng., Shanghai Jiao Tong University",
            ],
            imageSrc: "portraits/dongyue.jpg", // Replace with actual image path
            link: "https://lidongyue12138.github.io/"
        },
				{
	          name: "Michael Zhang",
            position: "Ph.D.",
            details: [
                "B.Eng., UESTC"
            ],
            imageSrc: "portraits/ziniu.jpg", // Replace with actual image path
            link: "https://ziniuzhang.github.io/"
				},
				{
	          name: "Zhenshuo Zhang",
            position: "Ph.D.",
            details: [
                "B.Eng./M.S., ZheJiang University"
            ],
            imageSrc: "portraits/zhenshuo.jpg", // Replace with actual image path
            link: "https://zhenshuozhang.github.io/"
				},
            {
                name: "Xin Wang",
                position: "M.S.",
                details: [
                    "B.S., Nanjing University"
                ],
                imageSrc: "default.jpg", // Replace with actual image path
                link: "/"
            },
            {
                name: "Can He",
                position: "M.S.",
                details: [
                    "M.S.",
                ],
                imageSrc: "default.jpg", // Replace with actual image path
                link: "/"
            },
            {
                name: "Youran Ye",
                position: "M.S.",
                details: [
                    "B.S., Fudan University",
                ],
                imageSrc: "default.jpg", // Replace with actual image path
                link: "/"
            },
//        {
//            name: "Mahdi Haghifam",
//            position: "Postdoc",
//            details: [
//                "PhD, University of Toronto"
//            ],
//            imageSrc: "portraits/Mahdi_Haghifam.jpg", // Replace with actual image path
//            link: "https://mhaghifam.github.io/mahdihaghifam/"
//        },
        {
            name: "Haotian Ju",
            position: "M.S. alumni",
            details: [
								"BS, Tsinghua University"
            ],
            imageSrc: "portraits/haotian.png", // Replace with actual image path
            link: "http://virtuosoresearch.github.io/"
        },
        {
            name: "Abhinav Nippani",
            position: "M.S. alumni",
            details: [
                "B.Eng., BITS Pilani (Hyderabad)",
            ],
            imageSrc: "portraits/Abhinav_Nippani.jpeg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Debankita Basu",
            position: "M.S. alumni",
            details: [
                "B.S., UMass Amherst",
            ],
            imageSrc: "portraits/Debankita_Basu.jpeg", // Replace with actual image path
            link: "/"
        },
       {
            name: "Kailai Chen",
            position: "Undergrad, alumni",
            details: [
                "B.S. (Maths and Statistics), Xi'An Jiao Tong University",
            ],
            imageSrc: "portraits/kailai.jpg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Allen Ye",
            position: "Undergrad, alumni",
            details: [
                "B.S., Northeastern University (2023)",
            ],
            imageSrc: "portraits/allen.png", // Replace with actual image path
            link: "https://www.linkedin.com/in/allenye66/"
        },
     ];

    // Collaborators data
    const collaboratorsData = [
        //{
        //    name: "Tina Eliassi-Rad",
        //    describtion: "Northeastern",
        //    link: "https://eliassi.org/"
        //},
        //{
        //    name: "Haris Koutsopoulos",
        //    describtion: "Northeastern",
        //    link: "https://coe.northeastern.edu/people/koutsopoulos-haris/"
        //},
        //{
        //    name: "Huy Nguyen",
        //    describtion: "Northeastern",
        //    link: "https://www.ccs.neu.edu/home/hlnguyen/"
        //},
        //{
        //    name: "Predrag Radivojac",
        //    describtion: "Northeastern",
        //    link: "https://www.khoury.northeastern.edu/home/radivojac/"
        //},
        //{
        //    name: "Aneesh Sharma",
        //    describtion: "Google",
        //    link: "https://www.linkedin.com/in/aneesh-sharma-15011b17/"
        //},
        //{
        //    name: "Weijie Su",
        //    describtion: "University of Pennsylvania",
        //    link: "http://stat.wharton.upenn.edu/~suw/"
        //},
        //{
        //    name: "Fan Yang",
        //    describtion: "Tsinghua",
        //    link: "https://yangf75.github.io/"
        //},
    ];


    return (
        <div>
            <Header />

            <div className="group-container">


                {/* Students and Postdocs section */}
                <section className="group-section">
                    <h2>Members</h2>
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



            </div>
            <Footer/>
        </div>
    );
};

export default Group;
