"use client";

import { useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "inspiroIT transformed our digital presence. Their team is incredibly talented and professional.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Michael Chen",
        role: "CTO, FutureWave",
        content: "The best IT solutions partner we've worked with. They delivered our project on time and beyond expectations.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Emily Davis",
        role: "Marketing Director, GrowthCo",
        content: "Their social media strategies helped us reach a wider audience and increase our engagement significantly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Testimonials() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Header reveal
        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
            },
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Testimonials staggered entrance
        gsap.from(gridRef.current?.children ?? [], {
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <SectionWrapper id="testimonials">
            <div ref={container}>
                <div ref={headerRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Client <span className="text-primary">Testimonials</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 relative"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/20" />
                            <p className="text-gray-300 mb-6 relative z-10">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
