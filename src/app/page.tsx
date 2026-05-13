"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sprout, ArrowRight, ShieldCheck, Zap, Globe, 
  Menu, X, ChevronDown, MessageSquare, Cloud, 
  TrendingUp, Users, Award, HelpCircle
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Premium Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "glass border-b border-border py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tight uppercase">KrishiMitra <span className="text-primary">Gold</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-wide uppercase text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Intelligence</a>
            <a href="#stats" className="hover:text-primary transition-colors">Impact</a>
            <a href="#faq" className="hover:text-primary transition-colors">Insights</a>
            <div className="h-4 w-px bg-border mx-2" />
            <button onClick={toggleTheme} className="p-2 hover:bg-white/5 rounded-full transition-all">
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="hidden md:block btn-primary text-xs py-2.5 px-6">Dashboard</Link>
                <button onClick={logout} className="p-2.5 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-all">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="hidden sm:block text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors px-4">Login</Link>
                <Link href="/signup" className="btn-primary text-xs py-2.5 px-6">Join Gold</Link>
              </div>
            )}
            <button className="lg:hidden p-2.5 glass rounded-xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-emerald border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-12"
          >
            <Award className="w-3.5 h-3.5" />
            India's #1 AI Farming Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase"
          >
            Harvesting the <br />
            <span className="text-gradient">AI Revolution.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-muted-foreground text-xl md:text-2xl leading-relaxed mb-16 font-medium"
          >
            Empowering modern agriculture with Google Gemini 1.5, real-time climate intelligence, and high-precision market analytics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/signup" className="group btn-primary px-10 py-5 text-base flex items-center gap-3">
              Experience the Future
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="px-10 py-5 rounded-full font-bold border border-border hover:bg-white/5 transition-all text-base">
              Explore Intelligence
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="max-w-7xl mx-auto px-6 py-24 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatItem value="10K+" label="Farmers Active" />
          <StatItem value="250+" label="Crop Models" />
          <StatItem value="99%" label="AI Accuracy" />
          <StatItem value="1.5M" label="Predictions Made" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Scientific <span className="text-primary">Ecosystem</span></h2>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">Proprietary AI models engineered for the specific biological needs of Indian soil.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MessageSquare />} 
            title="AI Krishi Expert" 
            desc="Gemini-powered multilingual chat providing scientific solutions for pest, soil, and irrigation management."
          />
          <FeatureCard 
            icon={<Cloud />} 
            title="Climate Intelligence" 
            desc="High-precision atmospheric tracking with 96% regional accuracy. Real-time frost and rain alerts."
          />
          <FeatureCard 
            icon={<TrendingUp />} 
            title="Mandi Analytics" 
            desc="Live connection to 2,000+ mandis. Proprietary price forecasting to maximize your profit margin."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-black tracking-tight uppercase">Everything you need to know</h2>
        </div>
        <div className="space-y-4">
          <FaqItem question="Is the AI advice scientific?" answer="Yes, our AI models are trained on regional soil data and verified agricultural research papers." />
          <FaqItem question="Do I need a subscription?" answer="KrishiMitra Gold offers a free core tier for independent farmers, with enterprise features for researchers." />
          <FaqItem question="Which languages are supported?" answer="We currently support English, Hindi, and Marathi, with more regional dialects coming soon." />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-border bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Sprout className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black tracking-tight uppercase">KrishiMitra Gold</span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-medium leading-relaxed">
              Pioneering the intersection of advanced AI and traditional farming. Built with integrity for the Indian soil.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">AI Advisor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Climate Intel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mandi Pulse</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8">Connect</h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-white/5 text-center text-xs font-black uppercase tracking-widest text-muted-foreground">
          © 2026 KrishiMitra AI Gold. Empowering the Roots of India.
        </div>
      </footer>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="glass-emerald p-6 rounded-[2rem] border border-primary/10">
      <h3 className="text-3xl font-black mb-1">{value}</h3>
      <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60">{label}</p>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="glass p-10 rounded-[2.5rem] group hover:border-primary/30 transition-all">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
        <span className="text-primary group-hover:text-white w-7 h-7">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass rounded-[1.5rem] overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 flex items-center justify-between text-left font-bold">
        {question}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="px-6 pb-6 text-sm text-muted-foreground font-medium"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
