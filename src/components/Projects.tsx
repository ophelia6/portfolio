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
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`group bg-slate-800 border rounded-xl p-6 flex flex-col hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 ${
                  project.featured
                    ? "border-teal-400/30 hover:border-teal-400/60"
                    : "border-slate-700 hover:border-teal-400/40"
                }`}
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

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code"
                        className="text-slate-500 hover:text-teal-400 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open live demo"
                        className="text-slate-500 hover:text-teal-400 transition-colors"
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <span
                        className="text-slate-600 cursor-default"
                        title="Demo coming soon"
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
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

                {/* Live demo CTA */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-teal-400 text-xs font-mono hover:text-teal-300 transition-colors flex items-center gap-1"
                  >
                    View Live ↗
                  </a>
                )}
                {!project.liveUrl && (
                  <p className="mt-4 text-slate-600 text-xs font-mono">
                    Demo coming soon
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
}
