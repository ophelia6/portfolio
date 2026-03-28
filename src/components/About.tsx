"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personal, stats } from "@/data/resume";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="py-24 sm:py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-teal-400 mt-3" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {personal.summary}
            </p>
            <p className="text-slate-400 leading-relaxed">
              My work spans the full UI stack — from building accessible,
              pixel-perfect interfaces to integrating third-party services and
              writing automation tests. I care deeply about performance,
              inclusive design, and writing code that&apos;s easy for the next
              engineer to understand.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2z"
                  />
                </svg>
                Email Me
              </a>
              {/* Resume PDF download — place your PDF at /public/resume.pdf */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-teal-400 text-slate-300 hover:text-teal-400 font-medium px-6 py-2.5 rounded-lg transition-all duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center hover:border-teal-400/50 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="text-3xl font-bold text-teal-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently */}
            <div className="mt-5 bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <p className="text-teal-400 font-mono text-xs mb-2 uppercase tracking-wider">
                Currently
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Software Engineer at{" "}
                <span className="text-slate-100 font-medium">HowNow</span> —
                building EdTech features for UK Government & enterprise
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
