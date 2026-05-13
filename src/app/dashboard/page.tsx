"use client";

import { motion } from "framer-motion";
import { 
  Sprout, Cloud, TrendingUp, MessageSquare, 
  ArrowUpRight, AlertCircle, Droplets, Sun,
  Navigation, Calendar, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function DashboardOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-10 relative z-10">
      {/* Welcome Section */}
      <section>
        <h2 className="text-4xl font-black tracking-tight uppercase mb-2">Welcome Back, {user?.name?.split(" ")[0]}</h2>
        <p className="text-muted-foreground font-medium flex items-center gap-2">
           <Navigation className="w-4 h-4 text-primary" />
           Your farm in Maharashtra is currently seeing optimal conditions.
        </p>
      </section>

      {/* Primary Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Action Card */}
        <motion.div whileHover={{ y: -5 }} className="lg:col-span-2 glass-emerald p-8 rounded-[2.5rem] relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="w-32 h-32 text-white" />
           </div>
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                    <AlertCircle className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-xs font-black uppercase tracking-widest text-primary">AI Priority Recommendation</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">Apply Potassium-rich fertilizer to your Tomato crop within 48 hours.</h3>
              <p className="text-muted-foreground font-medium mb-10 max-w-xl">
                 Based on the upcoming rain forecast and your current soil health report, this application will maximize fruit quality.
              </p>
              <Link href="/dashboard/chat" className="btn-primary py-4 px-8 inline-flex items-center gap-3">
                 Discuss with AI Expert
                 <ArrowUpRight className="w-5 h-5" />
              </Link>
           </div>
        </motion.div>

        {/* Quick Weather Mini-Widget */}
        <Link href="/dashboard/weather">
          <motion.div whileHover={{ scale: 1.02 }} className="glass p-8 h-full rounded-[2.5rem] group cursor-pointer border-none shadow-xl">
             <div className="flex justify-between items-start mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Local Weather</p>
                <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20 text-yellow-500">
                   <Sun className="w-5 h-5" />
                </div>
             </div>
             <h4 className="text-6xl font-black mb-2">32°</h4>
             <p className="text-lg font-bold mb-8">Mostly Sunny</p>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-2xl">
                   <p className="text-[8px] font-black uppercase text-muted-foreground mb-1">Humidity</p>
                   <p className="text-sm font-bold">42%</p>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl">
                   <p className="text-[8px] font-black uppercase text-muted-foreground mb-1">Wind</p>
                   <p className="text-sm font-bold">12km/h</p>
                </div>
             </div>
          </motion.div>
        </Link>
      </div>

      {/* Secondary Pulse Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/* Market Pulse Preview */}
         <div className="glass p-8 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-8">
               <h4 className="text-sm font-black uppercase tracking-widest">Market Pulse</h4>
               <Link href="/dashboard/market" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
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
         <div className="glass p-8 rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-8">
               <h4 className="text-sm font-black uppercase tracking-widest">Upcoming Actions</h4>
               <Calendar className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-4">
               <TaskItem title="Irrigation Cycle" time="Tomorrow, 06:00 AM" />
               <TaskItem title="Soil Testing" time="Sat, 10:00 AM" />
               <TaskItem title="Market Visit" time="Mon, 08:30 AM" />
            </div>
         </div>

         {/* Platform News/Status */}
         <div className="glass p-8 rounded-[2.5rem] bg-primary/5 border-primary/10">
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Gold Ecosystem Status</h4>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
               <span className="text-xs font-bold">All Systems Operational</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
               Your KrishiMitra Gold membership is active until Dec 2026. You have unlimited AI Expert consultations.
            </p>
         </div>
      </div>
    </div>
  );
}

function MarketItem({ crop, price, trend }: { crop: string, price: string, trend: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
       <span className="font-bold text-sm">{crop}</span>
       <div className="text-right">
          <p className="text-sm font-black">₹{price}</p>
          <p className={`text-[10px] font-bold ${trend.includes("+") ? "text-emerald-500" : trend.includes("-") ? "text-red-500" : "text-gray-500"}`}>{trend}</p>
       </div>
    </div>
  );
}

function TaskItem({ title, time }: { title: string, time: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
       <div className="w-2 h-8 bg-primary/20 rounded-full" />
       <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-[10px] text-muted-foreground font-bold uppercase">{time}</p>
       </div>
    </div>
  );
}
