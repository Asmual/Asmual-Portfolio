"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "GameHub: The Ultimate Livestreaming Platform",
    description:
      "This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP streaming, real-time chat, viewer count, streamer dashboard, chat controls, and advanced search with SSR for speed.",
    image: "/images/gamehub.png",
    tags: ["TypeScript", "Next.js", "Node.js", "Socket.io", "RTMP/WHIP", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Google Docs 2.0: Next-Gen Real-Time Collaboration",
    description:
      "Google Docs Clone is a full-stack app built with Next.js 15, Shadcn UI, and Tailwind CSS, offering real-time editing, collaboration, comments, mentions, notifications, customizable templates, secure auth, and export options.",
    image: "/images/googledocs.png",
    tags: ["TypeScript", "Next.js", "Node.js", "TipTap", "Tailwind CSS", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Google Drive Clone: The Ultimate Platform for File Sharing",
    description:
      "Google Drive Clone is a modern file storage platform built with Next.js, Shadcn UI, and TypeScript. It offers secure uploads, role-based permissions, file organization, real-time updates, and seamless syncing across devices.",
    image: "/images/googledrive.png",
    tags: ["Next.js", "React", "Node.js", "Convex", "Clerk", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-[#0e0e0e] text-white py-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#FFE0A3] via-[#c9a84c] to-[#9E7231] bg-clip-text text-transparent mb-3 font-serif"
          >
            Projects
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Recent Projects
          </p>
          <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#121316] border border-gray-800/60 hover:border-[#c9a84c]/40 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(201,168,76,0.05)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-48 bg-[#1a1b20] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-[#c9a84c] transition-colors duration-200 line-clamp-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-5 flex-grow">
                  {project.description}
                </p>

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
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-gradient-to-r from-[#c9a84c] to-[#9E7231] text-[#0e0e0e] rounded-lg hover:from-[#FFE0A3] hover:to-[#c9a84c] shadow-[0_4px_15px_rgba(201,168,76,0.15)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.25)] transition-all duration-200"
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