"use client";
import DataPipelineDiagram from "./DataPipelineDiagram";

export default function HowItWorks() {
  return (
    <section className="how-it-works py-20" id="how-it-works">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
          Behind the Scenes
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="step text-center card-shadow p-4 rounded-lg">
            <div className="step__icon w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Data</h3>
            <p className="text-muted-foreground">Citizens’ comments (CSV/Excel).</p>
          </div>
          <div className="step text-center card-shadow p-4 rounded-lg">
            <div className="step__icon w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p className="text-muted-foreground">File stored safely on AWS S3.</p>
          </div>
          <div className="step text-center card-shadow p-4 rounded-lg">
            <div className="step__icon w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Queue Management</h3>
            <p className="text-muted-foreground">AWS SQS ensures reliable task processing.</p>
          </div>
          <div className="step text-center card-shadow p-4 rounded-lg">
            <div className="step__icon w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Engine</h3>
            <p className="text-muted-foreground">Our NLP workers process the data.</p>
          </div>
          <div className="step text-center card-shadow p-4 rounded-lg">
            <div className="step__icon w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              5
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Dashboard</h3>
            <p className="text-muted-foreground">Results delivered with insights & charts.</p>
          </div>
          <div className="step text-center card-shadow p-4 rounded-lg">
            <div className="step__icon w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
              6
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Notifications</h3>
            <p className="text-muted-foreground">User alerted when report is ready.</p>
          </div>
        </div>
        <DataPipelineDiagram />
      </div>
    </section>
  );
}