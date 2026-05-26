"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { MdPerson, MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirm) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Creating your account...");

    const { data, error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    if (error) {
      if (error.status === 409 || error.code === "USER_ALREADY_EXISTS") {
        toast.error("An account with this email already exists. Please log in.", { id: toastId });
      } else {
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
      setLoading(false);
      return;
    }

    if (data?.user) {
      toast.success("Account created successfully! Please log in.", { id: toastId });
      router.push("/login");
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/login",
    });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute top-10 -left-32 w-96 h-96 rounded-full border border-[#c9a84c]/10 pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-64 h-64 rounded-full border border-[#c9a84c]/10 pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="bg-[#161616] border border-[#c9a84c]/20 rounded-2xl p-8 shadow-2xl">

          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-10 h-0.5 bg-[#c9a84c] mb-4" />
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
              Create Account
            </h1>
            <p className="text-gray-500 text-sm mt-2">Join and get started today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium tracking-widest uppercase">
                Full Name
              </label>
              <div className="relative flex items-center">
                <MdPerson className="absolute left-3 text-[#c9a84c]/60 text-lg pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Full Name"
                  className="w-full py-3 pl-10 pr-4 rounded bg-[#1f1f1f] border border-[#c9a84c]/20 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-all duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium tracking-widest uppercase">
                Email
              </label>
              <div className="relative flex items-center">
                <MdEmail className="absolute left-3 text-[#c9a84c]/60 text-lg pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full py-3 pl-10 pr-4 rounded bg-[#1f1f1f] border border-[#c9a84c]/20 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium tracking-widest uppercase">
                Password
              </label>
              <div className="relative flex items-center">
                <MdLock className="absolute left-3 text-[#c9a84c]/60 text-lg pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Min. 6 characters"
                  className="w-full py-3 pl-10 pr-10 rounded bg-[#1f1f1f] border border-[#c9a84c]/20 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-500 hover:text-[#c9a84c] transition-colors"
                >
                  {showPassword ? <MdVisibilityOff className="text-lg" /> : <MdVisibility className="text-lg" />}
                </button>
              </div>
              {/* Password strength hint */}
              {form.password.length > 0 && form.password.length < 6 && (
                <p className="text-red-400 text-xs mt-1">
                  Password must be at least 6 characters.
                </p>
              )}
              {form.password.length >= 6 && (
                <p className="text-green-400 text-xs mt-1">
                  ✓ Password looks good!
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-medium tracking-widest uppercase">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <MdLock className="absolute left-3 text-[#c9a84c]/60 text-lg pointer-events-none" />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  required
                  placeholder="Re-enter password"
                  className="w-full py-3 pl-10 pr-10 rounded bg-[#1f1f1f] border border-[#c9a84c]/20 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 text-gray-500 hover:text-[#c9a84c] transition-colors"
                >
                  {showConfirm ? <MdVisibilityOff className="text-lg" /> : <MdVisibility className="text-lg" />}
                </button>
              </div>
              {/* Confirm match hint */}
              {form.confirm.length > 0 && form.password !== form.confirm && (
                <p className="text-red-400 text-xs mt-1">
                  Passwords do not match.
                </p>
              )}
              {form.confirm.length > 0 && form.password === form.confirm && (
                <p className="text-green-400 text-xs mt-1">
                  ✓ Passwords match!
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-1 text-sm font-medium bg-[#c9a84c] text-[#111] rounded hover:bg-[#b8923e] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#c9a84c]/10" />
            <span className="text-gray-600 text-xs">OR</span>
            <div className="flex-1 h-px bg-[#c9a84c]/10" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 py-3 text-sm font-medium bg-[#1f1f1f] border border-[#c9a84c]/20 text-white rounded hover:border-[#c9a84c]/50 hover:bg-[#252525] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FcGoogle className="text-xl" />
            {googleLoading ? "Please wait..." : "Continue with Google"}
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c9a84c] hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
