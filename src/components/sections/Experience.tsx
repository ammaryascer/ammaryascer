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

                <div className="relative border-l-2 border-blue-100 dark:border-zinc-800 ml-3 md:ml-6 space-y-12">
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
                            <div className="absolute -left-[11px] top-1 h-6 w-6 rounded-full bg-blue-100 dark:bg-zinc-800 border-4 border-blue-600 flex items-center justify-center">
                                {/* <Briefcase size={10} className="text-blue-600" /> */}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{exp.role}</h3>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-blue-600 font-medium mb-3">{exp.company}</div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
