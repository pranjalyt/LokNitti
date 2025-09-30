"use client";

import { Zap, Clock } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-32 bg-black" id="problem">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              The Challenge of Public Consultations
            </h2>
            
            <div className="space-y-4">
              <p className="text-base text-white leading-relaxed">
                Every government consultation receives thousands of citizen comments.{" "}
                <strong className="text-white">Officials struggle with reading at scale → manual summarization is impossible.</strong> — from products innovate.
              </p>
              
              <p className="text-base text-white leading-relaxed">
                <strong className="text-white">Bias and noise means fact-based vs emotional comments are mixed.</strong>
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-black" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Relevance</h3>
                  <p className="text-sm text-gray-300">A student's opinion on education policy matters more than a random citizen's.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-black" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Time pressure</h3>
                  <p className="text-sm text-gray-300">Decisions must be made quickly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/consultation-signing.jpg" 
                alt="Consultation signing process" 
                className="w-full max-w-sm h-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}