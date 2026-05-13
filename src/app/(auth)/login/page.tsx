"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulating API Login
    setTimeout(() => {
      if (formData.email && formData.password) {
        login({ 
          name: "Pratik Agarwal", 
          email: formData.email, 
          role: "Farmer" 
        });
        setLoading(false);
        window.location.href = "/dashboard";
      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg glass p-10 md:p-14 rounded-[3rem] relative z-10"
      >
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
              <Sprout className="text-white w-7 h-7" />
            </div>
            <span className="text-2xl font-black tracking-tight">KrishiMitra</span>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground mt-3">Access your agricultural intelligence hub.</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm mb-8">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-border rounded-2xl py-4.5 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</label>
              <Link href="/forgot-password" size="sm" className="text-xs text-primary font-bold hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-white/5 border border-border rounded-2xl py-4.5 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
                placeholder="••••••••"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-1 mb-8">
             <input type="checkbox" id="remember" className="w-4 h-4 accent-primary rounded border-border" />
             <label htmlFor="remember" className="text-sm text-muted-foreground">Keep me logged in</label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary py-5 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                Sign In to Dashboard
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center text-muted-foreground">
          New to KrishiMitra?{" "}
          <Link href="/signup" className="text-primary font-bold hover:underline">
            Create an account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
