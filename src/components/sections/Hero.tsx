"use client";

import { useEffect, useRef } from "react";
import Hero3D from "@/components/3d/Hero3D";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import Spotlight from "@/components/ui/Spotlight";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GlitchText = ({ text }: { text: string }) => {
    return (
        <span className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-100">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-100 delay-75">
                {text}
            </span>
        </span>
    );
};

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
        })
            .from(textRef.current, {
                y: 30,
                opacity: 0,
            }, "-=0.6")
            .from(buttonsRef.current?.children ?? [], {
                y: 20,
                opacity: 0,
                stagger: 0.1,
            }, "-=0.6")
            .from(scrollIndicatorRef.current, {
                opacity: 0,
                y: -20,
            }, "-=0.4");

        // Floating animation for scroll indicator
        gsap.to(scrollIndicatorRef.current, {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <Spotlight />
            <Hero3D />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div ref={titleRef}>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 min-h-[1.2em]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                            <GlitchText text="Innovate." />
                        </span>{" "}
                        <span className="text-white">
                            <GlitchText text="Transform." />
                        </span>{" "}
                        <br />
                        <span className="text-white">
                            <GlitchText text="Scale." />
                        </span>
                    </h1>
                </div>

                <p
                    ref={textRef}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    We build future-ready digital solutions that propel your business forward.
                    From custom software to immersive web experiences.
                </p>

                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Magnetic>
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(112,0,255,0.5)] inline-block"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </Magnetic>

                    <Magnetic>
                        <Link
                            href="/packages"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-primary/30 text-white rounded-full font-bold transition-all hover:bg-white/20 hover:border-primary hover:scale-105 inline-block"
                        >
                            View Packages
                        </Link>
                    </Magnetic>

                    <Magnetic>
                        <Link
                            href="#services"
                            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold transition-all hover:bg-white/10 hover:scale-105 inline-block"
                        >
                            Explore Services
                        </Link>
                    </Magnetic>
                </div>
            </div>

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
            >
                <ChevronDown className="w-8 h-8" />
            </div>
        </section>
    );
}
