import React, { useState } from 'react';
import Header from './Header';
import './Publications.css';
import Footer from './Footer';

const publications = [
    {
        year: 2023,
        title: "Noise Stability Optimization for Flat Minima with Tight Rates",
        link: "https://arxiv.org/abs/2306.08553",
        authors: "Haotian Ju, Dongyue Li, Hongyang R. Zhang",
        publishingSite: "NeurIPS Workshop on Optimization",
        date: "2023",
        topic: "Algorithms and Learning Theory",
    },
    {
        year: 2023,
        title: "Improved Group Robustness via Classifier Retraining on Independent Splits",
        link: "https://arxiv.org/abs/2204.09583",
        authors: "Thien Hang Nguyen, Hongyang R. Zhang, and Huy L. Nguyen",
        publishingSite: "Transactions on Machine Learning Research",
        date: "2023",
        topic: "Multitask Learning, Fine-Tuning",
    },
    {
        year: 2023,
        title: "Graph Neural Networks for Road Safety Modeling: Datasets and Evaluations for Accident Analysis",
        link: "https://arxiv.org/abs/2311.00164",
        authors: "Abhinav Nippani, Dongyue Li, Haotian Ju, Haris N. Koutsopoulos, Hongyang R. Zhang",
        publishingSite: "NeurIPS, Datasets and Benchmarks Track",
        date: "2023",
        topic: "Social Data",
    },
    {
        year: 2023,
        title: "Identification of Negative Transfers in Multitask Learning Using Surrogate Models",
        link: "https://arxiv.org/abs/2303.14582",
        authors: "Dongyue Li, Huy N. Nguyen, Hongyang R. Zhang",
        publishingSite: "Transactions on Machine Learning Research, Featured Certification",
        date: "2023",
        topic: "Multitask Learning, Fine-Tuning",
    },
    {
        year: 2023,
        title: "Generalization in Graph Neural Networks: Improved PAC-Bayesian Bounds on Graph Diffusion",
        link: "http://arxiv.org/abs/2302.04451",
        authors: "Haotian Ju, Dongyue Li, Aneesh Sharma, Hongyang R. Zhang",
        publishingSite: "AISTATS",
        date: "2023",
        topic: "Algorithms and Learning Theory",
    },
    {
        year: 2023,
        title: "Optimal Intervention on Weighted Networks via Edge Centrality",
        link: "http://arxiv.org/abs/2303.09086",
        authors: "Dongyue Li, Tina Eliassi-Rad, Hongyang R. Zhang",
        publishingSite: "SDM",
        date: "2023",
        topic: "Social Data",
    },
    {
        year: 2022,
        title: "Task Modeling: Approximating Multitask Predictions for Cross-task Transfer",
        link: "https://arxiv.org/abs/2303.14582",
        authors: "Dongyue Li, Huy L. Nguyen Hongyang R. Zhang",
        publishingSite: "NeurIPS Workshop on Distribution Shifts",
        date: "2022",
        topic: "Multitask Learning, Fine-Tuning",
    },
    {
        year: 2022,
        title: "Robust Fine-Tuning of Deep Neural Networks with Hessian-based Generalization Guarantees",
        link: "https://arxiv.org/abs/2206.02659",
        authors: "Haotian Ju, Dongyue Li, Hongyang R. Zhang",
        publishingSite: "ICML",
        date: "2022",
        topic: "Algorithms and Learning Theory",
    },
    {
        year: 2022,
        title: "Correct-N-Contrast: A Contrastive Approach for Improving Robustness to Spurious Correlations",
        link: "http://arxiv.org/abs/2203.01517",
        authors: "Michael Zhang, Nimit Sohoni, Hongyang R. Zhang, Chelsea Finn, and Christopher Ré",
        publishingSite: "ICML",
        date: "2022",
        topic: "Multitask Learning, Fine-Tuning",
    },
    {
        year: 2022,
        title: "Incentive Ratio: A Game Theoretical Analysis of Market Equilibria",
        link: "https://www.sciencedirect.com/science/article/pii/S0890540122000177",
        authors: "Ning Chen, Xiaotie Deng, Bo Tang, Hongyang R. Zhang, and Jie Zhang",
        publishingSite: "Information and Computation",
        date: "2022",
        topic: "Algorithmic game Theory",
    },
    {
        year: 2021,
        title: "Improved Regularization and Robustness for Fine-tuning in Neural Networks",
        link: "https://arxiv.org/abs/2111.04578",
        authors: "Dongyue Li, Hongyang R. Zhang",
        publishingSite: "NeurIPS",
        date: "2021",
        topic: "Multitask Learning, Fine-Tuning",
    },
    {
        year: 2021,
        title: "Observational Supervision for Medical Image Classification using Gaze Data",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-87196-3_56",
        authors: "Khaled Saab, Sarah Hooper, Nimit Sohoni, ..., Hongyang R. Zhang, Daniel Rubin, and Christopher Ré",
        publishingSite: "MICCAI",
        date: "2021",
        topic: "Multitask Learning, Fine-Tuning",
    },
		{
				year: 2020,
				title: "Learning Over-Parametrized Two-Layer ReLU Neural Networks beyond NTK",
				link: "https://arxiv.org/abs/2007.04596",
				authors: "Yuanzhi Li, Tengyu Ma, and Hongyang R. Zhang",
				publishingSite: "COLT",
				date: "2020",
				topic: "Algorithms and Learning Theory",
		},
		{
				year: 2020,
				title: "On the Generalization Effects of Linear Transformations in Data Augmentation",
				link: "https://arxiv.org/abs/2005.00695",
				authors: "Sen Wu, Hongyang R. Zhang, Gregory Valiant, and Christopher Ré",
				publishingSite: "ICML",
				date: "2020",
				topic: "Algorithms and Learning Theory",
		},
		{
				year: 2020,
				title: "Understanding and Improving Information Transfer in Multi-Task Learning",
				link: "",
				authors: "Sen Wu, Hongyang R. Zhang, and Christopher Ré",
				publishingSite: "ICLR",
				date: "2020",
				topic: "Multitask Learning, Fine-Tuning",
		},
		{
				year: 2020,
				title: "Precise High-Dimensional Asymptotics for Quantifying Heterogeneous Transfers",
				link: "https://arxiv.org/abs/2010.11750",
				authors: "Fan Yang, Hongyang R. Zhang, Sen Wu, Christopher Ré, and Weijie Su",
				publishingSite: "arXiv",
				date: "2020",
				topic: "Algorithms and Learning Theory",
		},
];

