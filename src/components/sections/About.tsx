"use client";

import { motion } from "framer-motion";

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
                                src="/avatar.png?v=3"
                                alt="Ammar Mohammad"
                                className="w-full h-full object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-200">
                            <p>
                                Hello! I'm Ammar, a certified Arabic-English medical interpreter and pharmacist. My unique background allows me to bridge the gap between medical terminology and patient understanding, ensuring accurate and empathetic communication.
                            </p>
                            <p>
                                I have extensive experience working with
                                <span className="text-blue-600 font-medium"> GLOBO</span>,
                                <span className="text-blue-600 font-medium"> LanguageLine Solutions</span>, and as a
                                <span className="text-blue-600 font-medium"> Pharmacist</span> in various community settings.
                            </p>
                            <p>
                                Whether handling complex medical scenarios over the phone (OPI) or video (VRI), I bring a commitment to privacy (HIPAA compliant), precision, and cultural sensitivity to every interaction.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
