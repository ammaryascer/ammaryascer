"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Image as ImageIcon, Link as LinkIcon, ChevronDown, ChevronUp, Globe, Users, Target, Calendar, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function PublicHealth() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black/20" id="public-health">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                        Public Health Initiatives
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Leading nationwide campaigns and community-based programs to promote health equity, awareness, and well-being.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {portfolioData.publicHealth.map((project, index) => (
                        <PublicHealthCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PublicHealthCard({ project, index }: { project: any, index: number }) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden h-fit transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* 1. Visible Header */}
            <div className="p-6 md:p-8 relative overflow-hidden">
                {/* Decorative Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-cyan-500/5 rounded-bl-full pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        {/* SDG Badge */}
                        {project.sdg && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-100 dark:border-emerald-800">
                                <Globe size={14} /> SDGs Impact
                            </span>
                        )}
                    </div>

                    {project.subtitle && (
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                            {project.subtitle}
                        </p>
                    )}

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-4xl">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-gray-200">Role:</span> {project.role}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-gray-200">Duration:</span> {project.duration}
                        </div>
                        <div className="flex items-center gap-2 md:col-span-2">
                            <Target className="w-4 h-4 text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-gray-200">Scope:</span> {project.scope}
                        </div>
                        <div className="flex items-center gap-2 md:col-span-2 text-emerald-600 dark:text-emerald-500">
                            <Award className="w-4 h-4" />
                            {project.sdg}
                        </div>
                    </div>

                    {/* 2. Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <ActionButton
                            label="Details"
                            icon={<FileText size={18} />}
                            isActive={activeSection === 'details'}
                            onClick={() => toggleSection('details')}
                        />
                        <ActionButton
                            label="Gallery"
                            icon={<ImageIcon size={18} />}
                            isActive={activeSection === 'gallery'}
                            onClick={() => toggleSection('gallery')}
                        />
                        <ActionButton
                            label="Evidence & Links"
                            icon={<LinkIcon size={18} />}
                            isActive={activeSection === 'evidence'}
                            onClick={() => toggleSection('evidence')}
                        />
                    </div>
                </div>
            </div>

            {/* 3, 4, 5. Hidden Sections (Expandable) */}
            <AnimatePresence>
                {activeSection && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"
                    >
                        <div className="p-6 md:p-8">
                            {/* DETAILS SECTION */}
                            {activeSection === 'details' && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <DetailBlock title="Context" content={project.details.context} />

                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Program Design & Actions</h4>
                                        <ul className="grid gap-2">
                                            {project.details.actions.map((action: string, i: number) => (
                                                <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                                    <span>{action}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Impact</h4>
                                        <ul className="grid gap-2">
                                            {project.details.impact.map((item: string, i: number) => (
                                                <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <DetailBlock title="Sustainability" content={project.details.sustainability} />

                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Partnerships</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.details.partnerships.map((partner: string, i: number) => (
                                                <span key={i} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400">
                                                    {partner}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* GALLERY SECTION */}
                            {activeSection === 'gallery' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                    {project.gallery.map((item: string, i: number) => (
                                        <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-center p-4 border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500">
                                            <div>
                                                <ImageIcon className="mx-auto mb-2 opacity-50" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* EVIDENCE SECTION */}
                            {activeSection === 'evidence' && (
                                <div className="grid gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                    {project.evidence.map((item: string, i: number) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Award size={20} />
                                                </div>
                                                <span className="font-medium text-gray-700 dark:text-gray-200">{item}</span>
                                            </div>
                                            <ChevronDown className="-rotate-90 text-gray-400 group-hover:translate-x-1 transition-transform" size={18} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function ActionButton({ label, icon, isActive, onClick }: { label: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 border
                ${isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }
            `}
        >
            {icon}
            {label}
            {isActive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
    );
}

function DetailBlock({ title, content }: { title: string, content: string }) {
    return (
        <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">{title}</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                {content}
            </p>
        </div>
    );
}
