"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionReveal } from "@/components/common/SectionReveal";
import { Award, Calendar } from "lucide-react";

export function Qualifications() {
    return (
        <section id="qualifications" className="py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <SectionReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center">Conferences & Seminars</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.qualifications.map((qual, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }} // Faster stagger for list
                            className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
                        >
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 shrink-0">
                                <Award size={20} />
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 leading-tight">
                                    {qual.title}
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {qual.year}
                                    </span>
                                    <span className="font-medium text-blue-600 dark:text-blue-400">
                                        @{qual.issuer}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
