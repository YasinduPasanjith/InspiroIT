"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function GSAPConfig() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    });

    return null;
}
