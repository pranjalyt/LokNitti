"use client";
import { useMotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import Navbar from "@/components/Navbar";

import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorksNew from "@/components/HowItWorksNew";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import RelevanceEngine from "@/components/RelevanceEngine";
import Examples from "@/components/Examples";
import About from "@/components/About";
import ThoughtProcessPreview from "@/components/ThoughtProcessPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
  ];

  return (
    <>
      <Navbar />
      <main>
        <div ref={ref} className="h-[200vh] w-full relative pt-40">
          <GoogleGeminiEffect
            pathLengths={pathLengths}
            title="Transforming Public Feedback into Policy Insights"
            description="An AI-powered platform that analyses government consultations, identifies sentiments, highlights trends and clusters opinions to support data-driven decision making"
          />
        </div>
        <div className="w-full bg-background relative z-20">
          <Problem />
          <Solution />
          <HowItWorksNew />
          <Technology />
          <UseCases />
          <RelevanceEngine />
          <Examples />
          <About />
          <ThoughtProcessPreview />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
