"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: "arthub",
    title: "ArtHub: Full-Stack Art Marketplace",
    description:
      "A scalable full-stack art marketplace enabling artists to showcase and sell artwork.",
    image: "/images/ArtHub.png",
    tags: ["Next.js", "Better Auth", "JWT", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Asmual/arthub-client",
    demo: "https://arthub-three.vercel.app",
    detailsUrl: "/projects/arthub",
  },
  {
    id: "docappoint",
    title: "DocAppoint: Advanced Healthcare Platform",
    description:
      "A full-stack healthcare platform with JWT/BetterAuth security and slot discovery.",
    image: "/images/DocAppoints.png",
    tags: ["Next.js 15", "Express.js", "BetterAuth", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Asmual/Assignment-9",
    demo: "https://assignment-9-eight-drab.vercel.app/",
    detailsUrl: "/projects/docappoint",
  },
  {
    id: "suncart",
    title: "SunCart: Premium eCommerce Store",
    description:
      "A modern seasonal eCommerce store with secure Email/Google OAuth via BetterAuth.",
    image: "/images/SunCart.png",
    tags: ["Next.js 15", "BetterAuth", "MongoDB", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/Asmual/Assignment-8",
    demo: "https://assignment-8-woad-three.vercel.app/",
    detailsUrl: "/projects/suncart",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0e0e0e] text-white py-20 overflow-hidden">
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-[#FFE0A3] via-[#c9a84c] to-[#9E7231] bg-clip-text text-transparent mb-3 font-serif">
            Projects
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase">
            Recent Featured Works
          </p>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* Grid for Projects Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#121316] border border-gray-800/80 hover:border-[#c9a84c]/50 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(201,168,76,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Full-bleed Edge-to-Edge Image (No Padding, No Zoom on Hover) */}
              <div className="relative w-full aspect-16/10 bg-[#1a1b20] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-none"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#c9a84c] transition-colors duration-200 line-clamp-1 mb-2">
                  {project.title}
                </h3>

                {/* Short 1-Line Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-gray-900/90 border border-gray-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Area */}
                <div className="mt-auto space-y-2.5 pt-2">
                  {/* Primary Focus: View Details Page Button */}
                  <Link
                    href={project.detailsUrl}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold bg-linear-to-r from-[#c9a84c] to-[#9E7231] text-[#0e0e0e] rounded-lg hover:from-[#FFE0A3] hover:to-[#c9a84c] shadow-[0_4px_15px_rgba(201,168,76,0.15)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.25)] transition-all duration-200"
                  >
                    <span>View Details</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>

                  {/* Secondary External Links: GitHub & Live Demo */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium bg-[#1a1b20] text-gray-300 border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200"
                    >
                      <FaGithub className="text-sm" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium bg-[#1a1b20] text-gray-300 border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-[#c9a84c] transition-all duration-200"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}