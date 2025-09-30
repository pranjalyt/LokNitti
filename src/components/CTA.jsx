"use client";

export default function CTA() {
  return (
    <section className="cta py-20" id="cta">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Make Smarter Policies, Faster.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Turn citizen feedback into actionable insights with our AI-powered
          platform.
        </p>
        <div className="hero__cta-buttons space-x-4">
          <a
            href="http://127.0.0.1:5000/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            See Demo
          </a>
          <a
            href="/thought-process"
            className="cta-button cta-button--secondary !bg-black dark:!bg-secondary !text-white dark:!text-secondary-foreground hover:!bg-gray-800 dark:hover:!bg-secondary/90 text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Thought Process
          </a>
        </div>
      </div>
    </section>
  );
}