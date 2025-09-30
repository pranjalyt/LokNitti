"use client";

import { motion } from "framer-motion";
import { Brain, Target, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ThoughtProcessPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Thought Process
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Solving the Policy Bottleneck with Smart, User-Centered Design
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* The Origin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">The Origin</h3>
            <p className="text-muted-foreground text-sm">
              We didn't start with AI models—we started with a clear challenge from Smart India Hackathon: transforming chaotic public opinion into confident, actionable policy.
            </p>
          </motion.div>

          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">The Problem</h3>
            <p className="text-muted-foreground text-sm">
              Policy analysts like Priya Sharma face impossible tasks: reading thousands of submissions, asking four questions per comment, and meeting tight deadlines.
            </p>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">The Solution</h3>
            <p className="text-muted-foreground text-sm">
              A 5-layer pipeline: data ingestion, provision parsing, stakeholder classification, relevance scoring, and policy intelligence.
            </p>
          </motion.div>

          {/* The Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">The Outcome</h3>
            <p className="text-muted-foreground text-sm">
              Transforming chaos into confidence—empowering public servants to create better laws with data-driven insights and clear policy recommendations.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/thought-process"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
          >
            See Full Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
