"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, Users, Zap, CheckCircle, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ThoughtProcess() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Our Thought Process
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solving the Policy Bottleneck
            </p>
            <Link 
              href="/"
              className="inline-flex items-center mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* The Origin */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
              <Target className="w-8 h-8 text-primary mr-3" />
              The Origin: A Problem, Not a Model
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We didn't start with the goal of deploying the heaviest AI model; we started with a clear, critical challenge presented by the Smart India Hackathon (SIH 35): <strong>How do we transform chaotic public opinion into confident, actionable policy?</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              We realized the core issue wasn't a lack of data, but that the existing system failed the policy analysts responsible for synthesizing it.
            </p>
          </div>
        </motion.section>

        {/* The Analyst's Dilemma */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
              <Users className="w-8 h-8 text-primary mr-3" />
              The Analyst&apos;s Dilemma (The &apos;Priya Sharma&apos; Problem)
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We centered our entire design around a single user: the dedicated policy analyst, like <strong>Priya Sharma at the Ministry of Corporate Affairs (MCA)</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Priya&apos;s crucial job—reading thousands of submissions (PDFs, emails, forms) and synthesizing them into a concise report for senior officials—is currently manual and impossible:
            </p>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <p className="text-lg text-foreground mb-4">
                She asks four questions for every single comment:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Which legal clause is this about?
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  What is the sentiment?
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Who is this person?
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  What is the main suggestion?
                </li>
              </ul>
            </div>
            <p className="text-lg text-muted-foreground">
              The outcome: Weeks of mental fatigue, high risk of missing a &quot;hidden gem&quot; (a brilliant suggestion buried in a long document), and immense pressure due to tight legislative deadlines.
            </p>
          </div>
        </motion.section>

        {/* Pain Points Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Pain Points</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 text-foreground font-semibold">The Pain Point</th>
                    <th className="text-left py-4 px-6 text-foreground font-semibold">Our Core Realization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6 text-muted-foreground">Extreme Information Overload</td>
                    <td className="py-4 px-6 text-muted-foreground">Reading thousands of pages is not humanly possible. We need a safety net.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6 text-muted-foreground">Missing Critical Insights</td>
                    <td className="py-4 px-6 text-muted-foreground">A brilliant suggestion or a subtle, recurring complaint can be overlooked. We need objectivity and topic modeling.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-muted-foreground">Unconscious Bias</td>
                    <td className="py-4 px-6 text-muted-foreground">Fatigue causes subjective interpretation. We need a data-driven score.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Design Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
              <Lightbulb className="w-8 h-8 text-primary mr-3" />
              Our Design Philosophy: Smart, Layered, Solved
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our belief is that the best solution is the one that is smart, horizontally scalable, and directly solves the user&apos;s specific pain—not the one that relies on brute-force processing.
            </p>
          </div>
        </motion.section>

        {/* Conquering Input Chaos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">1. Conquering the Input Chaos</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The first step was data engineering, not AI. Feedback arrives in chaotic forms (PDFs, emails, etc.). We chose reliable, targeted tools to solve this:
            </p>
            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-lg text-foreground mb-4">
                <strong>The Fix:</strong> Our Ingestion Engine (Layer 1) uses robust OCR (pytesseract) and data libraries (pandas) to standardize every single piece of feedback into a clean, uniform text format. This guarantees analysis can even begin.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Multi-Layer Assembly Line */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">2. The Multi-Layer Assembly Line</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Instead of one monolithic model, we broke the problem into a sequential 5-Layer Pipeline, allowing each stage to refine and enrich the data efficiently.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 text-foreground font-semibold">Layer & Technique</th>
                    <th className="text-left py-4 px-6 text-foreground font-semibold">Why We Chose It</th>
                    <th className="text-left py-4 px-6 text-foreground font-semibold">The Benefit to Priya</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6 text-muted-foreground">Provision Parser (Layer 2)</td>
                    <td className="py-4 px-6 text-muted-foreground">Used accurate, rule-based Named Entity Recognition (NER) to tag legal clauses.</td>
                    <td className="py-4 px-6 text-muted-foreground">Instantly maps comments to exact Sections of the draft law.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-muted-foreground">Stakeholder Classifier (Layer 3)</td>
                    <td className="py-4 px-6 text-muted-foreground">Used efficient Zero-Shot Classification instead of custom training.</td>
                    <td className="py-4 px-6 text-muted-foreground">Quickly and accurately profiles authors (CA, CEO, Student) to qualify the source of the feedback.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Core Breakthrough */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
              <Zap className="w-8 h-8 text-primary mr-3" />
              3. The Core Breakthrough: Policy Intelligence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We realized that simply measuring sentiment volume is a policy flaw. It treats the single, uninformed voice the same as the expert voice most affected by the law.
            </p>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <p className="text-lg text-foreground mb-4">
                <strong>The Innovation:</strong> The Relevance Engine (Layer 4). This layer is not about complex new algorithms; it&apos;s about introducing policy logic into the scoring.
              </p>
              <p className="text-lg text-foreground">
                By using a Domain-Specific Weight Matrix, we ensure the final score reflects the true balance of opinion among the people who matter most. This is the difference between a neutral report and an actionable recommendation.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Outcome: Transforming Chaos into Confidence</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our solution transforms Priya&apos;s chaotic, stressful, and error-prone process into one that is efficient, insightful, and data-driven.
            </p>
            <p className="text-xl text-foreground font-semibold">
              LokNiti is not just an AI tool; it is a tool that empowers public servants like Priya Sharma to create better laws for the country.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
