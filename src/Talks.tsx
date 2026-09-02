import React, { useState } from 'react';
import Header from './Header';
import './ResearchBlogs.css';

const Talks: React.FC = () => {
    const [showAbstract1, setShowAbstract1] = useState(false);
    const [showAbstract2, setShowAbstract2] = useState(false);
    const [showAbstract3, setShowAbstract3] = useState(false);
    const [showAbstract4, setShowAbstract4] = useState(false);
    const [showAbstract5, setShowAbstract5] = useState(false);
    const [showAbstract6, setShowAbstract6] = useState(false);
    const [showAbstract7, setShowAbstract7] = useState(false);
    const [showAbstract8, setShowAbstract8] = useState(false);
    const [showAbstract9, setShowAbstract9] = useState(false);

    const toggleAbstract1 = () => {
        setShowAbstract1(!showAbstract1);
    };

    const toggleAbstract2 = () => {
        setShowAbstract2(!showAbstract2);
    };

    const toggleAbstract3 = () => {
        setShowAbstract3(!showAbstract3);
    };

    const toggleAbstract4 = () => {
        setShowAbstract4(!showAbstract4);
    };

    const toggleAbstract5 = () => {
        setShowAbstract5(!showAbstract5);
    };

    const toggleAbstract6 = () => {
        setShowAbstract6(!showAbstract6);
    };

    const toggleAbstract7 = () => {
        setShowAbstract7(!showAbstract7);
    };

    const toggleAbstract8 = () => {
        setShowAbstract8(!showAbstract8);
    };

    const toggleAbstract9 = () => {
        setShowAbstract9(!showAbstract9);
    };

    return (
        <div>
        <Header />
            <div className="blog-container">
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                    Machine Learning Foundations Seminar at Northeastern University
                </h1>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                    News:
                </h2>
                <ul style={{ marginBottom: '30px', paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Join our <a href="https://groups.google.com/g/neu-ml"> mailing list</a> to receive notifications of speakers and livestream links.</li>
                </ul>
                {/* August 28, 2026 - Dongyue Li */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2
                        onClick={toggleAbstract9}
                        style={{
                            cursor: 'pointer',
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Scalable Algorithms for Multitask Learning on Foundation Models: A Gradient-based Framework
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Friday, August 28, 2026 @ 10:30 a.m. ET</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Dongyue Li (Northeastern University)</p>
                    {showAbstract9 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> This thesis studies multitask learning, the problem of learning a predictor that performs well across multiple tasks simultaneously, each with a separate data distribution. In practice, jointly training on multiple tasks can lead to negative interference. Accurately identifying such effects is a difficult problem and has not been fully addressed in the literature. Specifically, a central issue is modeling the relationships when multiple tasks are trained together in a single model. As the number of subsets grows exponentially with the total number of tasks, exhaustively evaluating over all subsets is computationally expensive. Prior literature has proposed approximating multitask training performances using pairwise affinity scores such as gradient cosine similarities, which do not fully capture the complexity that may arise in downstream applications. This problem is increasingly relevant in the context of foundation models, for example, during supervised fine-tuning of large language models and the evaluation of neural networks' reasoning capabilities, where negative interference can again occur due to differences in task semantics or algorithmic execution.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>This thesis develops scalable algorithms for modeling task relationships and multitask optimization, focusing on their application to foundation models. First, I formulate the problem of predicting multitask training performance given a subset of tasks. I propose a surrogate modeling approach by fitting a regression model to the outcomes of randomly sampled task subsets. Second, I introduce an estimation algorithm that avoids repeated training on subsets. The key idea is to approximate the model output on any subset using a first-order Taylor expansion around a pretrained model initialization. I design an algorithm that uses gradients as features and approximates model weights trained on each subset by solving a regression that maps gradients to data labels. I show both theoretically and empirically that this approximation is highly accurate across several settings involving graph neural networks and large language models. Third, I propose a clustering algorithm that applies convex relaxation to task affinity scores to compute a disjoint partition of the input task datasets. Crucially, this framework requires computing gradients only once at the pretrained model, enabling rapid adaptation in downstream applications through the estimation algorithm.</p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>In the second part of the thesis, I demonstrate use cases for the above-proposed algorithms on foundation models. First, I design an ensemble of low-rank adapters for fine-tuning language models across multiple datasets. Second, I propose an algorithm that efficiently learns branching neural networks for performing multiple algorithmic reasoning tasks, applicable to many base models. Further, I present extensions of the algorithms to learn a mixture of Plackett-Luce models for multi-objective alignment of language models, and to select data augmentations for protein classification.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>Biography:</strong> Dongyue Li is a Ph.D. candidate in the Khoury College of Computer Sciences at Northeastern University, advised by Professor Hongyang R. Zhang. He earned his Bachelor's degree in Computer Science from Shanghai Jiao Tong University. His research centers on developing scalable multitask learning algorithms for training foundation models, with applications in language model fine-tuning, algorithmic reasoning, and multi-objective alignment.</p>
                        </div>
                    )}
                </div>
                {/* Upcoming - Tianjiao Li */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2
                        onClick={toggleAbstract8}
                        style={{
                            cursor: 'pointer',
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Auto-Conditioned First-Order and Stochastic Optimization Methods
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Thursday, May 14, 2026.</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Tianjiao Li (MIT)</p>
                    {showAbstract8 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> First-order methods are widely used to tackle data science and machine learning problems with complex structures, such as nonconvexity, nonsmoothness, and stochasticity. However, in many real-world scenarios, the problem structure and parameters can be unknown or ambiguous, creating significant challenges for algorithm design and stepsize selection.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>In this talk, I will present a novel class of first-order methods, termed auto-conditioned methods, that are universal for solving various classes of optimization problems without requiring prior knowledge of problem parameters or resorting to any line search or backtracking procedures. In the first part of the talk, we focus on convex optimization and propose a uniformly optimal method for smooth, weakly smooth, and nonsmooth problems. In the second part of the talk, we consider smooth but possibly nonconvex optimization, and propose a novel parameter-free projected gradient method with the best-known unified complexity for convex and nonconvex problems. We then generalize the method to the stochastic setting, achieving new universal complexity bounds that are nearly optimal for both convex and nonconvex problems. The advantages of the proposed methods are demonstrated by encouraging numerical results.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>Bio:</strong> Tianjiao Li is a Postdoctoral Associate at the MIT Sloan School of Management. Beginning in August 2026, he will spend one year at IBM Research as a Goldstine Fellow, and will then join the Department of Industrial and Systems Engineering at the University of Wisconsin-Madison as a tenure-track Assistant Professor in Fall 2027. He received his Ph.D. in Operations Research from the H. Milton Stewart School of Industrial and Systems Engineering at Georgia Tech, where he was advised by Prof. George Lan and Prof. Ashwin Pananjady. His research interests lie in the theory and methodology of nonlinear optimization, stochastic optimization, and reinforcement learning, with a central focus on bridging rigorous theoretical development with practical relevance, especially in data science and artificial intelligence.</p>
                        </div>
                    )}
                </div>
                {/* Upcoming - Ai Rui */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2
                        onClick={toggleAbstract7}
                        style={{
                            cursor: 'pointer',
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        LLM Aggregation with Higher-Order Information
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Tuesday, March 24, 2026 @ 3-4 p.m.</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Ai Rui (MIT)</p>
                    {showAbstract7 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> With the rise of multi-agent reasoning using large language models, aggregating answers from multiple LLMs has become a central challenge. Most existing approaches rely on simple majority voting, which ignores heterogeneity and correlation across models. In this talk, I will introduce two new aggregation methods - Optimal Weight (OW) and Inverse Surprising Popularity (ISP) - that leverage both first-order and second-order information to produce more reliable collective decisions. I will present theoretical guarantees showing why these methods outperform majority voting, and demonstrate their effectiveness on synthetic data, standard LLM benchmarks, and a real-world healthcare application.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>Together, these results offer practical guidance for designing robust multi-agent LLM systems. This talk is based on joint work with Yuqi Pan, David Simchi-Levi, Milind Tambe and Haifeng Xu.</p>
                        </div>
                    )}
                </div>
                {/* Jan 22, 2026 - Chong Liu */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 
                        onClick={toggleAbstract6}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Accelerated Bayesian Optimization for Drug Discovery
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Thursday, Jan 22, 2026 @ 3-4 p.m.</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Chong Liu (SUNY Albany)</p>
                    {showAbstract6 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> Modern drug discovery is a time-consuming, expensive, and high-risk scientific process. A central component is drug screening, which involves sequential decision-making under severe cost and time constraints, where each wet-lab validation experiment can take days or even weeks. Bayesian optimization (BO) is widely used to guide such decisions, but standard BO methods often require too many experimental rounds to be practical for real-world discovery pipelines.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>In this talk, I will present recent advances in my lab on accelerated Bayesian optimization that dramatically reduce the number of experiments needed to identify high-quality drug candidates. The key idea is to reuse knowledge from prior discovery history, such as optimization trajectories, and transfer it to new targets. I will introduce two complementary approaches: one that learns procedure-informed optimization strategy to enable rapid few-shot optimization, and another that provides guaranteed speed-ups by explicitly modeling how new targets differ from previous ones.</p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>Through experiments on drug discovery benchmarks, I will show how these methods converge to promising compounds significantly faster than conventional BO, translating directly into fewer experiments, lower costs, and shorter timelines. The talk will conclude with a discussion of where these methods can be used in more critical applications.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>Biography:</strong> Dr. Chong Liu is an Assistant Professor of Computer Science at the State University of New York at Albany. His research broadly spans machine learning and AI for science, with a focus on Bayesian optimization, drug discovery, and quantum machine learning. His work has been published in leading machine learning venues including ICML, ICLR, AISTATS, UAI, and JMLR, with oral presentations at AAAI and AAMAS. He is an area chair for ICML, ICLR, and AISTATS, and he has organized the AI for Drug Discovery and Development (AI4D3) workshop series since 2023. Dr. Liu received his Ph.D. in Computer Science from University of California, Santa Barbara in 2023 and subsequently spent one year as a Data Science Institute Postdoctoral Scholar at the University of Chicago.</p>
                        </div>
                    )}
                </div>
                {/* Dec 17, 2025 - Zeyu Jia */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 
                        onClick={toggleAbstract1}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Theoretical Foundations of Outcome-Based Reinforcement Learning
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Wednesday, Dec 17, 2025 @ 1-2 p.m.</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Zeyu Jia (MIT)</p>
                    {showAbstract1 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> Reinforcement learning for complex reasoning tasks faces a fundamental question: should we provide detailed feedback at each step (process supervision) or only evaluate final outcomes (outcome supervision)? Conventional wisdom suggests that learning with outcome-based feedback is more challenging due to trajectory-level coverage issues, leading to significant investment in collecting fine-grained process supervision data.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>This talk presents two complementary perspectives on this question. First, we examine the offline setting, where a novel Change of Trajectory Measure Lemma reveals that outcome-based reinforcement learning is statistically no more difficult than per-step-based reinforcement learning under standard coverage assumptions. This suggests that observed performance gaps stem from algorithmic limitations rather than fundamental statistical barriers.</p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>Second, we explore the online learning setting, presenting provably sample-efficient algorithms that achieve strong guarantees using only outcome-based feedback. However, we also identify fundamental separations: certain MDPs exhibit exponential gaps between outcome-based and step-level feedback, revealing precisely when and why process supervision truly matters.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>Biography:</strong> Zeyu Jia is a final-year PhD student in the Department of Electrical Engineering and Computer Science at MIT, where he is affiliated with the Laboratory for Information and Decision Systems (LIDS). Prior to joining MIT, he received his bachelor's degree from the School of Mathematical Sciences at Peking University. His research interests include machine learning theory, with a focus on reinforcement learning theory, statistics, and information theory.</p>
                        </div>
                    )}
                </div>
                {/* Oct 23, 2025 - Vatsal Sharan */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 
                        onClick={toggleAbstract2}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Using Algorithms to Understand Transformers (and Using Transformers to Understand Algorithms)
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Thursday, Oct 23, 2025 @ 3-4 p.m.</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Vatsal Sharan (University of Southern California)</p>
                    {showAbstract2 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> We will discuss how algorithmic tools and understanding borrowed from optimization theory, Fourier transforms, and Boolean function analysis can help understand the mechanisms employed by Transformers to solve basic computational tasks such as linear regression and addition. We will examine the role of the architecture and pre-trained data in enabling Transformers to learn their employed mechanisms. Finally, we will discuss work on using Transformers themselves to discover and design data structures for tasks such as nearest neighbor search.
                            </p>
                        </div>
                    )}
                </div>
                {/* April 15, 2025 - Abhishek Panigrahi */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 
                        onClick={toggleAbstract3}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Efficient "curriculum-based" training: Theoretical modeling through synthetic testbeds
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Tuesday, April 15, 2025 @ 2-3 p.m.</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Abhishek Panigrahi (Princeton University)</p>
                    {showAbstract3 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> In the current age of deep learning, more compute typically means better performance. However, alternate strategies have emerged for training smaller models more efficiently by introducing structured supervision during training. In this talk, I'll explore how synthetic testbeds help uncover the effectiveness of such methods—and reveal the role of curriculum in accelerating learning.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>I will present two recent works. The first investigates progressive distillation, where student models learn not only from a final teacher checkpoint but also from its intermediate checkpoints. Using sparse parity as a testbed, we identify an implicit curriculum available only through these intermediate checkpoints—leading to both empirical speedup and provable sample complexity gains. We extend the underlying curriculum ideas to pre-training transformers on real-world datasets (Wikipedia and Books), where intermediate checkpoints are found to progressively capture longer-range context dependencies.</p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>The second part focuses on context-enhanced learning, a gradient-based analog of in-context learning (ICL) where models are trained with extra contextual information provided in-context but removed at evaluation, with no gradient computations on this extra information.  In a multi-step reasoning task, we prove that context-enhanced learning can be exponentially more sample-efficient than standard training, provided the model is ICL-capable. We also experimentally demonstrate that it appears hard to detect or recover learning materials that were used in the context during training. This may have implications for data security as well as copyright.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>References:</strong></p>
                            <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '5px' }}>Progressive distillation induces an implicit curriculum. ICLR'25 (Oral). Abhishek Panigrahi*, Bingbin Liu*, Sadhika Malladi, Andrej Risteski, Surbhi Goel</li>
                                <li>On the Power of Context-Enhanced Learning in LLMs. In submission. Xingyu Zhu*, Abhishek Panigrahi*, Sanjeev Arora</li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* April 4, 2024 - Hongfu Liu */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 
                        onClick={toggleAbstract5}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Goal-Oriented Data-Centric Learning
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Thursday, April 4, 2024</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Hongfu Liu (Brandeis University)</p>
                    {showAbstract5 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> Data-centric learning focuses on enhancing algorithmic performance from the perspective of the training data. In contrast to model-centric learning, which designs novel algorithms or optimization techniques for performance improvement with fixed training data, data-centric learning operates with a fixed learning algorithm while modifying the training data through trimming, augmenting, or other methods aligned with improving utility. Data-centric learning holds significant potential in many areas such as model interpretation, subset training set selection, data generation, noisy label detection, active learning, and others. In this talk, I will introduce our recent advances in data-centric learning based on influence functions.
                            </p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>Biography:</strong> Dr. Hongfu Liu is an Assistant Professor of Computer Science at Brandeis University. His research interests lie in core machine learning and AI-assisted applications. He has published over 100 papers (e.g., NeurIPS, ICLR, ICML, IJCAI, AAAI, KDD, ICDM, SDM, CIKM, CVPR, ICCV, TPAMI, and TKDE). These publications have received over 3,500 citations with an h-index of 34 according to Google Scholar as of March 2024. He has also won several awards including the First Place Award in MS-Celel-1M Grand Challenge in ICCV 2017, the NVIDIA CCS Best Student Paper Award in FG 2021, the 2021 INNS Aharon Katzir Young Investigator Award, the top reviewer in UAI 2022, the highlighted/notable Area Chair in ICLR 2022/2023, and the 2022 Global Top-25 Chinese Young Scholars in AI (Data Mining Area) by Baidu Scholar. He has served as an Associate Editor of IEEE CIM and as an Area Chair of ICLR, ICML, and NeurIPS.</p>
                        </div>
                    )}
                </div>
                {/* Oct 26, 2022 - Pratik Chaudhari */}
                <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <h2 
                        onClick={toggleAbstract4}
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007BFF',
                            textDecoration: 'underline',
                            marginBottom: '10px'
                        }}
                    >
                        Does the Data Induce Capacity Control in Deep Learning?
                    </h2>
                    <p style={{ margin: '5px 0' }}><strong>Time:</strong> Wednesday, Oct 26, 2022</p>
                    <p style={{ margin: '5px 0' }}><strong>Presenter:</strong> Pratik Chaudhari (University of Pennsylvania)</p>
                    {showAbstract4 && (
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p style={{ margin: '0', lineHeight: '1.6' }}>
                            <strong>Abstract:</strong> Accepted statistical wisdom suggests that larger the model class, the more likely it is to overfit the training data. And yet, deep networks generalize extremely well. The larger the deep network, the better its accuracy on new data. This talk seeks to shed light upon this apparent paradox.
                            </p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>We will argue that deep networks are successful because of a characteristic structure in the space of learning tasks. The input correlation matrix for typical tasks has a peculiar ("sloppy") eigenspectrum where, in addition to a few large eigenvalues (salient features), there are a large number of small eigenvalues that are distributed uniformly over a very large range. This structure in the input data is strongly mirrored in the representation learned by the network. A number of quantities such as the Hessian, the Fisher Information Matrix, as well as others such as correlations of activations or Jacobians, are also sloppy. Even if the model class for deep networks is very large, there is only a tiny subset of models that fit such sloppy tasks.</p>
                            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6' }}>Using these ideas, this talk will demonstrate an analytical non-vacuous generalization bound for deep networks that does not use compression. It will also discuss how these ideas can be harnessed into algorithms that learn from unlabeled data optimally.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>Biography:</strong> Pratik Chaudhari is an Assistant Professor in Electrical and Systems Engineering and Computer and Information Science at the University of Pennsylvania. He is a member of the GRASP Laboratory. From 2018-19, he was a Senior Applied Scientist at Amazon Web Services and a Postdoctoral Scholar in Computing and Mathematical Sciences at Caltech. Pratik received his PhD (2018) in Computer Science from UCLA, his Master's (2012) and Engineer's (2014) degrees in Aeronautics and Astronautics from MIT. He was a part of NuTonomy Inc. (now Hyundai-Aptiv Motional) from 2014-16. He received the NSF CAREER award and the Intel Rising Star Faculty Award in 2022.</p>
                            <p style={{ margin: '15px 0 0 0', lineHeight: '1.6' }}><strong>References:</strong></p>
                            <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '5px' }}>Does the data induce capacity control in deep learning? Rubing Yang, Jialin Mao, and Pratik Chaudhari. [ICML '22] <a href="https://arxiv.org/abs/2110.14163" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>https://arxiv.org/abs/2110.14163</a></li>
                                <li>Deep Reference Priors: What is the best way to pretrain a model? Yansong Gao, Rahul Ramesh, Pratik Chaudhari. [ICML '22] <a href="https://arxiv.org/abs/2202.00187" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>https://arxiv.org/abs/2202.00187</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                    Seminar Host: Hongyang R. Zhang
                </h2>
            </div>
        </div>
    );
};

export default Talks;
