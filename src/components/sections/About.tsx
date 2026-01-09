"use client";

import { useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Code2, Globe, Users } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const stats = [
    { label: "Years Experience", value: "5+", icon: Code2 },
    { label: "Projects Delivered", value: "100+", icon: Globe },
    { label: "Happy Clients", value: "50+", icon: Users },
];

export default function About() {
    const container = useRef<HTMLDivElement>(null);
    const textContentRef = useRef<HTMLDivElement>(null);
    const statsContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Text reveal animation
        gsap.from(textContentRef.current, {
            scrollTrigger: {
                trigger: textContentRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Stats cards staggered entrance
        gsap.from(statsContainerRef.current?.children ?? [], {
            scrollTrigger: {
                trigger: statsContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <SectionWrapper id="about" className="bg-muted/30">
            <div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div ref={textContentRef}>
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
                </div>

                <div ref={statsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors"
                        >
                            <stat.icon className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
