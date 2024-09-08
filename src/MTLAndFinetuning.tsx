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
                        <li><a href="https://ziniuzhang.github.io/">Michael Zhang</a>, Computer Science PhD student</li>
                        <li><a href="https://zhenshuozhang.github.io/">Zhenshuo Zhang</a>, Computer Science PhD student</li>
                        <li><a href="">Abhinav Nippani</a>, Computer Science Master's student</li>
                    </ul>
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default MTLAndFinetuning;