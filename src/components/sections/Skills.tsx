"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <SectionReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
                </SectionReveal>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {portfolioData.skills.map((skill) => (
                        <motion.div
                            key={skill}
                            variants={item}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative px-6 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 cursor-default"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                            <span className="relative font-medium bg-clip-text text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
