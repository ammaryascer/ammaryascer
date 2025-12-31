"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Need a Professional Interpreter?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                        I'm currently available for freelance interpretation (OPI/VRI) and pharmaceutical consultation.
                        Let's collaborate to ensure clear and accurate communication.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                        <a
                            href="mailto:pharm.ammar.y@gmail.com"
                            className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition shadow-lg active:scale-95"
                        >
                            <Mail size={20} />
                            Contact Me
                        </a>
                        <div className="flex items-center gap-2 text-blue-100">
                            <MapPin size={20} />
                            <span>Giza, Egypt / Remote</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
