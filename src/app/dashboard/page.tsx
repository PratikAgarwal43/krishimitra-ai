'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CloudSun, 
  TrendingUp, 
  Droplets, 
  Leaf, 
  ChevronRight, 
  AlertCircle,
  Thermometer,
  Wind,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Soil Moisture', value: '32%', icon: Droplets, color: 'bg-blue-50 text-blue-600', trend: '+2% from yesterday', href: '/dashboard/weather' },
  { label: 'Crop Health', value: 'Good', icon: Leaf, color: 'bg-green-50 text-green-600', trend: 'Healthy growth detected', href: '/dashboard/weather' },
  { label: 'Market Value', value: '₹2,450', icon: TrendingUp, color: 'bg-yellow-50 text-yellow-600', trend: 'Up by 5% in 24h', href: '/dashboard/market' },
];

const alerts = [
  { 
    title: 'High Pest Risk', 
    description: 'Weather conditions indicate risk of Aphids in Potato crops next 48h.', 
    time: '2h ago',
    type: 'critical'
  },
  { 
    title: 'Irrigation Recommended', 
    description: 'Dry spell expected starting Thursday. Plan irrigation cycle.', 
    time: '5h ago',
    type: 'info'
  }
];

export default function DashboardHome() {
  const [activeTab, setActiveTab] = useState<'overview' | 'yield'>('overview');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 italic">Krishi Mitram! 👋</h1>
          <p className="text-foreground/50 font-medium">Here&apos;s what&apos;s happening in your farm today.</p>
        </div>
        <div className="flex bg-card p-1.5 rounded-2xl border border-border shadow-sm">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'overview' ? 'bg-primary text-white' : 'text-foreground/50 hover:text-primary'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('yield')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'yield' ? 'bg-primary text-white' : 'text-foreground/50 hover:text-primary'
            }`}
          >
            Yield Tracking
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        {/* Quick Stats */}
        {stats.map((stat, idx) => (
          <Link key={idx} href={stat.href} className="lg:col-span-4">
            <motion.div 
              variants={item}
              className="bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-2xl`}>
                  <stat.icon size={24} />
                </div>
                <ChevronRight size={18} className="text-foreground/20 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-bold text-foreground/50 mb-1 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-extrabold mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-xs font-bold text-primary">{stat.trend}</p>
            </motion.div>
          </Link>
        ))}

        {/* Weather Card */}
        <motion.div 
          variants={item}
          className="lg:col-span-8 bg-card rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row relative"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
          
          <div className="flex-1 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
                <CloudSun size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Hyper-local Weather</h4>
                <p className="text-foreground/40 text-sm font-medium">Barauli Village, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-end gap-6 mb-8">
              <div className="text-6xl font-black tracking-tighter">32°C</div>
              <div className="flex flex-col mb-1 text-foreground/60 font-semibold uppercase text-xs tracking-widest">
                <span>Partly Cloudy</span>
                <span className="text-primary italic lowercase">Feels like 34°</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <Thermometer size={18} className="text-orange-500" />
                <div className="text-xs">
                  <p className="text-foreground/40 font-bold uppercase tracking-tighter">Humidity</p>
                  <p className="font-extrabold">45%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-x border-border/50 px-4">
                <Wind size={18} className="text-blue-500" />
                <div className="text-xs">
                  <p className="text-foreground/40 font-bold uppercase tracking-tighter">Wind</p>
                  <p className="font-extrabold">12 km/h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-green-500" />
                <div className="text-xs">
                   <p className="text-foreground/40 font-bold uppercase tracking-tighter">Precip</p>
                   <p className="font-extrabold">2%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-64 bg-secondary/30 p-8 border-l border-border/50 flex flex-col justify-between">
            <div className="space-y-4">
               <h5 className="font-bold text-primary uppercase text-[10px] tracking-widest pl-1 border-l-2 border-primary">Smart Tip</h5>
               <p className="text-xs font-semibold leading-relaxed text-foreground/70">
                 Evening irrigation will be most efficient today due to low wind speeds after 6 PM.
               </p>
            </div>
            <Link href="/dashboard/weather">
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform">
                Full Forecast
              </button>
            </Link>
          </div>
        </motion.div>

        {/* AI Alerts Side Panel */}
        <motion.div 
          variants={item}
          className="lg:col-span-4 bg-card rounded-3xl border border-border shadow-sm p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold text-lg tracking-tight">AI Advisory Alerts</h4>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
          </div>

          <div className="space-y-6">
            {alerts.map((alert, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors cursor-pointer group">
                 <div className={`absolute top-0 left-[-5px] w-2 h-2 rounded-full ${alert.type === 'critical' ? 'bg-red-500' : 'bg-primary'}`} />
                 <div className="flex justify-between items-start mb-1">
                    <h5 className="font-bold text-sm group-hover:text-primary transition-colors">{alert.title}</h5>
                    <span className="text-[10px] font-bold text-foreground/40 uppercase">{alert.time}</span>
                 </div>
                 <p className="text-xs text-foreground/60 leading-relaxed font-medium">
                   {alert.description}
                 </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted/40 p-5 rounded-2xl border border-border/50 text-center">
            <p className="text-xs font-bold text-foreground/40 mb-3 uppercase tracking-widest leading-loose">Need advice for your harvest?</p>
            <Link href="/dashboard/chat">
              <button className="flex items-center justify-center gap-2 w-full bg-white border border-border text-primary py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow active:scale-95">
                <MessageSquare size={16} />
                Ask Krishi Expert
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
