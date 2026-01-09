"use client";

import LightRays from "../ui/LightRays";
import BlurText from "../ui/BlurText";

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Background */}
            <LightRays
                raysOrigin="top-center"
                raysColor="#00ffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
            />

            {/* Hero Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                {/* Main Title */}
                <BlurText
                    text="Innovative IT Solutions for Your Digital Growth"
                    delay={120}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-5xl md:text-6xl font-bold"
                    gradient="linear-gradient(90deg, #22d3ee, #3b82f6, #9333ea)"
                />

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80">
                    We build scalable websites, powerful applications, and smart digital
                    solutions to take your business to the next level.
                </p>

                {/* Call to Action */}
                <div className="mt-8 flex gap-4">
                    <a href="#services">
                        <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
                            Our Services
                        </button>
                    </a>

                    <a href="#contact">
                        <button className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">
                            Contact Us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
