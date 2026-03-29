"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="py-24 sm:py-32 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-teal-400 mt-3" />
          <p className="text-slate-400 mt-4 text-sm">
            Personal builds &amp; explorations
          </p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {projects.map((project, i) => {
              const CardWrapper = project.liveUrl ? motion.a : motion.div;
              const wrapperProps = project.liveUrl
                ? {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    cursor: "pointer",
                  }
                : {};

              return (
                <CardWrapper
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={project.liveUrl ? { y: -4 } : {}}
                  className={`group bg-slate-800 border rounded-xl p-6 flex flex-col transition-all duration-300 ${
                    project.liveUrl
                      ? "cursor-pointer hover:shadow-xl hover:shadow-teal-500/10"
                      : "cursor-default"
                  } ${
                    project.featured
                      ? "border-teal-400/30 hover:border-teal-400/60"
                      : "border-slate-700 hover:border-teal-400/40"
                  }`}
                  {...wrapperProps}
                >
                  {/* Card top */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-teal-400/60 group-hover:text-teal-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 9l9 6 9-6"
                        />
                      </svg>
                      {project.featured && (
                        <span className="text-teal-400 font-mono text-xs bg-teal-400/10 px-2 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* External link indicator */}
                    {project.liveUrl ? (
                      <svg
                        className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    ) : (
                      <span className="text-slate-600 text-xs font-mono">
                        soon
                      </span>
                    )}
                  </div>

                  {/* Title & description */}
                  <h3 className="text-slate-50 font-semibold text-base mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-slate-400 font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
