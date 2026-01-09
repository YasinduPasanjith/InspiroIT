"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Code, Layout, Smartphone, MousePointer2, PenTool, Share2, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps that provide seamless user experiences.",
        icon: Smartphone,
        color: "from-indigo-500 to-violet-500",
    },
    {
        title: "Social Media Handling",
        description: "Strategic social media management to boost your brand presence and engagement.",
        icon: Share2,
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Logo Design",
        description: "Memorable and unique logos that define your brand identity and leave a lasting impression.",
        icon: PenTool,
        color: "from-green-500 to-emerald-500",
    },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width - 0.5) * 20; // 20deg max tilt
        const yPct = (mouseY / height - 0.5) * -20;

        gsap.to(ref.current, {
            rotateY: xPct,
            rotateX: yPct,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(ref.current, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
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
        </div>
    );
}

export default function Services() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Header animation
        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Cards staggered entrance
        gsap.from(cardsRef.current?.children ?? [], {
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        });

        // CTA button animation
        gsap.from(footerRef.current, {
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
        });
    }, { scope: container });

    return (
        <SectionWrapper id="services">
            <div ref={container}>
                <div ref={headerRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-secondary">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive IT solutions designed to elevate your business.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000 mb-16">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>

                <div ref={footerRef} className="flex justify-center">
                    <Link
                        href="/packages"
                        className="group relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(112,0,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View All Packages <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
