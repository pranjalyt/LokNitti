"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DataPipelineDiagram = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const arrowVariants = {
    hidden: { pathLength: 0 },
    visible: (i) => ({
      pathLength: 1,
      transition: { duration: 0.9, delay: i * 0.35, ease: "easeInOut" },
    }),
  };

  return (
    <div ref={ref} className="w-full max-w-6xl p-10 mt-24 bg-white rounded-2xl shadow-xl">
      {/* Increased height to h-[800px] */}
      <div className="relative h-[800px]">
        {/* NODES with adjusted positions */}
        <div className="absolute" style={{ left: 50, top: 150 }}>
          <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-3xl">👩‍💻</span>
          </div>
          <p className="mt-3 text-sm text-gray-700 text-center w-28">Analyst (Upload CSV)</p>
        </div>

        <div className="absolute" style={{ left: 400, top: 150 }}>
          <p className="mt-3 text-sm text-gray-700 text-center w-28" style={{ marginTop: '-20px' }}>Flask Web Server</p>
          <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-3xl">🌐</span>
          </div>
        </div>

        <div className="absolute" style={{ left: 750, top: 150 }}>
          <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-3xl">🗄️</span>
          </div>
          <p className="mt-3 text-sm text-gray-700 text-center w-28">Amazon S3 Bucket</p>
        </div>

        <div className="absolute" style={{ left: 400, top: 380 }}>
          <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-2xl">📥</span>
          </div>
          <p className="mt-3 text-sm text-gray-700 text-center w-24">Amazon SQS Queue</p>
        </div>

        {/* FORCED VISIBILITY FOR WORKER POOL */}
        <div className="absolute" style={{ left: 650, top: 380 }}>
          <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-3xl">⚙️</span>
          </div>
          <p className="mt-3 text-sm font-bold text-center w-28" style={{ color: 'red' }}>Scalable Worker Pool (EC2)</p>
        </div>

        <div className="absolute" style={{ left: 950, top: 380 }}>
          <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
            <span className="text-3xl">📊</span>
          </div>
          <p className="mt-3 text-sm text-gray-700 text-center w-28">Email Results</p>
        </div>

        {/* Callouts */}
        <div className="absolute" style={{ left: 180, top: 400 }}>
          <div className="border border-gray-400 border-dashed shadow-sm bg-white px-3 py-2 rounded text-xs text-gray-700 text-center w-48">
            Decouples web server from heavy processing
          </div>
        </div>

        <div className="absolute" style={{ left: 625, top: 500 }}>
          <div className="border border-gray-400 border-dashed shadow-sm bg-white px-3 py-2 rounded text-xs text-gray-700 text-center w-48">
            Horizontally scalable to meet demand
          </div>
        </div>

        {/* Adjusted SVG ViewBox */}
        <svg viewBox="0 0 1100 800" className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrow-blue" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto"><path d="M0 0 L12 5 L0 10 z" fill="#3b82f6" /></marker>
            <marker id="arrow-green" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto"><path d="M0 0 L12 5 L0 10 z" fill="#10b981" /></marker>
            <marker id="arrow-gray" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto"><path d="M0 0 L12 5 L0 10 z" fill="#6b7280" /></marker>
          </defs>

          {/* Paths */}
          <motion.path d="M180 195 C250 195, 350 195, 380 195" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrow-blue)" custom={0} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <motion.path d="M530 195 C600 195, 700 195, 730 195" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrow-blue)" custom={1} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <text x="600" y="180" fontSize="14" fill="#374151">1. Upload File</text>
          <motion.path d="M740 180 C650 140, 550 140, 520 180" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrow-green)" custom={2} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <text x="580" y="135" fontSize="14" fill="#10b981">Upload Confirmed</text>
          <motion.path d="M790 280 C800 320, 750 360, 700 390" stroke="#10b981" strokeWidth="4" fill="none" markerEnd="url(#arrow-green)" custom={3} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <text x="780" y="340" fontSize="14" fill="#065f46">2. Send Job Message</text>
          <motion.path d="M450 280 V 360" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrow-blue)" custom={4} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <text x="325" y="330" fontSize="14" fill="#374151">3. Poll for Jobs</text>
          <motion.path d="M490 420 H 630" stroke="#6b7280" strokeWidth="4" fill="none" markerEnd="url(#arrow-gray)" custom={5} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <text x="520" y="450" fontSize="14" fill="#374151">4. Poll Process Data</text>
          <motion.path d="M780 425 H 930" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrow-blue)" custom={6} variants={arrowVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} />
          <text x="790" y="455" fontSize="14" fill="#374151">6. Email Results / 7. Delete Message</text>
        </svg>
      </div>
    </div>
  );
};

export default DataPipelineDiagram;