import Link from "next/link";
import { MoveRight, Sprout, Cloud, TrendingUp, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">KrishiMitra AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#market" className="hover:text-emerald-400 transition-colors">Market</a>
            <a href="#weather" className="hover:text-emerald-400 transition-colors">Weather</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/signup" className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-8 animate-fade-in">
            <ShieldCheck className="w-3.5 h-3.5" />
            Empowering 10,000+ Farmers Across India
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Smart Farming for a <br />
            <span className="text-gradient">Sustainable Future.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12">
            Harness the power of Google Gemini AI, live Mandi prices, and hyper-local weather intelligence to optimize your harvest and maximize profit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all">
              Get Started for Free
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/dashboard" className="px-8 py-4 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all">
              Live Dashboard Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 group hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
              <Sprout className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">AI Krishi Expert</h3>
            <p className="text-gray-400 leading-relaxed">
              24/7 agricultural advisory powered by Google Gemini. Multilingual support for Hindi, Marathi, and English.
            </p>
          </div>

          <div className="glass-card p-8 group hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
              <TrendingUp className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Live Mandi Prices</h3>
            <p className="text-gray-400 leading-relaxed">
              Real-time commodity prices directly from Agmarknet OGD servers. Stay updated with current market trends.
            </p>
          </div>

          <div className="glass-card p-8 group hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
              <Cloud className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Hyper-local Weather</h3>
            <p className="text-gray-400 leading-relaxed">
              Field-specific 48-hour forecasts using high-precision geolocation to protect your crops from sudden shifts.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 KrishiMitra AI. Built for the future of Indian Agriculture.</p>
      </footer>
    </div>
  );
}
