"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        if (isOpen) {
            gsap.fromTo(menuRef.current,
                { height: 0, opacity: 0, y: -20 },
                { height: "auto", opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
            gsap.fromTo(".mobile-nav-link",
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.1 }
            );
        } else if (menuRef.current) {
            gsap.to(menuRef.current, { height: 0, opacity: 0, y: -20, duration: 0.3, ease: "power3.in" });
        }
    }, { dependencies: [isOpen], scope: menuRef });

    return (
        <nav
            className={cn(
                "fixed z-50 transition-all duration-500 ease-in-out",
                scrolled
                    ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-background/70 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-primary/10"
                    : "top-0 left-0 w-full bg-transparent border-b border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="InspiroIT Logo"
                                width={500}
                                height={500}
                                className="h-16 w-auto object-contain"
                                priority
                            />
                            <span className="text-xl font-bold text-primary tracking-tighter">
                                inspiro<span className="text-white">IT</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Magnetic key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </Link>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={menuRef}
                className={cn(
                    "md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10 overflow-hidden rounded-b-2xl",
                    !isOpen && "pointer-events-none h-0 opacity-0"
                )}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="mobile-nav-link">
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
