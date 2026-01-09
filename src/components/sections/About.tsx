"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >

                    <div className="flex flex-row gap-4 mb-16 justify-center">
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                        >
                            Get in Touch
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href={`${BASE_PATH}/resume.pdf`}
                            className="flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5"
                        >
                            Download CV
                            <Download size={18} />
                        </a>
                    </div>

                    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-200">
                        {portfolioData.personalInfo.bio.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
