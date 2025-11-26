"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";

export default function Spotlight() {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(112, 0, 255, 0.15),
                        transparent 80%
                    )
                `,
            }}
        />
    );
}
