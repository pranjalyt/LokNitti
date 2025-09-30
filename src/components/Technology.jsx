"use client";

export default function Technology() {
  return (
    <section className="technology py-20 bg-secondary" id="technology">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Built with Scalable AI Infrastructure
        </h2>
        <div className="technology__content max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8">
            Our innovations include relevance scoring tied to stakeholder
            identity, a fact vs emotion classifier, and an end-to-end workflow
            from upload to decision support.
          </p>
          <div className="technology__logos flex justify-center space-x-8 card-shadow p-6 rounded-lg bg-card">
            <span className="text-lg font-semibold text-muted-foreground">AWS S3</span>
            <span className="text-lg font-semibold text-muted-foreground">AWS SQS</span>
            <span className="text-lg font-semibold text-muted-foreground">Flask</span>
            <span className="text-lg font-semibold text-muted-foreground">NLP</span>
          </div>
        </div>
      </div>
    </section>
  );
}