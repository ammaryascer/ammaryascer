"use client";

import { motion } from "framer-motion";

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
