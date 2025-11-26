"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "FinTech Dashboard",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Real-time financial data visualization platform.",
    },
    {
        title: "E-Commerce AI",
        category: "AI Solution",
        image: "https://i.pinimg.com/736x/72/f2/63/72f263964ad7d25c06b4f5d52f771919.jpg",
        description: "AI-powered recommendation engine for online retail.",
    },
    {
        title: "HealthTech App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        description: "Patient monitoring and telemedicine application.",
    },
    {
        title: "Crypto Exchange",
        category: "Blockchain",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop",
        description: "Secure and fast cryptocurrency trading platform.",
    },
];

export default function Portfolio() {
    return (
        <SectionWrapper id="portfolio" className="bg-black">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A glimpse into our innovative solutions and success stories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-primary text-sm font-bold mb-2">{project.category}</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            <div className="flex gap-4">
                                <button className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </button>
                                <button className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                    <Github className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
