"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Rocket } from "lucide-react";

const features = [
    {
        title: "Expert Team",
        description: "Highly skilled professionals with years of industry experience.",
        icon: CheckCircle2,
    },
    {
        title: "Fast Delivery",
        description: "We value your time and ensure timely delivery of all projects.",
        icon: Zap,
    },
    {
        title: "Secure Solutions",
        description: "Top-notch security measures to protect your data and business.",
        icon: Shield,
    },
    {
        title: "Scalable Tech",
        description: "Future-proof solutions designed to grow with your business.",
        icon: Rocket,
    },
];

export default function WhyChooseUs() {
    return (
        <SectionWrapper id="why-us" className="bg-muted/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="text-secondary">inspiroIT?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        We don't just build software; we build partnerships. Our commitment to excellence, innovation, and customer satisfaction sets us apart.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center"
                >
                    {/* Abstract visual representation */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="w-48 h-48 bg-primary rounded-full blur-[100px] opacity-50 animate-pulse" />
                    <div className="w-32 h-32 bg-secondary rounded-full blur-[80px] opacity-50 absolute top-1/4 right-1/4 animate-pulse delay-75" />

                    <div className="relative z-10 text-center p-8 bg-black/30 backdrop-blur-md rounded-xl border border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                        <p className="text-gray-300">Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
