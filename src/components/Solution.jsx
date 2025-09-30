"use client";

import { GlowingEffect } from "./ui/glowing-effect";

export default function Solution() {
  return (
    <section className="solution py-20 bg-secondary" id="solution">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          AI-driven Comment Intelligence
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Our platform automates the entire process of analyzing public
          feedback:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="solution__card bg-card p-6 rounded-lg text-left relative card-shadow">
            <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Summarization</h3>
              <p className="text-muted-foreground">
                Condense thousands of comments into key points.
              </p>
            </div>
          </div>
          <div className="solution__card bg-card p-6 rounded-lg text-left relative card-shadow">
            <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Sentiment Analysis</h3>
              <p className="text-muted-foreground">
                Understand overall mood (positive/negative/neutral).
              </p>
            </div>
          </div>
          <div className="solution__card bg-card p-6 rounded-lg text-left relative card-shadow">
            <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Relevance Scoring</h3>
              <p className="text-muted-foreground">
                Weight comments by stakeholder identity.
              </p>
            </div>
          </div>
          <div className="solution__card bg-card p-6 rounded-lg text-left relative card-shadow">
            <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Fact vs Emotion Detection</h3>
              <p className="text-muted-foreground">
                Distinguish rational arguments from emotional ones.
              </p>
            </div>
          </div>
          <div className="solution__card bg-card p-6 rounded-lg text-left relative card-shadow">
            <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Clustering</h3>
              <p className="text-muted-foreground">
                Group similar opinions for theme discovery.
              </p>
            </div>
          </div>
          <div className="solution__card bg-card p-6 rounded-lg text-left relative card-shadow">
            <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Trend Analysis</h3>
              <p className="text-muted-foreground">
                Track how public sentiment evolves over time.
              </p>
            </div>
          </div>
        </div>
        <p className="solution__footer mt-12 text-lg text-muted-foreground">
          💡 Not just analysis, but a decision-making tool for policymakers.
        </p>
      </div>
    </section>
  );
}