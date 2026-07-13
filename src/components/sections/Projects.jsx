"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ArtHub: Full-Stack Art Marketplace",
    description:
      "A scalable full-stack art marketplace enabling artists to showcase and sell artwork. Features secure purchasing, Stripe payment integration, subscription management, and role-based dashboards for buyers, creators, and administrators.",
    image: "/images/ArtHub.png",
    tags: ["Next.js", "Better Auth", "JWT", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Asmual/arthub-client",
    demo: "https://arthub-three.vercel.app",
  },
  {
    title: "DocAppoint: Advanced Doctor Appointment & Healthcare Platform",
    description:
      "A full-stack healthcare platform with JWT/BetterAuth security. Features structured doctor profiling, real-time slot discovery, and secure HTTP-only session management.",
    image: "/images/DocAppoints.png",
    tags: ["Next.js 15", "Express.js", "BetterAuth", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Asmual/Assignment-9",
    demo: "https://assignment-9-eight-drab.vercel.app/",
  },
  {
    title: "SunCart: Premium Summer Essentials eCommerce Store",
    description:
      "A modern seasonal eCommerce store with secure Email/Google OAuth via BetterAuth. Features dynamic cart management and protected product layers in a premium dark responsive UI.",
    image: "/images/SunCart.png",
    tags: ["Next.js 15", "BetterAuth", "MongoDB", "Tailwind CSS", "DaisyUI", "Next/Image"],
    github: "https://github.com/Asmual/Assignment-8",
    demo: "https://assignment-8-woad-three.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-[#0e0e0e] text-white py-16 overflow-hidden">
      
      {/* Golden Grid Background Effect */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(to right, #c9a84c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-[#FFE0A3] via-[#c9a84c] to-[#9E7231] bg-clip-text text-transparent mb-3 font-serif"
          >
            Projects
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Recent Projects
          </p>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* Grid for Projects Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#121316]/60 backdrop-blur-md border border-gray-800/60 hover:border-[#c9a84c]/40 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(201,168,76,0.05)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative w-full h-40 bg-[#1a1b20]/50 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-[#121316] via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-2 rounded-xl"
                />
              </div>

              {/* Project Content & Details */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white group-hover:text-[#c9a84c] transition-colors duration-200 line-clamp-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                  {project.description}
                </p>

                {/* Technology Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-900/80 border border-gray-800 rounded-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links: GitHub & Live Demo */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#1a1b20] text-gray-300 border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200"
                  >
                    <FaGithub className="text-sm" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-linear-to-r from-[#c9a84c] to-[#9E7231] text-[#0e0e0e] rounded-lg hover:from-[#FFE0A3] hover:to-[#c9a84c] shadow-[0_4px_15px_rgba(201,168,76,0.15)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.25)] transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="text-xxs" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}