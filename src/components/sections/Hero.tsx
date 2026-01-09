"use client";

import LightRays from "../ui/LightRays";
import BlurText from "../ui/BlurText";
import { ArrowRight, ChevronDown, Sparkles, Zap, Award, Users } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import { motion } from "framer-motion";

const stats = [
    { icon: Zap, label: "Projects Delivered", value: "150+" },
    { icon: Award, label: "Design Excellence", value: "12" },
    { icon: Users, label: "Happy Clients", value: "85+" },
];

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log("Hero animation completed!");
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background - Kept as requested */}
            <LightRays
                raysOrigin="top-center"
                raysColor="#7000ff" // Changed to primary brand color
                raysSpeed={1.0}
                lightSpread={0.9}
                rayLength={1.5}
                followMouse
                mouseInfluence={0.05}
                noiseAmount={0.2}
                distortion={0.08}
                className="absolute inset-0 z-0 opacity-40"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 w-full max-w-7xl mx-auto">
                {/* Feature Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Elevating Digital Excellence</span>
                </motion.div>

                {/* Main Title */}
                <div className="max-w-4xl">
                    <BlurText
                        text="Empowering Brands with Future-Ready IT Solutions"
                        delay={80}
                        animateBy="words"
                        direction="bottom"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]"
                        gradient="linear-gradient(135deg, #fff 0%, #a78bfa 50%, #7c3aed 100%)"
                    />
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
                >
                    We specialize in crafting high-performance digital ecosystems, from custom
                    software development to immersive web experiences that drive real growth.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
                >
                    <Magnetic>
                        <a href="#contact" className="group relative">
                            {/* Button Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button className="relative px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a href="#portfolio">
                            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold hover:bg-white/10 transition-all hover:border-white/20">
                                View Our Work
                            </button>
                        </a>
                    </Magnetic>
                </motion.div>

                {/* Statistics Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-white/5 pt-12"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="mb-2 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-gray-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Background Decorative Blob */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
}
