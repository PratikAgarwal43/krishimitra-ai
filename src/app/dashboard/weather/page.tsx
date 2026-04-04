'use client';

import React, { useState } from 'react';
import { 
  CloudSun, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Thermometer, 
  Navigation,
  Calendar,
  AlertTriangle,
  Info,
  ChevronRight,
  TrendingUp,
  Clock,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const hourlyForecast = [
  { time: '10 AM', temp: 28, icon: CloudSun, label: 'Cloudy' },
  { time: '12 PM', temp: 31, icon: Sun, label: 'Sunny' },
  { time: '02 PM', temp: 33, icon: Sun, label: 'Sunny' },
  { time: '04 PM', temp: 30, icon: CloudSun, label: 'Windy' },
  { time: '06 PM', temp: 27, icon: CloudRain, label: 'Showers' },
  { time: '08 PM', temp: 25, icon: CloudRain, label: 'Rain' },
];

const weeklyForecast = [
  { day: 'Mon', high: 32, low: 22, icon: Sun, label: 'Clear' },
  { day: 'Tue', high: 34, low: 23, icon: Sun, label: 'Clear' },
  { day: 'Wed', high: 31, low: 21, icon: CloudSun, label: 'Partly Cloudy' },
  { day: 'Thu', high: 29, low: 19, icon: CloudRain, label: 'Heavy Rain' },
  { day: 'Fri', high: 27, low: 18, icon: CloudRain, label: 'Showers' },
  { day: 'Sat', high: 30, low: 20, icon: Sun, label: 'Clear' },
  { day: 'Sun', high: 33, low: 22, icon: Sun, label: 'Clear' },
];

export default function WeatherPage() {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [showModal, setShowModal] = useState(false);

  const convert = (temp: number) => {
    if (unit === 'C') return `${temp}°`;
    return `${Math.round((temp * 9/5) + 32)}°`;
  };

  return (
    <div className="space-y-8">
      {/* Header with Location */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
             <Navigation size={12} fill="currentColor" />
             <span>Hyper-local Tracking</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 italic">Weather Advisory</h1>
          <p className="text-foreground/50 font-semibold">Barauli Village, Uttar Pradesh, India</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-border shadow-sm">
           <button 
             onClick={() => setUnit('C')}
             className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${unit === 'C' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-foreground/50 hover:text-primary'}`}
           >
             Celsius
           </button>
           <button 
             onClick={() => setUnit('F')}
             className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${unit === 'F' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-foreground/50 hover:text-primary'}`}
           >
             Fahrenheit
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Weather Card */}
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-card rounded-[2.5rem] border border-border p-10 overflow-hidden relative shadow-sm">
              <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/5 rounded-full translate-x-20 -translate-y-20 blur-3xl" />
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                 <div className="text-center md:text-left">
                    <h2 className="text-8xl font-black tracking-tighter mb-4 italic">{convert(32)}</h2>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                       <CloudSun size={32} className="text-yellow-500" />
                       <span className="text-2xl font-bold text-foreground/70 tracking-tight">Mainly Sunny</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                    <div className="bg-muted/40 p-5 rounded-3xl border border-border/50 text-center md:text-left min-w-[140px]">
                       <div className="flex items-center gap-2 mb-2 text-blue-500">
                          <Droplets size={16} />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Humidity</span>
                       </div>
                       <p className="text-2xl font-extrabold italic tracking-tight">45%</p>
                    </div>
                    <div className="bg-muted/40 p-5 rounded-3xl border border-border/50 text-center md:text-left min-w-[140px]">
                       <div className="flex items-center gap-2 mb-2 text-orange-500">
                          <Wind size={16} />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">Wind Speed</span>
                       </div>
                       <p className="text-2xl font-extrabold italic tracking-tight">12 km/h</p>
                    </div>
                 </div>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-border pt-8 overflow-x-auto gap-8 pb-4 md:pb-0 scrollbar-hide">
                 {hourlyForecast.map((hour, idx) => (
                   <div key={idx} className="flex flex-col items-center gap-3 min-w-[60px]">
                      <span className="text-xs font-bold text-foreground/40 uppercase tracking-tighter">{hour.time}</span>
                      <hour.icon size={24} className={idx === 0 ? 'text-yellow-500' : 'text-foreground/40'} />
                      <span className="font-extrabold text-lg tracking-tight">{convert(hour.temp)}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* AI Smart Advisory Card */}
           <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-800" />
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                       <TrendingUp size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight italic uppercase">Smart Irrigation Advisory</h3>
                 </div>
                 <p className="text-lg font-medium leading-relaxed mb-8 text-white/90">
                    Strong winds predicted for <span className="text-accent underline underline-offset-4 decoration-2">Tuesday Evening</span>. 
                    Shift spray schedule to Monday Late Night for maximum efficiency.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 px-5 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
                       <Clock size={18} className="text-accent" />
                       <span className="text-sm font-bold">Best window: 11 PM Today</span>
                    </div>
                    <div className="bg-white/10 px-5 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
                       <Info size={18} className="text-accent" />
                       <span className="text-sm font-bold italic">Expected Rain: 2.5mm</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Weekly Forecast Side Card */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-card rounded-[2.5rem] border border-border p-8 shadow-sm">
              <h3 className="font-bold text-lg mb-8 tracking-tight border-b border-border pb-4 uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                 <Calendar size={18} />
                 7-Day Forecast
              </h3>
              <div className="space-y-6">
                 {weeklyForecast.map((day, idx) => (
                   <div key={idx} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4 w-24">
                         <span className="font-extrabold text-sm group-hover:text-primary transition-colors italic">{day.day}</span>
                         <day.icon size={20} className="text-foreground/40" />
                      </div>
                      <div className="flex-1 px-4">
                         <div className="h-1.5 w-full bg-muted rounded-full relative overflow-hidden">
                            <div className="absolute inset-y-0 left-[30%] right-[30%] bg-gradient-to-r from-blue-400 to-orange-400 rounded-full" />
                         </div>
                      </div>
                      <div className="flex items-center gap-3 w-20 justify-end">
                         <span className="font-black text-sm">{convert(day.high)}</span>
                         <span className="font-bold text-xs text-foreground/30">{convert(day.low)}</span>
                      </div>
                   </div>
                 ))}
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full mt-8 border-2 border-border py-4 rounded-2xl font-bold text-sm hover:bg-muted transition-all active:scale-95 text-foreground/60"
              >
                 Full 30-Day Analysis
              </button>
           </div>

           {/* Risk Card */}
           <div className="bg-red-50 border border-red-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full translate-x-12 -translate-y-12" />
              <div className="flex items-center gap-3 mb-4 text-red-600 relative z-10">
                 <AlertTriangle size={24} />
                 <h4 className="font-black text-sm uppercase tracking-widest italic">Pest Alert</h4>
              </div>
              <p className="text-sm font-bold text-red-800 leading-relaxed mb-6 relative z-10">
                High humidity forecast for next 72 hours increases risk of Fungal Blight in Potato crops. 
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-600 hover:gap-3 transition-all relative z-10"
              >
                 View Preventive Steps
                 <ChevronRight size={14} />
              </button>
           </div>
        </div>
      </div>

      {/* Mock Analysis Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card max-w-2xl w-full rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-border"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                 <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold mb-4">Krishi Intelligence Premium</span>
                 <h3 className="text-3xl font-extrabold italic tracking-tight mb-2">30-Day Climate Analysis</h3>
                 <p className="text-foreground/50 font-medium tracking-tight">AI-driven predictive model for Baruoli Region</p>
              </div>

              <div className="space-y-6">
                 <div className="bg-muted/30 p-6 rounded-3xl border border-border/50">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="font-bold text-primary italic uppercase text-xs tracking-widest leading-loose">Precipitation Outlook</h4>
                       <span className="text-xs font-black text-blue-600">+12% Higher than normal</span>
                    </div>
                    <div className="h-24 flex items-end gap-2 px-2">
                       {Array.from({ length: 12 }).map((_, i) => (
                         <div key={i} className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: `${Math.random() * 80 + 20}%` }} />
                       ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-orange-50 rounded-3xl border border-orange-100">
                       <h5 className="text-[10px] font-black uppercase text-orange-400 tracking-widest mb-2">Heat Warning</h5>
                       <p className="text-sm font-bold text-orange-900 italic">Day 14-18 expect temperature spike up to 41°C.</p>
                    </div>
                    <div className="p-5 bg-blue-50 rounded-3xl border border-blue-100">
                       <h5 className="text-[10px] font-black uppercase text-blue-400 tracking-widest mb-2">Rain Probability</h5>
                       <p className="text-sm font-bold text-blue-900 italic">80% chance of showers between Day 6 - Day 9.</p>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => setShowModal(false)}
                className="w-full mt-10 bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Close Report
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
