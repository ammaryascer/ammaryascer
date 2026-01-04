"use client";

import { motion } from "framer-motion";
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
                    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-64 h-64 shrink-0 relative rotate-3 hover:rotate-0 transition-transform duration-300">
                            <img
                                src={`${BASE_PATH}/avatar.png?v=3`}
                                alt={portfolioData.personalInfo.name}
                                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white dark:border-zinc-800 transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-200">
                            {portfolioData.personalInfo.bio.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
