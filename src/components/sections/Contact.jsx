"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
    
      const response = await fetch("/api/contact-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message.", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-[#0e0e0e] text-gray-200 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold text-[#c9a84c] tracking-tight mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get In Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Have a question, want to discuss a potential web project, or just want to say hi? Feel free to reach out using the details or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="bg-[#161616] border border-[#c9a84c]/20 rounded-xl p-6 h-full flex flex-col gap-8 shadow-xl">
            <div>
              <h2
                className="text-xl font-bold text-[#c9a84c] mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Contact Information
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] shrink-0">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold">Our Location</h3>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] shrink-0">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold">Email Address</h3>
                    <a
                      href="mailto:asmualobaidulhoque@gmail.com"
                      className="text-gray-400 hover:text-[#c9a84c] text-xs mt-0.5 block transition-colors break-all"
                    >
                      asmualobaidulhoque@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] shrink-0">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold">Phone Number</h3>
                    <a
                      href="tel:+880"
                      className="text-gray-400 hover:text-[#c9a84c] text-xs mt-0.5 block transition-colors"
                    >
                      +880 (Available)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#161616] border border-[#c9a84c]/20 rounded-xl p-6 md:p-8 shadow-xl">
            <h2
              className="text-xl font-bold text-[#c9a84c] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Asmual Obaidul Hoque"
                    className="w-full bg-[#1e1e1e] border border-[#c9a84c]/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="w-full bg-[#1e1e1e] border border-[#c9a84c]/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What can we help you with?"
                  className="w-full bg-[#1e1e1e] border border-[#c9a84c]/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-[#1e1e1e] border border-[#c9a84c]/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-start px-6 py-3 bg-[#c9a84c] text-[#111] font-semibold text-sm rounded-lg hover:bg-[#b8923e] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}