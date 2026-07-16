import React from 'react';
import './MTLAndFinetuning.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MTLAndFinetuning: React.FC = () => {

    return (
        <div>
            <Header/>
            <div className="MTL">
                <p>
                    <h2 className="centered-title">Multitask Learning and Fine-Tuning: Measurements and Algorithms for Representational Transfer</h2>

                    <p> <b>Overview:</b> This project had its origin in a basic question: Given n tasks, how can we learn models like neural networks to solve them collectively? Yet more fundamentally, when several tasks are trained jointly in one network, how does information transfer across them?  Specifically, under what conditions does positive transfer occur, such that multitask learning yields better outcomes than single-task learning? This initial question expanded, influenced by the development of pretrained foundation models over the past few years, into a second one: How can we measure the transfer of representations from a large network to a specific task? How can we reason about basic questions relating to the robustness and generalization of fine-tuning? </p>
                    <p> Addressing these questions requires a discussion of the relationships among multiple tasks. Typically, task relationships are considered via their data distributions, semantics, and geometries. Within the context of (pretrained) neural networks, they are specific to a model. Mixed outcomes, where multitask learning performs worse than single-task learning, are widely observed in practice. These issues are explored in several prior works (some by the PI), demonstrating that the transfer effects depend on both implicit and explicit regularization effects of training algorithms in a multi-headed neural network. Yet, despite extensive research dating back to classical works, many questions remain open in this field. </p>
                    <p>The goal of this research is to <em> advance the foundations of multitask learning and the closely related subject of fine-tuning</em>. This project takes an initial step by developing a framework to measure the relationship between multiple tasks from data. We enhance this framework by investigating algorithms for clustering learning tasks and including the evaluations necessary to facilitate these developments. The project involves three tasks, including </p>
                    <ul>
                        <li> Measuring task relatedness using surrogate models.</li>
                        <li> Approximation algorithms for multitask learning. </li>
	                    <li> Measurements and algorithms for robust fine-tuning.</li>
                    </ul>
                </p>
                <p><b>Contact: </b> <a href="https://www.hongyangzhang.com/">Ryan Zhang</a> </p>
                <p> <b>Research Team</b>
                    <ul>
                        <li><a href="https://www.hongyangzhang.com/">Ryan Zhang</a>, Project lead</li>
                        <li><a href="https://lidongyue12138.github.io/">Dongyue Li</a>, Computer Science PhD student</li>
                        <li><a href="">Haotian Ju</a>, Data Analytics Engineering Master's student</li>
                        <li><a href="">Abhinav Nippani</a>, Computer Science Master's student</li>
                        <li><a href="https://zhenshuozhang.github.io/">Zhenshuo Zhang</a>, Computer Science PhD student</li>
                        <li><a href="https://ziniuzhang.github.io/">Michael Zhang</a></li>
                        <li><a href="https://www.minxuanduan.com/">Minxuan Duan</a>, Computer Science PhD student</li>
                    </ul>
                </p>
                    {/* <b>Progress:</b> First, we explore the node label prediction task. We leverage higher-order task affinities to cluster tasks based on transferability and train group-specific models using spectral clustering, which helps mitigate negative transfer in multitask graph learning (<a href="https://arxiv.org/pdf/2306.14009">KDD'23</a>). We then develop an efficient method, Grad-TAG, to estimate these higher-order affinities via gradient linearization and random projections, and apply semidefinite programming for scalable task grouping across hundreds of tasks (<a href="https://arxiv.org/pdf/2409.06091">KDD'24</a>). Building on this, we propose GradEx for the NLP setting, focusing on subset selection. GradEx estimates task relevance using first-order gradient approximations from a meta-trained initialization and supports both forward selection and random ensemble methods (<a href="https://arxiv.org/pdf/2409.19458">EMNLP'24</a>). More recently, we have focused on adapter ensembling for multitask fine-tuning. Here, task affinities estimated via first-order gradients are used to group tasks, with one adapter trained per group. At inference, adapters are combined via weighted ensembling, achieving better generalization than per-task tuning with minimal additional overhead (<a href="https://arxiv.org/pdf/2505.21930">ACL'25</a>). */}
                    {/* <ul>
                    <li>
                        <b>Node label prediction: </b>
                        Used higher-order task affinities to cluster tasks based on transferability.
                        Trained group-specific models via spectral clustering to reduce negative transfer in multitask graph learning
                        (<a href="https://arxiv.org/pdf/2306.14009">KDD'23</a>).
                    </li>
                    <li>
                        <b>Tree-structured data augmentation: </b>
                        A automatic scheme for finding tree-structured data augmentation schemes, with applications to graph neural networks and protein classification, along with a new dataset with extreme imbalance of labels
                        (<a href="https://arxiv.org/pdf/2408.14381">TMLR'24</a>).
                    </li>
                    <li>
                        <b>Noise Stability Optimization: </b>
                        A Hessian-trace based regularization method that improves generalization by injecting symmetric noise into neural network weights to explicitly encourage flatter minima
                        (<a href="https://arxiv.org/pdf/2306.08553">TMLR'24</a>).
                    </li>
                    <li>
                        <b>Grad-TAG (Gradient-based Task Affinity Grouping): </b>
                        Estimated higher-order affinities using gradient linearization and random projections.
                        Employed semidefinite programming for scalable task grouping over hundreds of tasks
                        (<a href="https://arxiv.org/pdf/2409.06091">KDD'24</a>).
                    </li>
                    <li>
                        <b>GradEx (Gradient-based Example Selector): </b>
                        Focused on subset selection using first-order gradient approximations from a meta-trained initialization.
                        Supported both forward selection and random ensemble strategies
                        (<a href="https://arxiv.org/pdf/2409.19458">EMNLP'24</a>).
                    </li>
                    <li>
                        <b>EnsembleLoRA (Adapter ensembling for multitask fine-tuning): </b>
                        Grouped tasks using first-order gradient based affinities.
                        Trained one adapter per group and combined them via weighted ensembling at inference.
                        Achieved better generalization than per-task tuning with minimal additional overhead
                        (<a href="https://arxiv.org/pdf/2505.21930">ACL'25</a>).
                    </li>
                    </ul> */}
                    <p>
                        <b>Progress:</b> Our work centers on analyzing task and data relationships in learning systems. The main goal is to understand when tasks, examples, and objectives help or hurt each other, and to use this information to improve multitask learning, data selection, fine-tuning, and reinforcement learning.
                    </p>

                    <p>
                        The core technical line studies how to estimate task and data relationships. In
                        multitask graph learning, we used higher-order task affinities to cluster node label prediction tasks based on transferability, and trained group-specific models through spectral clustering to reduce negative transfer
                        (<a href="https://arxiv.org/pdf/2306.14009">KDD'23</a>). Grad-TAG scales this idea by estimating higher-order task affinities through gradient linearization and random projections, and by using semidefinite programming for task grouping over hundreds of tasks (<a href="https://arxiv.org/pdf/2409.06091">KDD'24</a>). We then studied surrogate modeling for task attribution, where the goal is to estimate how adding or removing a training task changes the final model outcome. This work connects linear surrogate models to influence-function-style quantities when higher-order interactions are weak, and uses kernel surrogate models, such as RBF kernels, to capture nonlinear task interactions when linear models are not sufficient (<a href="https://arxiv.org/pdf/2602.03783">ICLR'26</a>).
                    </p>

                    <p>
                        This relationship analysis has been used for gradient-based selection and adaptation. GradEx focuses on subset selection in NLP, where first-order gradient approximations from a meta-trained initialization estimate the relevance between training examples and target tasks. The method supports both forward selection and random ensemble strategies (<a href="https://arxiv.org/pdf/2409.19458">EMNLP'24</a>). EnsembleLoRA applies the same relationship-based view to parameter-efficient multitask fine-tuning. It groups tasks using first-order gradient-based affinities, trains one adapter per group, and combines adapters through weighted ensembling at inference time, achieving better generalization than per-task tuning with minimal additional overhead (<a href="https://arxiv.org/pdf/2505.21930">ACL'25</a>). The same gradient-based estimation idea is extended to in-context learning, where gradient information is used to guide demonstration selection (<a href="https://arxiv.org/pdf/2508.19999">EMNLP'25</a>).
                    </p>

                    <p>
                        Related applications include data augmentation and robust optimization. For tree-structured data augmentation, we developed an automatic method for finding useful augmentation schemes for graph neural networks and protein classification, together with a new dataset with extreme label imbalance (<a href="https://arxiv.org/pdf/2408.14381">TMLR'24</a>).
                        Noise Stability Optimization introduces a Hessian-trace based regularization method that injects symmetric noise into neural network weights to encourage flatter minima and improve generalization (<a href="https://arxiv.org/pdf/2306.08553">TMLR'24</a>).
                    </p>

                    <p> 
                        The relationship-based view has been applied to algorithmic reasoning. We study whether graph neural networks can jointly learn the behavior of classical algorithms, including BFS, DFS, Dijkstra, Kruskal, strongly connected components, and Floyd-Warshall. By training a hierarchical branching GNN across multiple algorithmic tasks, this work analyzes which algorithms share learnable structure and where neural models fail to transfer, especially for complex or recursive procedures (<a href="https://arxiv.org/pdf/2512.01113">KDD'26</a>).
                    </p>

                    <p> We further extend to multi-objective reinforcement learning. In this setting, different objectives can be treated as related but potentially conflicting tasks. This connection allows task relationship modeling to inform policy learning, routing, and objective balancing in modern AI systems (<a href="https://arxiv.org/pdf/2511.12779">AAAI'26</a>).
                    </p>
            </div>
            <Footer/>
        </div>
    );
};

export default MTLAndFinetuning;
