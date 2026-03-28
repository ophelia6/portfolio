"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education" className="py-24 sm:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-teal-400 mt-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-teal-400/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>

              <p className="text-teal-400 font-mono text-xs mb-2 uppercase tracking-wider">
                {edu.year}
              </p>
              <h3 className="text-slate-50 font-semibold text-base mb-1">
                {edu.degree}
              </h3>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
              <p className="text-slate-500 text-xs mt-1">{edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
