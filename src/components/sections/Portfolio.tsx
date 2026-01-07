"use client";

import React, { memo, useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  tech?: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "FinTech Dashboard",
    category: "Web App",
    image: "/yasindu_portfolio.png",
    description: "Real-time financial data visualization platform for modern finance teams.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://yasindupasanjith.vercel.app/",
    github: "#",
  },
  {
    title: "E-Commerce AI",
    category: "AI Solution",
    image: "https://i.pinimg.com/736x/72/f2/63/72f263964ad7d25c06b4f5d52f771919.jpg",
    description: "AI-powered recommendation engine that boosts cart value and retention.",
    tech: ["Python", "TensorFlow", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "HealthTech App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    description: "Patient monitoring and telemedicine experience for remote care.",
    tech: ["Flutter", "Firebase"],
    live: "#",
    github: "#",
  },
  {
    title: "Crypto Exchange",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    description: "Secure and fast cryptocurrency trading platform for power users.",
    tech: ["React", "WebSockets", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    title: "Analytics Studio",
    category: "Data Platform",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    description: "Self-serve analytics for product and growth teams.",
    tech: ["Next.js", "Supabase"],
    live: "#",
    github: "#",
  },
  {
    title: "Brand Experience Site",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    description: "Interactive storytelling website for a modern brand.",
    tech: ["GSAP", "Three.js"],
    live: "#",
    github: "#",
  },
];

// Helper to check if link is valid
const hasValidLink = (url?: string) =>
  url && url.trim() !== "" && url.trim() !== "#";

// Memoized card → avoids re-render unless props change
const ProjectCard = memo(function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLive = hasValidLink(project.live);
  const hasGithub = hasValidLink(project.github);

  return (
    <div
      className="project-card group relative h-80 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-white/0 to-white/5 p-[1px]"
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black/80">
        {/* Image */}
        <div className="relative h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[0.5deg]"
            priority={index === 0} // only first card is priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* Category pill */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/10">
            {project.category}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="space-y-2 transform transition-all duration-300 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>

            {project.tech && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-gray-200 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 flex gap-3">
              {/* Live button */}
              {hasLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-gray-100 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/40"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              ) : (
                <button
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-500 opacity-60"
                  disabled
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </button>
              )}

              {/* GitHub button */}
              {hasGithub ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 p-1.5 text-gray-200 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/40"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : (
                <button
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/5 p-1.5 text-gray-500 opacity-60"
                  disabled
                >
                  <Github className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-radial from-primary/18 via-transparent to-transparent blur-3xl" />
      </div>
    </div>
  );
});

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    tl.from(badgeRef.current, { y: 10, opacity: 0, duration: 0.6 })
      .from(titleRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(descRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".project-card", {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6");
  }, { scope: container });

  return (
    <SectionWrapper id="portfolio" className="relative overflow-hidden bg-black">
      <div ref={container} className="relative z-10">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#111827_1px,transparent_0)] [background-size:24px_24px]" />
        </div>

        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <div
            ref={badgeRef}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-300"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            Selected Work
          </div>

          <h2
            ref={titleRef}
            className="mt-6 text-4xl font-bold md:text-5xl"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p
            ref={descRef}
            className="mt-4 mx-auto max-w-2xl text-sm text-gray-400 md:text-base"
          >
            A curated snapshot of products, platforms, and experiments — blending{" "}
            <span className="font-medium text-gray-200">clean UX</span>,{" "}
            <span className="font-medium text-gray-200">solid engineering</span>, and{" "}
            <span className="font-medium text-gray-200">real-world impact</span>.
          </p>
        </div>

        {/* 3×2 Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
