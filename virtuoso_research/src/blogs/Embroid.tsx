import React from 'react';

const EmbroidBlog: React.FC = () => {
    return (
        <div className="blog-content">
            <h1>Embroid: Correcting and Improving LLM Predictions Without Labels</h1>
            <p>Author: Chris Ré</p>
            <p>
                I get the privilege of speaking to folks from a large number of backgrounds, including executives, policy makers, and the AI-curious, who want to know what GPT is, why they should care, and what might happen next. This article is intended to give you a simple working model of AI systems like ChatGPT. Understanding how a system like ChatGPT is built (or trained, in our jargon) is in some ways a lot simpler than you might expect. Explaining why and when it works well is a really complex problem, but mechanistically it’s beautifully simple. One way to view the big change in AI is not that pipelines have gotten more complex, but that AI pipelines have gotten a lot simpler over time. They have fewer moving parts, and the simplified version described in this post is surprisingly accurate!
            </p>
        </div>
    );
};

export default EmbroidBlog;
