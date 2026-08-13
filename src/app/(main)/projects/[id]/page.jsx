"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import { projectsData } from "../data";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id;
  const project = projectsData[projectId];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // If project ID is invalid
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-lg font-bold mb-3">Project Not Found</h1>
        <Link href="/#projects" className="text-xs text-[#c9a84c] underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const prevImage = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Compact Back Button */}
        <div className="mb-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[#c9a84c] transition-colors"
          >
            <FaArrowLeft className="text-[10px]" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Compact Header */}
        <div className="mb-5">
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#c9a84c] mb-1">
            {project.title}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            {project.subtitle}
          </p>
        </div>

        {/* Image Container: ZERO Padding & Arrows INSIDE the Image */}
        <div className="relative w-full aspect-video max-h-115 bg-[#141518] border border-gray-800/80 rounded-md overflow-hidden mb-6 group">
          
          {/* Main Full Image */}
          <Image
            src={project.images[currentImgIndex]}
            alt={`${project.title} preview ${currentImgIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
            priority
          />

          {/* Navigation Arrows Positioned Directly Inside Image Area */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-[#c9a84c] text-white hover:text-black p-2 sm:p-2.5 rounded-full transition-all duration-200 backdrop-blur-xs border border-white/10"
              >
                <FaChevronLeft className="text-xs sm:text-sm" />
              </button>

              <button
                onClick={nextImage}
                aria-label="Next Image"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-[#c9a84c] text-white hover:text-black p-2 sm:p-2.5 rounded-full transition-all duration-200 backdrop-blur-xs border border-white/10"
              >
                <FaChevronRight className="text-xs sm:text-sm" />
              </button>

              {/* Slider Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/10">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImgIndex
                        ? "bg-[#c9a84c] w-4"
                        : "bg-gray-500 w-1.5 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section: Balanced & Professional Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Description & Key Features */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white mb-2 border-b border-gray-800 pb-1.5">
                Overview
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white mb-2 border-b border-gray-800 pb-1.5">
                Key Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <FaCheckCircle className="text-[#c9a84c] text-xs shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Actions */}
          <div className="bg-[#121316] border border-gray-800/80 rounded-md p-4 sm:p-5 h-fit space-y-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#c9a84c] mb-2.5">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[11px] font-medium text-gray-300 bg-gray-900 border border-gray-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <hr className="border-gray-800/80" />

            {/* Action Buttons */}
            <div className="space-y-2">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold bg-linear-to-r from-[#c9a84c] to-[#9E7231] text-[#0e0e0e] rounded hover:from-[#FFE0A3] hover:to-[#c9a84c] transition-all shadow-xs"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                <span>Live Demo</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold bg-[#1a1b20] text-gray-300 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition-all"
              >
                <FaGithub className="text-xs" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}