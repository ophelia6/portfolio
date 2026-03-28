"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="py-24 sm:py-32 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-teal-400 mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700 hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                className="relative sm:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-5 w-3 h-3 rounded-full bg-teal-400 border-2 border-slate-900 hidden sm:block" />

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-teal-400/40 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-50">
                        {job.role}
                      </h3>
                      <p className="text-teal-400 font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span className="text-slate-400 text-sm font-mono">
                        {job.period}
                      </span>
                      <span className="text-slate-500 text-xs">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-teal-400 mt-1.5 shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
