"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 sm:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-teal-400 mt-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-teal-400/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.07 }}
            >
              <h3 className="text-teal-400 font-mono text-xs uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700/60 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-600/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
