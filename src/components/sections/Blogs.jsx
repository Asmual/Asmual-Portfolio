"use client";

import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const blogsData = [
  {
    id: 1,
    title: "Why Next.js is the Ultimate Framework for Modern Web Apps",
    excerpt: "Explore the cutting-edge features of Next.js, including Server Components, Turbopack, and automated routing that boost performance.",
    date: "May 05, 2026",
    readTime: "5 min read",
    slug: "why-nextjs-is-ultimate",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Premium Dark-Themed UI",
    excerpt: "Learn how to effectively blend custom color palettes, borders, and smooth glow animations into minimalist dark designs.",
    date: "Apr 28, 2026",
    readTime: "4 min read",
    slug: "mastering-tailwind-dark-ui",
  },
  {
    id: 3,
    title: "Connecting Better Auth with MongoDB in Next.js Apps",
    excerpt: "A step-by-step developer guide on implementing secure social login and persistence layer with MongoDB.",
    date: "Apr 15, 2026",
    readTime: "7 min read",
    slug: "connecting-better-auth-mongodb",
  },
];

export default function Blogs() {
  return (
    <section className="min-h-[80vh] bg-[#0e0e0e] text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-[#c9a84c] tracking-tight mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Latest Blogs
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Insights, tutorials, and thoughts on modern frontend web development, clean coding practices, and design systems.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="bg-[#161616] border border-[#c9a84c]/10 rounded-xl p-6 hover:border-[#c9a84c]/30 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#c9a84c]/70" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-[#c9a84c]/70" />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors line-clamp-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#c9a84c] hover:text-[#b8923e] transition-colors mt-auto w-fit"
              >
                Read Full Article
                <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}