"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Mail, Lock, User, UserCircle2, Loader2, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Farmer" });
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login({ 
        name: formData.name, 
        email: formData.email, 
        role: formData.role as "Farmer" | "Buyer" | "Researcher" | "FPO Member" | "Agri-expert"
      });
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
        className="w-full max-w-xl bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-emerald-900/5 relative z-10 border border-gray-100"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#1e5128] rounded-xl flex items-center justify-center">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-[#1e5128]">KrishiMitra</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Start Your Journey</h1>
          <p className="text-gray-500 mt-2 font-medium">Join 100M+ farmers using smart intelligence.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <input 
                  type="text" required
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#1e5128] transition-all"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Role</label>
              <div className="relative">
                <UserCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
                <select 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#1e5128] appearance-none"
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <option>Farmer</option>
                  <option>FPO Member</option>
                  <option>Agri-expert</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="email" required
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#1e5128] transition-all"
                placeholder="name@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="password" required
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#1e5128] transition-all"
                placeholder="••••••••"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#1e5128] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#194322] transition-all shadow-xl shadow-emerald-900/10 mt-4"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Create Account <ArrowRight className="w-5 h-5" /></>}
          </button>
        </form>

        <div className="mt-10 text-center text-gray-500 font-medium text-sm">
          Already using KrishiMitra?{" "}
          <Link href="/login" className="text-[#1e5128] font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