const Publications: React.FC = () => {
    const [groupByTopic, setGroupByTopic] = useState(false);

    //function for toggling between grouping by year and grouping by topic
    const toggleGrouping = () => {
        setGroupByTopic((prevGroupByTopic) => !prevGroupByTopic);
    };

    //get the unique topics from the publications
    const uniqueTopics = [...new Set(publications.map((pub) => pub.topic))];

    return (
        <div>
            <Header />
            <div className="publications-container">
                {/* <div className="publications-title">
                    <h1>PUBLICATIONS:</h1>
                    <p>Below is a comprehensive list of my publications, sorted by date. To organize the list differently, use the button below.</p>
                </div> */}
                <div className="toggle-button-container">
                    <button onClick={toggleGrouping}>
                        {groupByTopic ? 'Group by Year' : 'Group by Topic'}
                    </button>
                </div>
                <div className="publications-list">
                    {groupByTopic ? (
                        // Group by topic
                        uniqueTopics.map((topic) => (
                            <div key={topic}>
                                <h2>{topic}</h2>
                                <ul>
                                    {publications
                                        .filter((publication) => publication.topic === topic)
                                        .map((publication, index) => (
                                            <li key={index}>
                                                <h3><a href={publication.link}>{publication.title}</a></h3>
                                                <p><i>{publication.authors}</i></p>
                                                <p>{publication.publishingSite} ({publication.date})</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        // Group by year
                        <div>
                            {Array.from(new Set(publications.map((pub) => pub.year)).values()).map((year) => (
                                <div key={year}>
                                    <h2>{year}</h2>
                                    <ul>
                                        {publications
                                            .filter((publication) => publication.year === year)
                                            .map((publication, index) => (
                                                <li key={index}>
                                                    <h3><a href={publication.link}>{publication.title}</a></h3>
                                                    <p><i>{publication.authors}</i></p>
                                                    <p>{publication.publishingSite} ({publication.date})</p>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Publications;
