"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { Code2, Globe, Users } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "5+", icon: Code2 },
    { label: "Projects Delivered", value: "100+", icon: Globe },
    { label: "Happy Clients", value: "50+", icon: Users },
];

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We Are <span className="text-primary">inspiroIT</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        A team of visionary developers and designers dedicated to transforming ideas into digital reality.
                        We specialize in crafting bespoke software solutions, engaging social media strategies, and stunning websites that drive growth.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Our mission is simple: To provide cutting-edge IT solutions that empower businesses to thrive in the digital age.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors"
                        >
                            <stat.icon className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
