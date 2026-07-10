import React from 'react';
import Header from './Header';
import './Outreach.css';

const Outreach: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="outreach-container">
                <section className="outreach-section">

                    We plan to deposite teaching materials about how to use generative tools with hands-on examples on this page.
                    {/* <h1>Practicing Generative AI Tools through Building Community Dashboards and Sports Predictors</h1> */}

                    {/* <h2>Overview</h2>
                    <p>
                        This program is designed to teach teenagers (ages 12-18) and young adults (ages 18-26) in
                        the Roxbury community how to use generative AI tools to write code, analyze data, and create
                        visualizations.
                    </p>
                    <p>
                        The program is structured into three sessions:
                    </p>
                    <ul>
                        <li>
                            <strong>Session 1: Understanding the Basics of Language Models and Neural Networks (45 minutes):</strong>{' '}
                            We provide an introductory tutorial on large language models (LLMs) and neural networks,
                            explain how these models generate text from context, and discuss common failure modes
                            (hallucinations) and algorithmic bias.
                        </li>
                        <li>
                            <strong>Session 2: Data Visualization with Generative AI (60 minutes):</strong>{' '}
                            Participants use AI assistants in Google Colab to clean spreadsheet data and generate plots.
                            We build two dashboards: one for limited transit resources in Boston and one for traffic
                            accident patterns in Massachusetts.
                        </li>
                        <li>
                            <strong>Session 3: Building Predictors in Sports with Generative AI (60 minutes):</strong>{' '}
                            This hands-on session teaches participants how to write clear prompts that instruct AI to
                            produce Python code. Using the World Cup as an example, participants build simple rules and
                            simulate tournament outcomes.
                        </li>
                    </ul>

                    <h2>Teaching Objectives</h2>
                    <p>
                        By the end of this 2-hour workshop, participants will be able to:
                    </p>
                    <ul>
                        <li>
                            <strong>Understand the technical background of generative AI:</strong>{' '}
                            Learn how language models use text datasets to predict text from context and why models may
                            produce biased or hallucinated outputs.
                        </li>
                        <li>
                            <strong>Use generative AI for data visualization:</strong>{' '}
                            Gain hands-on experience directing AI to clean data, process raw spreadsheets, and build
                            visualizations on maps and metric charts.
                        </li>
                        <li>
                            <strong>Build sports predictors with generative AI:</strong>{' '}
                            Turn plain instructions into working Python code and construct a simple automated predictor
                            using real soccer team statistics.
                        </li>
                    </ul>

                    <p><strong>Target Audience:</strong> Young adults (ages 18-26) and teenagers (ages 12-18)</p>
                    <p><strong>Location:</strong> Shaw-Roxbury Branch Library Community Room</p>
                    <p><strong>Format:</strong> A 2-hour workshop</p> */}

                    <div className="outreach-logo-wrapper">
                        <img src="/cope_logo2.png" alt="COPE with Courage Summer Camp logo" className="outreach-logo" />
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Outreach;
