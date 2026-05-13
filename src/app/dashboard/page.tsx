"use client";

import { motion } from "framer-motion";
import { 
  Sprout, Cloud, TrendingUp, MessageSquare, 
  ArrowUpRight, AlertCircle, Droplets, Sun,
  Navigation, Calendar, ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function DashboardOverview() {
  return (
    <div className="space-y-10 relative z-10">
      {/* Welcome Section */}
      <section>
        <h2 className="text-4xl font-bold tracking-tight text-[#1e5128] mb-2 uppercase">Welcome Back, Rajesh</h2>
        <p className="text-gray-500 font-medium flex items-center gap-2">
           <Navigation className="w-4 h-4 text-[#4e9f3d]" />
           Your farm in Barauli Village is currently seeing optimal conditions.
        </p>
      </section>

      {/* Primary Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Action Card */}
        <motion.div whileHover={{ y: -5 }} className="lg:col-span-2 bg-[#1e5128] p-10 rounded-[2.5rem] relative overflow-hidden group text-white shadow-xl shadow-emerald-900/10">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="w-48 h-48 text-white" />
           </div>
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                    <AlertCircle className="w-5 h-5 text-white" />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest text-white/70">AI Priority Recommendation</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 leading-tight max-w-xl">Apply Potassium-rich fertilizer to your Tomato crop within 48 hours.</h3>
              <p className="text-white/70 font-medium mb-10 max-w-xl">
                 Based on the upcoming rain forecast and your current soil health report, this application will maximize fruit quality.
              </p>
              <Link href="/dashboard/chat" className="bg-white text-[#1e5128] py-4 px-8 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-emerald-50 transition-all">
                 Discuss with AI Expert
                 <ArrowUpRight className="w-5 h-5" />
              </Link>
           </div>
        </motion.div>

        {/* Quick Weather Mini-Widget */}
        <Link href="/dashboard/weather">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-8 h-full rounded-[2.5rem] group cursor-pointer border border-gray-100 shadow-sm">
             <div className="flex justify-between items-start mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Local Weather</p>
                <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 text-yellow-500">
                   <Sun className="w-5 h-5" />
                </div>
             </div>
             <h4 className="text-6xl font-black mb-2 text-gray-900">32°</h4>
             <p className="text-lg font-bold mb-8 text-gray-700">Mainly Sunny</p>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                   <p className="text-[8px] font-black uppercase text-gray-400 mb-1">Humidity</p>
                   <p className="text-sm font-bold text-gray-900">42%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                   <p className="text-[8px] font-black uppercase text-gray-400 mb-1">Wind</p>
                   <p className="text-sm font-bold text-gray-900">12km/h</p>
                </div>
             </div>
          </motion.div>
        </Link>
      </div>

      {/* Secondary Pulse Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/* Market Pulse Preview */}
         <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">Market Pulse</h4>
               <Link href="/dashboard/market" className="text-xs font-bold text-[#1e5128] hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
               </Link>
            </div>
            <div className="space-y-4">
               <MarketItem crop="Cotton" price="7,250" trend="+4%" />
               <MarketItem crop="Soybean" price="4,100" trend="-1%" />
               <MarketItem crop="Onion" price="2,150" trend="Stable" />
            </div>
         </div>

         {/* Upcoming Tasks */}
         <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">Upcoming Actions</h4>
               <Calendar className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-4">
               <TaskItem title="Irrigation Cycle" time="Tomorrow, 06:00 AM" />
               <TaskItem title="Soil Testing" time="Sat, 10:00 AM" />
               <TaskItem title="Market Visit" time="Mon, 08:30 AM" />
            </div>
         </div>

         {/* Platform Status */}
         <div className="bg-white p-8 rounded-[2.5rem] border border-[#1e5128]/10 bg-[#1e5128]/5">
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-[#1e5128]">System Status</h4>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-xs font-bold text-gray-700">All Systems Operational</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
               Your KrishiMitra AI access is fully optimized. Live data from OGD and OpenWeather is synchronizing correctly.
            </p>
         </div>
      </div>
    </div>
  );
}

function MarketItem({ crop, price, trend }: { crop: string, price: string, trend: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
       <span className="font-bold text-sm text-gray-900">{crop}</span>
       <div className="text-right">
          <p className="text-sm font-black text-gray-900">₹{price}</p>
          <p className={`text-[10px] font-bold ${trend.includes("+") ? "text-emerald-600" : trend.includes("-") ? "text-red-600" : "text-gray-400"}`}>{trend}</p>
       </div>
    </div>
  );
}

function TaskItem({ title, time }: { title: string, time: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
       <div className="w-1.5 h-8 bg-[#1e5128]/20 rounded-full" />
       <div>
          <p className="text-sm font-bold text-gray-900">{title}</p>
          <p className="text-[10px] text-gray-400 font-bold uppercase">{time}</p>
       </div>
    </div>
  );
}
