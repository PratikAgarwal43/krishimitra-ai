"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Leaf, Mail, Lock, User, MapPin, Sprout, Loader2, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    crops: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/login?registered=true");
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050c07] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-500/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-xl relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 mb-6 group transition-all hover:scale-110">
            <Leaf className="w-8 h-8 text-emerald-500 group-hover:rotate-12 transition-transform" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join KrishiMitra</h1>
          <p className="text-emerald-500/60">Empower your farming with AI-driven insights</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {error && (
              <div className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-semibold text-emerald-500/80 uppercase tracking-wider ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500/40 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0a120b] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-emerald-500/80 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500/40 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0a120b] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 transition-all"
                  placeholder="farmer@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-emerald-500/80 uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500/40 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-[#0a120b] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-emerald-500/80 uppercase tracking-wider ml-1">Village/District</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500/40 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-[#0a120b] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 transition-all"
                  placeholder="Nashik, Maharashtra"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-semibold text-emerald-500/80 uppercase tracking-wider ml-1">Crops You Grow</label>
              <div className="relative group">
                <Sprout className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500/40 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="text"
                  required
                  value={formData.crops}
                  onChange={(e) => setFormData({...formData, crops: e.target.value})}
                  className="w-full bg-[#0a120b] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 transition-all"
                  placeholder="Wheats, Paddy, Cotton..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-emerald-500 hover:bg-emerald-400 text-[#050c07] font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-emerald-500/40 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
