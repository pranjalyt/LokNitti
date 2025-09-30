"use client";

export default function About() {
  return (
    <section className="about py-20 bg-secondary" id="about">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          From SIH Hackathon to Real Impact
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We started with a simple challenge: summarize public comments. But we
          envisioned more → a policy intelligence platform. Now, with scalable
          AWS infrastructure and advanced AI models, our solution is ready to
          impact real government decision-making.
        </p>
      </div>
    </section>
  );
}