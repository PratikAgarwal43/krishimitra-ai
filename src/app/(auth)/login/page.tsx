"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      login({ name: "Rajesh Kumar", email: formData.email, role: "Farmer" });
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f4f7f5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(30,81,40,0.05),transparent)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-emerald-900/5 relative z-10 border border-gray-100"
      >
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#1e5128] rounded-xl flex items-center justify-center">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-[#1e5128]">KrishiMitra</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2 font-medium">Access your agricultural intelligence hub.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#1e5128] transition-all"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
              <Link href="/forgot-password" **bold text text-[#1e5128]** hover:underline text-[10px] uppercase tracking-widest>
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#1e5128] transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-300" /> : <Eye className="w-5 h-5 text-gray-300" />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#1e5128] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#194322] transition-all shadow-xl shadow-emerald-900/10 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Sign In to Dashboard <ArrowRight className="w-5 h-5" /></>}
          </button>
        </form>

        <div className="mt-12 text-center text-gray-500 font-medium text-sm">
          New to KrishiMitra?{" "}
          <Link href="/signup" className="text-[#1e5128] font-bold hover:underline">
            Create an account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
