"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-[#030014] to-[#030014]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" /> {/* Assuming grid pattern or just remove if not available */}

            <div className="relative flex flex-col items-center justify-center gap-8">
                {/* Central Animation Container */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* Outer Glowing Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-primary/30 shadow-[0_0_30px_rgba(112,0,255,0.3)]"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Rotating Segments - Ring 1 */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-t-2 border-primary"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Rotating Segments - Ring 2 (Counter-rotating) */}
                    <motion.div
                        className="absolute inset-3 rounded-full border-b-2 border-secondary"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Rotating Segments - Ring 3 */}
                    <motion.div
                        className="absolute inset-6 rounded-full border-l-2 border-accent"
                        animate={{ rotate: 180 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Inner Core */}
                    <motion.div
                        className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Text Container */}
                <div className="flex flex-col items-center gap-2">
                    <motion.h1
                        className="text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        INSPIRO<span className="font-light">IT</span>
                    </motion.h1>

                    <div className="flex items-center gap-1 h-4">
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">System Initializing</span>
                        <motion.span
                            className="w-1 h-1 bg-primary rounded-full"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.span
                            className="w-1 h-1 bg-primary rounded-full"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.span
                            className="w-1 h-1 bg-primary rounded-full"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
