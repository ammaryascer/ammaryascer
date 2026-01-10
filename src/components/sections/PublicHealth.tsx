"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Image as ImageIcon, Link as LinkIcon, Globe, Users, Target, Calendar, Award, X, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function PublicHealth() {
    const [selectedProject, setSelectedProject] = useState<any | null>(null);
    const [activeTab, setActiveTab] = useState<string>("details");

    const openModal = (project: any, tab: string) => {
        setSelectedProject(project);
        setActiveTab(tab);
    };

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

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {portfolioData.publicHealth.map((project, index) => (
                        <PublicHealthCard
                            key={index}
                            project={project}
                            index={index}
                            onOpen={(tab) => openModal(project, tab)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

function PublicHealthCard({ project, index, onOpen }: { project: any, index: number, onOpen: (tab: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden h-full transition-all duration-300 hover:scale-[1.05] hover:ring-4 hover:ring-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            <div className="p-6 md:p-8 flex-1 flex flex-col relative overflow-hidden">
                {/* Decorative Background Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/5 to-cyan-500/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* SDG Badge */}
                    <div className="mb-4">
                        {project.sdg && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-100 dark:border-emerald-800">
                                <Globe size={12} /> SDG Impact
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight min-h-[3.5rem] flex items-center">
                        {project.title}
                    </h3>

                    {project.subtitle && (
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                            {project.subtitle}
                        </p>
                    )}

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="mt-auto space-y-2 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-4">
                        <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-blue-500" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">Role:</span>
                            <span className="line-clamp-1">{project.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-blue-500" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">Duration:</span>
                            {project.duration}
                        </div>
                        <div className="flex items-center gap-2">
                            <Target className="w-3.5 h-3.5 text-blue-500" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">Scope:</span>
                            <span className="line-clamp-1">{project.scope}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons Row */}
            <div className="p-4 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-gray-800 grid grid-cols-3 gap-2">
                <ActionButton label="Details" icon={<FileText size={16} />} onClick={() => onOpen('details')} />
                <ActionButton label="Gallery" icon={<ImageIcon size={16} />} onClick={() => onOpen('gallery')} />
                <ActionButton label="Links" icon={<LinkIcon size={16} />} onClick={() => onOpen('evidence')} />
            </div>
        </motion.div>
    );
}

function ProjectModal({ project, activeTab, setActiveTab, onClose }: { project: any, activeTab: string, setActiveTab: (tab: string) => void, onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start bg-gray-50/50 dark:bg-gray-800/50">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-2">
                            {project.sdg}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 dark:border-gray-800">
                    <TabButton label="Details" active={activeTab === 'details'} onClick={() => setActiveTab('details')} icon={<FileText size={18} />} />
                    <TabButton label="Gallery" active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} icon={<ImageIcon size={18} />} />
                    <TabButton label="Evidence & Links" active={activeTab === 'evidence'} onClick={() => setActiveTab('evidence')} icon={<LinkIcon size={18} />} />
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50/30 dark:bg-gray-900/50">
                    {/* DETAILS */}
                    {activeTab === 'details' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <DetailBlock title="Context" content={project.details.context} />

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                                        <Target size={16} /> Program Design
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.details.actions.map((action: string, i: number) => (
                                            <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                                                <span>{action}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                                        <Award size={16} /> Impact
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.details.impact.map((item: string, i: number) => (
                                            <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <DetailBlock title="Sustainability" content={project.details.sustainability} />
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Partnerships</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.details.partnerships.map((partner: string, i: number) => (
                                            <span key={i} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300 shadow-sm">
                                                {partner}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* GALLERY */}
                    {activeTab === 'gallery' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
                            {project.gallery.map((item: string, i: number) => (
                                <div key={i} className="group aspect-video bg-white dark:bg-gray-800 rounded-xl relative overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-4">
                                    <ImageIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">{item}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* EVIDENCE */}
                    {activeTab === 'evidence' && (
                        <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-2xl mx-auto">
                            {project.evidence.map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Award size={20} />
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200 flex-1">{item}</span>
                                    <ChevronRight className="text-gray-300 group-hover:text-blue-500 transition-colors" size={20} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

function ActionButton({ label, icon, onClick }: { label: string, icon: React.ReactNode, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all active:scale-95"
        >
            {icon}
            {label}
        </button>
    );
}

function TabButton({ label, icon, active, onClick }: { label: string, icon: React.ReactNode, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${active
                    ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
        >
            <span className="hidden sm:inline">{icon}</span>
            {label}
        </button>
    );
}

function DetailBlock({ title, content }: { title: string, content: string }) {
    return (
        <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {content}
            </p>
        </div>
    );
}
