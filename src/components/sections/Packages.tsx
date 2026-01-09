"use client";

import React, { useState, useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Check, Sparkles, Code, Smartphone, Share2, Palette } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const categories = [
    { id: "web", name: "Web Development", icon: Code },
    { id: "mobile", name: "Mobile App Development", icon: Smartphone },
    { id: "social", name: "Social Media Handling", icon: Share2 },
    { id: "graphic", name: "Graphic Designing", icon: Palette },
];

const packagesData = {
    web: [
        {
            name: "Starter",
            price: "499",
            description: "Perfect for small businesses looking to establish an online presence.",
            features: [
                "Responsive Website (5 Pages)",
                "Basic SEO Optimization",
                "Social Media Integration",
                "Contact Form",
                "1 Month Free Maintenance",
            ],
            highlight: false,
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Professional",
            price: "999",
            description: "Ideal for growing companies needing advanced digital solutions.",
            features: [
                "Custom Web Application",
                "Advanced SEO & Analytics",
                "E-commerce Functionality",
                "Cloud Hosting Setup",
                "Priority Email Support",
                "3 Months Free Maintenance",
            ],
            highlight: true,
            color: "from-primary to-emerald-400",
        },
        {
            name: "Enterprise",
            price: "2499+",
            description: "Full-scale digital transformation for large-scale operations.",
            features: [
                "Full Product Design & Development",
                "Custom Backend System",
                "AI/ML Integration",
                "Dedicated Project Manager",
                "24/7 Technical Support",
                "1 Year Free Maintenance",
            ],
            highlight: false,
            color: "from-purple-500 to-pink-500",
        },
    ],
    mobile: [
        {
            name: "Starter",
            price: "1499",
            description: "MVP / Single platform app to test your idea in the market.",
            features: [
                "Single Platform (iOS or Android)",
                "User Authentication",
                "Basic UI/UX Design",
                "Push Notifications",
                "App Store Listing",
            ],
            highlight: false,
            color: "from-indigo-500 to-blue-500",
        },
        {
            name: "Professional",
            price: "2999",
            description: "Cross-platform app with robust features for growing businesses.",
            features: [
                "Cross-Platform (iOS & Android)",
                "Advanced UI/UX Design",
                "API Integration",
                "Payment Gateway Integration",
                "3 Months Free Maintenance",
            ],
            highlight: true,
            color: "from-primary to-blue-400",
        },
        {
            name: "Enterprise",
            price: "5999+",
            description: "High-performance enterprise mobile solution.",
            features: [
                "Full-Scale Custom Mobile App",
                "Complex Offline Mode",
                "Real-time Data Sync",
                "Enterprise Security Features",
                "1 Year Priority Support",
            ],
            highlight: false,
            color: "from-violet-500 to-fuchsia-500",
        },
    ],
    social: [
        {
            name: "Starter",
            price: "299",
            description: "Basic social presence management for small brands.",
            features: [
                "1 Platform Management",
                "12 Targeted Posts/mo",
                "Basic Content Strategy",
                "Community Engagement",
                "Monthly Progress Report",
            ],
            highlight: false,
            color: "from-orange-500 to-red-500",
        },
        {
            name: "Professional",
            price: "599",
            description: "Strategic growth and content creation for active brands.",
            features: [
                "3 Platforms Management",
                "24 Custom Posts/mo",
                "Video Reels & Stories",
                "Influencer Outreach Beta",
                "Bi-weekly Performance Analysis",
            ],
            highlight: true,
            color: "from-rose-500 to-orange-400",
        },
        {
            name: "Enterprise",
            price: "1199",
            description: "Full-scale digital strategy and aggressive growth.",
            features: [
                "All Major Platforms",
                "Daily Content Posting",
                "Paid Ad Management",
                "Crisis Management",
                "Dedicated Social Manager",
            ],
            highlight: false,
            color: "from-red-600 to-rose-600",
        },
    ],
    graphic: [
        {
            name: "Starter",
            price: "199",
            description: "Essential branding for new businesses.",
            features: [
                "Professional Logo Design",
                "Basic Brand Kit",
                "Business Card Design",
                "Social Media Profile Assets",
                "2 Revision Cycles",
            ],
            highlight: false,
            color: "from-emerald-500 to-teal-500",
        },
        {
            name: "Professional",
            price: "499",
            description: "Complete visual identity to stand out from competition.",
            features: [
                "Premium Brand Identity",
                "Full Marketing Assets Kit",
                "Stationery Design",
                "Pitch Deck Design",
                "Unlimited Revisions",
            ],
            highlight: true,
            color: "from-primary to-teal-400",
        },
        {
            name: "Enterprise",
            price: "999+",
            description: "Comprehensive design system and UI/UX solutions.",
            features: [
                "Full Design System",
                "UI/UX for Web/Mobile",
                "Motion Graphics",
                "3D Asset Design",
                "Design Retainer (10h/mo)",
            ],
            highlight: false,
            color: "from-teal-600 to-primary/80",
        },
    ],
};

export default function Packages() {
    const [activeCategory, setActiveCategory] = useState("web");
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial entrance for header
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
    }, { scope: container });

    useGSAP(() => {
        // Animation when category changes (also runs on mount)
        gsap.fromTo(".package-card",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", overwrite: true }
        );
    }, { dependencies: [activeCategory], scope: container });

    return (
        <SectionWrapper id="packages" className="relative overflow-hidden">
            <div ref={container}>
                {/* Background decoration */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
                </div>

                <div className="relative z-10">
                    {/* Header */}
                    <div ref={headerRef} className="mb-12 text-center">
                        <div
                            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-300"
                        >
                            <Sparkles className="h-3 w-3 text-primary" />
                            Pricing Plans
                        </div>

                        <h2
                            className="mt-6 text-4xl font-bold md:text-5xl"
                        >
                            Choose the Right{" "}
                            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                                Package
                            </span>
                        </h2>

                        <p
                            className="mt-4 mx-auto max-w-2xl text-sm text-gray-400 md:text-base"
                        >
                            Explore our specialized pricing tiers designed to scale with your business goals.
                        </p>
                    </div>

                    {/* Category Selection Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category.id
                                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20"
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Pricing Cards */}
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 gap-8 md:grid-cols-3"
                    >
                        {packagesData[activeCategory as keyof typeof packagesData].map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`package-card relative flex flex-col rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 group ${pkg.highlight ? "ring-2 ring-primary ring-offset-4 ring-offset-black scale-105 z-10 shadow-2xl shadow-primary/20" : ""
                                    }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-emerald-400 px-4 py-1 text-xs font-bold text-black uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                    <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{pkg.description}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-white">${pkg.price}</span>
                                        <span className="text-gray-400 text-sm">
                                            {activeCategory === "social" ? "/mo" : "/start"}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-8 flex-grow">
                                    <div className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Features:</div>
                                    <ul className="space-y-4">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <div className="mt-1 rounded-full bg-primary/20 p-1">
                                                    <Check className="h-3 w-3 text-primary" />
                                                </div>
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className={`w-full rounded-xl py-4 text-sm font-bold transition-all duration-300 ${pkg.highlight
                                    ? "bg-gradient-to-r from-primary to-emerald-400 text-black hover:opacity-90 hover:scale-[1.02]"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                    }`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
