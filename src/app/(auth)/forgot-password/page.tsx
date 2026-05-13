"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Mail, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating Email Send
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass p-10 rounded-[3rem] relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tight">KrishiMitra</span>
          </Link>
          
          {!sent ? (
            <>
              <h1 className="text-3xl font-bold">Reset Password</h1>
              <p className="text-muted-foreground mt-3 text-sm">Enter your email and we'll send a recovery link.</p>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
              <h1 className="text-3xl font-bold">Check Email</h1>
              <p className="text-muted-foreground mt-3 text-sm">Recovery link has been sent to {email}.</p>
            </div>
          )}
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full btn-primary py-4.5 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Recovery Link"}
            </button>
          </form>
        ) : (
          <button 
            onClick={() => setSent(false)}
            className="w-full bg-white/5 border border-border py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            Resend Email
          </button>
        )}

        <div className="mt-10 text-center">
          <Link href="/login" className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
