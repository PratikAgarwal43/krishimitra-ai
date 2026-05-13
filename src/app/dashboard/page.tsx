"use client";

import { useEffect, useState } from "react";
import { Sprout, Cloud, TrendingUp, MessageSquare, MapPin, Search, Bell, User as UserIcon, LogOut } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [weather, setWeather] = useState<any>(null);
  const [market, setMarket] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [wRes, mRes] = await Promise.all([
          fetch("/api/weather"),
          fetch("/api/market")
        ]);
        const wData = await wRes.json();
        const mData = await mRes.json();
        setWeather(wData);
        setMarket(mData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-20 md:w-64 bg-black/50 border-r border-white/5 flex flex-col z-50">
        <div className="p-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0">
            <Sprout className="text-white w-6 h-6" />
          </div>
          <span className="hidden md:block font-bold text-xl tracking-tight">KrishiMitra</span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<TrendingUp />} label="Market Prices" active />
          <NavItem icon={<Cloud />} label="Weather Advisor" />
          <NavItem icon={<MessageSquare />} label="AI Expert" />
          <NavItem icon={<Bell />} label="Alerts" />
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            <span className="hidden md:block text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-20 md:pl-64 pt-6 p-6 md:p-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome Back, Pratik</h1>
            <p className="text-gray-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500" />
              Maharashtra, India • Updated just now
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search crops, pests..." 
                className="bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-emerald-500 transition-all w-64 md:w-80"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Weather Widget */}
          <div className="glass-card p-8 group hover:border-emerald-500/30 transition-all relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cloud className="w-24 h-24 text-white" />
             </div>
             <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">Live Weather</p>
             <h2 className="text-5xl font-bold mb-6">
                {loading ? "..." : `${weather?.main?.temp?.toFixed(1)}°C`}
             </h2>
             <p className="text-gray-400 mb-1">{weather?.weather?.[0]?.description || "Clear skies"}</p>
             <p className="text-xs text-gray-500">Humidity: {weather?.main?.humidity}% • Wind: {weather?.wind?.speed} m/s</p>
          </div>

          {/* Market Widget */}
          <div className="glass-card p-8 group hover:border-emerald-500/30 transition-all">
             <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">Market Watch</p>
             <div className="space-y-4">
                {loading ? (
                   <p className="text-gray-500">Fetching live prices...</p>
                ) : (
                   market?.records?.slice(0, 3).map((record: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                         <div>
                            <p className="text-sm font-bold">{record.commodity}</p>
                            <p className="text-[10px] text-gray-500">{record.market}, {record.district}</p>
                         </div>
                         <div className="text-right">
                            <p className="text-sm font-bold text-emerald-400">₹{record.modal_price}</p>
                            <p className="text-[10px] text-gray-500">per Quintal</p>
                         </div>
                      </div>
                   ))
                )}
             </div>
             <button className="w-full mt-6 py-2 rounded-lg border border-white/10 text-xs font-semibold hover:bg-white/5 transition-all">
                View Full Market Report
             </button>
          </div>

          {/* AI Advisor Card */}
          <div className="glass-card p-8 emerald-gradient border-none relative">
             <p className="text-emerald-200 text-sm font-bold uppercase tracking-wider mb-4">Krishi Expert AI</p>
             <h3 className="text-2xl font-bold mb-4">"When should I apply fertilizer to my wheat crop?"</h3>
             <p className="text-emerald-100/70 text-sm leading-relaxed mb-8">
                The current soil moisture is optimal. Apply Nitrogen based fertilizers in the next 24 hours before the light rain predicted for Friday.
             </p>
             <Link href="/dashboard/chat" className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-50 transition-all">
                Ask Krishi Expert
                <MessageSquare className="w-4 h-4" />
             </Link>
          </div>
        </div>

        {/* Inventory / Recent Activity Section */}
        <section className="glass-card p-8">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Recommended Actions</h3>
              <span className="text-xs text-gray-500">Based on AI analysis</span>
           </div>
           <div className="space-y-4">
              <ActionItem title="Pest Alert" desc="Aphid population increasing in nearby districts. Monitor crops daily." color="border-red-500/20 bg-red-500/5 text-red-400" />
              <ActionItem title="Irrigation Sync" desc="Cloudy weather expected. Reduce morning irrigation by 20%." color="border-blue-500/20 bg-blue-500/5 text-blue-400" />
              <ActionItem title="Market Opportunity" desc="Cotton prices in Nashik Mandi up by 4.2%. Consider selling surplus." color="border-emerald-500/20 bg-emerald-500/5 text-emerald-400" />
           </div>
        </section>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${active ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
      <span className="w-6 h-6">{icon}</span>
      <span className="hidden md:block text-sm font-semibold">{label}</span>
    </button>
  );
}

function ActionItem({ title, desc, color }: { title: string, desc: string, color: string }) {
  return (
    <div className={`p-4 rounded-2xl border flex items-start gap-4 ${color}`}>
       <div className="w-2 h-2 rounded-full bg-current mt-2" />
       <div>
          <p className="font-bold text-sm mb-1">{title}</p>
          <p className="opacity-80 text-xs leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}
