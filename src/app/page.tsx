import Link from "next/link";
import { MoveRight, Sprout } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f4f7f5] text-[#1e293b]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#f4f7f5]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1e5128] rounded-lg flex items-center justify-center">
              <Sprout className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-[#1e5128]">KrishiMitra AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-600">
            <a href="#features" className="hover:text-[#1e5128] transition-colors">Features</a>
            <a href="#about" className="hover:text-[#1e5128] transition-colors">About</a>
            <Link href="/dashboard" className="bg-[#1e5128] text-white px-6 py-2.5 rounded-full hover:bg-[#194322] transition-all">
              Farmer Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/50 text-[#1e5128] text-xs font-bold mb-10 border border-emerald-200/50">
            Empowering 100M+ Indian Farmers <span className="opacity-50 ml-1">IN</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#1e5128] mb-8 leading-[1.05]">
            Smart farming starts with <br />
            <span className="text-[#4e9f3d]">Hyper-local Intelligence</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-500 text-xl mb-12 font-medium leading-relaxed">
            Connect your farm to AI-powered insights. Get real-time weather alerts, mandi prices, and multilingual advisory tailored to your soil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/signup" className="group bg-[#1e5128] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#194322] transition-all shadow-xl shadow-emerald-900/10">
              Get Started Free
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/dashboard" className="bg-[#e2e8f0] text-gray-700 px-10 py-5 rounded-2xl font-bold hover:bg-[#cbd5e1] transition-all">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for the rest of the page to match original flow */}
      <div className="max-w-5xl mx-auto px-6 mb-32">
        <div className="w-full h-96 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-emerald-900/5" />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2026 KrishiMitra AI. Built for the future of Indian Agriculture.</p>
      </footer>
    </div>
  );
}
