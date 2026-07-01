import React from "react";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact - Asmual Obaidul Hoque",
  description: "Get in touch with Asmual Obaidul Hoque for projects and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0e0e0e] pt-8">
      <Contact />
    </div>
  );
}