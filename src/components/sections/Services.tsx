"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code, Layout, Smartphone, MousePointer2, PenTool } from "lucide-react";
import React, { useRef } from "react";

const services = [
    {
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs. Scalable, secure, and efficient.",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Web Designing",
        description: "Stunning, responsive websites that captivate your audience and drive conversions.",
        icon: Layout,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Social Media Handling",
        description: "Strategic social media management to boost your brand presence and engagement.",
        icon: Smartphone,
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Logo Design",
        description: "Memorable and unique logos that define your brand identity and leave a lasting impression.",
        icon: PenTool,
        color: "from-green-500 to-emerald-500",
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0 p-[1px] group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-xl p-8 flex flex-col items-start gap-4 border border-white/10 overflow-hidden">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-10`}>
                    <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                    {service.description}
                </p>

                <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Learn more <MousePointer2 className="w-4 h-4 ml-2" />
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <SectionWrapper id="services">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Our <span className="text-secondary">Services</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto"
                >
                    Comprehensive IT solutions designed to elevate your business.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}
