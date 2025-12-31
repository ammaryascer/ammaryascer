"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { VantaBackground } from "@/components/common/VantaBackground";
import { BASE_PATH } from "@/lib/constants";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
            {/* Vanta.js Background */}
            <VantaBackground>
                {/* Optional overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/30 dark:bg-black/40 pointer-events-none" />
            </VantaBackground>

            <div className="container px-4 z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-white/50 dark:bg-white/5 border border-blue-100 dark:border-blue-900/30 backdrop-blur-sm rounded-full shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Certified Medical Interpreter
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                >
                    Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Languages</span> <br />
                    <span className="relative inline-block">
                        Connecting Lives
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500 opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C26.5002 2.99997 101 -4.00003 198 2.00003" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed"
                >
                    Professional Arabic-English Medical Interpreter & Pharmacist dedicated to facilitating clear communication and ensuring patient safety in healthcare settings.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-600/30 transition-all active:scale-95"
                    >
                        Get in Touch
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={`${BASE_PATH}/resume.pdf`}
                        className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all active:scale-95"
                    >
                        Download CV
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
