"use client";

export default function UseCases() {
  return (
    <section className="use-cases py-20 relative" id="use-cases">
      {/* Dot Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        />
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
          Who Benefits?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="use-case bg-card p-6 rounded-lg card-shadow hover:scale-105 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Government Ministries</h3>
            <p className="text-muted-foreground">
              Faster, unbiased consultation analysis.
            </p>
          </div>
          <div className="use-case bg-card p-6 rounded-lg card-shadow hover:scale-105 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Policy Makers</h3>
            <p className="text-muted-foreground">
              Better understanding of public needs.
            </p>
          </div>
          <div className="use-case bg-card p-6 rounded-lg card-shadow hover:scale-105 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Citizens</h3>
            <p className="text-muted-foreground">
              Assurance that voices are heard.
            </p>
          </div>
          <div className="use-case bg-card p-6 rounded-lg card-shadow hover:scale-105 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Researchers</h3>
            <p className="text-muted-foreground">
              Large-scale opinion mining for insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}