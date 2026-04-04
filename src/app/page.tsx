'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  CloudSun, 
  TrendingUp, 
  MessageSquare, 
  ShieldCheck, 
  Globe,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const Features = [
  {
    title: 'Hyperlocal Advisory',
    description: 'Get precise farming recommendations based on your exact village location and soil type.',
    icon: Sprout,
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Real-time Weather',
    description: 'Smart alerts for irrigation and harvest timing based on hyper-local forecasts.',
    icon: CloudSun,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Market Intelligence',
    description: 'Live Mandi prices and AI-driven insights on the best time and place to sell.',
    icon: TrendingUp,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    title: 'Multilingual AI',
    description: 'Chat with our AI in Hindi and regional languages via voice or text.',
    icon: MessageSquare,
    color: 'bg-purple-100 text-purple-700'
  }
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">KrishiMitra AI</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <Link href="/dashboard">
                <button className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all active:scale-95">
                  Farmer Dashboard
                </button>
              </Link>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-bold mb-6">
              Empowering 100M+ Indian Farmers 🇮🇳
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Smart farming starts with <br />
              <span className="gradient-text tracking-tighter">Hyper-local Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect your farm to AI-powered insights. Get real-time weather alerts, 
              mandi prices, and multilingual advisory tailored to your soil.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <button className="w-full bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95 group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg border-2 border-border hover:bg-muted transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
            <div className="relative glass rounded-3xl p-4 border border-border/50 shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="bg-background rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-border">
                {/* Mock Dashboard Preview */}
                <div className="flex flex-col items-center gap-4 opacity-50">
                  <Sprout size={64} className="text-primary animate-pulse" />
                  <p className="font-medium">Dashboard Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything a farmer needs</h2>
            <p className="text-foreground/60">Built for accessibility, powered by advanced AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-4">
             <ShieldCheck size={48} className="text-accent" />
             <div>
               <h4 className="text-xl font-bold">Trusted & Secure</h4>
               <p className="text-white/70">Your farm data is protected with enterprise-grade security.</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <Globe size={48} className="text-accent" />
             <div>
               <h4 className="text-xl font-bold">Offline Ready</h4>
               <p className="text-white/70">Access critical features even with weak satellite connectivity.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 text-center text-foreground/60 text-sm">
          <p>© 2026 KrishiMitra AI Platform. Designed for the heart of India.</p>
        </div>
      </footer>
    </div>
  );
}
