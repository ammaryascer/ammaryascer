"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

export function MaintenanceNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the notice after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-500"
                    >
                        {/* Header Strip with diagonal stripes warning pattern */}
                        <div className="h-3 w-full bg-amber-500"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                            }}
                        />

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-full flex items-center justify-center mb-6 ring-4 ring-amber-50 dark:ring-amber-900/20">
                                <AlertTriangle size={32} strokeWidth={2.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Portfolio Under Construction
                            </h3>

                            <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Welcome! Please note that this professional dossier is currently undergoing scheduled updates and refinement.
                                </p>
                                <p className="font-medium text-amber-700 dark:text-amber-400">
                                    The content presented here is not the final version.
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    We invite you to check back soon to view the complete, finalized version.
                                    <br />Thank you for your patience.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsVisible(false)}
                                className="mt-8 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95 shadow-lg"
                            >
                                Continue to Site
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
