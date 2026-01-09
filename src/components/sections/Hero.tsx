"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Quote } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

import { portfolioData } from "@/data/portfolio";

export function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-10 md:py-20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">

                    {/* AVATAR SECTION - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-shrink-0 order-1 md:order-1"
                    >
                        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
                            {/* Decorative Frame Elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] rotate-3 opacity-40 blur-lg animate-pulse" />
                            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.1rem] opacity-20" />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] p-3 shadow-2xl shadow-blue-900/20 ring-1 ring-white/10 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                                <img
                                    src={`${BASE_PATH}/Ammar-P.P1x1-B.jpeg`}
                                    alt="Ammar Yasser AbdAllah"
                                    className="w-full h-full object-cover rounded-[1.5rem]"
                                />

                                {/* Inner Gloss Effect */}
                                <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                    {/* TEXT SECTION - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-center md:text-left flex flex-col gap-6 max-w-2xl order-2 md:order-2"
                    >
                        {/* Name Block */}
                        <div className="flex flex-col">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-800 dark:text-gray-100 tracking-wide leading-tight text-left"
                            >
                                Ammar Yasser AbdAllah
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 tracking-tight block w-full -ml-[0.05em] py-2"
                            >
                                Mohammad
                            </motion.h1>
                        </div>

                        {/* Title / Role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-blue-50/50 dark:bg-white/5 border border-blue-100 dark:border-white/10 rounded-xl p-3 md:p-4 backdrop-blur-sm w-full"
                        >
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-blue-900 dark:text-blue-100 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis w-full text-center md:text-left">
                                {portfolioData.personalInfo.title}
                            </p>
                        </motion.div>

                        {/* Motto / Short Bio */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                <Quote className="w-8 h-8 text-blue-400/50 flex-shrink-0 rotate-180" />
                                <p className="text-lg italic leading-relaxed font-light">
                                    Bridging Languages, Connecting Lives. A proven impact on profession and society through leadership and health advocacy.
                                </p>
                            </div>
                        </motion.div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
