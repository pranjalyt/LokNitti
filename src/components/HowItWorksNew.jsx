"use client";

import { motion } from "framer-motion";
import { 
  Upload, 
  Shield, 
  Clock, 
  Brain, 
  BarChart3, 
  Bell 
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Upload,
    title: "Upload Data",
    description: "Citizens upload CSV/Excel files with comments",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: Shield,
    title: "Secure Storage",
    description: "File stored safely in AWS S3 with encryption",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    icon: Clock,
    title: "Queue Management",
    description: "AWS SQS ensures reliable processing order",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 4,
    icon: Brain,
    title: "AI Engine",
    description: "NLP workers analyze comments intelligently",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Visual Dashboard",
    description: "Results with charts & actionable insights",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 6,
    icon: Bell,
    title: "Instant Notifications",
    description: "Email/SMS/UI updates delivered immediately",
    color: "from-blue-500 to-blue-600"
  }
];

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

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function HowItWorksNew() {
  return (
    <section className="py-20 bg-background relative" id="how-it-works-new">
      {/* Dot Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        />
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Behind the Scenes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From data upload to actionable insights in 6 simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-300 dark:to-blue-400 transform -translate-y-1/2"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="relative group"
                  variants={itemVariants}
                >
                  {/* Step Card */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group-hover:border-border/80 hover:scale-102 hover:bg-blue-50/20 dark:hover:bg-blue-900/10 hover:-translate-y-1">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.id}
                      </div>
                      {/* Desktop connector dot */}
                      <div className="hidden lg:block absolute top-6 -right-3 w-6 h-6 bg-background rounded-full border-2 border-border"></div>
                    </div>

                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg mx-auto`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-card-foreground/80 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/10 group-hover:to-blue-50/10 dark:group-hover:from-blue-500/5 dark:group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden mt-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Mobile Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-blue-300 dark:from-blue-300 dark:to-blue-400"></div>
                  )}
                  
                  {/* Step Number */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-xl p-4 shadow-md hover:scale-102 hover:bg-blue-50/20 dark:hover:bg-blue-900/10 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border hover:scale-102 hover:bg-gradient-to-r hover:from-blue-50/20 hover:to-blue-50/20 dark:hover:from-blue-900/10 dark:hover:to-blue-900/10 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Public Feedback?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the power of AI-driven policy analysis in just 6 simple steps
            </p>
            <motion.a
              href="http://127.0.0.1:5000/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}