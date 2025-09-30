"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calculator, ArrowRight, Lightbulb, FileText, TrendingUp, Users, Brain, BarChart3, Clock } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Examples() {
  return (
    <section className="py-20 bg-secondary" id="examples">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the difference LokNiti makes
          </p>
        </motion.div>

        {/* Case Study: Reducing GST on Stationery */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Case Study: Reducing GST on Stationery
            </h3>
            <p className="text-muted-foreground mb-4">
              Student (direct stakeholder) vs Doctor (indirect stakeholder)
            </p>
            <p className="text-sm text-muted-foreground italic">
              For example, these are the comments:
            </p>
          </div>

          {/* Full Comments Section */}
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Full Comments for Context
              </h3>
              <p className="text-muted-foreground">
                Here are the complete comments that demonstrate stakeholder relevance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Student Full Comment */}
              <motion.div 
                className="bg-gray-50 dark:bg-card p-6 rounded-lg relative card-shadow-lg"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground">Student Comment</h4>
                    <p className="text-sm text-muted-foreground">Direct stakeholder - Weight: 1.0</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    "Reducing GST on stationery is excellent! As a student, I spend a significant portion of my budget on notebooks, pens, and other study materials. Lower prices would make education more accessible to students from all economic backgrounds. This policy change would directly benefit millions of students across the country who struggle with the rising costs of education. Stationery is not a luxury for us - it's a necessity for learning."
                  </p>
                </div>
              </motion.div>

              {/* Doctor Full Comment */}
              <motion.div 
                className="bg-gray-50 dark:bg-card p-6 rounded-lg relative card-shadow-lg"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    D
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground">Doctor Comment</h4>
                    <p className="text-sm text-muted-foreground">Indirect stakeholder - Weight: 0.1</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    "Why reduce GST on stationery when medical supplies are still expensive? As a doctor, I see patients struggling to afford basic medications and medical equipment. The government should prioritize healthcare accessibility over stationery costs. This policy seems to favor students while ignoring the healthcare crisis. Medical supplies are more critical for public health than notebooks and pens."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Before vs After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Before - Traditional Method */}
            <motion.div 
              className="bg-gray-50 dark:bg-card p-8 rounded-lg relative card-shadow-lg innovation-card"
              variants={itemVariants}
            >
              <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-3">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Traditional Counting</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All voices treated equally</p>
                </div>

              {/* Comments */}
              <div className="space-y-4 mb-6">
                {/* Student Comment */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Student Comment</div>
                      <p className="text-gray-800 dark:text-gray-200 mb-1">
                        "Reducing GST on stationery is excellent!"
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Weight: 1.0</span>
                    </div>
                  </div>
                </div>

                {/* Doctor Comment */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      D
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Doctor Comment</div>
                      <p className="text-gray-800 dark:text-gray-200 mb-1">
                        "Why reduce GST on stationery when medical supplies..."
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Weight: 0.1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculation */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-600 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Simple Math</span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono text-gray-800 dark:text-gray-200">
                    +1 + (-1) = 0
                  </div>
                </div>
              </div>

                {/* Result */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-4 text-center">
                  <div className="text-red-500 mb-2">❌</div>
                  <div className="font-bold text-gray-600 dark:text-gray-300">Divided Opinion</div>
                </div>
              </div>
            </motion.div>

            {/* After - LokNiti Method */}
            <motion.div 
              className="bg-gray-50 dark:bg-card p-8 rounded-lg relative card-shadow-lg innovation-card"
              variants={itemVariants}
            >
              <GlowingEffect disabled={false} glow={true} proximity={50} spread={30} />
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-3">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">LokNiti Analysis</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered insights</p>
                </div>

                {/* Platform Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Summarization */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Summarization</span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Students: GST reduction helpful</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Doctor: Healthcare concerns</span>
                      </div>
                    </div>
                  </div>

                  {/* Sentiment Analysis */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Sentiment</span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Student: Positive</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Doctor: Negative</span>
                      </div>
                    </div>
                  </div>

                  {/* Relevance Scoring */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Relevance</span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
                        <span>Weight: 1.0</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>
                        <span>Weight: 0.1</span>
                      </div>
                    </div>
                  </div>

                  {/* Fact vs Emotion */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Fact vs Emotion</span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Both: Emotion-heavy</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Weighted differently</span>
                      </div>
                    </div>
                  </div>

                  {/* Clustering */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-pink-500" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Clustering</span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span>Student-like comments</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Doctor-like comments</span>
                      </div>
                    </div>
                  </div>

                  {/* Trend Analysis */}
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Trends</span>
                    </div>
                    <div className="text-xs text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span>Rising positive sentiment</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span>Among students over time</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculation */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-600 mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calculator className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Weighted Analysis</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-mono text-gray-800 dark:text-gray-200">
                      +1.0 + (-0.1) = +0.9
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-green-500 mb-2">✅</div>
                  <div className="font-bold text-gray-800 dark:text-gray-200 mb-2">Strong Positive</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Policy Insight: GST reduction on stationery strongly supported by directly affected stakeholders
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Arrow pointing from Before to After */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Traditional</span>
              <ArrowRight className="w-5 h-5 text-gray-500" />
              <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold">LokNiti</span>
            </div>
          </motion.div>

          {/* The LokNiti Advantage Banner
          <motion.div 
            className="text-center bg-gray-50 dark:bg-gradient-to-r dark:from-primary/10 dark:to-secondary/10 p-8 rounded-lg card-shadow mt-16"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-semibold text-foreground">
                The LokNiti Advantage
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Byfd weighting comments based on stakeholder relevance, LokNiti transforms ambiguous data into clear, actionable policy insights that traditional counting methods miss.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}