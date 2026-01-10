"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

import { SectionReveal } from "@/components/common/SectionReveal";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
                </SectionReveal>

                <div className="relative border-l-2 border-blue-200 dark:border-blue-900/30 ml-3 md:ml-6 space-y-8 pb-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[11px] top-6 h-6 w-6 rounded-full bg-blue-50 dark:bg-zinc-900 border-4 border-blue-600 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125">
                            </div>

                            {/* Card Container */}
                            <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg flex items-center gap-2 mt-1">
                                            {exp.company}
                                        </div>
                                    </div>
                                    <span className="self-start px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full border border-blue-100 dark:border-blue-900/30 whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    {Array.isArray(exp.description) ? (
                                        <ul className="space-y-3">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
