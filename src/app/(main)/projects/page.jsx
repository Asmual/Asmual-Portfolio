import React from "react";
import Projects from "@/components/sections/Projects"; 

export const metadata = {
  title: "Projects - Asmual Obaidul Hoque",
  description: "Explore the latest full-stack web development projects, tools, and clones built by Asmual.",
};

export default function ProjectPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}