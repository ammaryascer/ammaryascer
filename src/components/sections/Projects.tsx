"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

import { SectionReveal } from "@/components/common/SectionReveal";

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <SectionReveal>
                    <h2 className="text-3xl font-bold mb-12 text-center">Volunteering</h2>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 transition-all hover:shadow-xl"
                        >
                            <div className="aspect-video bg-gray-200 dark:bg-zinc-800 relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-4">
                                        <div className="text-white text-sm font-medium">View Details</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
