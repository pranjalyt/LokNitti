"use client";

import { GlowingEffect } from "./ui/glowing-effect";

export default function RelevanceEngine() {
  return (
    <section className="relevance-engine py-20 bg-secondary" id="relevance-engine">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            From Feedback to Insight
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            LokNiti's AI combines summarization, sentiment, relevance, fact vs emotion, clustering, and trend analysis to turn raw public comments into clear, actionable policy insights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Key Takeaway */}
          <div className="bg-card p-6 rounded-lg text-center card-shadow">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">The LokNiti Advantage</h3>
            <p className="text-muted-foreground">
              By combining stakeholder relevance, sentiment analysis, fact vs emotion detection, clustering, and trend tracking, LokNiti turns raw public feedback into clear, actionable insights, helping policymakers prioritize what truly matters and make informed decisions with confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}